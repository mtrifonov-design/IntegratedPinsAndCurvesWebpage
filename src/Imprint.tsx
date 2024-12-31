import React from "react";

const Imprint = () => {
    return (
        <div style={{
            backgroundColor: "var(--gray1)",
            width: "100vw",
            height: "100vh",
            padding: "20px",
            color: "var(--gray7)",
            overflowY: "scroll",
            fontSize: "16px",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            alignContent: "center",
            flexDirection: "column",


        }}>
            <style>
                {`
                h1 {
                    color: var(--gray8);
                }
                h2 {
                    color: var(--gray8);
                }
                h3 {
                    color: var(--gray8);
                }
                p {
                    color: var(--gray7);
                }
                li {
                    color: var(--gray7);
                }
                `}
            </style>
            <div style={{maxWidth: "800px"}}>
            <h1>About this site</h1>
            <br></br>
            This site is maintained by Martin Trifonov.<br></br><br></br>
            <strong>Contact:</strong><br></br>mtrifonov.design@gmail.com<br></br>
            <br></br>
            <strong>Address:</strong><br></br>
Bruchsaler Straße 4<br></br>
Berlin , 10715<br></br>


            </div>
        </div>
    );
};

export default Imprint;