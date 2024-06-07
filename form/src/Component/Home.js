import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Home(props) {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('TOKEN');
        if (!token) {
            navigate('/signin');
        }
    })
    return (
        <div className='navbar navbar-expand-lg bg-body-tertiary container'>
        <div className='container-fluid d-flex justify-content-between'>
            <div className='d-flex'>
                <h2>Application</h2>
                
            </div>
            <div>
            <span className="mr-3 ml-3">{localStorage.getItem('EMAIL')}</span>
                <button onClick={()=>{
                    localStorage.clear();
                    navigate('/signin');
                }} className="btn btn-outline-primary ml-3">LOGOUT</button>
            </div>
        </div>
    </div>
            )
}

export default Home
