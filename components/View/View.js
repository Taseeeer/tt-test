import { useState } from 'react';

export default function View() {

    const [filteredLabel, setFilteredLabel] = useState(null);
   

    const data = [
        {
            id: 1,// "unique ID of call"
            direction: "inbout", // "inbound" or "outbound" call
            from: "+92233282999",// Caller's number
            to: "+92333333333", // Callee's number
            duration: "8 minutes, 30 sec (3323 seconds)", // Duration of a call (in seconds)
            is_archived: true, // Boolean that indicates if the call is archived or not
            call_type: "Voice Mail", // The type of the call, it can be a missed, answered or voicemail.
            via: "0238239823", // Aircall number used for the call.
            created_at: "12-01-2022", // When the call has been made.
            notes: [] // Notes related to a given call
        },
        {
            id: 1,// "unique ID of call"
            direction: "inbout", // "inbound" or "outbound" call
            from: "+92233282999",// Caller's number
            to: "+92333333333", // Callee's number
            duration: "8 minutes, 30 sec (3323 seconds)", // Duration of a call (in seconds)
            is_archived: true, // Boolean that indicates if the call is archived or not
            call_type: "Missed", // The type of the call, it can be a missed, answered or voicemail.
            via: "0238239823", // Aircall number used for the call.
            created_at: "12-01-2022", // When the call has been made.
            notes: [] // Notes related to a given call
        },
        {
            id: 1,// "unique ID of call"
            direction: "inbout", // "inbound" or "outbound" call
            from: "+92233282999",// Caller's number
            to: "+92333333333", // Callee's number
            duration: "8 minutes, 30 sec (3323 seconds)", // Duration of a call (in seconds)
            is_archived: true, // Boolean that indicates if the call is archived or not
            call_type: "Missed", // The type of the call, it can be a missed, answered or voicemail.
            via: "0238239823", // Aircall number used for the call.
            created_at: "12-01-2022", // When the call has been made.
            notes: [] // Notes related to a given call
        },
        {
            id: 1,// "unique ID of call"
            direction: "inbout", // "inbound" or "outbound" call
            from: "+92233282999",// Caller's number
            to: "+92333333333", // Callee's number
            duration: "8 minutes, 30 sec (3323 seconds)", // Duration of a call (in seconds)
            is_archived: true, // Boolean that indicates if the call is archived or not
            call_type: "Missed", // The type of the call, it can be a missed, answered or voicemail.
            via: "0238239823", // Aircall number used for the call.
            created_at: "12-01-2022", // When the call has been made.
            notes: [] // Notes related to a given call
        },
        {
            id: 1,// "unique ID of call"
            direction: "inbout", // "inbound" or "outbound" call
            from: "+92233282999",// Caller's number
            to: "+92333333333", // Callee's number
            duration: "8 minutes, 30 sec (3323 seconds)", // Duration of a call (in seconds)
            is_archived: true, // Boolean that indicates if the call is archived or not
            call_type: "Answered", // The type of the call, it can be a missed, answered or voicemail.
            via: "0238239823", // Aircall number used for the call.
            created_at: "12-01-2022", // When the call has been made.
            notes: [] // Notes related to a given call
        },
        {
            id: 1,// "unique ID of call"
            direction: "inbout", // "inbound" or "outbound" call
            from: "+92233282999",// Caller's number
            to: "+92333333333", // Callee's number
            duration: "8 minutes, 30 sec (3323 seconds)", // Duration of a call (in seconds)
            is_archived: false, // Boolean that indicates if the call is archived or not
            call_type: "Voice Mail", // The type of the call, it can be a missed, answered or voicemail.
            via: "0238239823", // Aircall number used for the call.
            created_at: "12-01-2022", // When the call has been made.
            notes: [] // Notes related to a given call
        },
        {
            id: 1,// "unique ID of call"
            direction: "inbout", // "inbound" or "outbound" call
            from: "+92233282999",// Caller's number
            to: "+92333333333", // Callee's number
            duration: "8 minutes, 30 sec (3323 seconds)", // Duration of a call (in seconds)
            is_archived: false, // Boolean that indicates if the call is archived or not
            call_type: "Answered", // The type of the call, it can be a missed, answered or voicemail.
            via: "0238239823", // Aircall number used for the call.
            created_at: "12-01-2022", // When the call has been made.
            notes: [] // Notes related to a given call
        },
        {
            id: 1,// "unique ID of call"
            direction: "inbout", // "inbound" or "outbound" call
            from: "+92233282999",// Caller's number
            to: "+92333333333", // Callee's number
            duration: "8 minutes, 30 sec (3323 seconds)", // Duration of a call (in seconds)
            is_archived: true, // Boolean that indicates if the call is archived or not
            call_type: "Answered", // The type of the call, it can be a missed, answered or voicemail.
            via: "0238239823", // Aircall number used for the call.
            created_at: "12-01-2022", // When the call has been made.
            notes: [] // Notes related to a given call
        },
        {
            id: 1,// "unique ID of call"
            direction: "inbout", // "inbound" or "outbound" call
            from: "+92233282999",// Caller's number
            to: "+92333333333", // Callee's number
            duration: "8 minutes, 30 sec (3323 seconds)", // Duration of a call (in seconds)
            is_archived: true, // Boolean that indicates if the call is archived or not
            call_type: "Answered", // The type of the call, it can be a missed, answered or voicemail.
            via: "0238239823", // Aircall number used for the call.
            created_at: "12-01-2022", // When the call has been made.
            notes: [] // Notes related to a given call
        },
        {
            id: 1,// "unique ID of call"
            direction: "inbout", // "inbound" or "outbound" call
            from: "+92233282999",// Caller's number
            to: "+92333333333", // Callee's number
            duration: "8 minutes, 30 sec (3323 seconds)", // Duration of a call (in seconds)
            is_archived: true, // Boolean that indicates if the call is archived or not
            call_type: "Answered", // The type of the call, it can be a missed, answered or voicemail.
            via: "0238239823", // Aircall number used for the call.
            created_at: "12-01-2022", // When the call has been made.
            notes: [] // Notes related to a given call
        },
        {
            id: 1,// "unique ID of call"
            direction: "inbout", // "inbound" or "outbound" call
            from: "+92233282999",// Caller's number
            to: "+92333333333", // Callee's number
            duration: "8 minutes, 30 sec (3323 seconds)", // Duration of a call (in seconds)
            is_archived: true, // Boolean that indicates if the call is archived or not
            call_type: "Answered", // The type of the call, it can be a missed, answered or voicemail.
            via: "0238239823", // Aircall number used for the call.
            created_at: "12-01-2022", // When the call has been made.
            notes: [] // Notes related to a given call
        },
        {
            id: 1,// "unique ID of call"
            direction: "inbout", // "inbound" or "outbound" call
            from: "+92233282999",// Caller's number
            to: "+92333333333", // Callee's number
            duration: "8 minutes, 30 sec (3323 seconds)", // Duration of a call (in seconds)
            is_archived: true, // Boolean that indicates if the call is archived or not
            call_type: "Answered", // The type of the call, it can be a missed, answered or voicemail.
            via: "0238239823", // Aircall number used for the call.
            created_at: "12-01-2022", // When the call has been made.
            notes: [] // Notes related to a given call
        },
    ];


    const colorSwitch = (callType) => {
        switch(callType) {
            case "Answered":
                return "green-500";
            case "Missed":
                return "red-500";
            case "Voice Mail":
                return "primaryColor";
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
                            return info.call_type === "Missed";
                        } else if(filteredLabel === "archived") {
                            return info.is_archived;
                        } else {
                            return info;
                        }
                    }).map(info => (
                        <tr key={info.id} className='border [&>*]:py-4 [&>*]:text-[14px] [&>*]:px-[2rem]'>
                            <td className={`text-${colorSwitch(info.call_type)}`}>{info.call_type}</td>
                            <td>{info.direction}</td>
                            <td>{info.duration}</td>
                            <td>{info.from}</td>
                            <td>{info.to}</td>
                            <td>{info.via}</td>
                            <td>{info.created_at}</td>
                            <td>
                                { info.is_archived ? 
                                    <span className='bg-teal-100 p-3 text-teal-400 rounded'>Archived</span>
                                    :
                                    <span className='bg-gray-100 p-3 text-gray-400 rounded'>Unacrhived</span>
                                }
                            </td>
                            <td>
                                <button className='px-[20px] py-[7px] text-[11px] cursor-pointer text-white rounded-sm bg-primaryColor'>AddNote</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
                )
    }

    return (
        <div className='mt-4'>
            <div className='py-4'>
                <span>Filter by:</span>
                <select onClick={(e) => setFilteredLabel(e.target.value)}>
                    <option value="status">Status</option>
                    <option value="archived">Archived</option>
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
                { renderTableBody(data) } 
            </table>
        </div>
    )
}
