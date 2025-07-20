import { React, Component, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserAuthStore } from '../store/userStore';
import { connectSocket } from '../api/socket';
import axios from 'axios';
import "../styles/style.css";

function ReagPage(){

	const [phone, setPhone] = useState<string>('');
  const [prePassword, setPrePassword] = useState<string>('');
	const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');

	const [error, setError] = useState('');

	const navigate = useNavigate();

	const login = UserAuthStore(state => state.login);

	const handleSubmit = async (e: FormEvent) => 
  {
		e.preventDefault();

    if(!password || !phone || !prePassword || !name)
    {
      console.log("No data were input!");
      return;
    }

    if(password !== prePassword)
    {
      console.log("Пароли не совпадают");
      return;
    }

		console.log('Отправка данных:', { phone, password });

		const response = await axios.post('http://localhost:5000/api/reg', 
  			{phone:phone, password:password, name:name},
  			{
      headers: {
        'Content-Type': 'application/json', // Указываем тип данных
      },
    });

    console.log(response);

    if('success' in response.data)
    {
      navigate("/auth");
    }
    else
    {
      console.error("Ошибка регистрарции!");
    }
		
	}

  const navigatoToAuthPage = async (e: FormEvent) => 
  {
    navigate('/auth');
  }

	return (
		<div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1 className="app-title">Midnight Registration</h1>
          <p className="app-subtitle">Sign up to continue</p>
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
            <label htmlFor="phone">User name</label>
            <input 
              id="phone" 
              type="tel" 
              placeholder="+7 (555) 000-0000"
              className="form-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Create a password</label>
            <input 
              id="password" 
              type="password" 
              placeholder="••••••••"
              className="form-input"
              value={prePassword}
              onChange={(e) => setPrePassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Confirm the password</label>
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
            Sign Up
          </button>
        </form>
        
        <div className="login-footer">
          <p>Do you alreadtyhave an account? <span className="text-link" onClick={navigatoToAuthPage}>SIGN UP</span></p>
        </div>
      </div>
    </div>
	  );
	}

export default ReagPage;