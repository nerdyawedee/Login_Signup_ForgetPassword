// import { Password } from '@mui/icons-material';
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function NewSubmit() {
    const [otp, setotp] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(otp,password);
        axios.post('http://localhost:5000/otp', { // Specify full URL
            otp:otp,
            password:password,
        })
        .then(res => {
            console.log(res.data);
            if(res.data.code === 200){
                history('/signin')
            }
        })
        .catch(err => {
            console.log(err);
        });
        // history('/signin')
    };
  return (
    <div className=" justify-content-center align-items-center" style={{height: "100vh;"}}>
        <div className='container mt-5'>
            <div className='card mt-5 custom-shadow center' style={{ width: '420px' }}>
                <div className='card-body center'>
                    <label className='form-label'>OTP</label>
                    <input className='form-control' type='text' value={otp}  onChange={(e)=>setotp(e.target.value)} placeholder='enter your OTP' />
                    <label className='form-label'>New Password</label>
                    <input className='form-control' type='text' value={password}  onChange={(e)=>setPassword(e.target.value)} placeholder='enter your OTP' />
                    <button className='btn btn-primary mt-2' onClick={handleSubmit}>Change Password</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewSubmit
