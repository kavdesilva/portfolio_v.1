import Kristina from '../assets/kristina.png'

const About = ({ aboutRef }) => {
    return (
        <div className="scroll-to about" ref={aboutRef}>
            <h1>ABOUT</h1>
            <section>
                <div className="about-me">
                    <h2>hello! 🌻</h2>
                    <img className="profile-image" src={Kristina} alt="profile image" />
                    <h2>my name is kristina.</h2>
                    <p>I am a software engineer interested in building high quality products that are beautiful, functional and easy to use. I LOVE to learn and I am not afraid to take on a challenge–-there is nothing more satisfying than a hard-won solution to a difficult problem!</p>
                    <h4>programming languages:</h4>
                    <p>JavaScript, HTML, CSS, Python3/Django</p>
                    <h4>frameworks & libraries:</h4>
                    <p>Node.js/Express, Mongoose, React.JS, Vue.JS</p>
                    <h4>database:</h4>
                    <p>MongoDB, PostgreSQL, SQL</p>
                </div>
            </section>
        </div>
    )
}

export default About