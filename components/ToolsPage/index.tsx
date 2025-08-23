import NewsletterButton from "./NewsletterButton"
import ToolBox from "./ToolBox"

export default function ToolsPage() {
    return (
        <div style={{
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            minHeight: "100dvh",
        }}>
        <div style={{
            maxWidth: "1600px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "80px"
        }}>
            <section style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "60px",
                marginTop: "75px",
            }}>
                <div style={{padding: "10px"}}>
                    <h1 style={{textAlign: "center"}}>Tools for motion designers</h1>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "20px",
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}>
                    <ToolBox
                        stillSrc="/media/toolpreviews/echoknightstill_p.webp"
                        videoSrc="/media/toolpreviews/echoknightpreview_c.mp4"
                        alt="Lissajous tool preview"
                        title="echo knight"
                        description={<><span>turn your images into hypnotic ripple tunnels</span><br /><br /></>}
                        buttonText="Run"
                        buttonUrl="https://run.pinsandcurves.app/?template=echoknight"
                        showBadge={true}
                        badgeText="NEW"
                        aboutRoute="/tools/echoknight"
                    />
                    <ToolBox
                        stillSrc="/media/toolpreviews/liquidlissajousstill_p.webp"
                        videoSrc="/media/toolpreviews/liquidlissajouspreview_c.mp4"
                        alt="Lissajous tool preview"
                        title="liquid lissajous"
                        description={<><span>create beautiful animated gradients</span><br /><br /></>}
                        buttonText="Run"
                        buttonUrl="https://run.pinsandcurves.app/?template=liquidlissajous"
                        aboutRoute="/tools/liquidlissajous"
                    />
                    <ToolBox
                        stillSrc="/media/toolpreviews/cybspagstill_p.webp"
                        videoSrc="/media/toolpreviews/cybspagpreview_c.mp4"
                        alt="Spaghetti tool preview"
                        title="cyber spaghetti"
                        description={<><span>create warp speed animations</span><br /><br /></>}
                        buttonText="Run"
                        buttonUrl="https://run.pinsandcurves.app/?template=cyberspaghetti"
                        aboutRoute="/tools/cyberspaghetti"
                    />
                </div>
            </section>

            <section id="cta" style={{
                textAlign: 'center',
                padding: '20px 40px',
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                gap: "1em",
            }}>
                    <h3 style={{
                        color: 'var(--gray8)'
                    }}>More tools are coming soon.</h3>
                    <p style={{
                        color: 'var(--gray6)'
                    }}>
                        Sign up to our newsletter to get updates when new tools are released.
                    </p>

                    <NewsletterButton />

            </section>
            <hr style={{width:"100%"}}></hr>

            {/* ----------------------- Roadmap section --------------------------- */}
            <section id="cta" style={{
                textAlign: 'center',
                padding: '20px 40px',
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                gap: "1em",
            }}>
                <h2>Say hi!</h2>
                <p style={{
                    maxWidth: "500px",
                    color: 'var(--gray6)',
                }}>
                    You have an idea for a tool that would make your life easier?
                    Or just want to say hi?
                    Reach out to <strong style={{ color: "white" }}>martin@pinsandcurves.app</strong> or
                    message us on <a href="https://www.instagram.com/pinsandcurves/"
                        target="_blank" rel="noopener noreferrer"
                        style={{ color: "var(--continuousBlue3)", textDecoration: "underline" }}
                    >instagram</a>, we&apos;d love to hear from you!

                </p>
                <br></br>
            </section>
        </div>
        </div>
    )

}