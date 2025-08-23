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
        }}>
            <div>© 2025 Pins and Curves.</div>
            <TextLink href="/privacy">Privacy Policy</TextLink>
            <TextLink href="/imprint">Imprint</TextLink>
            <TextLink href="/about">About</TextLink>
            <TextLink href="/tools">Tools</TextLink>
        </footer>
    )
}