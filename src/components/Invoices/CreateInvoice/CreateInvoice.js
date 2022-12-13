import Container from 'react-bootstrap/Container';
import {Col, Row, Breadcrumb} from "react-bootstrap";
import CreateInvoicesUpperFields from "./CreateInvoicesUpperFields";
import CreateInvoicesTableFields from "./CreateInvoicesTableFields";
import CreateInvoiceBuyerFields from "./CreateInvoiceBuyerFields";
import CreateInvoiceTotalAmounts from "./CreateInvoiceTotalAmounts";
import {useState} from "react";
import CreateInvoiceSignFields from "./CreateInvoiceSignFields";
import {Link} from "react-router-dom";

const CreateInvoice = (props) => {
    const [inputList, setInputList] = useState([{ product: "", em: "m2", quantity: "", priceWithoutVat: "",  vat: "", priceWithVat: "", totalVat: "" }]);
    const [inputListBuyerFields, setInputListBuyerFields] = useState([{ buyer: "", buyerLastName: "", invoiceNumber: "", invoiceDate: "", paymentDue: "" }]);
    // handle input change
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };

    const handleInputChangeBuyerFields = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputListBuyerFields];
        list[index][name] = value;
        setInputListBuyerFields(list);
    };

    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, { product: "", em: "m2", quantity: "", priceWithoutVat: "",  vat: "", priceWithVat: "", totalVat: "" }]);
    };

    return (
            <Container fluid>
                <Row>
                    <Col className={'mt-3'}>
                        <Breadcrumb>
                            <Breadcrumb>
                                <Link to={'/home'}>Почетна</Link>
                            </Breadcrumb> &nbsp; / &nbsp;
                            <Breadcrumb.Item active href="/create-invoice">Креирај Фактура</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
               <Row>
                   <Col>
                       {/*<Form>*/}
                        <CreateInvoicesUpperFields />
                       <hr/>
                       <CreateInvoiceBuyerFields
                           inputListBuyerFields={inputListBuyerFields}
                           setInputListBuyerFields={setInputListBuyerFields}
                           handleInputChangeBuyerFields={handleInputChangeBuyerFields}
                       />
                       <hr/>
                        <CreateInvoicesTableFields
                            inputList={inputList}
                            setInputList={setInputList}
                            handleInputChange={handleInputChange}
                            handleRemoveClick={handleRemoveClick}
                            handleAddClick={handleAddClick}
                        />
                       <hr/>
                       <CreateInvoiceTotalAmounts
                           inputList={inputList}
                           usersCollectionRef={props.usersCollectionRef}
                           inputListBuyerFields={inputListBuyerFields}

                       />

                       {/*</Form>*/}
                       <CreateInvoiceSignFields />
                   </Col>

               </Row>
            </Container>
    );
}

export default CreateInvoice;