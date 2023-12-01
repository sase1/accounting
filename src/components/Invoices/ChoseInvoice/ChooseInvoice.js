import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Breadcrumb, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InvoiceTable from "./InvociesTable";
import { useSelector } from "react-redux";
import { translations } from "../../../translation/IntlContext";

const ChooseInvoice = ({ users, setUsers }) => {
  const { initalLanguage } = useSelector(
    (state) => state.languageChangeHandler
  );

  const [monthValue, setMonthValue] = useState("");
  const [yearValue, setYearValue] = useState("");
  const [showTableData, setShowTableData] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem("month") && !localStorage.getItem("year")) {
      setShowTableData(false);
    } else {
      setMonthValue(localStorage.getItem("month"));
      setYearValue(localStorage.getItem("year"));
    }
  }, []);

  const showTable = (e) => {
    e.preventDefault();
    if (monthValue != 0 && yearValue != 0) {
      setShowTableData(true);
    }
    localStorage.setItem("month", monthValue);
    localStorage.setItem("year", yearValue);
  };

  const showTableFilter = () => {
    setShowTableData(false);
    localStorage.removeItem("month");
    localStorage.removeItem("year");
  };

  // const removeMultipleMonthsFromSelect = Object.values(users.reduce((acc,cur)=>Object.assign(acc,{[cur.invoiceDate.substring(5, 7)]:cur}),{}))
  // const removeMultipleYearsFromSelect = Object.values(users.reduce((acc,cur)=>Object.assign(acc,{[cur.invoiceDate.substring(0, 4)]:cur}),{}))
  // console.log(Object.values(users.reduce((acc,cur)=>Object.assign(acc,{[cur.invoiceDate.substring(0, 4)]:cur}),{})))

  const uniqueArrMonths = users
    .filter(
      (item, index) =>
        users
          .map((i) => i.invoiceDate.substring(5, 7))
          .indexOf(item.invoiceDate.substring(5, 7)) === index
    )
    .sort((a, b) =>
      b.invoiceDate.substring(5, 7).localeCompare(a.invoiceDate.substring(5, 7))
    );

  const uniqueArrYears = users
    .filter(
      (item, index) =>
        users
          .map((i) => i.invoiceDate.substring(0, 4))
          .indexOf(item.invoiceDate.substring(0, 4)) === index
    )
    .sort((a, b) =>
      b.invoiceDate.substring(0, 4).localeCompare(a.invoiceDate.substring(0, 4))
    );

  return (
    <Container fluid>
      <Row>
        <Col className={"mt-3"}>
          <Breadcrumb>
            <Breadcrumb>
              <Link to={"/home"}>
                {initalLanguage
                  ? translations.mkTranslations.homeScreen
                  : translations.enTranslations.homeScreen}
              </Link>
            </Breadcrumb>{" "}
            &nbsp; / &nbsp;
            <Breadcrumb.Item active href="/choose-invoice">
              {initalLanguage
                ? translations.mkTranslations.createdInvoice
                : translations.enTranslations.createdInvoice}
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>

      {showTableData ? (
        <Row>
          <Col md={8} className={"m-auto"}>
            <h2 className={"float-start"}>
              {initalLanguage
                ? translations.mkTranslations.selectedView
                : translations.enTranslations.selectedView}
              :
              <span className={"text-danger"}>
                {" "}
                {monthValue}{" "}
                {initalLanguage
                  ? translations.mkTranslations.month
                  : translations.enTranslations.month}{" "}
                / {yearValue}{" "}
                {initalLanguage
                  ? translations.mkTranslations.year
                  : translations.enTranslations.year}
              </span>
            </h2>
            <Button
              onClick={showTableFilter}
              className={"show-invoice float-end border-0 d-print-none"}
            >
              {initalLanguage
                ? translations.mkTranslations.chooseNewData
                : translations.enTranslations.chooseNewData}
            </Button>
          </Col>
        </Row>
      ) : null}

      <Row>
        <Col md={8} className={"m-auto"}>
          <Form>
            {!showTableData ? (
              <Row className={"justify-content-center"}>
                <Col md={4}>
                  <Form.Select
                    aria-label="Default select example"
                    value={monthValue}
                    onChange={(e) => setMonthValue(e.target.value)}
                  >
                    <option value="0">
                      {initalLanguage
                        ? translations.mkTranslations.chooseMonth
                        : translations.enTranslations.chooseMonth}
                    </option>
                    {/*<option value="01">Јануари</option>*/}
                    {uniqueArrMonths.map((user, idx) => {
                      return (
                        <option
                          key={idx}
                          value={user.invoiceDate.substring(5, 7)}
                        >
                          {user.invoiceDate.substring(5, 7)}
                        </option>
                      );
                    })}
                  </Form.Select>
                </Col>

                <Col md={4}>
                  <Form.Select
                    aria-label="Default select example"
                    value={yearValue}
                    onChange={(e) => setYearValue(e.target.value)}
                  >
                    <option value="0">
                      {initalLanguage
                        ? translations.mkTranslations.chooseYear
                        : translations.enTranslations.chooseYear}
                    </option>
                    {/*<option value="2018">2018</option>*/}
                    {uniqueArrYears.map((user, idx) => {
                      return (
                        <option
                          key={idx}
                          value={user.invoiceDate.substring(0, 4)}
                        >
                          {user.invoiceDate.substring(0, 4)}
                        </option>
                      );
                    })}
                  </Form.Select>
                </Col>

                <Col md={2}>
                  <Button
                    className={"show-invoice border-0"}
                    onClick={showTable}
                  >
                    {initalLanguage
                      ? translations.mkTranslations.show
                      : translations.enTranslations.show}
                  </Button>
                </Col>
              </Row>
            ) : null}
          </Form>
        </Col>

        <Col md={8} className={"m-auto pt-5 text-center"}>
          {showTableData ? (
            <InvoiceTable
              monthValue={monthValue}
              yearValue={yearValue}
              users={users}
              setUsers={setUsers}
            />
          ) : (
            <>
              <h2 className={"text-center"}>
                {initalLanguage
                  ? translations.mkTranslations.chooseMonthAndYearToShow
                  : translations.enTranslations.chooseMonthAndYearToShow}
              </h2>
              <img style={{ height: "14em" }} src={"./sorry.svg"} />
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ChooseInvoice;
