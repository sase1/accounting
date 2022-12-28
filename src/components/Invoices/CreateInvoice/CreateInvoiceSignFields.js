import {Col, Row} from "react-bootstrap";
import {translations} from "../../../translation/IntlContext";
import {useSelector} from "react-redux";
const SigningFields = () =>{
    const { initalLanguage } = useSelector((state) => state.languageChangeHandler)
    return (
        <Row className={'mt-1 pt-5'}>
            <Col md={8}>
                <h5>{initalLanguage ? translations.mkTranslations.authorizedPersonToSign: translations.enTranslations.authorizedPersonToSign} </h5>
                <hr className={"mt-5 w-25"}/>
            </Col>
            <Col md={4}>
                <h5>{initalLanguage ? translations.mkTranslations.acceptedBy: translations.enTranslations.acceptedBy} </h5>
                <hr className={"mt-5 w-50"}/>
            </Col>
        </Row>
    );
}
export default SigningFields;