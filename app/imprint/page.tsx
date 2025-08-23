import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imprint",
  description: "Imprint information for Pins and Curves",
};

export default function ImprintPage() {
  return (
    <div style={{
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      minHeight: "100vh",
    }}>
      <div style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        fontSize: "1.3rem",
        lineHeight: "1.6",
        paddingTop: "40px",
        paddingLeft: "30px",
        paddingRight: "30px",
        paddingBottom: "100px",
        color: "var(--gray7)",
      }}>
        <h3 style={{ color: "var(--yellow2)" }}>Imprint</h3>

        This site is contained by Martin Trifonov. 
        <strong style={{ color: "var(--yellow1)" }}>martin@pinsandcurves.app</strong>
        Bruchsaler Strasse 4, Berlin, Germany.
        <br></br><br></br><br></br>
        
      </div>
    </div>
  );
}