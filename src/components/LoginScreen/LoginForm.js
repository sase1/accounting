import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import { FaEye } from 'react-icons/fa';
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from "../../firebase-config";
import {useNavigate} from "react-router";
import {translations} from "../../translation/IntlContext";
import {useSelector} from "react-redux";


const LoginForm = () => {
    const { initalLanguage } = useSelector((state) => state.languageChangeHandler)
    const [validated, setValidated] = useState(false);
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [passOrText, setPassOrText] = useState(true)
    const navigateToHome = useNavigate()


    const logIn = async (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
            setMessage("")
        }
        setValidated(true);
        e.preventDefault();
        try{
            const user = await signInWithEmailAndPassword(auth, username, password)
            setMessage(initalLanguage ? translations.mkTranslations.loginSuccesfull : translations.enTranslations.loginSuccesfull)
            setTimeout(() => {navigateToHome('/home')}, 2000);
        } catch (err){
            console.log(err)
            setMessage(initalLanguage ? translations.mkTranslations.wrongEmailOrPassword : translations.enTranslations.wrongEmailOrPassword)
        }
    }

    const toggleShow = () =>{
        setPassOrText(!passOrText)
    }

    return (
        <Container>
            <Row className={"justify-content-md-center align-items-center vh-100"}>
                <Col md={4} className={"loginFormContainer bg-white p-5"}>
                    <h1 className={"text-center"}>{initalLanguage ? translations.mkTranslations.internetSystem : translations.enTranslations.internetSystem}</h1>
                    <Form noValidate validated={validated} onSubmit={logIn}>
                        <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
                            <h3 className={'text-center mt-1'}>{message}</h3>

                            <Form.Label>{initalLanguage ? translations.mkTranslations.email : translations.enTranslations.email}</Form.Label>
                            <Form.Control type="text" required value={username} onChange={(e) => setUsername(e.target.value)} />
                            <Form.Control.Feedback type="invalid">
                                {initalLanguage ? translations.mkTranslations.enterEmail : translations.enTranslations.enterEmail}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>{initalLanguage ? translations.mkTranslations.password : translations.enTranslations.password} <FaEye onClick={toggleShow} style={{cursor: "pointer"}}></FaEye></Form.Label>
                            <Form.Control type={passOrText ? "password" : "text"} name={"password"} required value={password} onChange={(e) => setPassword(e.target.value)} />
                            <Form.Control.Feedback type="invalid">
                                {initalLanguage ? translations.mkTranslations.enterPassword : translations.enTranslations.enterPassword}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button className={"create-user"} type="submit">
                            {initalLanguage ? translations.mkTranslations.login : translations.enTranslations.login}
                        </Button>
                    </Form>
                    <div className={"mt-5"}>
                        <p>{initalLanguage ? translations.mkTranslations.contactMe : translations.enTranslations.contactMe}: saso_mitkovski@live.com</p>
                    </div>
                </Col>

            </Row>
        </Container>
    );
}

export default LoginForm;