export const colorSwitch = (callType) => {
    switch(callType) {
        case "answered":
            return "text-green-600";
        case "missed":
            return "text-red-500";
        case "voicemail":
            return "text-primaryColor";
    }
}