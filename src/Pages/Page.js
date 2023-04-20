import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sales from "./Sales";
import Searches from "./Searches";
import Charts from "./Charts";


const Page = () => {


    const router = createBrowserRouter([
        { path: "/", element: <Sales/>},
        { path: "/search", element: <Searches/>},
        { path: "/wishlist", element: <Charts/>},
    ]);

    return(
        <div className="Page">
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
}

export default Page;