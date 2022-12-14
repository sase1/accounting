import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import {signOut} from "firebase/auth"
import {auth} from "../../firebase-config";

const PageNavbar = (props) => {
    const logout = async () =>{
        await signOut(auth)
    }
    return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="">
                        <img
                            alt=""
                            src="https://flc.com.mk/wp-content/uploads/2022/08/flc.png"
                            height="40"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Nav className="navbar">
                        {!props.user ?
                            <>
                                <Link to={'/create'}>Креирај</Link>
                                <Link to={'/login'}>Логирај се</Link>
                            </> :
                            <>
                                <Button variant="outline-light mx-5" onClick={logout}>Одлогирај се</Button>
                                <Navbar.Text className={"text-white"}>
                                    Логиран корисник : <span className={"text-danger"}>{props.user.email}</span>
                                </Navbar.Text>
                            </>
                        }
                    </Nav>
                </Container>
            </Navbar>
    );
}
export default PageNavbar;