import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import axios from "axios"
import { useEffect, useState, useRef } from 'react'
import Card from '../../components/Card/Card'
import Search from '../../components/Search/Search'
const Home = () => {


  const imageUrl = "https://imgs.search.brave.com/MZFSULeSguMkTNMkewLU5K5ZvCi2rwQgYHpjdUNnkdo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMjcx/ODg0LmpwZw";

  const backgroundStyle = {
    backgroundImage: `url(${imageUrl})`,

  };
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus on the input field when the component mounts
    inputRef.current.focus();
  }, []);
  const [food_itemsData, setFood_itemsData] = useState([])
  const [foodCategoryData, setfoodCategoryData] = useState([])
  const [filterCatageroy, setFilterCatageroy] = useState("")
  const fetchData = async () => {
    try {
      const response = await axios.post('https://mern1-project.vercel.app/data');
      console.log('Response Data:', response.data);
      setFood_itemsData(response.data[1]);
      setfoodCategoryData(response.data[0]);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const handleCatageroyFilter = (item) => {
    // console.log(item)
    setFilterCatageroy(item)
  }

  const hanldeOnChange = (e) => {
    console.log(e.target.value)
    setFilterCatageroy(e.target.value)
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>

      <Header />

      <div className="h-96 w-100 bg-cover bg-center flex justify-center items-center" style={backgroundStyle}>

        <input type='text' onChange={(e) => hanldeOnChange(e)} value={filterCatageroy} className='w-1/2 py-2 outline-none rounded-xl ps-4 ' placeholder='search your food item' ref={inputRef} />
      </div>
      {foodCategoryData !== null ?
        foodCategoryData.map((items, index) => {
          return (<div key={index}>

            <div className='grid grid-cols-3 max-w-screen-lg mx-auto'>
              <h1 className='ps-3 py-3 font-bold text-xl'> {items.CategoryName}</h1>
            </div>
            < hr />
            <div className='grid grid-cols-3 max-w-screen-lg mx-auto'>
              {food_itemsData !== null ? food_itemsData.filter((item) => {
                return (item.CategoryName === items.CategoryName) && (item.name.toLowerCase().includes(filterCatageroy.toLowerCase()))
              }).map((item) => {
                return <Card
                  food_itemsData={item}
                />
              }) : ""}
            </div>
          </div>
          )

        })
        : ""}
      {/* this div for the category name */}
      {/* <div className='grid grid-cols-3 max-w-screen-lg mx-auto'>
        {foodCategoryData !== null ? foodCategoryData.map((items, index) => {
          return <div className='shadow rounded text-center shadow-black  m-3 cursor-pointer' id={items.CategoryName} onClick={() => handleCatageroyFilter(items.CategoryName)} key={index}> {items.CategoryName} </div>
        }) : " "}
      </div>
      <div className='grid grid-cols-3 max-w-screen-lg mx-auto'>
        {filterCatageroy === "" ?
          food_itemsData !== null ? food_itemsData.map((items, index) => {

            return <Card key={index} options={items?.options[0]} CategoryName={items.CategoryName} _id={items?._id} name={items?.name} img={items?.img} description={items?.description} />
          }) : "data is not count "
          : food_itemsData
            .filter(item => item.CategoryName === filterCatageroy) // Replace 'desiredCategoryName' with the category you want to filter by
            .map((item, index) => (
              <Card
                key={index}
                _id={item._id}
                name={item.name}
                img={item.img}
                CategoryName={item.CategoryName}
                options={item?.options[0]}
                description={item.description}
              />
            )
            )}
      </div> */}
      <Footer />

    </div>
  )
}

export default Home
