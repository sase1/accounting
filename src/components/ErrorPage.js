import {Link} from "react-router-dom";
import {translations} from "../translation/IntlContext";
import {useSelector} from "react-redux";

const ErrorPage = () => {
    const { initalLanguage } = useSelector((state) => state.languageChangeHandler)
    return (
        <div className={"text-center mt-5"}>
            <h1>404</h1>
            <h2 className={"my-5"}>{initalLanguage ? translations.mkTranslations.pageDontExist: translations.enTranslations.pageDontExist}</h2>
            <Link to={"/"}>{initalLanguage ? translations.mkTranslations.getBackToSystem: translations.enTranslations.getBackToSystem}</Link>
        </div>
    );
}
export default ErrorPage;