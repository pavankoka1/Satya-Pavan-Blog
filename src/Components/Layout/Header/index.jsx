import React, { Fragment } from "react";
import TopBar from "./TopBar.jsx";
import Logo from "./Logo.jsx";

const Header = () => {
    return (
        <Fragment>
            <TopBar />
            <Logo />
        </Fragment>
    );
};

export default Header;
