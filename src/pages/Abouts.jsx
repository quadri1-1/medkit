import React from 'react'
import Firstnavbar from '../components/Firstnavbar'
import Banner2 from '../About componets/Banner2'
import Aboutus from '../About componets/Aboutus'
import Secondnavbar from '../components/Secondnavbar'
import Success from './Success'
import Footer from '../components/Footer'

const Abouts = () => {
  return (
    <div  style={{backgroundColor: '#DEF1F9'}}>
      <Firstnavbar />
      <Banner2 />
      <Aboutus />
      <Footer/>
      
    </div>
  )
}

export default Abouts