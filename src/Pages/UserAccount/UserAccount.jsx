import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UserAccount() {

    const [userData, setUserData] = useState(null);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {

            const token = localStorage.getItem('token');


            if (!token) {
                navigate('/profile');
                return;
            }

            try {

                const response = await fetch('http://localhost:4200/auth/profile', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',

                        'Authorization': `Bearer ${token}`
                    }
                });

                if (!response.ok) {
                    throw new Error('Session expired. You need new token.');
                }

                const data = await response.json();


                setUserData(data.user);

            } catch (err) {

                setError(err.message);
                localStorage.removeItem('token');
                navigate('/profile');
            }
        };

        fetchProfile();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/profile');
    };


    if (!userData && !error) {
        return <div style={{ textAlign: 'center', marginTop: '50px' }}>Profile is loading...</div>;
    }

    return (
        <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                <h1>Мой аккаунт</h1>
                <button
                    onClick={handleLogout}
                    style={{ background: 'black', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer' }}
                >
                    ВЫЙТИ
                </button>
            </div>


            {error && <p style={{ color: 'red' }}>{error}</p>}


            {userData && (
                <div style={{ background: '#f5f5f5', padding: '20px', borderRadius: '8px', marginBottom: '40px' }}>
                    <h3>User information</h3>
                    <p><strong>Email:</strong> {userData.email}</p>
                    <p><strong>ID:</strong> {userData.id}</p>
                </div>
            )}

            <div>
                <h2>Моя корзина</h2>
                <div style={{ border: '2px dashed #ccc', padding: '50px', textAlign: 'center', color: '#666' }}>
                    Ваша корзина пока пуста. <br />
                    <em>(Здесь мы будем выводить товары, когда настроим базу данных для продуктов)</em>
                </div>
            </div>

        </div>
    );
}