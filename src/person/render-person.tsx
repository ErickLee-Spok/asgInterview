import React from 'react';
import './render-person.css';

export interface PersonDetails {
    firstName: string,
    lastName: string,
    age: number,
    phoneNumber: string,
    student: boolean
}

export interface Person {
    data: PersonDetails
}

const RenderPerson = ({}: Person) => {

    return (
        <div className='render-person'>

        </div>
    )
}

export default RenderPerson;