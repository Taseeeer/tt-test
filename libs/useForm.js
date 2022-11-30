import { useState } from 'react';

export const useForm = (intialState={}) => {
    const [inputs, setInputs] = useState(intialState);

    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    const resetForm = () => {
        setInputs(intialState);
    };

    return {
        inputs,
        handleChange,
        resetForm
    }
}