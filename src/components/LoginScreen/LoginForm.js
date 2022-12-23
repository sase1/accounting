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
                <Col md={4} className={"loginFormContainer bg-white p-5"}>
                    <h1 className={"text-center"}>Интернет Систем</h1>
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
                        <Button className={"create-user"} type="submit">
                            Логирај се
                        </Button>
                    </Form>
                    <div className={"mt-5"}>
                        <p>Имејл:sase@live.com</p>
                        <p>Лозинка:112233</p>
                    </div>
                </Col>

            </Row>
        </Container>
    );
}

export default LoginForm;