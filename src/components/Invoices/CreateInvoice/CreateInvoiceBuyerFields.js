import {Col, FloatingLabel, Form, Row} from "react-bootstrap";

const InvoicesBuyerFields = (props) => {
    return (
        <>
        {props.inputListBuyerFields.map((item, i) => {
            return (
                <Row key={i}>
                    <Col md={2}>
                        <FloatingLabel
                            label="Купувач"
                        >
                            <Form.Control type="text"
                              placeholder="Купувач"
                              name="buyer"
                              value={item.buyer}
                              onChange={e => props.handleInputChangeBuyerFields(e, i)}
                            />
                        </FloatingLabel>
                    </Col>

                    <Col md={2}>
                        <FloatingLabel
                            label="Купувач презиме"
                        >
                            <Form.Control type="text"
                              placeholder="Купувач презиме"
                              name="buyerLastName"
                              value={item.buyerLastName}
                              onChange={e => props.handleInputChangeBuyerFields(e, i)}
                            />
                        </FloatingLabel>
                    </Col>

                    <Col md={2}>
                        <FloatingLabel
                            label="Број на фактура"
                        >
                            <Form.Control type="number"
                              placeholder="Број на фактура"
                              name="invoiceNumber"
                              value={item.invoiceNumber}
                              onChange={e => props.handleInputChangeBuyerFields(e, i)}
                            />
                        </FloatingLabel>
                    </Col>

                    <Col md={2}>
                        <FloatingLabel
                            label="Датум на фактура"
                        >
                            <Form.Control type="date"
                              placeholder="Датум на фактура"
                              name="invoiceDate"
                              value={item.invoiceDate}
                              onChange={e => props.handleInputChangeBuyerFields(e, i)}
                            />
                        </FloatingLabel>
                    </Col>

                    <Col md={2}>
                        <FloatingLabel
                            label="Рок на уплата"
                        >
                            <Form.Control type="date"
                              placeholder="Рок на уплата"
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