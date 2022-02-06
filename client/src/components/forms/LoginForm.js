import React, { useState, useContext } from 'react';
import { AuthContext } from '../../AuthContext';
import Axios from 'axios';

const LoginForm = props => {

    const { setIsAuth } = useContext(AuthContext)
    const emptyCreds = { emailInput: '', passwordInput: '' }
    const errorMessage = 'invalid credentials'
    const [formData, setFormData] = useState(emptyCreds)
    const [credsAreInvalid, setCredsAreInvalid] = useState('')

    const handleInputChange = event => {
        event.preventDefault()
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value });
    }

    const handleFormSubmit = event => {
        event.preventDefault()
        const inputCreds = {
            email: formData.emailInput,
            password: formData.passwordInput
        }
        login(inputCreds)
        setFormData(emptyCreds)
    }

    const login = loginCreds => {
        Axios.post('/api/auth/login', loginCreds)
            .then(user => {
                console.log("login response ", user)
                setIsAuth(true)
            })
            .catch(err => {
                setCredsAreInvalid(errorMessage)
                console.log(err)
            })
    }

    return (
        <form onSubmit={handleFormSubmit}>
                <p>Email address</p>
                <input name="emailInput" type="email" placeholder="Enter email" value={formData.emailInput} onChange={handleInputChange} />

                <p>Password</p>
                <input name="passwordInput" type="password" placeholder="Password" value={formData.passwordInput} onChange={handleInputChange} />
                <p>
                    {credsAreInvalid}
                </p>
            <button variant="primary" type="submit">
                Submit
            </button>
            <button  onClick={e => {
                e.preventDefault();
                props.history.push('/signup')
            }}>Signup</button>
            <button onClick={e => {
                e.preventDefault();
                props.history.push('/')
            }}>Home</button>
        </form>
    )
}

export default LoginForm;