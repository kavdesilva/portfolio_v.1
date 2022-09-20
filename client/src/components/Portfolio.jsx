import Moonsweepr1 from '../assets/moonsweepr_screenshot_1.png'

const Portfolio = ({ portfolioRef }) => {
    return (
        <div className="scroll-to portfolio" ref={portfolioRef}>
            <h1>PORTFOLIO</h1>
            <section>
                <div className="portfolio-grid">
                    <div className="portfolio-card">
                        <img src={Moonsweepr1} alt="" className='portfolio-image'/>
                        <p>moonsweepr</p>
                    </div>
                    <div className="portfolio-card">
                        <p>author website template</p>
                    </div>
                    <div className="portfolio-card">
                        <p>CycleList</p>
                    </div>
                    <div className="portfolio-card">
                        <p>hekate</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Portfolio