import React from 'react'
import Navbar from '../views/Home widgets/Navbar'
import Announcement from '../views/Home widgets/Announcement'
import Slider from '../views/Home widgets/Slider'
import Categories from '../views/Home widgets/Categories'
import Products from '../views/Home widgets/Products'
import Newsletter from '../views/Home widgets/Newsletter'
import Footer from '../views/Home widgets/Footer'

const Home = () => {
  return (
    <div>
      <Announcement/>
      <Navbar/>
      <br></br>
      <br></br>
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home
