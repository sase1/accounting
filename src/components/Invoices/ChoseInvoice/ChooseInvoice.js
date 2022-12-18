import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import {Breadcrumb, Col, Row} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import InvoiceTable from "./InvociesTable";

const ChooseInvoice = ({users, setUsers}) => {
    const [monthValue, setMonthValue] = useState('')
    const [yearValue, setYearValue] = useState('')
    const [showTableData, setShowTableData] = useState(true)

    useEffect(() => {
        if (!localStorage.getItem('month') && !localStorage.getItem('year')){
            setShowTableData(false)
        }
        else {
            setMonthValue(localStorage.getItem('month'))
            setYearValue(localStorage.getItem('year'))
        }
    }, []);

    const showTable = (e) => {
        e.preventDefault();
        if (monthValue != 0 && yearValue != 0){
            setShowTableData(true)
        }
        localStorage.setItem('month', monthValue);
        localStorage.setItem('year', yearValue);
    }

    const showTableFilter = () => {
        setShowTableData(false)
        localStorage.clear();
    }

    const removeMultipleMonthsFromSelect = Object.values(users.reduce((acc,cur)=>Object.assign(acc,{[cur.invoiceDate.substring(5, 7)]:cur}),{}))
    const removeMultipleYearsFromSelect = Object.values(users.reduce((acc,cur)=>Object.assign(acc,{[cur.invoiceDate.substring(0, 4)]:cur}),{}))

    // console.log(Object.values(users.reduce((acc,cur)=>Object.assign(acc,{[cur.invoiceDate.substring(0, 4)]:cur}),{})))
    return (
        <Container fluid>
            <Row>
                <Col className={'mt-3'}>
                    <Breadcrumb>
                        <Breadcrumb>
                            <Link to={'/home'}>Почетна</Link>
                        </Breadcrumb> &nbsp; / &nbsp;
                        <Breadcrumb.Item active href="/choose-invoice">Издадени Фактури</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>

            {showTableData ?  <Row>
                <Col md={8} className={'m-auto'}>
                    <h2 className={'float-start'}>Одбран приказ: {monthValue} месец / {yearValue} година </h2>
                    <button onClick={showTableFilter} className={'btn btn-primary float-end'}>Одбери нова дата</button>
                </Col>
            </Row> : null}

            <Row>
                <Col md={8} className={"m-auto"}>
                    <Form>
                        {!showTableData ? <Row className={"justify-content-center"}>
                            <Col md={4}>
                                <Form.Select aria-label="Default select example" value={monthValue} onChange={ e => setMonthValue(e.target.value)}>
                                    <option value="0">Избери Месец</option>
                                    {/*<option value="01">Јануари</option>*/}
                                    {removeMultipleMonthsFromSelect.map((user, idx) => {
                                        return (
                                            <option key={idx} value={user.invoiceDate.substring(5, 7)}>{user.invoiceDate.substring(5, 7)}</option>
                                        );
                                    })}
                                </Form.Select>
                            </Col>

                            <Col md={4}>
                                <Form.Select aria-label="Default select example" value={yearValue} onChange={ e => setYearValue(e.target.value)}>
                                    <option value="0">Избери Година</option>
                                    {/*<option value="2018">2018</option>*/}
                                    {removeMultipleYearsFromSelect.map((user, idx) => {
                                        return (
                                            <option key={idx} value={user.invoiceDate.substring(0, 4)}>{user.invoiceDate.substring(0, 4)}</option>
                                        );
                                    })}

                                </Form.Select>
                            </Col>

                            <Col md={2}>
                                <Button variant="primary" type="submit" onClick={showTable}>
                                    Прикажи
                                </Button>
                            </Col>

                        </Row> : null}
                    </Form>
                </Col>

                <Col md={8} className={"m-auto pt-5"}>
                    {showTableData ?
                            <InvoiceTable monthValue={monthValue} yearValue={yearValue} users={users} setUsers={setUsers}/> :
                            <h2 className={'text-center'}>Одбери месец и година за приказ!</h2>
                    }
                </Col>
            </Row>
        </Container>
    );
}

export default ChooseInvoice;