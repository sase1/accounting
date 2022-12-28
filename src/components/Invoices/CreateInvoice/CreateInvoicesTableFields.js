import {Button, Col, FloatingLabel, Form, Row} from "react-bootstrap";
import {useSelector} from "react-redux";
import {translations} from "../../../translation/IntlContext";

const InvoicesTableFields = (props) => {
    const { initalLanguage } = useSelector((state) => state.languageChangeHandler)

    return (
        <Row>
            {props.inputList.map((item, i) => {
                const vat = (item.priceWithoutVat * (18 / 100)).toFixed(1)
                const priceWithVat  = ( Number(item.priceWithoutVat) + ((Number(item.priceWithoutVat * (18 / 100)))))
                const totalVat = Math.round((item.quantity * vat))
                item.totalVat = totalVat
                item.priceWithVat = priceWithVat
                item.vat = vat
                return (
                    <Row className={'mb-4'} key={i}>
                        <Col md={2}>
                            <FloatingLabel
                                label={initalLanguage ? translations.mkTranslations.product: translations.enTranslations.product}
                            >
                                <Form.Control type="text"
                                  name="product"
                                  placeholder="а"
                                  value={item.product}
                                  onChange={e => props.handleInputChange(e, i)}/>
                            </FloatingLabel>
                        </Col>

                        <Col md={1}>
                            <FloatingLabel
                                label={initalLanguage ? translations.mkTranslations.unit: translations.enTranslations.unit}
                            >
                                <Form.Control type="text"
                                    disabled
                                    name="em"
                                    placeholder="а"
                                    value="m2"
                                />
                            </FloatingLabel>
                        </Col>

                        <Col md={2}>
                            <FloatingLabel
                                label={initalLanguage ? translations.mkTranslations.quantity: translations.enTranslations.quantity}
                            >
                                <Form.Control type="number"
                                  name="quantity"
                                  placeholder="а"
                                  value={item.quantity}
                                  onChange={e => props.handleInputChange(e, i)}/>
                            </FloatingLabel>
                        </Col>

                        <Col md={2}>
                            <FloatingLabel
                                label={initalLanguage ? translations.mkTranslations.priceWithoutVat: translations.enTranslations.priceWithoutVat}
                            >
                                <Form.Control type="number"
                                  name="priceWithoutVat"
                                  placeholder="а"
                                  value={item.priceWithoutVat}
                                  onChange={e => props.handleInputChange(e, i)}/>
                            </FloatingLabel>
                        </Col>

                        <Col md={1}>
                            <FloatingLabel
                                label={initalLanguage ? translations.mkTranslations.vat: translations.enTranslations.vat}
                            >
                                <Form.Control type="number"
                                  disabled
                                  name="vat"
                                  placeholder="а"
                                  value={vat}
                                />
                            </FloatingLabel>
                        </Col>

                        <Col md={2}>
                            <FloatingLabel
                                label={initalLanguage ? translations.mkTranslations.priceWithVat: translations.enTranslations.priceWithVat}
                            >
                                <Form.Control type="number"
                                  name="priceWithVat"
                                  placeholder="а"
                                  disabled
                                  value={priceWithVat}
                                />
                            </FloatingLabel>
                        </Col>

                        <Col md={2}>
                            <FloatingLabel
                                label={initalLanguage ? translations.mkTranslations.totalVat: translations.enTranslations.totalVat}
                            >
                                <Form.Control type="number"
                                  name="totalVat"
                                  placeholder="а"
                                  disabled
                                  value={totalVat}
                                />
                            </FloatingLabel>
                        </Col>

                        <div>
                            {props.inputList.length !== 1 && <Button
                                className="delete-row border-0 mt-3"
                                onClick={() => props.handleRemoveClick(i)}>{initalLanguage ? translations.mkTranslations.removeRow: translations.enTranslations.removeRow}</Button>} &nbsp;
                            {props.inputList.length - 1 === i && <Button className={'new-row border-0 mt-3'} onClick={props.handleAddClick}>{initalLanguage ? translations.mkTranslations.addRow: translations.enTranslations.addRow}</Button>}
                        </div>
                    </Row>
                );
            })}
            {/*<div style={{ marginTop: 20 }}>{JSON.stringify(props.inputList)}</div>*/}
        </Row>
    );
}
export default InvoicesTableFields;