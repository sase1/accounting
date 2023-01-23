import {Col, FloatingLabel, Form, Row} from "react-bootstrap";
import {useSelector} from "react-redux";
import {translations} from "../../../translation/IntlContext";

const CreateInvoiceUpperFields = () => {
    const { initalLanguage } = useSelector((state) => state.languageChangeHandler)

    return (
            <Row>
                <Col md={2}>
                    <div className={"firm-image"}></div>
                </Col>
                <Col md={10}>
                    <Row>
                        <Col md={3}>
                            <FloatingLabel
                                controlId="floatingInput"
                                label={initalLanguage ? translations.mkTranslations.firmName: translations.enTranslations.firmName}
                                className="mb-2"
                            >
                                <Form.Control type="text" placeholder="а" defaultValue={"Lorem Ipsum"} readOnly/>
                            </FloatingLabel>
                        </Col>
                        <Col md={3}>
                            <FloatingLabel
                                controlId="floatingInput"
                                label={initalLanguage ? translations.mkTranslations.firmAddress: translations.enTranslations.firmAddress}
                                className="mb-2"
                            >
                                <Form.Control type="text" placeholder="а" defaultValue={"Lorem Ipsum"} readOnly/>
                            </FloatingLabel>
                        </Col>

                        <Col md={3}>
                            <FloatingLabel
                                controlId="floatingInput"
                                label={initalLanguage ? translations.mkTranslations.firmNumber: translations.enTranslations.firmNumber}
                                className="mb-2"
                            >
                                <Form.Control type="text"placeholder="а" defaultValue={"12345678"} readOnly/>
                            </FloatingLabel>
                        </Col>
                        <Col md={3}>
                            <FloatingLabel
                                controlId="floatingInput"
                                label={initalLanguage ? translations.mkTranslations.firmEmail: translations.enTranslations.firmEmail}
                                className="mb-2"
                            >
                                <Form.Control type="text" placeholder="а" defaultValue={"lorem@ipsum.mk"} readOnly/>
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3}>
                            <FloatingLabel
                                controlId="floatingInput"
                                label={initalLanguage ? translations.mkTranslations.firmVatNumber: translations.enTranslations.firmVatNumber}
                            >
                                <Form.Control type="text" placeholder="а" defaultValue={"ЕКТС-123456"} readOnly/>
                            </FloatingLabel>
                        </Col>
                        <Col md={3}>
                            <FloatingLabel
                                controlId="floatingInput"
                                label={initalLanguage ? translations.mkTranslations.firmUniqId: translations.enTranslations.firmUniqId}
                            >
                                <Form.Control type="text" placeholder="а" defaultValue={"2604567890123"} readOnly/>
                            </FloatingLabel>
                        </Col>
                        <Col md={3}>
                            <FloatingLabel
                                controlId="floatingInput"
                                label={initalLanguage ? translations.mkTranslations.firmBankAccount: translations.enTranslations.firmBankAccount}
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