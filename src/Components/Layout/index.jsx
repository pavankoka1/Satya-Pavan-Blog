/* eslint-disable react/destructuring-assignment */
import React from "react";
import Header from "./Header";
import NavBar from "./NavBar/index.jsx";
import styles from "./index.scss";

const Layout = props => {
    return (
        <div className={styles.wrapper}>
            <head>
                <link
                    href="https://fonts.googleapis.com/css?family=Poppins"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Lora"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;900&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;900&display=swap"
                    rel="stylesheet"
                />
            </head>
            <Header />
            <NavBar />
            {props.children}
        </div>
    );
};

export { Layout };
