import Link from 'next/link';
import { useState, useEffect } from 'react';
import Modal from 'react-modal/lib/components/Modal';
import { colorSwitch } from '../../libs/colorSwtich';
import { customStyles } from '../../libs/modalCustomStyles';
import { addNote, getAuth, getCallNote, getCalls, getCurrentUser, getPaginatedCalls, getRefreshToken, toggleArchiveCall } from '../../pages/api/calls';
import Spinner from '../Spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function View() {

    const [filteredLabel, setFilteredLabel] = useState(null);

    const [callsData, setCallsData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [offset, setOffset] = useState(1);
    const [limit, setLimit] = useState(10);

    const [footerAlias, setFooterAlias] = useState(10);

    const [toggleModal, setToggleModal] = useState(false);

    const [callInfo, setCallInfo] = useState(null);

    const [notesValue, setNotesValue] = useState("");

    
    useEffect(() => {
        const controller = new AbortController();

        (async() => {
            try{
                const response = await getPaginatedCalls(offset, limit);
                const { data: { nodes } } = await response;
                setCallsData(nodes);
                setLoading(false);    
            } catch(e) {
                console.error(e);
            }
        })();

        return () => {
            controller.abort();
        }

    }, [offset, limit]);

    const handlePagination = (current=0) => {
        if(current === -1 && offset <= 1) {
            return null;
        } else if(current === -1 && offset >= 11) {
            setFooterAlias(prevState => prevState - limit);
            return setOffset(prevState => prevState - limit);
        } else if(current === 1 && footerAlias >= 50) {
            return null;
        }

        setFooterAlias(prevState => prevState + limit);
        setOffset(prevState => prevState + limit);

    }

    const handleAddNote = (callInfo) => {
        setToggleModal(true);
        setCallInfo(callInfo);
    }

    const handleNoteSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await addNote(callInfo.id, notesValue);
        } catch(e) {
            console.log('here', e);
            const notify = () => toast.error('This post does not exists!', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            notify();
            setToggleModal(false);
        }

        setNotesValue('');
    }

    const handleArchives = async (id) => {
        try {
            const response = await toggleArchiveCall(id);
            console.log('hhhhhhhhhhhhhhhhhhhh')
        } catch(e) {
            console.error(e);
        }
    }

    const renderTableBody = (data) => {
        return (
            <tbody>
                {   
                    data.filter(info => {
                        if(filteredLabel === null) {
                            return info;
                        } else if(filteredLabel === "missed") {
                            return info.call_type === "missed";
                        } else if(filteredLabel === "archived") {
                            return info.is_archived;
                        } else if(filteredLabel === "answered") {
                            return info.call_type === "answered"
                        } else {
                            return info;
                        }
                    }).map(info => (
                        <tr key={info.id} className='border [&>*]:py-4 [&>*]:text-[14px] [&>*]:px-[2rem]'>
                            <td className={`${colorSwitch(info.call_type)}`}>
                                <Link href={{ pathname: `/calls/${info.id}`, query: { data: JSON.stringify(info) } }}>
                                    {info.call_type}
                                </Link>
                            </td>
                            <td>{info.direction}</td>
                            <td>{info.duration}</td>
                            <td>{info.from}</td>
                            <td>{info.to}</td>
                            <td>{info.via}</td>
                            <td>{info.created_at}</td>
                            <td>
                                { info.is_archived ? 
                                    <span className='bg-teal-100 p-3 text-teal-400 rounded cursor-pointer' onClick={() => handleArchives(info.id)}>Archived</span>
                                    :
                                    <span className='bg-gray-100 p-3 text-gray-400 rounded cursor-pointer' onClick={() => handleArchives(info.id)}>Unacrhived</span>
                                }
                            </td>
                            <td>
                                <button className='px-[20px] py-[7px] text-[11px] cursor-pointer text-white rounded-sm bg-primaryColor' onClick={() => handleAddNote(info)}>AddNote</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
                )
    };

    const forNotes = (notes) => {
        return notes.map((note, index) => (
            <div className='my-4' key={note.id}>
                <p>{index+1} - {note.content}</p>
            </div>
        ))
    }

    const renderModal = (callInfo) => {
        const { id, call_type, duration, from, to, via, notes } = callInfo;
        return (
            <Modal
                isOpen={toggleModal}
                onRequestClose={() => setToggleModal(false)}
                style={customStyles}
                ariaHideApp={false}
            >
                <div className='flex justify-between'>
                    <h1 className='text-2xl'>Add Notes</h1>
                    <p className='text-primaryColor cursor-pointer' onClick={() => setToggleModal(false)}>X</p>
                </div>
                <div className='border-b py-4'>
                    <span className='text-primaryColor'>Call ID {id}</span>
                </div>

                <dl className='[&>*]:py-2'>
                    <div className='flex gap-8'>
                        <dt className='basis-1/5 font-medium'>Call Type</dt>
                        <dd className={`${colorSwitch(call_type)}`}>{call_type}</dd>
                    </div>

                    <div className='flex gap-8'>
                        <dt className='basis-1/5 font-medium'>Duration</dt>
                        <dd>{duration}</dd>
                    </div>

                    <div className='flex gap-8'>
                        <dt className='basis-1/5 font-medium'>From</dt>
                        <dd>{from}</dd>
                    </div>

                    <div className='flex gap-8'>
                        <dt className='basis-1/5 font-medium'>To</dt>
                        <dd>{to}</dd>
                    </div>

                    <div className='flex gap-8'>
                        <dt className='basis-1/5 font-medium'>Via</dt>
                        <dd>{via}</dd>
                    </div>
                </dl>                

                <div className='py-4'>
                    <p className='font-medium pb-2'>Notes</p>
                    <form onSubmit={handleNoteSubmit}>
                        { notes.length > 0 ? forNotes(notes) : null} 
                        <textarea placeholder='Add Notes' name="addnote" value={notesValue} onChange={e => setNotesValue(e.target.value)} className='border w-full' />
                        <button type='submit' className='w-full bg-primaryColor text-white p-4'>Save</button>
                    </form>
                </div>

            </Modal>
        );
    };


    if(loading) return <Spinner />

    return (
        <div className='mt-4'>
            <ToastContainer />
            { toggleModal && renderModal(callInfo) }
            <div className='py-4'>
                <span>Filter by:</span>
                <select onChange={(e) => setFilteredLabel(e.target.value)}>
                    <option value="status">Status</option>
                    <option value="archived">Archived</option>
                    <option value="answered">Answered</option>
                    <option value="missed">Missed</option>
                </select>
            </div>
            <table>
                <thead className='bg-gray-200 rounded-md'> 
                    <tr className='[&>*]:py-6 [&>*]:font-normal'>
                        <th>CALL TYPE</th>
                        <th>DIRECTION</th>
                        <th>DURATION</th>
                        <th>FROM</th>
                        <th>TO</th>
                        <th>VIA</th>
                        <th>CREATED AT</th>
                        <th>STATUS</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                { renderTableBody(callsData) } 
            </table>

            <footer className='flex flex-col items-center pt-[3rem]'>
                <div className='flex items-center gap-8 [&>*]:cursor-pointer'>
                    <button onClick={() => handlePagination(-1)}>⬅️</button>
                    <button onClick={() => handlePagination()} className='focus:bg-primaryColor focus:text-white focus:py-[5px] focus:px-[12px]'>1</button>
                    <button onClick={() => handlePagination()} className='focus:bg-primaryColor focus:text-white focus:py-[5px] focus:px-[12px]'>2</button>
                    <button onClick={() => handlePagination()} className='focus:bg-primaryColor focus:text-white focus:py-[5px] focus:px-[12px]'>3</button>
                    <button onClick={() => handlePagination()} className='focus:bg-primaryColor focus:text-white focus:py-[5px] focus:px-[12px]'>4</button>
                    <button onClick={() => handlePagination(1)}>➡️</button>
                </div>

                <p className='pt-[1rem]'> {offset} - {footerAlias} out of 50 results</p>
            </footer>
        </div>
    )
}
