import { Container } from "@mui/system";
import React from "react";
function Header(){
    return(
        <>
        <Container fluid>
            <div className="navbar">
                <div>
                    <li>Personal</li>
                </div>
                <div className="navbar2">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                </div>
                <div className="btn-bar">
                    <li>
                    <div class="wrapper">
                        <a href="#" class="fancy-button bg-gradient1"><span><i class="fa fa-wheelchair-alt"></i>Contact Us</span></a>
                    </div>
                    </li>
                </div>
            </div>
            </Container>           
        </>
    )
}

export default Header