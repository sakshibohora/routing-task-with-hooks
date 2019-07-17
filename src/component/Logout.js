import React, { Component } from 'react'
import { Link } from 'react-router-dom'
const Logout = () => {
    localStorage.removeItem("token")

    return (
        <div>
            <h2>You have logged out</h2>
            <Link to="/">Login</Link>
        </div>
    )
}
export default Logout