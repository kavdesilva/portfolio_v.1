import Moonsweepr from '../assets/moonsweepr_screenshot_1.png'
import AuthorWebsite from '../assets/author_website_screenshot.png'
import CycleList from '../assets/CycleList_Screenshot.png'
import Hekate from '../assets/hekate_screenshot.png'

const Portfolio = ({ portfolioRef }) => {
    return (
        <div className="scroll-to portfolio" ref={portfolioRef}>
            <h1>PORTFOLIO</h1>
            <section>
                <div className="portfolio-grid">
                    <div className="portfolio-card">
                        <a href="http://moonsweepr.surge.sh/" target="_blank">
                            <img src={Moonsweepr} alt="moonsweepr screenshot" className='portfolio-image'/>
                            <h4>moonsweepr</h4>
                            <p>a space-themed minesweeper game.</p>
                            <p>HTML, CSS, JS</p>
                        </a>
                    </div>
                    <div className="portfolio-card">
                        <a href="https://github.com/kavdesilva/author_website" target="_blank">
                            <img src={AuthorWebsite} alt="author website template screenshot" className='portfolio-image'/>
                            <h4>author website (template)</h4>
                            <p>an interactive website for an author's collection of works.</p>
                            <p>MongoDB, Express, Node, React</p>
                        </a>
                    </div>
                    <div className="portfolio-card">
                        <a href="https://github.com/frank-booth/CycleList_Frontend" target="_blank">
                            <img src={CycleList} alt="cyclelist screenshot" className='portfolio-image'/>
                            <h4>CycleList</h4>
                            <p>a web application for creating cycle routines to your favorite tunes.</p>
                            <p>PostgreSQL, Express, Node, React</p>
                        </a>
                    </div>
                    <div className="portfolio-card">
                        <a href="https://github.com/kavdesilva/Hekate" target="_blank">
                            <img src={Hekate} alt="hekate screenshot" className='portfolio-image'/>
                            <h4>hekate</h4>
                            <p>a period tracking app focused on gender-neutrality and data security.</p>
                            <p>PostgreSQL, Express, Node, Vue</p>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Portfolio