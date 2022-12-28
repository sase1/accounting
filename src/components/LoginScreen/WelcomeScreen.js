import React from 'react';
import {useSelector} from "react-redux";
import {translations} from "../../translation/IntlContext";

const WelcomeScreen = () => {
    const {initalLanguage} = useSelector((state) => state.languageChangeHandler)
    return (
        <div className={"d-flex justify-content-center align-items-center home text-white"}>
            <h1>М<span className="text-danger">{initalLanguage ? translations.mkTranslations.modalLogo : translations.enTranslations.modalLogo}</span></h1>
        </div>
    )
};

export default WelcomeScreen;