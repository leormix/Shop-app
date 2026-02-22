
import './Profile.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Profile() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {

            navigate('/user-account');
        }
    }, [navigate]);

    const loginProcesing = async () => {

        setError('')

        if (!email || !password) {
            setError('Enter email and password')
            return
        }

        try {
            const response = await fetch('http://localhost:4200/auth/login', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email, password: password })
            })

            if (!response.ok) {
                throw new Error('Email or password isnt right')
            }
            const data = await response.json();
            localStorage.setItem('token', data.access_token)
            navigate('/user-account')

        } catch (err) {
            setError(err.message)
        }
    }

    const registerProcessing = async () => {
        setError('')
        setSuccess('')

        if (!email || !password) {
            setError('Enter email and password')
            return
        }

        try {
            const response = await fetch('http://localhost:4200/auth/register', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ email: email, password: password })
            })

            if (!response.ok) {
                const errData = await response.json();
                throw new Error(errData.message || 'Registration error');
            }

            setSuccess('Everything okay, click LOGIN')

        } catch (err) {
            setError(err.message)

        }
    }

    return (
        <div className="profile-main">

            <div className="login-side">
                <div className="form-content">
                    <h1>LOGIN</h1>

                    <a href="#" className="forgot-pass">Forgot password?</a>

                    <div className="inputs">
                        <input
                            type="text"
                            placeholder="Email *"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        <input
                            type="password"
                            placeholder="Password *"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    {error && (
                        <p style={{ color: 'red', marginTop: '10px', fontSize: '14px' }}>
                            {error}
                        </p>
                    )}


                    {success && (
                        <p style={{ color: 'green', marginTop: '10px', fontSize: '14px', fontWeight: 'bold' }}>
                            {success}
                        </p>
                    )}



                    <button className="btn-black" onClick={loginProcesing}>
                        LOGIN <span>&rarr;</span>
                    </button>

                    <div className="login-btns">
                        <button className='facebook-btn'>Facebook</button>
                        <button className='google-btn'>Google</button>
                    </div>
                </div>
            </div>


            <div className="signup-side">
                <div className="form-content">
                    <h1>JOIN THE CLUB</h1>
                    <p>Get instant access to the best products.</p>
                    <button className="btn-black btn-reg" onClick={registerProcessing}>
                        REGISTER <span>&rarr;</span>
                    </button>
                </div>
            </div>

        </div>
    )
}