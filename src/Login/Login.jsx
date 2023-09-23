import React,{useState} from 'react'
import './Login.css'


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can implement your authentication logic.
    // For this example, we'll just log the values.
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className='body'>
      <h1 className='heading' style={{ color: 'white' }}>Truckin</h1>
      <div className='navigation'></div>
      <div className="login-container">
        <h1>Sign-In</h1>
        <form onSubmit={handleSubmit}>
          <input
            className='type-box'
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          /> <br/> <br/><br/>
          <input
            className='type-box'
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          /> <br/> <br/><br/>
          <button className="submit">Sign In</button>
        </form>
        <p className="signup-link">
          New to Truckin? <p className='got'>Sign up now</p>

        </p>
      </div>
    </div>
  );
}

export default Login;