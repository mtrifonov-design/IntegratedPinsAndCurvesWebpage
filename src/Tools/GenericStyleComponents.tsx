import React from "react";

const H1 = (props: { children: React.ReactNode }) => <h1 style={{ fontSize: '2.75em', margin: '0.75em 0', fontFamily: "nudicamedium", color: "var(--gray8)" }}>{props.children}</h1>;
const H2 = (props: { children: React.ReactNode, style?: any }) => <h2 style={{ fontSize: '1.75em', maxWidth: "800px", margin: '1em 0', fontFamily: "nudicamedium", color: "var(--gray8)", ...props.style }}>{props.children}</h2>;
const H3 = (props: { children: React.ReactNode, style?: any }) => <h3 style={{ fontSize: '1.25em', maxWidth: "600px", margin: '1em 0', fontFamily: "nudicamedium", color: "var(--gray8)", ...props.style }}>{props.children}</h3>;
const P = (props: { children: React.ReactNode }) => <p style={{ maxWidth: "600px", margin: "0",
    textAlign: "left"
 }}>{props.children}</p>;

const HR = () => <hr style={{
    width: "100%",
    border: "none",
    borderBottom: "1px solid var(--gray3)",
    margin: "50px 0"
}}></hr>


export {
    H1,
    H2,
    H3,
    HR,
    P,
}