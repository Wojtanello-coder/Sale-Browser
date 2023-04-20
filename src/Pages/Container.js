import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sales from "./Sales";
import Searches from "./Searches";
import Charts from "./Charts";

const Container = () => {


    return(
        <div className="Container">
            <RouterProvider router={router} />
        </div>
    );
}

export default Container;