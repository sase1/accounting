import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import { FaEye } from 'react-icons/fa';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from "../../firebase-config";
import {useSelector} from "react-redux";
import {translations} from "../../translation/IntlContext";

const CreateForm = () => {
    const { initalLanguage } = useSelector((state) => state.languageChangeHandler)
    const [validated, setValidated] = useState(false);
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [passOrText, setPassOrText] = useState(true)

    const logIn = async (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setMessage("")
        }
        setValidated(true);
        try{
            const user = await createUserWithEmailAndPassword(auth, username, password)
            setMessage(initalLanguage ? translations.mkTranslations.userCreatedSuccessfully : translations.enTranslations.userCreatedSuccessfully)
        } catch (err){
            setMessage(initalLanguage ? translations.mkTranslations.fillEmailAndPasswordFields : translations.enTranslations.fillEmailAndPasswordFields)
            console.log(err)
        }
    }

    const toggleShow = () =>{
        setPassOrText(!passOrText)
    }
    return (
        <Container>
           <Row className={"justify-content-md-center align-items-center vh-100"}>
               <Col md={4} className={"bg-white p-4"}>
                   <h1 className={"text-center"}>{initalLanguage ? translations.mkTranslations.internetSystem : translations.enTranslations.internetSystem}</h1>
                   <Form noValidate validated={validated} onSubmit={logIn}>
                       <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
                           <h3 className={'text-center mt-1'}>{message}</h3>
                           <Form.Label>{initalLanguage ? translations.mkTranslations.email : translations.enTranslations.email}</Form.Label>
                           <Form.Control type="email" required value={username} onChange={(e) => setUsername(e.target.value)} />
                           <Form.Control.Feedback type="invalid">
                               {initalLanguage ? translations.mkTranslations.enterEmail : translations.enTranslations.enterEmail}
                           </Form.Control.Feedback>
                       </Form.Group>

                       <Form.Group className="mb-3" controlId="formBasicPassword">
                           <Form.Label>{initalLanguage ? translations.mkTranslations.passwordAtLeaseSixCharacters : translations.enTranslations.passwordAtLeaseSixCharacters} <FaEye onClick={toggleShow} style={{cursor: "pointer"}}></FaEye></Form.Label>
                           <Form.Control type={passOrText ? "password" : "text"} name={"password"} required value={password} onChange={(e) => setPassword(e.target.value)} />
                           <Form.Control.Feedback type="invalid">
                               {initalLanguage ? translations.mkTranslations.enterPassword : translations.enTranslations.enterPassword}
                           </Form.Control.Feedback>
                       </Form.Group>
                       <Button className={"create-user"} type="submit">
                           {initalLanguage ? translations.mkTranslations.create : translations.enTranslations.create}
                       </Button>
                   </Form>
               </Col>
           </Row>
        </Container>
    );
}

export default CreateForm;