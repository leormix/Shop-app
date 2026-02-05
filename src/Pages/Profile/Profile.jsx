import './Profile.css'

export default function Profile() {
    return (
        <div className="profile-main">


            <div className="login-side">
                <div className="form-content">
                    <h1>LOGIN</h1>

                    <a href="#" className="forgot-pass">Forgot password?</a>

                    <div className="inputs">
                        <input type="text" placeholder="Email *" />
                        <input type="password" placeholder="Password *" />
                    </div>



                    <button className="btn-black">
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
                    <button className="btn-black btn-reg">
                        REGISTER <span>&rarr;</span>
                    </button>
                </div>
            </div>

        </div>
    )
}