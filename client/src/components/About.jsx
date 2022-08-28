const About = ({ aboutRef }) => {
    return (
        <div className="scroll-to about" ref={aboutRef}>
            <h1>ABOUT</h1>
            <section>
                <p>this is the about section.</p>
            </section>
        </div>
    )
}

export default About