import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { colorSwitch } from "../../libs/colorSwtich";

export default function Id() {
    const router = useRouter();
    const { id } = router.query;
    const { data } = router.query;
    const singleCallData = data && JSON.parse(data);

    const [callData, setCallsData] = useState(singleCallData);

    if(!callData) {
        return (
            <div className="flex flex-col items-center">
                <p className="text-2xl text-red-500">Select one call from the data list first!</p>
                <button className='py-4 bg-primaryColor text-white p-2' onClick={() => router.push('/')}>Go back</button>
            </div>
        )
    }
    return (
        <div className="py-4">
            <h2 className="flex justify-center">Call Info</h2>

            <div className="flex justify-center">
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
                        </tr>
                    </thead>
                    <tbody>
                        <tr key={callData.id} className='border [&>*]:py-4 [&>*]:text-[14px] [&>*]:px-[2rem]'>
                            <td className={`${colorSwitch(callData.call_type)}`}>{callData.call_type}</td>
                            <td>{callData.direction}</td>
                            <td>{callData.duration}</td>
                            <td>{callData.from}</td>
                            <td>{callData.to}</td>
                            <td>{callData.via}</td>
                            <td>{callData.created_at}</td>
                            <td>
                                { callData.is_archived ? 
                                    <span className='bg-teal-100 p-3 text-teal-400 rounded'>Archived</span>
                                    :
                                    <span className='bg-gray-100 p-3 text-gray-400 rounded'>Unacrhived</span>
                                }
                            </td>
                        </tr>
                    </tbody>
            </table>
            </div>

        </div>
    )
}