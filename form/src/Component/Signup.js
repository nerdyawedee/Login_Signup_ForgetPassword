import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
        axios.post('http://localhost:5000/signup', { // Specify full URL
            email: email,
            password: password
        })
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        });
        history('/signin')
    };

    return (
        <div className='container mt-5'>
            <h1 style={{textAlign: "center"}}>Signup</h1>
            <div className='card mt-5 custom-shadow'>
                <div className='card-body'>
                    <form>
                        <div>
                            <label className='form-label'>Email</label>
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className='form-control' placeholder='enter your email' />
                        </div>
                        <div className='mt-3'>
                            <label className='form-label'>Password</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='form-control' placeholder='enter your password' />
                        </div>
                        <button className='mt-3 btn btn-primary' onClick={handleSubmit}>Signup</button>
                        <Link className='mt-3 btn btn-primary ' style={{marginLeft:"20px"}} to='/signin'>Signin</Link>
                        
                    </form>
                </div>
            </div>
        </div>
    );
}
