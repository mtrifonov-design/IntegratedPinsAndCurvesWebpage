import NavArea from "./NavArea";
import Link from "next/link";

export default function NavBar() {
  return (
    <>
    <header style={{
        display: "flex",
        justifyContent: "space-between",
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        height: "70px",
        backgroundColor: "black",
        //borderBottom: "1px solid var(--gray5)",
        paddingLeft: "30px",
        paddingRight: "30px",
        zIndex: 100,
    }}>
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "8px",
            position: "relative",
            zIndex: 101,
        }}>
            <Link href="/">
            <img src="/LOGO.svg" alt="Pins and Curves Logo" style={{
                height: "40px",
            }} />
            </Link>
            <strong style={{
                backgroundColor: "var(--danger)",
                padding: "5px",
                borderRadius: "var(--borderRadiusSmall)",
                color: "var(--gray1)",
                fontSize: "0.6em",
            }}>BETA</strong>
        </div>
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}><NavArea /></div>
    </header>
    <div style={{
        height: "70px",
        width: "100%"
    }}></div>
    </>
  );
};