import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Form from "react-bootstrap/Form";
const Homescreen = () => {
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
        <Container>
            <Row className={"mt-5 text-center"}>
                <Col md={3}>
                    <Card>
                        <Card.Header>Креирај Фактура</Card.Header>
                        <Card.Body>
                            <Link className={"btn btn-primary"} to={"/create-invoice"}>Отвори</Link>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={3}>
                    <Card>
                        <Card.Header>Издадени Фактури</Card.Header>
                        <Card.Body>
                            <Link className={'btn btn-primary'} to={"/choose-invoice"}>Отвори</Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card>
                        <Card.Header>Одбери боја на системот</Card.Header>
                        <Card.Body>
                            <label>Позадина</label>
                            <input type="color" id='bg-colorValue' />

                            <label>Боја</label>
                            <input type="color" id='colorValue' />
                            <br/>
                            <button className={'btn btn-primary mt-3'} onClick={lightBulbSwitch}> Одбери боја</button> &nbsp;
                            <button className={'btn btn-warning text-white mt-3'} onClick={lightBulbSwitchReset}> Ресетирај боја</button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card>
                        <Card.Header>Одбери фонт на системот</Card.Header>
                        <Card.Body>
                            <Form.Select aria-label="Default select example" id="languageVal" onChange={ e => chooseFontHandler(e.target.value)}>
                                <option value=""></option>
                                <option value="Alexandria">Alexandria</option>
                            </Form.Select>
                            <button className={'btn btn-info mt-3 text-white'} onClick={chooseFontHandlerReset}> Ресетирај фонт</button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Homescreen;