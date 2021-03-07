import React, { useState } from'react';
import '../SignIn.css';
import { Link } from 'react-router-dom';

function SignIn(){
    //  Hooks 
    const classInitialState = {
        email: 'styleInput',
        password: 'styleInput'
    };
    const [input, setInput] = useState(classInitialState);
    const handleChange = (e) => {
         if( e.target.value ===''){
            setInput({
                ...input,
                [e.target.name]: 'styleInput'
            })
        }else{
            setInput({
                ...input,
                [e.target.name]: 'styleInputActive'
            })
        }
    }
    const handleSubmit = e =>{
        e.preventDefault();
    }
    //Lo que se renderiza 
    return(
        <form onSubmit={handleSubmit} className="form">
            <div className="loginput">
                <p>Hello</p>
                <div>
                    <input 
                        className={input.email}
                        onChange={handleChange}
                        name="email"
                        type="email" 
                        placeholder="E-mail"
                    />
                </div>
                <div>
                    <input 
                        className={input.password}
                        onChange={handleChange}
                        name="password"
                        type="password" 
                        placeholder="Password" 
                        id="pass"
                    />
                </div>
                <div className="options">
                    <div className="remember">
                        <input 
                        type="checkbox" 
                        id="check"
                        />
                        <label htmlFor="check">Remember me</label>
                    </div>
                    <div className="forgot">
                       <Link to="" >
                          I forgot my password
                       </Link> 
                    </div>
                </div>
                <button type="submit" className="logbtn">  
                    Log In
                </button>
            </div>
        </form>
    );
}
// exportando el componente
export default SignIn;