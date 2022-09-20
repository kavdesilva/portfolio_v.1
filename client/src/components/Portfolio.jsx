import Moonsweepr from '../assets/moonsweepr_screenshot_1.png'

const Portfolio = ({ portfolioRef }) => {
    return (
        <div className="scroll-to portfolio" ref={portfolioRef}>
            <h1>PORTFOLIO</h1>
            <section>
                <div className="portfolio-grid">
                    <div className="portfolio-card">
                        <a href="http://moonsweepr.surge.sh/" target="_blank">
                            <img src={Moonsweepr} alt="moonsweepr screenshot" className='portfolio-image'/>
                            <p>moonsweepr</p>
                        </a>
                    </div>
                    <div className="portfolio-card">
                        <a href="https://github.com/kavdesilva/author_website" target="_blank">
                            <img src="" alt="author website template screenshot" className='portfolio-image'/>
                            <p>author website (template)</p>
                        </a>
                    </div>
                    <div className="portfolio-card">
                        <a href="https://github.com/frank-booth/CycleList_Frontend" target="_blank">
                            <img src="" alt="cyclelist screenshot" className='portfolio-image'/>
                            <p>CycleList</p>
                        </a>
                    </div>
                    <div className="portfolio-card">
                        <a href="https://github.com/kavdesilva/Hekate" target="_blank">
                            <img src="" alt="hekate screenshot" className='portfolio-image'/>
                            <p>hekate</p>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Portfolio