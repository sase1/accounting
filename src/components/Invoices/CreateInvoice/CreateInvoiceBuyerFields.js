import {Col, FloatingLabel, Form, Row} from "react-bootstrap";
import {useSelector} from "react-redux";
import {translations} from "../../../translation/IntlContext";

const InvoicesBuyerFields = (props) => {
    const { initalLanguage } = useSelector((state) => state.languageChangeHandler)

    return (
        <>
        {props.inputListBuyerFields.map((item, i) => {
            return (
                <Row key={i}>
                    <Col md={2}>
                        <FloatingLabel
                            label={initalLanguage ? translations.mkTranslations.clientName: translations.enTranslations.clientName}
                        >
                            <Form.Control type="text"
                              placeholder="a"
                              name="buyer"
                              value={item.buyer}
                              onChange={e => props.handleInputChangeBuyerFields(e, i)}
                            />
                        </FloatingLabel>
                    </Col>

                    <Col md={2}>
                        <FloatingLabel
                            label={initalLanguage ? translations.mkTranslations.clientLastName: translations.enTranslations.clientLastName}
                        >
                            <Form.Control type="text"
                              placeholder="a"
                              name="buyerLastName"
                              value={item.buyerLastName}
                              onChange={e => props.handleInputChangeBuyerFields(e, i)}
                            />
                        </FloatingLabel>
                    </Col>

                    <Col md={2}>
                        <FloatingLabel
                            label={initalLanguage ? translations.mkTranslations.invoiceNumber: translations.enTranslations.invoiceNumber}
                        >
                            <Form.Control type="number"
                              placeholder="a"
                              name="invoiceNumber"
                              value={item.invoiceNumber}
                              onChange={e => props.handleInputChangeBuyerFields(e, i)}
                            />
                        </FloatingLabel>
                    </Col>

                    <Col md={2}>
                        <FloatingLabel
                            label={initalLanguage ? translations.mkTranslations.invoiceDate: translations.enTranslations.invoiceDate}
                        >
                            <Form.Control type="date"
                              placeholder=""
                              name="invoiceDate"
                              value={item.invoiceDate}
                              onChange={e => props.handleInputChangeBuyerFields(e, i)}
                            />
                        </FloatingLabel>
                    </Col>

                    <Col md={2}>
                        <FloatingLabel
                            label={initalLanguage ? translations.mkTranslations.invoiceDueDate: translations.enTranslations.invoiceDueDate}
                        >
                            <Form.Control type="date"
                              placeholder=""
                              name="paymentDue"
                              value={item.paymentDue}
                              onChange={e => props.handleInputChangeBuyerFields(e, i)}
                            />
                        </FloatingLabel>
                    </Col>
                </Row>
            );
        })}
            {/*<div style={{ marginTop: 20 }}>{JSON.stringify(props.inputListBuyerFields)}</div>*/}
        </>
    );
}
export default InvoicesBuyerFields;