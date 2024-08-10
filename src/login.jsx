import React from 'react';
// import '../login.css';
const Login = () => {
    return (
        <div className='header_div1'>
           <div className='header_div2'>
             <form className='form' action="">
               <i id='i' class="fa-regular fa-user"></i>
                <h1 id='h1'>LOGIN</h1>
                  <input placeholder='Username' id='in'  type="text" />
                  <input placeholder='Password' id='in' type="text" />
                  <button id='b' className='shadow    '>LOGIN</button>
                  <p id='p'>Don't have an account? Sign Up</p>
             </form>
           </div>
        </div>
    );
}

export default Login;
