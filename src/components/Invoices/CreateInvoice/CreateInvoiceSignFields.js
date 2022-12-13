import {Col, Row} from "react-bootstrap";
const SigningFields = () =>{
    return (
        <Row className={'mt-1 pt-5'}>
            <Col md={8}>
                <h5>Овластено лице за потпишување</h5>
                <hr className={"mt-5 w-25"}/>
            </Col>
            <Col md={4}>
                <h5>Примил</h5>
                <hr className={"mt-5 w-50"}/>
            </Col>
        </Row>
    );
}
export default SigningFields;