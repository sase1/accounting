import Table from 'react-bootstrap/Table';
import {Link} from "react-router-dom";
import {deleteDoc, doc} from "firebase/firestore";
import {db} from "../../../firebase-config";
import {useEffect, useState} from "react";
import {Col, FormControl, FormGroup, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {FaEye, FaPrint, FaShoePrints, FaTrash} from "react-icons/fa";
import {useSelector} from "react-redux";
import {translations} from "../../../translation/IntlContext";

const InvoiceTable = ({users, setUsers, monthValue, yearValue}) => {
    const { initalLanguage } = useSelector((state) => state.languageChangeHandler)

    useEffect(() => {
    }, [users]);
    const deleteInvoice = async (id) => {
        const userDoc = doc(db, "users", id)
        await deleteDoc(userDoc)
        const items = users.filter(item => item.id !== id);
        setUsers(items);
    }

    const [searchClient, setSearchClient] = useState("")
    const [searchInvoice, setSearchInvoice] = useState("")

    const resetFilters = () => {
        setSearchClient("")
        setSearchInvoice("");
    }

    const print = () =>{
        setTimeout(() => {
            window.print();
        }, 1500);
    }

    const printTable = () =>{
        window.print();
    }

    return (
        <>
            <Row className={"d-print-none"}>
                <Col md={4}>
                    <FormGroup className="mb-4">
                        <FormControl type="text" value={searchClient} onChange={(e) => setSearchClient(e.target.value)} placeholder={initalLanguage ? translations.mkTranslations.clientSearhFilter : translations.enTranslations.clientSearhFilter}/>
                    </FormGroup>
                </Col>

                <Col md={4}>
                    <FormGroup className="mb-4">
                        <FormControl type="text" value={searchInvoice} onChange={(e) => setSearchInvoice(e.target.value)} placeholder={initalLanguage ? translations.mkTranslations.invoiceNumberSearchFilter : translations.enTranslations.invoiceNumberSearchFilter} />
                    </FormGroup>
                </Col>

                <Col md={2}>
                    <Button className={"delete-filter border-0"} onClick={resetFilters}>{initalLanguage ? translations.mkTranslations.removeFilters : translations.enTranslations.removeFilters}</Button>
                </Col>

                <Col md={2}>
                    <Button className={"border-0 float-end"} onClick={printTable}>{initalLanguage ? translations.mkTranslations.printTable : translations.enTranslations.printTable} <FaShoePrints/></Button>
                </Col>
            </Row>
            <Table className={'text-center table-hover table-responsive bg-white shadow rounded see-invoice'}>
                <thead>
                <tr>
                    <th>#</th>
                    <th>{initalLanguage ? translations.mkTranslations.open : translations.enTranslations.open}</th>
                    <th>{initalLanguage ? translations.mkTranslations.clientName : translations.enTranslations.clientName}</th>
                    <th>{initalLanguage ? translations.mkTranslations.invoiceDate : translations.enTranslations.invoiceDate}</th>
                    <th>{initalLanguage ? translations.mkTranslations.invoiceNumber : translations.enTranslations.invoiceNumber}</th>
                    <th>{initalLanguage ? translations.mkTranslations.invoiceCreatedDate : translations.enTranslations.invoiceCreatedDate}</th>
                    <th>{initalLanguage ? translations.mkTranslations.print : translations.enTranslations.print}</th>
                    <th>{initalLanguage ? translations.mkTranslations.delete : translations.enTranslations.delete}</th>
                </tr>
                </thead>
                <tbody>
                {users.filter((user) => user.buyer.toLowerCase().includes(searchClient) && user.invoiceNumber.toLowerCase().includes(searchInvoice)).map((user, idx) => {
                    return (
                        <tr key={idx}>
                        {
                            user.invoiceDate.substring(0, 4) == yearValue.substring(0, 4) && user.invoiceDate.substring(5, 7) == monthValue.substring(0, 2) ?
                            <>
                                <td>{idx}</td>
                                <td><Link to={`/users/${user.id}`} style={{color: "black", textDecoration: "none"}}><FaEye/></Link></td>
                                <td>{user.buyer}</td>
                                <td>{user.invoiceDate}</td>
                                <td>{user.invoiceNumber}</td>
                                <td>{user.dateCreated}</td>
                                <td>
                                    <Link to={`/users/${user.id}`} style={{color: "black", textDecoration: "none"}}>
                                        <FaPrint onClick={print}/>
                                    </Link>
                                </td>
                                <td>
                                    <FaTrash className={"delete-icon"} onClick={() => deleteInvoice(user.id)}/>
                                </td>
                            </> : null
                        }
                        </tr>
                    )
                })}
                </tbody>
            </Table>
        </>
    );
}
export default InvoiceTable;