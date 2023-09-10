import React  ,{useRef ,useEffect}from 'react';
import './Search.css';
import bgImg from '../../assets/bg.webp';
const Search = () => {
    const imageUrl = "https://imgs.search.brave.com/MZFSULeSguMkTNMkewLU5K5ZvCi2rwQgYHpjdUNnkdo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMjcx/ODg0LmpwZw";

    const backgroundStyle = {
        backgroundImage: `url(${imageUrl})`,
       
    };
    const inputRef = useRef(null);

    useEffect(() => {
        // Focus on the input field when the component mounts
        inputRef.current.focus();
    }, []);

    return (
        <div className="h-96 w-100 bg-cover bg-center flex justify-center items-center" style={backgroundStyle}>

            <input type='text' className='w-1/2 py-2 outline-none rounded-xl ps-4 ' placeholder='search your food item' ref={inputRef} />
        </div>
    );
};

export default Search;
