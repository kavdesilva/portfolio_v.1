import { useRef } from 'react'

const Nav = ({ handleClickHome, handleClickAbout, handleClickPortfolio, handleClickBlog, handleClickContact}) => {
    return (
        <div className="nav">
            <div className='buttons-container'>
                <div className='home button' onClick={handleClickHome}>home</div>
                <div className='about button' onClick={handleClickAbout}>about</div>
                <div className='portfolio button' onClick={handleClickPortfolio}>portfolio</div>
                <div className='blog button' onClick={handleClickBlog}>blog</div>
                <div className='contact button' onClick={handleClickContact}>contact</div>
            </div>
            
        </div>
    )
}

export default Nav