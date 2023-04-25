import Header from "../Components/Header";
import { Outlet } from "react-router-dom";

const RootLayout = () => {

    return(
        <>
            <Header />
            <Outlet />
            {/* Footer */}
        </>
    );
}

export default RootLayout;