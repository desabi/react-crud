import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import { useNavigate } from 'react-router';
import axios from 'axios';

export default function Create() {

    const [name, setName] = useState('');
    const [age, setAge] = useState();
    const [height, setHeight] = useState();
    const [phone, setPhone] = useState();

    let navigate = useNavigate();

    const postData = () => {
        console.log(name);
        console.log(age);
        console.log(height);
        console.log(phone);

        axios.post(`/person`, {
            name, age, height, phone
        }).then(() => {
            navigate('/read');
        })
    }

    return (
        <div>
            <Form className='create-form'>
        <Form.Field>
            <label>Name</label>
            <input placeholder='Name' onChange={ (e) => setName(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>Age</label>
            <input placeholder='Age' onChange={(e) => setAge(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>Height</label>
            <input placeholder='Height' onChange={(e) => setHeight(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>Phone</label>
            <input placeholder='Phone' onChange={(e) => setPhone(e.target.value)} />
        </Form.Field>
        <Button onClick={postData} type='submit'>Submit</Button>
    </Form>
        </div>
    )
}
