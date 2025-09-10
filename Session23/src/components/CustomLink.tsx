import React from 'react'
import {Link, Outlet, useNavigate} from 'react-router-dom'
export default function CustomLink() {
const navigate=useNavigate()

const handleClick= (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>{
    e.preventDefault()
    if(window.location.pathname==="/home-page"){
        navigate('/home-page')
    }else{
        navigate('/not-found')
    }
}

  return (
    <div>
      <nav>
        <Link to='/home-page' onClick={handleClick} >HomePage</Link>
      </nav>
      <Outlet/>
    </div>
  )
}