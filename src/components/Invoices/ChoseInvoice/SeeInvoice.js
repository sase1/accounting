import React, {useEffect} from "react";
import { useParams } from "react-router";
import {Breadcrumb, Col, FloatingLabel, Form, ListGroup, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";
import CreateInvoiceUpperFields from "../CreateInvoice/CreateInvoicesUpperFields";
import CreateInvoiceSignFields from "../CreateInvoice/CreateInvoiceSignFields";

const SeeInvoice = ({users}) => {

    // useEffect(() => {
    //     window.onafterprint = back;
    // }, []);
    //
    // const back = () => {
    //     window.history.back();
    // }
    const {id} = useParams();
    return (
        <Container fluid>
            <Row>
                <Col className={'mt-3'}>
                    <Breadcrumb>
                        <Breadcrumb>
                            <Link to={'/choose-invoice'}>Избери Фактура</Link>
                        </Breadcrumb> &nbsp; / &nbsp;
                        <Breadcrumb.Item active href="/choose-invoice">Фактура : {id}</Breadcrumb.Item>
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
                                <FloatingLabel label="Купувач">
                                    <Form.Control value={user.buyer} readOnly/>
                                </FloatingLabel>
                            </Col>

                            <Col md={2}>
                                <FloatingLabel label="Купувач презиме">
                                    <Form.Control value={user.buyerLastName} readOnly />
                                </FloatingLabel>
                            </Col>

                            <Col md={2}>
                                <FloatingLabel  label="Број на фактура">
                                    <Form.Control value={user.invoiceNumber} readOnly />
                                </FloatingLabel>
                            </Col>

                            <Col md={2}>
                                <FloatingLabel label="Датум на фактура">
                                    <Form.Control value={user.invoiceDate} readOnly />
                                </FloatingLabel>
                            </Col>

                            <Col md={2}>
                                <FloatingLabel label="Рок на уплата">
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
                                    <FloatingLabel label="Продукт">
                                        <Form.Control value={ user.product} readOnly/>
                                    </FloatingLabel>
                                    :
                                    user.product.map((item, idx) => {
                                        return (
                                            <FloatingLabel key={idx} label="Продукт">
                                                <Form.Control value={ item.product} readOnly className={"mb-2"} />
                                            </FloatingLabel>
                                        )
                                    })
                                }
                            </Col>

                            <Col md={1}>
                                {
                                    typeof user.product === 'string' ?
                                        <FloatingLabel label="em">
                                            <Form.Control value={ user.em} readOnly/>
                                        </FloatingLabel>
                                        :
                                        user.product.map((item,idx) => {
                                            return (
                                                <FloatingLabel key={idx} label="em">
                                                    <Form.Control value={ item.em} readOnly className={"mb-2"} />
                                                </FloatingLabel>
                                            )
                                        })
                                }
                            </Col>

                            <Col md={2}>
                                {
                                    typeof user.product === 'string' ?
                                        <FloatingLabel label="Количина">
                                            <Form.Control value={ user.quantity} readOnly/>
                                        </FloatingLabel>
                                        :
                                        user.product.map((item,idx) => {
                                            return (
                                                <FloatingLabel key={idx} label="Количина">
                                                    <Form.Control value={ item.quantity} readOnly className={"mb-2"} />
                                                </FloatingLabel>
                                            )
                                        })
                                }
                            </Col>

                            <Col md={2}>
                                {
                                    typeof user.product === 'string' ?
                                        <FloatingLabel label="Цена без ДДВ">
                                            <Form.Control value={ user.priceWithoutVat} readOnly/>
                                        </FloatingLabel>
                                        :
                                        user.product.map((item,idx) => {
                                            return (
                                                <FloatingLabel key={idx} label="Цена без ДДВ">
                                                    <Form.Control value={ item.priceWithoutVat} readOnly className={"mb-2"} />
                                                </FloatingLabel>
                                            )
                                        })
                                }
                            </Col>

                            <Col md={1}>
                                {
                                    typeof user.product === 'string' ?
                                        <FloatingLabel label="ДДВ 18%">
                                            <Form.Control value={ user.vat} readOnly/>
                                        </FloatingLabel>
                                        :
                                        user.product.map((item,idx) => {
                                            return (
                                                <FloatingLabel key={idx} label="ДДВ 18%">
                                                    <Form.Control value={ item.vat} readOnly className={"mb-2"} />
                                                </FloatingLabel>
                                            )
                                        })
                                }
                            </Col>

                            <Col md={2}>
                                {
                                    typeof user.product === 'string' ?
                                        <FloatingLabel label="Цена со ДДВ">
                                            <Form.Control value={ user.priceWithVat} readOnly/>
                                        </FloatingLabel>
                                        :
                                        user.product.map((item,idx) => {
                                            return (
                                                <FloatingLabel key={idx} label="Цена со ДДВ">
                                                    <Form.Control value={ item.priceWithVat} readOnly className={"mb-2"} />
                                                </FloatingLabel>
                                            )
                                        })
                                }
                            </Col>

                            <Col md={2}>
                                {
                                    typeof user.product === 'string' ?
                                        <FloatingLabel label="Вкупно ДДВ">
                                            <Form.Control value={ user.totalVat} readOnly/>
                                        </FloatingLabel>
                                        :
                                        user.product.map((item,idx) => {
                                            return (
                                                <FloatingLabel key={idx} label="Вкупно ДДВ">
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
                                    <ListGroup.Item disabled>Вкупна цена без ДДВ <span className={'float-end'}>{user.finalSumWithoutVat}</span> </ListGroup.Item>
                                    <ListGroup.Item disabled>Вкупна цена со ДДВ <span className={'float-end'}>{user.finalSumWithVat}</span> </ListGroup.Item>
                                    {/*<ListGroup.Item disabled>Разлика од заокружување <span className={'float-end'}></span> </ListGroup.Item>*/}
                                    <ListGroup.Item disabled>Вкупно за наплата во денари <span className={'float-end'}>{user.finalSumWithVat}</span> </ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                        <Row>
                            <CreateInvoiceSignFields/>
                        </Row>
                    </Col>
                    </div>
                )
            })}
        </Row>
        </Container>
    );
}
export default SeeInvoice;