import Table from 'react-bootstrap/Table';
import {Link} from "react-router-dom";
import {deleteDoc, doc, getDocs} from "firebase/firestore";
import {db} from "../../../firebase-config";
import {useEffect} from "react";
const InvoiceTable = ({users, setUsers, monthValue, yearValue}) => {
    useEffect(() => {
    }, [users]);
    const deleteInvoice = async (id) => {
        const userDoc = doc(db, "users", id)
        await deleteDoc(userDoc)
        const items = users.filter(item => item.id !== id);
        setUsers(items);
    }
    return (
        <>
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
                {users.map((user, idx) => {
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