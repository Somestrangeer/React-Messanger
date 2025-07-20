import { React, Component, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserAuthStore } from '../store/userStore';
import { connectSocket } from '../api/socket';
import axios from 'axios';
import "../styles/style.css";

function AuthPage(){

	const [phone, setPhone] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const [error, setError] = useState('');

	const navigate = useNavigate();

	const login = UserAuthStore(state => state.login);

	const handleSubmit = async (e: FormEvent) => 
  {
		e.preventDefault();

    if(!password || !phone)
    {
      console.log("No data were input!");
      return;
    }

		console.log('Отправка данных:', { phone, password });

		const response = await axios.post('http://localhost:5000/api/login', 
  			{phone:phone, password:password},
  			{
      headers: {
        'Content-Type': 'application/json', // Указываем тип данных
      },
    });
    console.log(response);
    if('success' in response.data)
    {
      if(!response.data.success)
      {
        console.error(response.data.message);
        return;
      }
      else
      {
        login(response.data.token, response.data.userId);

      connectSocket();

      navigate("/chat");
      }
    }
    else
    {
      login(response.data.token, response.data.userId);

      connectSocket();

      navigate("/chat");
    }
		
	}

  const regPageNavigation = async (e: FormEvent) => 
  {

   navigate('/reg'); 
  }

	return (
		<div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1 className="app-title">Midnight Chat</h1>
          <p className="app-subtitle">Sign in to continue</p>
        </div>
        
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input 
              id="phone" 
              type="tel" 
              placeholder="+7 (555) 000-0000"
              className="form-input"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              id="password" 
              type="password" 
              placeholder="••••••••"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <button type="submit" className="btn-primary">
            Sign In
          </button>
        </form>
        
        <div className="login-footer">
          <p>Don't have an account? <span className="text-link" onClick={regPageNavigation}>Sign up</span></p>
        </div>
      </div>
    </div>
	  );
	}

export default AuthPage;