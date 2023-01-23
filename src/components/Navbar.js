import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Modal, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import {signOut} from "firebase/auth"
import {auth} from "../firebase-config";
import {useEffect, useState} from "react";
import {FaCalendarDay, FaClock} from "react-icons/fa";
import {translations} from "../translation/IntlContext";
import {useDispatch, useSelector} from "react-redux";
import {changeLanguage} from "../redux/translation";

const PageNavbar = (props) => {
    const { initalLanguage } = useSelector((state) => state.languageChangeHandler)
    const dispatch = useDispatch()

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
                    <Button className="language-selector" variant={"outline-light"} onClick={() => dispatch(changeLanguage())}>{initalLanguage ? "English" : "Македонски"}</Button>
                    <Navbar.Brand href="">
                        <h2 className={"d-inline text-white"}>
                            M<span className={"text-danger"}>{initalLanguage ? translations.mkTranslations.modalLogo : translations.enTranslations.modalLogo}</span>
                        </h2>
                        {props.user &&
                        <Navbar.Text className={"text-white"}>
                            {initalLanguage ? translations.mkTranslations.user : translations.enTranslations.user} : <span>{props.user.email}</span>
                        </Navbar.Text>
                        }
                    </Navbar.Brand>
                    <Nav className="navbar">
                        {!props.user ?
                            <>
                                {/*<Link to={'/create'}>{initalLanguage ? translations.mkTranslations.create : translations.enTranslations.create}</Link>*/}
                                <Link to={'/login'}>{initalLanguage ? translations.mkTranslations.login : translations.enTranslations.login}</Link>
                            </> :
                            <>
                                <Link to={'/home'}>{initalLanguage ? translations.mkTranslations.homeScreen : translations.enTranslations.homeScreen}</Link> &nbsp;
                                <Button variant="outline-light mx-5" onClick={handleShow}>{initalLanguage ? translations.mkTranslations.logOut : translations.enTranslations.logOut}</Button>
                                <p className="text-white mt-3 d-flex align-items-center">
                                    <FaCalendarDay/> &nbsp; {date.toLocaleString('en-GB')} &nbsp; <FaClock/>
                                </p>
                            </>
                        }
                    </Nav>

                    <Modal centered show={show} onHide={handleClose}>
                        <Modal.Header>
                            <Modal.Title>{initalLanguage ? translations.mkTranslations.modalGreeting : translations.enTranslations.modalGreeting} <span className="text-danger">{userName}</span> </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{initalLanguage ? translations.mkTranslations.modalLogOutMsg: translations.enTranslations.modalLogOutMsg}</Modal.Body>
                        <Modal.Footer>
                            <Button className="modal-no border-0 px-3" onClick={handleClose}>{initalLanguage ? translations.mkTranslations.modalLogOutButtonNo : translations.enTranslations.modalLogOutButtonNo}</Button>
                            <Button className="border-0 modal-yes px-3" onClick={logout}>{initalLanguage ? translations.mkTranslations.modalLogOutButtonYes : translations.enTranslations.modalLogOutButtonYes}</Button>
                        </Modal.Footer>
                    </Modal>
                </Container>
            </Navbar>
    );
}
export default PageNavbar;