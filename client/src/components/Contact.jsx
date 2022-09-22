const Contact = ({ contactRef }) => {
    return (
        <div className="scroll-to contact" ref={contactRef}>
            <h1>CONTACT</h1>
            <section>
                <div className="form-container">
                    <h2>send me an email:</h2>
                    <form id="contact-form" 
                        name="simple-contact-form" 
                        action="https://formspree.io/f/xyyvevzw" 
                        method="post">
                        <fieldset>
                            <label htmlFor="full-name"><p>name</p></label>
                            <input type="text" 
                                name="name" 
                                id="full-name"
                                placeholder="" 
                                required={true}/>
                            <label htmlFor="email-address"><p>email address</p></label>
                            <input type="email" 
                                name="_replyto" 
                                id="email-address" 
                                placeholder=" " 
                                required={true}/>

                            <label htmlFor="message"><p>message</p></label>
                            <textarea rows="15" 
                                      name="message" 
                                      id="message" 
                                      placeholder=" " 
                                      required={true}></textarea>
                        </fieldset>
                        <button type="submit">submit</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Contact