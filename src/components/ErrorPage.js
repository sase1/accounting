import {Link} from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className={"text-center"}>
            <h1>404</h1>
            <h2>Не постои страната</h2>
            <Link to={"/"}>Врати се назад кон системот</Link>
        </div>
    );
}
export default ErrorPage;