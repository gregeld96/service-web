import type { NextPage } from 'next'
import { BaseSyntheticEvent } from 'react';
import MyCombobox from '../components/DropdownFormField';
import GeneralFormField from '../components/GeneralFormField';

const AboutUs: NextPage = () => {

    const hellow = (e: string) => {
        console.log(e);
    }
    return (
        <div className="ml-auto mr-auto md:px-10 sm:px-2">
            <div className='md:flex'>
                <MyCombobox />
                <MyCombobox />
                <MyCombobox />
            </div>
            <div className='md:flex md:mt-5'>
                <MyCombobox />
                <GeneralFormField formType='email' placeholderValue='jane@gmail.com' fieldTitle={'Testing'} errorDescription={'Testing aja'} errorStatus={false} inputValue={""} onChange={(e: BaseSyntheticEvent) => hellow(e.target.value)} />
            </div>
        </div>
    )
}

export default AboutUs;