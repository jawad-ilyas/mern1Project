import React from 'react'
import HeaderLogo from '../../assets/HeaderLogo.svg'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { CiUser } from 'react-icons/ci'
import './Header.css'
import { Link, useNavigate } from 'react-router-dom'
const Header = () => {



    const Navigate = useNavigate()


    const Menu = [
        {
            id: 1,
            name: "Recipes",
            link: <Link to="/Recipes">Recipes</Link>
        },
        {
            id: 2,
            name: "Popular",
            link: <Link to="/Popular">Popular</Link>
        },
        {
            id: 3,
            name: "MEAT & SEAFOOD",
            link: <Link to="/MEATSEAFOOD">MEATSEAFOOD</Link>
        },
        {
            id: 4,
            name: "HEALTHY & DIET",
            link: <Link to="/HEALTHYDIET">HEALTHYDIET</Link>
        },
        {
            id: 5,
            name: "HOLIDAYS",
            link: <Link to="/HOLIDAYS">HOLIDAYS</Link>
        },
        {
            id: 6,
            name: "CUISINE",
            link: <Link to="/CUISINE">CUISINE</Link>
        },
        {
            id: 7,
            name: "SEASONAL",
            link: <Link to="/SEASONAL">SEASONAL</Link>
        },
        {
            id: 8,
            name: "log Out",
            link: <Link to="/login">Log Out</Link>,
            onClick: handleLogOutClick // Assign the onClick function here

        },

    ]

    const MenuNoLogIn = [
        {
            id: 1,
            name: "Home",
            link: <Link to="/">Home</Link>
        },
        {
            id: 2,
            name: "Sign Up",
            link: <Link to="/SignUp">Sign Up</Link>
        },
        {
            id: 7,
            name: "Login Up",
            link: <Link to="/login">Log In</Link>
        },
    ]

    const menyIcons = [
        {
            name: <BsSearch />
        },
        {
            name: <Link to="/OrderReview"><CiUser /></Link>
        },
        {
            name: <Link to="/cart"><AiOutlineShoppingCart /></Link>

        }
    ]
    function handleLogOutClick() {
        // Implement your logout logic here
        console.log(localStorage.getItem("token"))
        localStorage.removeItem("token")
        Navigate("/login")
        console.log("User logged out");
    }
    return (
        <div className='bg-black'>

            <div className='bg-black text-white max-w-screen-lg mx-auto py-8'>

                {localStorage.getItem("token") ?
                    <nav className='flex items-center justify-between'>
                        <Link to="/" ><img src={HeaderLogo} alt='headerlogo' /> </Link>
                        <ul className='flex -me-4 '>
                            {Menu.map((item, index) => {
                                return <li key={index} className='me-4 py-2 headerMenu cursor-pointer uppercase hover:inline-block hover:border-b-2 hover:pb-1 hover:border-b-customYellow    '>{item.link}</li>
                            })}
                            <li onClick={handleLogOutClick}>Logout</li>
                        </ul>
                        <div >

                            <ul className='flex -me-4'>
                                {menyIcons.map((item, index) => {
                                    return <li key={index} className='me-4 cursor-pointer hover:text-customYellow'>{item?.name}</li>
                                })}
                            </ul>
                        </div>
                    </nav>
                    : <nav className='flex items-center justify-between'>
                        <Link to="/" ><img src={HeaderLogo} alt='headerlogo' /> </Link>
                        <ul className='flex -me-4 '>
                            {MenuNoLogIn.map((item, index) => {
                                return <li key={index} className='me-4 py-2 headerMenu cursor-pointer uppercase hover:inline-block hover:border-b-2 hover:pb-1 hover:border-b-customYellow    '>{item.link}</li>
                            })}

                        </ul>
                    </nav>}
            </div>
        </div>
    )
}

export default Header