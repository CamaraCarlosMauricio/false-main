import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
    const ErrorImg= 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?w=845&ssl=1';

    return (
        <div id="error-page" className="text-center py-5">
        <Link className="btn btn-primary" to="/">Back To Home</Link>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
            
            {/* <i>{error.statusText || error.message}</i> */}
        </p>
        <img src={ErrorImg} className="img-fluid " alt="errimg" ></img>
        </div>
    );
}
