import React, {useEffect} from "react";
import { useParams } from "react-router";
import {Breadcrumb, Col, FloatingLabel, Form, ListGroup, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";
import CreateInvoiceUpperFields from "../CreateInvoice/CreateInvoicesUpperFields";
import CreateInvoiceSignFields from "../CreateInvoice/CreateInvoiceSignFields";
import {useSelector} from "react-redux";
import {translations} from "../../../translation/IntlContext";

const SeeInvoice = ({users}) => {
    const { initalLanguage } = useSelector((state) => state.languageChangeHandler)
    const {id} = useParams();
    return (
        <Container fluid>
            <Row>
                <Col className={'mt-3'}>
                    <Breadcrumb>
                        <Breadcrumb>
                            <Link to={'/home'}> {initalLanguage ? translations.mkTranslations.homeScreen: translations.enTranslations.homeScreen}</Link>
                        </Breadcrumb> &nbsp; / &nbsp;
                        <Breadcrumb>
                            <Link to={'/choose-invoice'}> {initalLanguage ? translations.mkTranslations.createdInvoice: translations.enTranslations.createdInvoice}</Link>
                        </Breadcrumb> &nbsp; / &nbsp;
                        <Breadcrumb.Item active href="/choose-invoice"> {initalLanguage ? translations.mkTranslations.invoice: translations.enTranslations.invoice}: {id}</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
            <Row className={"my-2"}>
            <Col md={10}>
                <CreateInvoiceUpperFields/>
            </Col>
            {users.filter((list) => list.id === id).map((user, i) => {
                return (
                    <div key={i}>
                    <Col md={12} className={"my-5"}>
                        <Row>
                            <Col md={2}>
                                <FloatingLabel label={initalLanguage ? translations.mkTranslations.clientName: translations.enTranslations.clientName}>
                                    <Form.Control value={user.buyer} readOnly/>
                                </FloatingLabel>
                            </Col>

                            <Col md={2}>
                                <FloatingLabel label={initalLanguage ? translations.mkTranslations.clientLastName: translations.enTranslations.clientLastName}>
                                    <Form.Control value={user.buyerLastName} readOnly />
                                </FloatingLabel>
                            </Col>

                            <Col md={2}>
                                <FloatingLabel  label={initalLanguage ? translations.mkTranslations.invoiceNumber: translations.enTranslations.invoiceNumber}>
                                    <Form.Control value={user.invoiceNumber} readOnly />
                                </FloatingLabel>
                            </Col>

                            <Col md={2}>
                                <FloatingLabel label={initalLanguage ? translations.mkTranslations.invoiceDate: translations.enTranslations.invoiceDate}>
                                    <Form.Control value={user.invoiceDate} readOnly />
                                </FloatingLabel>
                            </Col>

                            <Col md={2}>
                                <FloatingLabel label={initalLanguage ? translations.mkTranslations.invoiceDueDate: translations.enTranslations.invoiceDueDate}>
                                    <Form.Control value={user.paymentDue} readOnly />
                                </FloatingLabel>
                            </Col>
                        </Row>
                    </Col>


                    <Col md={12}>
                        <Row>
                            <Col md={2}>
                                {
                                    typeof user.product === 'string' ?
                                    <FloatingLabel label={initalLanguage ? translations.mkTranslations.product: translations.enTranslations.product}>
                                        <Form.Control value={ user.product} readOnly/>
                                    </FloatingLabel>
                                    :
                                    user.product.map((item, idx) => {
                                        return (
                                            <FloatingLabel key={idx} label={initalLanguage ? translations.mkTranslations.product: translations.enTranslations.product}>
                                                <Form.Control value={ item.product} readOnly className={"mb-2"} />
                                            </FloatingLabel>
                                        )
                                    })
                                }
                            </Col>

                            <Col md={1}>
                                {
                                    typeof user.product === 'string' ?
                                        <FloatingLabel label={initalLanguage ? translations.mkTranslations.unit: translations.enTranslations.unit}>
                                            <Form.Control value={ user.em} readOnly/>
                                        </FloatingLabel>
                                        :
                                        user.product.map((item,idx) => {
                                            return (
                                                <FloatingLabel key={idx} label={initalLanguage ? translations.mkTranslations.unit: translations.enTranslations.unit}>
                                                    <Form.Control value={ item.em} readOnly className={"mb-2"} />
                                                </FloatingLabel>
                                            )
                                        })
                                }
                            </Col>

                            <Col md={2}>
                                {
                                    typeof user.product === 'string' ?
                                        <FloatingLabel label={initalLanguage ? translations.mkTranslations.quantity: translations.enTranslations.quantity}>
                                            <Form.Control value={ user.quantity} readOnly/>
                                        </FloatingLabel>
                                        :
                                        user.product.map((item,idx) => {
                                            return (
                                                <FloatingLabel key={idx} label={initalLanguage ? translations.mkTranslations.quantity: translations.enTranslations.quantity}>
                                                    <Form.Control value={ item.quantity} readOnly className={"mb-2"} />
                                                </FloatingLabel>
                                            )
                                        })
                                }
                            </Col>

                            <Col md={2}>
                                {
                                    typeof user.product === 'string' ?
                                        <FloatingLabel label={initalLanguage ? translations.mkTranslations.priceWithoutVat: translations.enTranslations.priceWithoutVat}>
                                            <Form.Control value={ user.priceWithoutVat} readOnly/>
                                        </FloatingLabel>
                                        :
                                        user.product.map((item,idx) => {
                                            return (
                                                <FloatingLabel key={idx} label={initalLanguage ? translations.mkTranslations.priceWithoutVat: translations.enTranslations.priceWithoutVat}>
                                                    <Form.Control value={ item.priceWithoutVat} readOnly className={"mb-2"} />
                                                </FloatingLabel>
                                            )
                                        })
                                }
                            </Col>

                            <Col md={1}>
                                {
                                    typeof user.product === 'string' ?
                                        <FloatingLabel label={initalLanguage ? translations.mkTranslations.vat: translations.enTranslations.vat}>
                                            <Form.Control value={ user.vat} readOnly/>
                                        </FloatingLabel>
                                        :
                                        user.product.map((item,idx) => {
                                            return (
                                                <FloatingLabel key={idx} label={initalLanguage ? translations.mkTranslations.vat: translations.enTranslations.vat}>
                                                    <Form.Control value={ item.vat} readOnly className={"mb-2"} />
                                                </FloatingLabel>
                                            )
                                        })
                                }
                            </Col>

                            <Col md={2}>
                                {
                                    typeof user.product === 'string' ?
                                        <FloatingLabel label={initalLanguage ? translations.mkTranslations.priceWithVat: translations.enTranslations.priceWithVat}>
                                            <Form.Control value={ user.priceWithVat} readOnly/>
                                        </FloatingLabel>
                                        :
                                        user.product.map((item,idx) => {
                                            return (
                                                <FloatingLabel key={idx} label={initalLanguage ? translations.mkTranslations.priceWithVat: translations.enTranslations.priceWithVat}>
                                                    <Form.Control value={ item.priceWithVat} readOnly className={"mb-2"} />
                                                </FloatingLabel>
                                            )
                                        })
                                }
                            </Col>

                            <Col md={2}>
                                {
                                    typeof user.product === 'string' ?
                                        <FloatingLabel label={initalLanguage ? translations.mkTranslations.totalVat: translations.enTranslations.totalVat}>
                                            <Form.Control value={ user.totalVat} readOnly/>
                                        </FloatingLabel>
                                        :
                                        user.product.map((item,idx) => {
                                            return (
                                                <FloatingLabel key={idx} label={initalLanguage ? translations.mkTranslations.totalVat: translations.enTranslations.totalVat}>
                                                    <Form.Control value={ item.totalVat} readOnly className={"mb-2"} />
                                                </FloatingLabel>
                                            )
                                        })
                                }
                            </Col>


                            {/*<Col md={2}>*/}
                            {/*    <FloatingLabel label="Вкупно ДДВ">*/}
                            {/*        <Form.Control value={user.totalVat} disabled/>*/}
                            {/*    </FloatingLabel>*/}
                            {/*</Col>*/}
                        </Row>

                        <Row className={"mt-5"}>
                            <Col md={{ span: 4, offset: 8 }}>
                                <ListGroup>
                                    <ListGroup.Item disabled>{initalLanguage ? translations.mkTranslations.totalPriceWithoutVAT: translations.enTranslations.totalPriceWithoutVAT} <span className={'float-end'}>{user.finalSumWithoutVat}</span> </ListGroup.Item>
                                    <ListGroup.Item disabled>{initalLanguage ? translations.mkTranslations.totalPriceWithVAT: translations.enTranslations.totalPriceWithVAT} <span className={'float-end'}>{user.finalSumWithVat}</span> </ListGroup.Item>
                                    {/*<ListGroup.Item disabled>Разлика од заокружување <span className={'float-end'}></span> </ListGroup.Item>*/}
                                    <ListGroup.Item disabled>{initalLanguage ? translations.mkTranslations.totalForPayment: translations.enTranslations.totalForPayment} <span className={'float-end'}>{user.finalSumWithVat}</span> </ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                        <CreateInvoiceSignFields/>
                    </Col>
                    </div>
                )
            })}
        </Row>
        </Container>
    );
}
export default SeeInvoice;