import React from "react";
import Header from "./Header";
import NavBar from "./NavBar/index.jsx";
import styles from "./index.scss";

const Layout = () => {
    return (
        <div className={styles.wrapper}>
            <head>
                <link
                    href="https://fonts.googleapis.com/css?family=Poppins"
                    rel="stylesheet"
                />
            </head>
            <Header />
            <NavBar />
        </div>
    );
};

export { Layout };
