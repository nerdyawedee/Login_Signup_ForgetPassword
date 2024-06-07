import React ,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function ForgetPassword() {
    const [email, setEmail] = useState('');
    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
            axios.post('http://localhost:5000/forget-pass', { // Specify full URL
            email: email,
        })
        .then(res => {
            console.log(res.data);
            if(res.data.code === 200){
                console.log("redirect to new password")
                history('/submit')
            }
        })
        .catch(err => {
            console.log(err);
        });
        
    };
    return (
        <div className=" justify-content-center align-items-center" style={{ height: "100vh;" }}>

            <div className='container mt-5 '>
                <h3 className='text-center'>Forget Password</h3>
                <div className='card mt-5 custom-shadow' style={{ width: '420px' }}>

                    <div className='card-body'>
                        <label className='form-label'>Email  </label>
                        <input className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} type='text' placeholder='enter your email' />
                        <button className='btn btn-primary mt-2' onClick={handleSubmit} >SEND OTP</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword
