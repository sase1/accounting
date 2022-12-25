import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import {Col, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FaFile, FaFileContract, FaRegFilePdf} from "react-icons/fa";
import {useState} from "react";
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

    // let [date,setDate] = useState(new Date());
    // const [whenDocumentIsAdded, setWhenDocumentIsAdded] = useState("")

    const sase = () => {
        // setWhenDocumentIsAdded(`${date.toLocaleString('en-GB')}`)
    }
    return (
        <div className="snow">
        <Container>
            <Row className={"text-center cards pt-5"}>
                <Col md={6}>
                    <Card className="create-invoice d-flex justify-content-center align-items-center">
                        <Link className={"text-white text-decoration-none w-100"} to={"/create-invoice"}>Креирај Фактура
                            <Card.Body>
                                <FaFile/>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card className="created-invoice d-flex justify-content-center align-items-center">
                        <Link className={"text-white text-decoration-none w-100"} to={"/choose-invoice"}>Издадени Фактури
                            <Card.Body>
                                Издадени: {users.length} <FaFileContract/>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>

                <Col md={6} className="my-4">
                    <Card className="saved-pdf d-flex justify-content-center align-items-center">
                        <Link className={"text-white text-decoration-none w-100"} to={"/saved-pdf-invoices"}>Зачувани ПДФ фајлови
                            <Card.Body>
                                Зачувани:  <FaRegFilePdf/>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>

                <Col md={6} className="my-4">
                    <Card className="font-card-color text-white d-flex justify-content-center align-items-center">
                            <p className={"m-0"} style={{fontSize: "1.2em"}}>Одбери фонт на системот</p>
                            <Form.Select className="w-50 border-0" aria-label="Default select example" id="languageVal" onChange={ e => chooseFontHandler(e.target.value)}>
                                <option value="">Стандарден</option>
                                <option value="Alexandria">Alexandria</option>
                            </Form.Select>
                            <button className={'btn btn-danger mt-3 text-white'} onClick={chooseFontHandlerReset}> Ресетирај фонт</button>
                    </Card>
                </Col>

                <Col md={6} className="mb-5">
                    <Card className="choose-color text-white d-flex justify-content-center align-items-center">
                        <p className={"m-0"} style={{fontSize: "1.2em"}}>Одбери боја на системот</p>
                        <div className="d-flex w-50 justify-content-around mt-2">
                            <label>Позадина</label>
                            <input type="color" id='bg-colorValue' />
                            <label>Боја</label>
                            <input type="color" id='colorValue' />
                        </div>
                        <br/>
                        <button className={'btn btn-primary'} onClick={lightBulbSwitch}> Одбери боја</button> &nbsp;
                        <button className={'btn btn-danger text-white'} onClick={lightBulbSwitchReset}> Ресетирај боја</button>
                    </Card>
                </Col>

                <Col md={6} className="mb-5">
                    <Card className="last-file-added text-white d-flex justify-content-center align-items-center">
                       <p>Последниот фајл е додаден на:</p>
                        <p>{localStorage.getItem('wdic')}</p>
                    </Card>
                </Col>
            </Row>
        </Container>
        </div>

    );
}

export default Homescreen;