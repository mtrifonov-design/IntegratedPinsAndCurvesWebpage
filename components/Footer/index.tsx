import TextLink from "../TextLink";

export default function Footer() {
    return (
        <footer style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",

            justifyContent: "center",
            alignItems: "center",
            height: "100px",
            width: "100%",
            paddingLeft: "20px",
            paddingRight: "20px",
            flexWrap: "wrap",
        }}>
            <div style={{
                paddingBottom: "25px",
            }}>© 2025 Pins and Curves.</div>
            <div style={{
                display: "flex",
                gap: "20px",
                flexDirection: "row",
                paddingBottom: "25px",
            }}>
            <TextLink href="/privacy">Privacy Policy</TextLink>
            <TextLink href="/imprint">Imprint</TextLink>
            <TextLink href="/about">About</TextLink>
            <TextLink href="/tools">Tools</TextLink>
            </div>
        </footer>
    )
}