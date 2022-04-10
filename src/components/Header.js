import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    return (
        <Container>
            <Logo>
                <a href="/">
                    <img
                        src="https://png.monster/wp-content/uploads/2021/03/Tesla_Inc.-Wordmark-Black-Logo.wine-6bbe293a.png"
                        alt=""
                    />
                </a>
            </Logo>
            <Menu>
                <a href="#">Model S</a>

                <a href="#">Model X</a>

                <a href="#">Model Y</a>

                <a href="#">Model 3</a>
            </Menu>
            <RightMenu>
                <a href="">Shop</a>
                <a href="">Account</a>
            </RightMenu>
            <CustomMenu onClick={() => setBurgerStatus(true)}>
                <a href="#">Menu</a>
            </CustomMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={() => setBurgerStatus(false)} />
                </CloseWrapper>
                <ul>
                    <li>
                        <a href="#">Existing Inventory</a>
                    </li>
                    <li>
                        <a href="#">Used Inventory</a>
                    </li>
                    <li>
                        <a href="#">Trade-in</a>
                    </li>
                    <li>
                        <a href="#">Cybertruck</a>
                    </li>
                    <li>
                        <a href="#">Roadaster</a>
                    </li>
                    <li>
                        <a href="#">Existing Inventory</a>
                    </li>
                    <li>
                        <a href="#">Existing Inventory</a>
                    </li>
                    <li>
                        <a href="#">Existing Inventory</a>
                    </li>
                </ul>
            </BurgerNav>
        </Container>
    );
}

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    left: 2px;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`;

const Logo = styled.a`
    display: flex;
    margin-right: 200px;
    img {
        width: 10%;
        position: fixed;
        left: 5px;
        top: -20px;
    }
`;

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
        font-family: "Gotham", sans-serif;
        font-weight: bold;
        padding: 0 20px;
        flex-wrap: nowrap;
    }
`;

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    a {
        font-size: 14px;
        font-family: "Gotham", sans-serif;
        font-weight: bold;
        text-transform: uppercase;
        margin-right: 28px;
        flex-wrap: nowrap;
    }
`;

const CustomMenu = styled(RightMenu)`
    cursor: pointer;
`;

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    background: white;
    width: 300px;
    z-index: 100;
    padding: 20px;
    list-style: none;
    display: flex;
    flex-direction: column;
    text-align: start;
    font-weight: 700;
    color: rgba(23, 26, 32, 0.8);
    transform: ${(props) =>
        props.show ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.2s;

    ul {
        list-style: none;
        margin-top: 50px;
        margin-left: 25px;
    }

    li {
        /* border-bottom: 1px solid rgba(0, 0, 0, 0.2); */
        padding: 15px 0;
    }
`;

const CustomClose = styled(CloseIcon)``;

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
`;

export default Header;
