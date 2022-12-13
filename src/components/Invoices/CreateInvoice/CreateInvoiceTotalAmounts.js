import {Col, ListGroup, Row} from "react-bootstrap";
import {addDoc} from "firebase/firestore";
import {useState} from "react";
const InvoicesTotalFields = (props) =>{
    const [msg, setMsg] = useState(false)
    const totalSumWithoutVatArray = props.inputList.map(item => Number(item.quantity * item.priceWithoutVat));
    const finalSumWithoutVat = totalSumWithoutVatArray.reduce((a, b) => a + b);

    const totalSumArrayWithVat = props.inputList.map(item => Number(item.quantity * item.priceWithVat));
    const finalSumWithVat = totalSumArrayWithVat.reduce((a, b) => a + b).toFixed(1);

    const createNewInvoice = async () => {
        await  addDoc(props.usersCollectionRef,
            {
                buyer: props.inputListBuyerFields[0].buyer,
                buyerLastName: props.inputListBuyerFields[0].buyerLastName,
                invoiceNumber: props.inputListBuyerFields[0].invoiceNumber,
                invoiceDate: props.inputListBuyerFields[0].invoiceDate,
                paymentDue: props.inputListBuyerFields[0].paymentDue,
                //     middle fields
                product: [...props.inputList],
                //     table fields
                    finalSumWithVat: finalSumWithVat,
                    finalSumWithoutVat: finalSumWithoutVat
                //     total sum fields
            })
        setMsg(true)
        setTimeout(() => {
            setMsg(false)
            window.location.reload(true);
        }, 2000);


    }

    return (
        <Row className={'mt-1'}>
            <Col className={"text-center"}>
                {msg && <h1 className={"text-success"}>Успешно зачувана фактура!!</h1>}
            </Col>
            <Col md={{ span: 4, offset: 8 }}>
                <ListGroup>
                    <ListGroup.Item>Вкупна цена без ДДВ <span className={'float-end'}>{finalSumWithoutVat}</span> </ListGroup.Item>
                    <ListGroup.Item>Вкупна цена со ДДВ <span className={'float-end'}>{finalSumWithVat}</span> </ListGroup.Item>
                    <ListGroup.Item>Разлика од заокружување <span className={'float-end'}></span> </ListGroup.Item>
                    <ListGroup.Item>Вкупно за наплата во денари <span className={'float-end'}>{finalSumWithVat}</span> </ListGroup.Item>
                </ListGroup>
            </Col>

            <Col md={{ span: 3, offset: 9}}>
                <button className={"btn mt-3 btn-info text-white float-end"}
                        onClick={createNewInvoice}
                >Зачувај фактура</button>
            </Col>
        </Row>
    );
}

export default InvoicesTotalFields;