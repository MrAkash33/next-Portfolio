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
                    <li class="text-slate-500">Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                </div>
                <div>
                    <li>Download</li>
                </div>
            </div>
            </Container>
            <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
        </>
    )
}

export default Header