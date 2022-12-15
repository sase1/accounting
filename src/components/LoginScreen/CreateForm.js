import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import { FaEye } from 'react-icons/fa';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from "../../firebase-config";

const CreateForm = () => {
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
            setMessage("Успешно креиран корисник")
        } catch (err){
            setMessage("Пополни емајл и лозинка полињата")
            console.log(err)
        }
    }

    const toggleShow = () =>{
        setPassOrText(!passOrText)
    }
    return (
        <Container>
           <Row className={"justify-content-md-center align-items-center vh-100"}>
               <Col md={6} className={"loginFormContainer"}>
                   <h1 className={"text-center"}>Интернет Сметководство</h1>
                   <Form noValidate validated={validated} onSubmit={logIn}>
                       <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
                           <h3 className={'text-center mt-1'}>{message}</h3>
                           <Form.Label>Имејл</Form.Label>
                           <Form.Control type="email" required value={username} onChange={(e) => setUsername(e.target.value)} />
                           <Form.Control.Feedback type="invalid">
                               Внеси име
                           </Form.Control.Feedback>
                       </Form.Group>

                       <Form.Group className="mb-3" controlId="formBasicPassword">
                           <Form.Label>Лозинка <FaEye onClick={toggleShow} style={{cursor: "pointer"}}></FaEye></Form.Label>
                           <Form.Control type={passOrText ? "password" : "text"} name={"password"} required value={password} onChange={(e) => setPassword(e.target.value)} />
                           <Form.Control.Feedback type="invalid">
                               Внеси лозинка
                           </Form.Control.Feedback>
                       </Form.Group>
                       <Button variant="primary" type="submit">
                           Креирај
                       </Button>
                   </Form>
               </Col>
           </Row>
        </Container>
    );
}

export default CreateForm;