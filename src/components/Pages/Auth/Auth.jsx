import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import "./Auth.css"
import icon from '../../../assets/icon.png'
import Aboutauth from './Aboutauth'
// import { signup, login } from '../../action/auth'
import { signup,login } from '../../../action/auth'
const Auth = () => {
    const [issignup, setissignup] = useState(false)
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handlesubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert("Enter email and password")
        }
        if (issignup) {
            if (!name) {
                alert("Enter a name to continue")
            }
            dispatch(signup({ name, email, password }, navigate))
            
        } else {
            dispatch(login({ email, password }, navigate))
        
        }
    }
    const handleswitch = () => {
        setissignup(!issignup);
        setname("");
        setemail("");
        setpassword("")

    }

    return (
        <section className="auth-section">
            <div className='left-about'>{issignup && <Aboutauth />}</div>
            
            <div className="auth-container-2">
            {!issignup && <img src={icon} alt="icon" className='login-logo' />}
                
                <form onSubmit={handlesubmit}>

                {issignup && (
                        <label htmlFor="name">
                            <h2>Create your account</h2>                            
                        </label>
                    )}
                
                    {issignup && (
                        <label htmlFor="name">
                            <h4 style={{ color: "#3b3f44" }}>Display Name</h4>
                            <input type="text" id='name' name='name' value={name} onChange={(e) => {
                                setname(e.target.value);
                            }} />
                        </label>
                    )}
                    <label htmlFor="email">
                        <h4 style={{ color: "#3b3f44" }}>Email</h4>
                        <input type="email" id='email' name='email' value={email} onChange={(e) => {
                            setemail(e.target.value);
                        }} />
                    </label>
                    <label htmlFor="password">
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <h4 style={{ color: "#3b3f44" }}>Password</h4>
                            
                            {!issignup && (
                                <p style={{ color: "#007ac6", fontSize: "13px" }}>
                                    Forgot Password?
                                </p>
                            )}
                        </div>
                        <input type="password" name="password" id="password" value={password} onChange={(e) => {
                            setpassword(e.target.value)
                        }} />
                        {/* {issignup &&<> 
                <p className='termsandpolicy'>Must contain 8+ characters, including at least 1 letter and 1 number.
                    </p>
                    </>} */}
                    </label>
                    <button type='submit' className='auth-btn' >
                        {issignup ? "Sign up" : "Log in"}
                    </button>
                </form>
                <p>
                    {issignup ? "Already have an account?" : "Don't have an account"}
                    <button type='button' className='handle-switch-btn' onClick={handleswitch}>
                        {issignup ? "Log in" : "Sign up"}
                    </button>
                </p>
                {issignup && <div className='breakline'></div>}
                
            </div>
            
        </section>
    )
}

export default Auth