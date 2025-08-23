import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About | Pins And Curves",
  description: "Tools for motion designers",
};

export default function AboutPage() {
  return (
    <div style={{
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      minHeight: "100dvh",
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
        <h3 style={{ color: "var(--yellow2)" }}>Our mission</h3>
        <h1 style={{ textAlign: "center", color: "var(--yellow1)", lineHeight: "1.5", maxWidth: "800px" }}>
          We want to make it very easy <br></br>
          for creative coders to build tools for motion designers.</h1>

        <br></br><br></br><br></br>
        <h3 style={{ color: "var(--yellow2)" }}>Who we are</h3>

        Pins And Curves is an early stage creative software startup, inspired by the vibrant plugin communities around After Effects, Blender, and countless online tools. These show us that a single person’s side project can change how thousands of people create.

        We think the future of design tools should be shaped by a crowd of curious coders, not just a few giant companies. After all, the tools we use shape the work we create - so the more diverse, playful and experimental the tools, the brighter the creative world becomes.

        <br></br><br></br><br></br>
        <h3 style={{ color: "var(--yellow2)" }}>What we&apos;re building</h3>

        We’re working on a new kind of motion design platform. Imagine your favorite motion design software - After Effects, Cavalry, take your pick. Get rid of all the built-in effects and strip it back to just a bare-bones timeline with keyframes. Now bring all the effects back in — but this time, every single one is a plugin, built by a community of creative coders.

        Some plugins are free, some are paid, and they all live in a built-in “app store”. Adding new effects is as easy as dragging them in. That’s our vision.<br></br><br></br>

        Of course, building something like this is a big job. It needs to be fast, secure, and - most importantly - worth using. That means we need enough creative coders out there making the quirkly little tools that give the platform life.

        <br></br><br></br><br></br>
        <h3 style={{ color: "var(--yellow2)" }}>Our first steps</h3>

        In the meantime, while we’re working on our platform, we’re also making tiny tools ourselves. Its our way of testing the tech we’re developing, connecting with the creative community, and providing value right now - not just “someday”.

        If you want to follow along, subscribe to our newsletter - or just say hi.

        <br></br><br></br><br></br>
        <h3 style={{ color: "var(--yellow2)" }}>Get in touch</h3>
        <div style={{}}>                    Reach out to <strong style={{ color: "var(--yellow1)" }}>martin@pinsandcurves.app</strong> or
          message us on <a href="https://www.instagram.com/pinsandcurves/"
            target="_blank" rel="noopener noreferrer"
            style={{ color: "var(--continuousBlue3)", textDecoration: "underline" }}
          >instagram</a>, we&apos;d love to hear from you!</div>

      </div>
    </div>
  );
}