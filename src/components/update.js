import React, { useEffect, useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';

export default function Update() {

    const [name, setName] = useState('');
    const [age, setAge] = useState();
    const [height, setHeight] = useState();
    const [phone, setPhone] = useState();
    const [objectId, setObjectId] = useState(null);

    useEffect(() => {
        setObjectId(localStorage.getItem('objectId'));
        setName(localStorage.getItem('Name'));
        setAge(localStorage.getItem('Age'));
        setHeight(localStorage.getItem('Height'));
        setPhone(localStorage.getItem('Phone'));
    }, []);

    const updateAPIData = () => {
        axios.put(`/person/${objectId}`, {
            name, age, height, phone
        })
    }

    return (
        <div>
            <Form className='create-form'>
        <Form.Field>
            <label>Name</label>
            <input placeholder='Name' value={name} onChange={ (e) => setName(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>Age</label>
            <input placeholder='Age' value={age} onChange={(e) => setAge(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>Height</label>
            <input placeholder='Height' value={height} onChange={(e) => setHeight(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>Phone</label>
            <input placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
        </Form.Field>
        <Button type='submit' onClick={updateAPIData}>Submit</Button>
    </Form>
        </div>
    )
}
