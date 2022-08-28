import { useRef } from 'react'

const Nav = ({ handleClickHome, handleClickAbout, handleClickPortfolio, handleClickContact}) => {
    return (
        <div className="nav">
            <button className='home' onClick={handleClickHome}>home</button>
            <button className='about' onClick={handleClickAbout}>about</button>
            <button className='portfolio' onClick={handleClickPortfolio}>portfolio</button>
            <button className='contact' onClick={handleClickContact}>contact</button>
        </div>
    )
}

export default Nav