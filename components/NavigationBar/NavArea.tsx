
"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "@mtrifonov-design/pinsandcurves-design";
import TextLink from "../TextLink";
import { usePathname } from "next/navigation";

const openSubscriptionForm = () => {
    window.open("http://eepurl.com/i6WBsQ", "_blank");
}



export default function NavArea() {

    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);


    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const mobileNavStyle: React.CSSProperties = {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "50px",
        fontSize: "2.25em",
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
        zIndex: 99,
        //paddingTop: "100px",
        display: menuOpen ? "flex" : "none",
        color: "var(--gray7)",
    };

    const desktopNavStyle: React.CSSProperties = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        height: "70px",
        zIndex: 100,
        color: "var(--gray7)",
        position: "relative",
    };

    return (
        <>
            <nav style={isMobile ? mobileNavStyle : desktopNavStyle}>
                <TextLink href="/tools" onClick={() => { setMenuOpen(false); }}>Tools</TextLink>
                <TextLink href="/about" onClick={() => { setMenuOpen(false); }}>About</TextLink>
                <a href="https://discord.gg/YydHcY2m9A" target="_blank" rel="noopener noreferrer">
                    <Image src="/assets/socials/discord.svg" alt="Discord Icon"
                        width={isMobile ? 48 : 24} height={isMobile ? 48 : 24}
                    />
                </a>
                <a href="https://www.instagram.com/pinsandcurves/" target="_blank" rel="noopener noreferrer">
                    <Image src="/assets/socials/instagram.svg" alt="Instagram Icon"
                        width={isMobile ? 48 : 24} height={isMobile ? 48 : 24} />
                </a>
                {isMobile ?
                    <div style={{
                        backgroundColor: "var(--yellow3)",
                        color: "var(--gray1)",
                        paddingTop: "6px",
                        paddingBottom: "6px",
                        paddingLeft: "20px",
                        paddingRight: "20px",
                        gap: "10px",
                        borderRadius: "var(--borderRadiusSmall)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                    }}
                        onClick={openSubscriptionForm}
                    ><div className="materialSymbols">mail</div><div style={{textDecoration: "underline"}}>Newsletter</div></div>
                    :
                    <Button text="Get updates" iconName='mail' bgColor='var(--yellow3)' color='var(--gray1)'
                        onClick={openSubscriptionForm}

                    ></Button>
                }
                


            </nav>
            {isMobile && <div className="materialSymbols"
                onClick={() => setMenuOpen(!menuOpen)}
                style={{
                    zIndex: 101,
                    color: "var(--gray7)",
                    position: "relative",
                    fontSize: "30px",
                    cursor: "pointer",
                }}
            >
                {menuOpen ? "close" : "menu"}
            </div>}

        </>

    )
}