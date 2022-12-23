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
        localStorage.clear();
    }
    return (
            <Navbar>
                <Container>
                    <Navbar.Brand href="">
                        {/*<img*/}
                        {/*    alt=""*/}
                        {/*    src="./sase.png"*/}
                        {/*    height="80"*/}
                        {/*    className="d-inline-block align-top"*/}
                        {/*/>*/}
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
                                <Button variant="outline-light mx-5" onClick={logout}>Одлогирај се</Button>
                            </>
                        }
                    </Nav>
                </Container>
            </Navbar>
    );
}
export default PageNavbar;