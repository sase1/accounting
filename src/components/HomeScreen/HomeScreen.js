import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import {Col, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FaFile, FaFileContract, FaRegFilePdf} from "react-icons/fa";
import Table from "react-bootstrap/Table";
import {useSelector} from "react-redux";
import {translations} from "../../translation/IntlContext";
const Homescreen = ({users}) => {
    const {initalLanguage} = useSelector((state) => state.languageChangeHandler)
    console.log(users)

    const uniqueBuyers = new Set();
    const filteredData = users.filter(obj => {
    if (!uniqueBuyers.has(obj.buyer)) {
        uniqueBuyers.add(obj.buyer);
        return true;
    }
    return false;
    });

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
            <Row className={"text-center cards pt-5"}>
                <Col md={6}>
                    <Card className="create-invoice d-flex justify-content-center align-items-center">
                        <Link className={"text-white text-decoration-none w-100"} to={"/create-invoice"}>
                            {initalLanguage ? translations.mkTranslations.createInvoice : translations.enTranslations.createInvoice}
                            <Card.Body>
                                <FaFile/>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card className="created-invoice d-flex justify-content-center align-items-center">
                        <Link className={"text-white text-decoration-none w-100"} to={"/choose-invoice"}>
                            {initalLanguage ? translations.mkTranslations.createdInvoice : translations.enTranslations.createdInvoice}
                            <Card.Body>
                                {initalLanguage ? translations.mkTranslations.created : translations.enTranslations.created}: {users.length} <FaFileContract/>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>


                <Col md={6} className="my-4">
                    <Card className="saved-pdf d-flex justify-content-center align-items-center">
                        <Link className={"text-white text-decoration-none w-100"} to={"/saved-pdf-invoices"}>
                            {initalLanguage ? translations.mkTranslations.savedPrintedInvoices : translations.enTranslations.savedPrintedInvoices}
                            <Card.Body>
                                {initalLanguage ? translations.mkTranslations.printed : translations.enTranslations.printed}:  {localStorage.getItem('iln')}<FaRegFilePdf/>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>

                <Col md={6} className="my-4">
                    <Card className="font-card-color text-white d-flex justify-content-center align-items-center">
                            <h5 className={"m-0 mb-3"}>{initalLanguage ? translations.mkTranslations.chooseSystemFont : translations.enTranslations.chooseSystemFont}</h5>
                            <Form.Select className="w-50 border-0" aria-label="Default select example" id="languageVal" onChange={ e => chooseFontHandler(e.target.value)}>
                                <option value="">{initalLanguage ? translations.mkTranslations.standard : translations.enTranslations.standard}</option>
                                <option value="Alexandria">{initalLanguage ? translations.mkTranslations.alexandria : translations.enTranslations.alexandria}</option>
                            </Form.Select>
                            <button className={'btn btn-danger mt-3 text-white'} onClick={chooseFontHandlerReset}> {initalLanguage ? translations.mkTranslations.resetFont : translations.enTranslations.resetFont}</button>
                    </Card>
                </Col>

                <Col md={6} className="mb-5">
                    <Card className="choose-color text-white d-flex justify-content-center align-items-center">
                        <h5 className={"m-0  mb-3"}>{initalLanguage ? translations.mkTranslations.chooseSystemColor : translations.enTranslations.chooseSystemColor}</h5>
                        <div className="d-flex w-50 justify-content-around mt-2">
                            <label>{initalLanguage ? translations.mkTranslations.background : translations.enTranslations.background}</label>
                            <input type="color" id='bg-colorValue' />
                            <label>{initalLanguage ? translations.mkTranslations.color : translations.enTranslations.color}</label>
                            <input type="color" id='colorValue' />
                        </div>
                        <br/>
                        <button className={'btn btn-primary'} onClick={lightBulbSwitch}> {initalLanguage ? translations.mkTranslations.chooseColor : translations.enTranslations.chooseColor}</button> &nbsp;
                        <button className={'btn btn-danger text-white'} onClick={lightBulbSwitchReset}> {initalLanguage ? translations.mkTranslations.resetColor : translations.enTranslations.resetColor}</button>
                    </Card>
                </Col>

                <Col md={6} className="mb-5">
                    <Card className="last-file-added text-white d-flex justify-content-center align-items-center">
                       <h5>{initalLanguage ? translations.mkTranslations.lastAddedInvoice : translations.enTranslations.lastAddedInvoice}:</h5>
                        <Table className="text-white">
                            <thead>
                            <tr>
                                <th>{initalLanguage ? translations.mkTranslations.time : translations.enTranslations.time}</th>
                                <th>{initalLanguage ? translations.mkTranslations.clientName : translations.enTranslations.clientName}</th>
                                <th>{initalLanguage ? translations.mkTranslations.invoiceNumber : translations.enTranslations.invoiceNumber}</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{localStorage.getItem('wdic')}</td>
                                <td>{localStorage.getItem('lad')}</td>
                                <td>{localStorage.getItem('ladin')}</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Card>
                </Col>

                <Col md={6} className="mb-5">
                    <Card className="last-file-added text-white d-flex justify-content-center align-items-center">
                       <h5>Vkupno Klienti: {filteredData.length}</h5>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Homescreen;