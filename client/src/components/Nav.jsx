import { useRef } from 'react'

const Nav = ({ handleClickHome, handleClickAbout, handleClickPortfolio, handleClickBlog, handleClickContact}) => {
    return (
        <div className="nav">
            <button className='home' onClick={handleClickHome}>home</button>
            <button className='about' onClick={handleClickAbout}>about</button>
            <button className='portfolio' onClick={handleClickPortfolio}>portfolio</button>
            <button className='blog' onClick={handleClickBlog}>blog</button>
            <button className='contact' id='contact-button' onClick={handleClickContact}>contact</button>
        </div>
    )
}

export default Nav