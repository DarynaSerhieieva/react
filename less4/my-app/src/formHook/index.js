import React, { useState } from "react";
import uniqid from 'uniqid';

import { Select, Option } from "./select/index";
import { InputItem } from "./InputItem";
import {MapRadioButton, RadioButton} from './toggler';
import { LiItem } from "./LIItem";

const Form = () => {

    const [ userName, setUserName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ city, setCity ] = useState('Kyiv');
    const [ gender, setGender] = useState('male');
    const [ data, setData] = useState([]);

    const changeUserName = e => setUserName(e.target.value);

    const changeEmail = e => setEmail(e.target.value);

    const changeCity = e => setCity(e.target.value);

    const changeGender = value => _ => setGender(value);

    const changeData = (e) => {
        e.preventDefault();
        const formData = [userName, email, city, gender].map(item => !!item);

        if(!formData.includes(false)) {
            setData([
                ...data,
                {
                    id: uniqid(),
                    userName: userName,
                    email: email,
                    gender: gender,
                    city: city
                }
            ])
            setUserName('');
            setEmail('');
            setCity('Kyiv');
            setGender('male');
        }
    }

    return (
        <>
            <form onSubmit={changeData}>
                <InputItem
                    type='text'
                    value={userName}
                    action={changeUserName}
                    placeholder='write your name'
                />
                <InputItem
                    type='email'
                    value={email}
                    action={changeEmail}
                    placeholder='write your email'
                />

                <Select action={changeCity} value={city}>
                    <Option value='Kyiv'/>
                    <Option value='Lviv'/>
                    <Option value='Harkiv'/>
                    <Option value='Odessa'/>
                </Select>

                <MapRadioButton label='gender' action={changeGender} actionState={gender}>
                    <RadioButton name='male'/>
                    <RadioButton name='female'/>
                </MapRadioButton>

                <button type='submit'>send</button>
                <div>
                    <ul>
                        {
                            data.map(item => {
                                return <LiItem
                                        key={item.id}
                                        name={item.userName}
                                        email={item.email}
                                        gender={item.gender}
                                        city={item.city}
                                    />
                            })
                        }
                    </ul>
                </div>

            </form>
        </>
    )
}

export default Form;