import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
// import PhoneInput from 'react-phone-number-input'
import { useState, useEffect } from 'react';
// import SendMessage from '../../components/SendMessage';


export default function Contact() {
    // const [phoneNumber, setPhoneNumber] = useState();
    // const handleSendMessage = () => {
    //     return <SendMessage phoneNumber={phoneNumber} />;
    // };
    return (
        <>
            <section className="site-welcome">
                <h2>CONTACT ME</h2>
                <p>Shall we meet over a cup of coffee?</p>
            </section>
            <section className="card-container contact">
                <article>
                    <Card>
                        <Link to="mailto: magdalena.kubien(@)gmail.com?subject = Hi Magda!&body = I want to give you a job.">
                            <Card.Body>
                                <i className="fa-solid fa-at" />{" "}magdalena.kubien(@)gmail.com
                            </Card.Body>
                        </Link>
                    </Card>
                </article>
                <article>
                    <Card>
                        <Link to="https://www.linkedin.com/in/magdalena-kubien-79964297/">
                            <Card.Body>
                                <i className="fa-brands fa-linkedin" />{" "}in/magdalena-kubien-79964297
                            </Card.Body>
                        </Link>
                    </Card>
                </article>
                <article>
                    <Card>
                        <Link to="https://github.com/Magdagasikara" target="_blank">
                            <Card.Body>
                                <i className="fa-brands fa-github" />{" "}GitHub/Magdagasikara
                            </Card.Body>
                        </Link>
                    </Card>
                </article>
                {/* <article>
                    <form name="sendPhoneNumber">
                        <PhoneInput
                            countrySelectProps={{ unicodeFlags: true }}
                            international
                            countryCallingCodeEditable={false}
                            defaultCountry="SE"
                            value={phoneNumber}
                            onChange={setPhoneNumber} />
                        <Button variant="primary" onClick={handleSendMessage}>Text yourself at {phoneNumber}!</Button>
                    </form>
                </article> */}

            </section>
        </>
    )
}