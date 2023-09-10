import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
const SignUp = () => {
    const Navigate = useNavigate()
    const [credential, setCredential] = useState({ name: "", email: "", password: "", location: "" })
    const handleOnSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch("https://mern1-project.vercel.app/Signup", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name: credential.name , email : credential.email , password : credential.password , location : credential.location ,  })
        })
        console.log(response);
        const data  = await response.json()
        if(!data?.success)
        {
            alert("enter a valid credentials")
        }
        else
        {
            Navigate("/")
        }
    }
    const handleInputChange = (event) => {
        console.log(event.target.value, event.target.name)
        const { name, value } = event.target;
    
        setCredential({...credential,[name]: value, })
    }
    return (
        <div>
            <Header />
            <div className="bg-grey-lighter min-h-screen flex flex-col mt-5">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <form onSubmit={handleOnSubmit}>

                        <div className="bg-gray-100 px-6 py-8 rounded shadow-md text-black w-full">
                            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                            <input
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="name"
                                value={credential.name}
                                onChange={handleInputChange}
                                placeholder="Full Name" />

                            <input
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="email"
                                onChange={handleInputChange}
                                value={credential.email}
                                placeholder="Email" />

                            <input
                                type="password"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="password"
                                onChange={handleInputChange}
                                value={credential.password}
                                placeholder="Password" />
                            <input
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="location"
                                onChange={handleInputChange}
                                value={credential.location}
                                placeholder=" Location" />

                            <button
                                type="submit"
                                className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1"
                            >Create Account</button>

                            <div className="text-center text-sm text-grey-dark mt-4">
                                By signing up, you agree to the
                                <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                    Terms of Service
                                </a> and
                                <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                    Privacy Policy
                                </a>
                            </div>
                        </div>

                    </form>
                    <div className="text-grey-dark mt-6">
                        Already have an account?
                        <Link className="no-underline border-b border-blue text-blue" to="/login">
                            Log in
                        </Link>.
                    </div>
                </div>
            </div></div>
    )
}

export default SignUp
