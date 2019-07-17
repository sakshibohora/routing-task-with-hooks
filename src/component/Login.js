import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
const Login = () => {
    const [value, setValue] = useState({
        username: '',
        password: ''
    });
    const [loggedIn, setLoggedIn] = useState(false);
    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (value.username === 'admin' && value.password === 'admin') {
            localStorage.setItem("token", value.username)
            setLoggedIn(true)
        }
        else if (value.username === 'user' && value.password === 'user') {
            localStorage.setItem("token", value.username)
            setLoggedIn(true)
        }
        else if (value.username === 'client' && value.password === 'client') {
            localStorage.setItem("token", value.username)
            setLoggedIn(true)
        }
    }
    if (localStorage.getItem("token") === 'user') {
        return <Redirect to="/user" />
    }
    else if (localStorage.getItem("token") === 'admin') {
        return <Redirect to="/admin" />
    }
    else if (localStorage.getItem("token") === 'client') {
        return <Redirect to="/client" />
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit} >
                Name:<input type="text" name="username" value={value.username} onChange={handleChange} />
                Password:<input type="password" name="password" value={value.password} onChange={handleChange} />
                <button>Submit</button>
            </form>
        </div>
    )
}
export default Login