import Container from 'react-bootstrap/Container';
import {Breadcrumb, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import { storage } from "../../../firebase-config";
import {ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage"
import {translations} from "../../../translation/IntlContext";
import {useSelector} from "react-redux";


const PdfInvoice = () => {
    const { initalLanguage } = useSelector((state) => state.languageChangeHandler)

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
                                <Link to={'/home'}>{initalLanguage ? translations.mkTranslations.homeScreen : translations.enTranslations.homeScreen}</Link>
                            </Breadcrumb> &nbsp; / &nbsp;
                            <Breadcrumb.Item active href="/saved-pdf-invoices">{initalLanguage ? translations.mkTranslations.savedPrintedInvoices : translations.enTranslations.savedPrintedInvoices}</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>

                <Row className={"my-5"}>
                    <Col>
                        <input type="file" onChange={ (e) => {setImageUpload(e.target.files[0])}} />
                        <button className={"btn btn-outline-primary d-block mt-3"} onClick={uploadImage}>{initalLanguage ? translations.mkTranslations.addImage : translations.enTranslations.addImage}</button>
                    </Col>
                </Row>
                <Row>
                    {imageList.map((url, idx) => {
                        return(
                            <Col key={idx} md={4} className={"mb-5"}>
                                <object data={url} type="application/pdf" width="100%" height="400" aria-label="pdf file"></object>
                                <a rel="noreferrer" href={url} target="_blank">{initalLanguage ? translations.mkTranslations.linkToPdfFile : translations.enTranslations.linkToPdfFile}!</a>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
    );
}
export default PdfInvoice;