import { Link } from "react-router-dom";
import style from "styled-components";

const NavbarLink = style(Link)`
    display: block;
    padding: 12px;
    color: #FFF;
    height: 100%;
    transition: background 0.1s;
    text-decoration: none;

    &:hover {
        color: #FFF;
        background: #36393f;
    }
`;

export { NavbarLink };
