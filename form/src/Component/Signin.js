import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

export default function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
        axios.post('http://localhost:5000/signin', { // Specify full URL
            email: email,
            password: password
        })
        .then(result => {
            console.log(result.data);
            if(result.data.code === 500){
                alert ("user not found");
            }
            if(result.data.code === 400){
                history('/');
                // saving token in localstorage
                localStorage.setItem('TOKEN',result.data.token)
                localStorage.setItem('EMAIL',result.data.email)
            }
        })
        .catch(err => {
            console.log(err);
        });
    };

    return (
        <div className='container mt-5'>
            <h1 style={{textAlign: "center"}}>Signin</h1>
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
                        <button className='mt-3 btn btn-primary' onClick={handleSubmit}>Login</button>
                        <Link className='mt-3 btn btn-primary'  style={{marginLeft:"20px"}} to='/signup'>Signup</Link>
                        <Link className='mt-3 text-primary ml-auto'  style={{marginLeft:"20px"}} to='/forget-pass'>ForgetPassword</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}
