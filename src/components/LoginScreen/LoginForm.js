import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import { FaEye } from 'react-icons/fa';
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from "../../firebase-config";
import {useNavigate} from "react-router";


const LoginForm = () => {
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
            setMessage("Успешна најава")
            setTimeout(() => {navigateToHome('/home')}, 2000);
        } catch (err){
            console.log(err)
            setMessage("Неправилен емајл или лозинка")
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
                            <Form.Control type="text" required value={username} onChange={(e) => setUsername(e.target.value)} />
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
                            Логирај се
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default LoginForm;