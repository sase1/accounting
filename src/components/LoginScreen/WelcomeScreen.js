import React from 'react';
import {useSelector} from "react-redux";
import {translations} from "../../translation/IntlContext";

const WelcomeScreen = () => {
    const {initalLanguage} = useSelector((state) => state.languageChangeHandler)
    return (
        <div className={"d-flex justify-content-center align-items-center text-secondary vh-100"}>
           <div>
               <h1>М<span className="text-danger">{initalLanguage ? translations.mkTranslations.modalLogo : translations.enTranslations.modalLogo}</span></h1>
               <h2>{initalLanguage ? translations.mkTranslations.internetSystem : translations.enTranslations.internetSystem}</h2>
               <p>{initalLanguage ? translations.mkTranslations.contactMe : translations.enTranslations.contactMe}: saso_mitkovski@live.com</p>
           </div>
        </div>
    )
};

export default WelcomeScreen;