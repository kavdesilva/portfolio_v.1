import { useRef } from 'react'

const Nav = ({ handleClickHome, handleClickAbout, handleClickPortfolio, handleClickContact}) => {
    return (
        <div>
            <button onClick={handleClickHome}>home</button>
            <button onClick={handleClickAbout}>about</button>
            <button onClick={handleClickPortfolio}>portfolio</button>
            <button onClick={handleClickContact}>contact</button>
        </div>
    )
}

export default Nav