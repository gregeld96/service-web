import { ChangeEventHandler } from "react";

interface GeneralFormFieldInput {
    inputValue: string;
    formType: string;
    fieldTitle: string;
    placeholderValue: string;
    onChange: ChangeEventHandler;
    errorDescription: string;
    errorStatus: boolean;
}

const GeneralFormField = (props: GeneralFormFieldInput) => {
    const { fieldTitle, formType, inputValue, placeholderValue, errorDescription, errorStatus, onChange } = props;

    return (
        <>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    {fieldTitle}
                </label>
                <input value={inputValue} type={formType} placeholder={placeholderValue} onChange={onChange} className="block w-full bg-white text-gray-700 shadow-md rounded-lg py-3 px-4 mb-3 leading-tight border-transparent focus:border-transparent focus:ring-0" />
                {
                    errorStatus ? <p className="text-red-500 text-xs italic">{errorDescription}</p> : null
                }

            </div>
        </>
    );
}

export default GeneralFormField;