import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Modal, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import {signOut} from "firebase/auth"
import {auth} from "../../firebase-config";
import {useEffect, useState} from "react";
import {FaCalendarDay, FaClock} from "react-icons/fa";

const PageNavbar = (props) => {
    const logout = async () =>{
        await signOut(auth)
        localStorage.removeItem('month');
        localStorage.removeItem('year');
        setShow(false)
        setUserName("")
    }

    const [userName, setUserName] = useState("")
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        setUserName(props.user.email.split('@')[0])
    }
    const [show, setShow] = useState(false);
    let [date,setDate] = useState(new Date());

    useEffect(() => {
        let timer = setInterval(() => setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    });

    return (
            <Navbar className="d-print-none ">
                <Container>
                    <Navbar.Brand href="">
                        <h2 className={"d-inline text-white"}>
                            M<span className={"text-danger"}>Систем</span>
                        </h2>
                        {props.user &&
                        <Navbar.Text className={"text-white"}>
                            Kорисник : <span>{props.user.email}</span>
                        </Navbar.Text>
                        }
                    </Navbar.Brand>
                    <Nav className="navbar">
                        {!props.user ?
                            <>
                                <Link to={'/create'}>Креирај</Link>
                                <Link to={'/login'}>Логирај се</Link>
                            </> :
                            <>
                                <Link to={'/home'}>Почетна</Link> &nbsp;
                                <Button variant="outline-light mx-5" onClick={handleShow}>Одлогирај се</Button>
                                <p className="text-white mt-3 d-flex align-items-center">
                                    <FaCalendarDay/> &nbsp; {date.toLocaleString('en-GB')} &nbsp; <FaClock/>
                                </p>
                            </>
                        }
                    </Nav>

                    <Modal centered show={show} onHide={handleClose}>
                        <Modal.Header>
                            <Modal.Title>Поздрав <span className="text-danger">{userName}</span> </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Сигурно сакаш да се одјавиш?</Modal.Body>
                        <Modal.Footer>
                            <Button className="modal-no border-0 px-3" onClick={handleClose}>Не</Button>
                            <Button className="border-0 modal-yes px-3" onClick={logout}>Да</Button>
                        </Modal.Footer>
                    </Modal>
                </Container>
            </Navbar>
    );
}
export default PageNavbar;