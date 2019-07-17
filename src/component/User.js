import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
const User=()=>{
    const [loggedIn,setLoggedIn]=useState(true);
        const token = localStorage.getItem("token")
        if (token == null) {
           setLoggedIn(false)
        }
        if (loggedIn == false) {
            return <Redirect to="/" />
        }
        return (
            <div>
                <h2>
                    Hi!
                   I am {token}
                </h2>
                <Link to="/logout">Logout</Link>
            </div>
        )
    }
export default User
