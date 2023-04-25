import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sales from "./Sales";
import Searches from "./Searches";
import Charts from "./Charts";
import RootLayout from "./Rootlayout";
import Error from "./Error";



const Page = () => {


    const router = createBrowserRouter([
        { 
            path: "/",
            element: <RootLayout/>,
            errorElement: <Error/>,
            children: [
                { path: "/", element: <Sales/>},
                { path: "/search", element: <Searches/>},
                { path: "/wishlist", element: <Charts/>},
            ]
        }
    ]);

    return <RouterProvider router={router}/>;
}

export default Page;