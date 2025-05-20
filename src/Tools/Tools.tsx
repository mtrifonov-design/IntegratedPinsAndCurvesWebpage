import React from 'react';
import { Button } from '@mtrifonov-design/pinsandcurves-specialuicomponents';
import { useNavigate } from 'react-router';
import URLS from '../Home/URLS';
import NavigationBar from '../NavigationBar/NavigationBar';

const { discordUrl, aboutUrl, resourcesUrl } = URLS;
import { P, H2, HR, H1 } from './GenericStyleComponents';

const openSubscriptionForm = () => {
    window.open("http://eepurl.com/i6WBsQ", "_blank");
}

function ToolPreview({ stillSrc, videoSrc, alt }: { stillSrc: string, videoSrc: string, alt: string }) {
    const [hovered, setHovered] = React.useState(false);
    const [videoLoaded, setVideoLoaded] = React.useState(false);
    const videoRef = React.useRef<HTMLVideoElement>(null);
    const ambientRef = React.useRef<HTMLVideoElement>(null);

    React.useEffect(() => {
        if (videoRef.current) videoRef.current.load();
        if (ambientRef.current) ambientRef.current.load();
    }, [videoSrc]);

    // Play/pause both videos on hover
    React.useEffect(() => {
        if (hovered && videoLoaded) {
            if (videoRef.current) {
                videoRef.current.currentTime = 0;
                videoRef.current.play();
            }
            if (ambientRef.current) {
                ambientRef.current.currentTime = 0;
                ambientRef.current.play();
            }
        } else {
            if (videoRef.current) {
                videoRef.current.pause();
                videoRef.current.currentTime = 0;
            }
            if (ambientRef.current) {
                ambientRef.current.pause();
                ambientRef.current.currentTime = 0;
            }
        }
    }, [hovered, videoLoaded]);

    return (
        <div
            style={{
                width: "100%",
                aspectRatio: "16/9",
                position: "relative",
                borderRadius: "var(--borderRadiusSmall)",
                overflow: "hidden",
                cursor: "pointer",
                background: "#222"
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Ambient blurred video background */}
            {hovered && videoLoaded && (
                <div style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 0,
                    pointerEvents: "none",
                    overflow: "hidden",
                }}>
                    <video
                        ref={ambientRef}
                        src={videoSrc}
                        style={{
                            width: "200%",
                            height: "200%",
                            position: "absolute",
                            top: "-50%",
                            left: "-50%",
                            objectFit: "cover",
                            filter: "blur(40px) brightness(0.7)",
                        }}
                        muted
                        loop
                        playsInline
                        preload="auto"
                        aria-hidden="true"
                    />
                    {/* Radial mask overlay: fade to black in center, more visible at edges */}
                    <div style={{
                        position: "absolute",
                        inset: 0,
                        pointerEvents: "none",
                        background: "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.2) 80%, rgba(0,0,0,0.8) 100%)",
                        zIndex: 1,
                    }} />
                </div>
            )}
            {/* Main preview still/video */}
            <img
                src={stillSrc}
                alt={alt}
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: hovered && videoLoaded ? "none" : "block",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 2,
                }}
                draggable={false}
            />
            <video
                ref={videoRef}
                src={videoSrc}
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: hovered && videoLoaded ? "block" : "none",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 2,
                }}
                muted
                loop
                playsInline
                preload="auto"
                onLoadedData={() => setVideoLoaded(true)}
            />
        </div>
    );
}

