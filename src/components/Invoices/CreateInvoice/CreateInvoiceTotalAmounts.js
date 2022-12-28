import {Col, ListGroup, Row} from "react-bootstrap";
import {addDoc} from "firebase/firestore";
import {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import {translations} from "../../../translation/IntlContext";
import {useSelector} from "react-redux";
const InvoicesTotalFields = (props) =>{
    const { initalLanguage } = useSelector((state) => state.languageChangeHandler)

    const [msg, setMsg] = useState(false)
    const [showFillFieldsMessage, setShowFillFieldsMessage] = useState(true)
    const totalSumWithoutVatArray = props.inputList.map(item => Number(item.quantity * item.priceWithoutVat));
    const finalSumWithoutVat = totalSumWithoutVatArray.reduce((a, b) => a + b);

    const totalSumArrayWithVat = props.inputList.map(item => Number(item.quantity * item.priceWithVat));
    const finalSumWithVat = totalSumArrayWithVat.reduce((a, b) => a + b).toFixed(1);

    const [disabledButton, setDisabledButton] = useState(true)
    let allValuesFromInputBuyerFields = Object.values(props.inputListBuyerFields[0])

    let [date,setDate] = useState(new Date());
    const createNewInvoice = async () => {
        await  addDoc(props.usersCollectionRef,
            {
                buyer: props.inputListBuyerFields[0].buyer,
                buyerLastName: props.inputListBuyerFields[0].buyerLastName,
                invoiceNumber: props.inputListBuyerFields[0].invoiceNumber,
                invoiceDate: props.inputListBuyerFields[0].invoiceDate,
                paymentDue: props.inputListBuyerFields[0].paymentDue,
                dateCreated: date.toLocaleString('en-GB'),
                //     middle fields
                product: [...props.inputList],
                //     table fields
                    finalSumWithVat: finalSumWithVat,
                    finalSumWithoutVat: finalSumWithoutVat
                //     total sum fields
            })
        setMsg(true)
        localStorage.setItem('wdic', date.toLocaleString('en-GB'));
        localStorage.setItem('lad', props.inputListBuyerFields[0].buyer);
        localStorage.setItem('ladin', props.inputListBuyerFields[0].invoiceNumber);
        setTimeout(() => {
            setMsg(false)
            window.location.reload(true);
        }, 2000);
    }

    useEffect(() => {
        if (allValuesFromInputBuyerFields[0] == "" || allValuesFromInputBuyerFields[2] == "" || allValuesFromInputBuyerFields[3] == ""){
            setDisabledButton(true)
            setShowFillFieldsMessage(true)

        }
        else {
            setDisabledButton(false)
            setShowFillFieldsMessage(false)
        }
    }, [allValuesFromInputBuyerFields]);

    return (
        <Row className={'mt-1'}>
            <Col className={"text-center"}>
                {msg && <h1 className={"text-success"}>Успешно зачувана фактура!!</h1>}
            </Col>
            <Col md={{ span: 4, offset: 8 }}>
                <ListGroup>
                    <ListGroup.Item>{initalLanguage ? translations.mkTranslations.totalPriceWithoutVAT: translations.enTranslations.totalPriceWithoutVAT}<span className={'float-end'}>{finalSumWithoutVat}</span> </ListGroup.Item>
                    <ListGroup.Item>{initalLanguage ? translations.mkTranslations.totalPriceWithVAT: translations.enTranslations.totalPriceWithVAT}  <span className={'float-end'}>{finalSumWithVat}</span> </ListGroup.Item>
                    {/*<ListGroup.Item>Разлика од заокружување <span className={'float-end'}></span> </ListGroup.Item>*/}
                    <ListGroup.Item>{initalLanguage ? translations.mkTranslations.totalForPayment: translations.enTranslations.totalForPayment} <span className={'float-end'}>{finalSumWithVat}</span> </ListGroup.Item>
                </ListGroup>
            </Col>

            <Col md={{ span: 4, offset: 8}} className="text-center d-print-none">
                {showFillFieldsMessage &&
                    <span
                        style={{fontSize: "10px"}}
                        className="mt-4 d-inline-block float-start">{initalLanguage ? translations.mkTranslations.fillTheFields: translations.enTranslations.fillTheFields}
                    </span>}
                <Button
                    className={"text-white mt-3 float-end"}
                    onClick={createNewInvoice}
                    disabled={disabledButton}
                    >
                    {initalLanguage ? translations.mkTranslations.saveInvoice: translations.enTranslations.saveInvoice}
                </Button>
            </Col>
        </Row>
    );
}

export default InvoicesTotalFields;