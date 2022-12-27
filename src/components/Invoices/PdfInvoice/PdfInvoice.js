import Container from 'react-bootstrap/Container';
import {Breadcrumb, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import { storage } from "../../../firebase-config";
import {ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage"


const PdfInvoice = () => {
    const [imageUpload, setImageUpload] = useState(null)
    const [imageList, setImageList] = useState([])
    const imageListRef = ref(storage, "saved-pdf/")
    const uploadImage = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `saved-pdf/${imageUpload.name}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then( (url) => {
                setImageList((prev) => [...prev, url])
            })
        })
    }

    useEffect( () => {
        listAll(imageListRef).then((res) => {
            res.items.forEach( (item) => {
                getDownloadURL(item).then( (url) => {
                    setImageList((prev) => [...prev, url ])
                })
            })
        })
    }, [])
    localStorage.setItem('iln', imageList.length);

    return (
            <Container fluid>
                <Row>
                    <Col className={'mt-3'}>
                        <Breadcrumb>
                            <Breadcrumb>
                                <Link to={'/home'}>Почетна</Link>
                            </Breadcrumb> &nbsp; / &nbsp;
                            <Breadcrumb.Item active href="/saved-pdf-invoices">Зачувани ПДФ фајлови</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>

                <Row className={"my-5"}>
                    <Col>
                        <input type="file" onChange={ (e) => {setImageUpload(e.target.files[0])}} />
                        <button className={"btn btn-outline-primary d-block mt-3"} onClick={uploadImage}>Додај слика</button>
                    </Col>
                </Row>
                <Row>
                    {imageList.map((url, idx) => {
                        return(
                            <Col key={idx} md={4}>
                                <object data={url} type="application/pdf" width="100%" height="400" aria-label="pdf file" ></object>
                                <a rel="noreferrer" href={url} target="_blank">Линк до PDF фајлот!</a>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
    );
}
export default PdfInvoice;