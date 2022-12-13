import {Col, FloatingLabel, Form, Row} from "react-bootstrap";
const CreateInvoiceUpperFields = () => {
    return (
            <Row>
                <Col md={2}>
                    <img src={'https://imgs.search.brave.com/wJl7QGNbhOA7MxCLylAJuocQxiBP2gC0IVlqibGPJrc/rs:fit:480:320:1/g:ce/aHR0cHM6Ly93d3cu/cm9iZXJ0aGFsZi5j/b20vc2l0ZXMvZGVm/YXVsdC9maWxlcy9z/dHlsZXMvZnVsbF93/aWR0aF9jb250ZW50/X2ltYWdlXzF4X3Nt/YWxsXzQ4MC9wdWJs/aWMvMjAxNy0xMS9B/Y2NvdW50aW5nLVRy/YWluaW5nLUFULTEx/LTI5LTIwMTcuanBn/P2l0b2s9dzhJZHFB/T0s'} className={'img-fluid'} alt={'imageOfAccount'}/>
                </Col>
                <Col md={10}>
                    <Row>
                        <Col md={3}>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Име на Фирма"
                                className="mb-2"
                            >
                                <Form.Control type="text" placeholder="а" defaultValue={"Кодинг Фактори"} readOnly/>
                            </FloatingLabel>
                        </Col>
                        <Col md={3}>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Адреса на Фирма"
                                className="mb-2"
                            >
                                <Form.Control type="text" placeholder="а" defaultValue={"Гевгелија"} readOnly/>
                            </FloatingLabel>
                        </Col>

                        <Col md={3}>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Број на Фирма"
                                className="mb-2"
                            >
                                <Form.Control type="text"placeholder="а" defaultValue={"12345678"} readOnly/>
                            </FloatingLabel>
                        </Col>
                        <Col md={3}>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Емаил на Фирма"
                                className="mb-2"
                            >
                                <Form.Control type="text" placeholder="а" defaultValue={"coding@factory.mk"} readOnly/>
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3}>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Даночен број на Фирма"
                            >
                                <Form.Control type="text" placeholder="а" defaultValue={"ЕКТС-123456"} readOnly/>
                            </FloatingLabel>
                        </Col>
                        <Col md={3}>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="ЕМБС број на Фирма"
                            >
                                <Form.Control type="text" placeholder="а" defaultValue={"2604567890123"} readOnly/>
                            </FloatingLabel>
                        </Col>
                        <Col md={3}>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Сметка од Банка"
                            >
                                <Form.Control type="text" placeholder="а" defaultValue={"Сметка-654321"} readOnly/>
                            </FloatingLabel>
                        </Col>
                    </Row>
                </Col>
            </Row>
    );
}
export default CreateInvoiceUpperFields;