const PinsAndCurvesLandingPage: React.FC = () => {
    const navigate = useNavigate();
    const isMobile = window.innerWidth < 768;

    return (
        <div style={{
            fontFamily: "Roboto, sans-serif",
            fontSize: isMobile ? "1rem" : "1.2rem",
            backgroundColor: "black",
            color: "var(--gray7)",
            paddingTop: "50px",
            paddingBottom: "50px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflowY: "auto",
            overflowX: "hidden",
            height: "100vh",
            width: "100vw",
        }}>
            <NavigationBar {...{ openSubscriptionForm, isMobile }} />
            <br></br>
            <>
                <div style={{
                    maxWidth: isMobile ? "100vw" : "1600px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}>
                    {/* -----------------------  Hero Section --------------------------- */}
                    <header id="hero" style={{
                        textAlign: 'center', padding: '50px 20px',
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: "20px",

                    }}>
                        <div>
                            <H1>
                                ✨ Tools for motion designers ✨
                            </H1>
                        </div>

                    </header>

                    <section id="cta" style={{
                        textAlign: 'center',
                        padding: '50px 20px',
                        display: "flex",
                        flexDirection: "row",
                        gap: "20px",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        {/* Spaghetti Tool Box */}
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "500px",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "2px solid var(--gray2)",
                            paddingTop: "40px",
                            paddingBottom: "40px",
                            paddingLeft: "20px",
                            paddingRight: "20px",
                            borderRadius: "var(--borderRadiusSmall)",
                            overflow: "hidden",
                        }}>
                            <ToolPreview
                                stillSrc="/media/toolpreviews/spaghetti_still.jpg"
                                videoSrc="/media/toolpreviews/spaghetti_video.mp4"
                                alt="Spaghetti tool preview"
                            />
                            <H2>cyber spaghetti</H2>
                            <P>
                                create warp speed animations
                                <br></br>
                                <br></br>
                            </P>
                            <Button text="Run" iconName='open_in_new' 
                                bgColor='var(--green3)' color='var(--gray8)'
                                hoverBgColor='var(--green2)' hoverColor='var(--gray8)'
                                onClick={() => {
                                    window.open("https://run.pinsandcurves.app/?template=spaghetti", "_blank");
                                }}
                            ></Button>
                        </div>
                        {/* Lissajous Tool Box */}
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "500px",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "2px solid var(--gray2)",
                            paddingTop: "40px",
                            paddingBottom: "40px",
                            paddingLeft: "20px",
                            paddingRight: "20px",
                            borderRadius: "var(--borderRadiusSmall)",
                            overflow: "hidden",
                        }}>
                            <ToolPreview
                                stillSrc="/media/toolpreviews/lissajous_still.jpg"
                                videoSrc="/media/toolpreviews/lissajous_video.mp4"
                                alt="Lissajous tool preview"
                            />
                            <H2>liquid lissajous</H2>
                            <P>
                                create beautiful animated gradients
                                <br></br>
                                <br></br>
                            </P>
                            <Button text="Run" iconName='open_in_new' 
                                bgColor='var(--green3)' color='var(--gray8)'
                                hoverBgColor='var(--green2)' hoverColor='var(--gray8)'
                                onClick={() => {
                                    window.open("https://run.pinsandcurves.app/?template=lissajous", "_blank");
                                }}
                            ></Button>
                        </div>
                    </section>
                    <H2>... more tools are coming soon 🕙</H2>
                                            <P>
                            Sign up to our newsletter to get updates when new tools are released.
                        </P>
                        <br></br>
                        <Button text="Get updates" iconName='mail' bgColor='var(--yellow3)' color='var(--gray1)'
                            onClick={openSubscriptionForm}
                        ></Button>



                    <br></br>

                    <HR></HR>
                    {/* ----------------------- Roadmap section --------------------------- */}
                    <section id="cta" style={{
                        textAlign: 'center',
                        padding: '50px 20px',
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                    <H2>help us make tools 🔧</H2>
                    <P>
                        Do you have an idea for a tool that would make your life easier as a motion designer?
                        Or if you're technically minded, do you want to develop a tool together with us? 
                    </P>
                    <br></br>
                        <GetInTouchButton></GetInTouchButton>
                    </section>
                    
                    <HR></HR>
                    {/* -----------------------  Footer --------------------------- */}
                    <section id="end" style={{
                        padding: '50px 20px', display: "flex",

                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "20px",
                        maxWidth: "100vw",
                        flexWrap: "wrap",
                    }}>

                        Pins And Curves, 2025 ©

                        <span style={{ textDecoration: "underline", cursor: "pointer" }} onClick={() => navigate("/privacy-policy")}>Privacy Policy</span>
                        <span style={{ textDecoration: "underline", cursor: "pointer" }} onClick={() => navigate("/imprint")}>Imprint</span>
                    </section>

                </div>

            </>
        </div>
    );
};


function GetInTouchButton() {
    const [clicked, setClicked] = React.useState(false);

    return (
        <>
        <Button text="Get in touch" iconName='sms' 
            onClick={() => setClicked(true)}
        ></Button>
        {clicked && <P><br></br>Please write an email to mtrifonov.design@gmail.com</P>}
        </>

    );
}

export default PinsAndCurvesLandingPage;
