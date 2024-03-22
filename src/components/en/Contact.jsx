import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react';

export default function Contact() {
    const [phoneNumber, setPhoneNumber] = useState()
    return (
        <>
            <section className="site-welcome">
                <h2>CONTACT ME</h2>
                <p>Shall we meet over a cup of coffee?</p>
            </section>
            <section className="card-container contact">
                <Card>
                    <Link to="mailto: magdalena.kubien(@)gmail.com?subject = Hi Magda!&body = I want to give you a job.">
                        <Card.Body>
                            <i className="fa-solid fa-at" />{" "}magdalena.kubien(@)gmail.com
                        </Card.Body>
                    </Link>
                </Card>
                <Card>
                    <Link to="https://www.linkedin.com/in/magdalena-kubien-79964297/">
                        <Card.Body>
                            <i className="fa-brands fa-linkedin" />{" "}in/magdalena-kubien-79964297
                        </Card.Body>
                    </Link>
                </Card>
                <Card>
                    <Link to="https://github.com/Magdagasikara" target="_blank">
                        <Card.Body>
                            <i className="fa-brands fa-github" />{" "}GitHub/Magdagasikara
                        </Card.Body>
                    </Link>
                </Card>

                {/* <Card style={{ width: '23%' }}>
                    <Card.Body> */}
                <form name="sendPhoneNumber">
                    <PhoneInput
                        // placeholder="Enter phone number"

                        // countrySelectProps={{ unicodeFlags: true }}
                        international
                        countryCallingCodeEditable={false}
                        defaultCountry="SE"
                        value={phoneNumber}
                        onChange={setPhoneNumber} />
                    {/* </Card.Body> */}
                    <Button variant="primary">Text yourself at {phoneNumber}!</Button>
                    {/* </Card> */}
                </form>
            </section>
        </>
    )
}