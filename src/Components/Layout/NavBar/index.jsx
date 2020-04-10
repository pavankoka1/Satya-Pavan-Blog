/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useRouter } from "next/router";
import { Wrapper, InnerWrapper, Lists, ListItem, Dot, Icon } from "./index";

const NavLinks = links => {
    let router = useRouter().route;
    router = router.substring(1, router.length);
    return (
        <Lists>
            {links.map(link => (
                <ListItem isSelected={link === router}>
                    <Dot />
                    <a>{link}</a>
                </ListItem>
            ))}
        </Lists>
    );
};

const SocialMedia = () => {
    return (
        <div>
            <Icon src="/static/images/facebook.svg" />
            <Icon src="/static/images/twitter.svg" />
            <Icon src="/static/images/google.svg" />
            <Icon src="/static/images/pinterest.svg" />
            <Icon src="/static/images/instagram.svg" />
        </div>
    );
};

const NavBar = () => {
    const links = ["home", "android", "kotlin", "programming", "freelancing"];
    return (
        <Wrapper>
            <InnerWrapper>
                {NavLinks(links)}
                {SocialMedia()}
            </InnerWrapper>
        </Wrapper>
    );
};

export default NavBar;
