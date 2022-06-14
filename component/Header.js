import { Container } from "@mui/system";
import React from "react";

function Header(){
    return(
        <>
        <Container fluid>
            <div className="navbar">
                <div>
                    <a>Personal</a>
                </div>
                <div className="navbar2">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                </div>
                <div>
                    <li>Download</li>
                </div>
            </div>
            </Container>
        </>
    )
}

export default Header