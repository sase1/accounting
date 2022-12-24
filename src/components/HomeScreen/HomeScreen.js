import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import {Col, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FaFile, FaFileContract, FaRegFilePdf} from "react-icons/fa";
const Homescreen = ({users}) => {
    const lightBulbSwitch = () => {
        const app = document.getElementById("root");
        const bgColorVal = document.getElementById("bg-colorValue").value;
        const colorVal = document.getElementById("colorValue").value;
        localStorage.setItem('bg', bgColorVal);
        localStorage.setItem('color', colorVal);
        app.style.background = localStorage.getItem('bg');
        app.style.color = localStorage.getItem('color');
    }
    const lightBulbSwitchReset = () => {
        localStorage.removeItem('bg');
        localStorage.removeItem('color');
        window.location.reload(true);
    }
    const chooseFontHandler = () => {
        const app = document.getElementById("root");
        const fontVal = document.getElementById("languageVal").value;
        localStorage.setItem('font', fontVal);
        app.style.fontFamily = localStorage.getItem('font');
    }
    const chooseFontHandlerReset = () => {
        localStorage.removeItem('font');
        window.location.reload(true);
    }

    return (
        <div className="snow">
        <Container>
            <Row className={"text-center"}>
                <Col md={3} className="mt-4">
                    <Card className="create-invoice">
                        <Link className={"text-white text-decoration-none pt-5"} to={"/create-invoice"}>Креирај Фактура
                            <Card.Body className={"p-4"}>
                                <FaFile/>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>

                <Col md={3} className="mt-4">
                    <Card className="created-invoice">
                        <Link className={"text-white text-decoration-none pt-5"} to={"/choose-invoice"}>Издадени Фактури
                            <Card.Body className={"p-4"}>
                                Издадени: {users.length} <FaFileContract/>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>

                <Col md={3} className="mt-4">
                    <Card className="saved-pdf">
                        <Link className={"text-white text-decoration-none pt-5"} to={"/saved-pdf-invoices"}>Зачувани ПДФ фајлови
                            <Card.Body className={"p-4"}>
                                Зачувани:  <FaRegFilePdf/>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>

                {/*<Col md={3}>*/}
                {/*    <Card>*/}
                {/*        <Card.Header>Одбери боја на системот</Card.Header>*/}
                {/*        <Card.Body>*/}
                {/*            <label>Позадина</label>*/}
                {/*            <input type="color" id='bg-colorValue' />*/}

                {/*            <label>Боја</label>*/}
                {/*            <input type="color" id='colorValue' />*/}
                {/*            <br/>*/}
                {/*            <button className={'btn btn-primary mt-3'} onClick={lightBulbSwitch}> Одбери боја</button> &nbsp;*/}
                {/*            <button className={'btn btn-danger text-white mt-3'} onClick={lightBulbSwitchReset}> Ресетирај боја</button>*/}
                {/*        </Card.Body>*/}
                {/*    </Card>*/}
                {/*</Col>*/}
                <Col md={3} className="mt-4">
                    <Card className="font-card-color text-white">
                        {/*<Card.Header>Одбери фонт на системот</Card.Header>*/}
                        <Card.Body>
                            <p className={"m-0"} style={{fontSize: "1.2em"}}>Одбери фонт на системот</p>
                            <Form.Select aria-label="Default select example" id="languageVal" onChange={ e => chooseFontHandler(e.target.value)}>
                                <option value="">Стандарден</option>
                                <option value="Alexandria">Alexandria</option>
                            </Form.Select>
                            <button className={'btn btn-danger mt-3 text-white'} onClick={chooseFontHandlerReset}> Ресетирај фонт</button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </div>

    );
}

export default Homescreen;