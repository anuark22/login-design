import React, { useState } from 'react';
import '../SignUp.css';

function SignUp(){
    const classInitialState = {
        email: 'styleInput',
        password: 'styleInput',
        repeatPass:'styleInput',
        name: 'styleInput',
        secret: 'styleInput',
        key: 'styleInput'
    };
    const [input, setInput] = useState(classInitialState);

    const handleChange = (e) => {
        console.log(e.target.name, e.target.value);
         if( e.target.value === ''){
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
    return(
        <form id="form" className="form">
            <div className="sigInput">
                <p>Sign Up</p>
                <div> 
                    <input  
                        type="text" 
                        placeholder="Name"
                        name="name"
                        onChange={handleChange}
                        className={input.name} 
                    />                      
                    <input  
                        type="email" 
                        placeholder="E-mail" 
                        name="email"
                        onChange={handleChange}
                        className={input.email} 
                    />
                </div>   
                <div>
                    <input  
                        type="password" 
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        className={input.password} 
                    />
                    <input  
                        type="password" 
                        placeholder="Repeat Password"
                        name="repeatPass"
                        onChange={handleChange}
                        className={input.repeatPass} 
                    />
                </div>
                <div>             
                    <h3 className="bitkey"> Local Bitcoin Keys </h3>
                </div>
                <div>
                    <input  
                        type="text" 
                        placeholder="Secret"
                        name="secret"
                        onChange={handleChange}
                        className={input.secret} 
                    />
                    <input  
                        type="text" 
                        placeholder="Key"
                        name="key"
                        onChange={handleChange}
                        className={input.key} 
                    />
                </div>
                <button type="submit" className="logbtn" >
                    Next
                </button>              
            </div > 
        </form>
    );
}    
export default SignUp;