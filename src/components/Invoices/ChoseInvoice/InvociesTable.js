import Table from 'react-bootstrap/Table';
import {Link} from "react-router-dom";
import {deleteDoc, doc, getDocs} from "firebase/firestore";
import {db} from "../../../firebase-config";
import {useEffect, useState} from "react";
import {Col, FormControl, FormGroup, FormLabel, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const InvoiceTable = ({users, setUsers, monthValue, yearValue}) => {

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

    return (
        <>
            <Row>
                <Col md={5}>
                    <FormGroup className="mb-4">
                        <FormControl type="text" value={searchClient} onChange={(e) => setSearchClient(e.target.value)} placeholder="Пребарување според клиент"/>
                    </FormGroup>
                </Col>

                <Col md={5}>
                    <FormGroup className="mb-4">
                        <FormControl type="text" value={searchInvoice} onChange={(e) => setSearchInvoice(e.target.value)} placeholder="Пребарување според број на фактура" />
                    </FormGroup>
                </Col>
                <Col md={2}>
                    <Button className={"btn btn-danger"} onClick={resetFilters}>Избриши филтри</Button>
                </Col>
            </Row>
            <Table className={'text-center'} bordered>
                <thead>
                <tr>
                    <th>Име на клиент</th>
                    <th>Датум на издавање</th>
                    <th>Број на фактура</th>
                    <th>ID</th>
                    <th>Бришење</th>
                </tr>
                </thead>
                <tbody>
                {users.filter((user) => user.buyer.toLowerCase().includes(searchClient) && user.id.toLowerCase().includes(searchInvoice)).map((user, idx) => {
                    return (
                        <tr key={idx}>
                        {
                            user.invoiceDate.substring(0, 4) == yearValue.substring(0, 4) && user.invoiceDate.substring(5, 7) == monthValue.substring(0, 2) ?
                            <>
                                <td>
                                    <Link to={`/users/${user.id}`} style={{color: "black", textDecoration: "none"}}>
                                        {user.buyer}
                                    </Link>
                                </td>
                                <td>{user.invoiceDate}</td>
                                <td>{user.invoiceNumber}</td>
                                <td>{user.id}</td>
                                <td>
                                    <button className={"btn btn-sm btn-danger"} onClick={() => deleteInvoice(user.id)}>
                                        Бриши
                                    </button>
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