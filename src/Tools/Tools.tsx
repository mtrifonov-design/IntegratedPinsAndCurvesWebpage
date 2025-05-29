import React, { useEffect } from 'react';
import { Button } from '@mtrifonov-design/pinsandcurves-specialuicomponents';
import { useNavigate } from 'react-router';
import NavigationBar from '../NavigationBar/NavigationBar';

import { P, H2, HR, H1 } from './GenericStyleComponents';

const openSubscriptionForm = () => {
    window.open("http://eepurl.com/i6WBsQ", "_blank");
}


interface ToolBoxProps {
    stillSrc: string;
    videoSrc: string;
    alt: string;
    title: string;
    description: React.ReactNode;
    buttonText: string;
    buttonUrl: string;
    buttonIcon?: string;
    buttonBgColor?: string;
    buttonColor?: string;
    buttonHoverBgColor?: string;
    buttonHoverColor?: string;
    isMobile?: boolean;
}

const ToolBox: React.FC<ToolBoxProps> = ({
    stillSrc,
    videoSrc,
    alt,
    title,
    description,
    buttonText,
    buttonUrl,
    buttonIcon = 'open_in_new',
    buttonBgColor = 'var(--green3)',
    buttonColor = 'var(--gray8)',
    buttonHoverBgColor = 'var(--green2)',
    buttonHoverColor = 'var(--gray8)',
    isMobile,
}) => {
    const [hovered, setHovered] = React.useState(false);
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "min(500px, calc(100vw - 40px))",
                margin: "10px",
                alignItems: "center",
                justifyContent: "center",
                border: hovered ? "2px solid var(--gray4)" : "2px solid var(--gray2)",
                paddingTop: "40px",
                paddingBottom: "40px",
                paddingLeft: "20px",
                paddingRight: "20px",
                borderRadius: "var(--borderRadiusSmall)",
                overflow: "hidden",
                // boxShadow: hovered ? "0 0 25px 6px var(--green1)" : undefined,
                // transition: "box-shadow 0.25s"
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <ToolPreview
                stillSrc={stillSrc}
                videoSrc={videoSrc}
                alt={alt}
                forceHover={hovered}
            />
            <H2>{title}</H2>
            <P>{description}</P>
            {isMobile ? 
            <Button
                text={"Not available on mobile"}
                iconName={"block"}
                onClick={() => {}}
            />
            : <Button
                text={buttonText}
                iconName={buttonIcon}
                bgColor={buttonBgColor}
                color={buttonColor}
                hoverBgColor={buttonHoverBgColor}
                hoverColor={buttonHoverColor}
                onClick={() => window.open(buttonUrl, "_blank")}
            />}

        </div>
    );
}

// Update ToolPreview to accept forceHover prop
function ToolPreview({ stillSrc, videoSrc, alt, forceHover }: { stillSrc: string, videoSrc: string, alt: string, forceHover?: boolean }) {
    const [hovered, setHovered] = React.useState(false);
    const [videoLoaded, setVideoLoaded] = React.useState(false);
    const videoRef = React.useRef<HTMLVideoElement>(null);
    const ambientRef = React.useRef<HTMLVideoElement>(null);

    const effectiveHover = typeof forceHover === 'boolean' ? forceHover : hovered;

    React.useEffect(() => {
        if (videoRef.current) videoRef.current.load();
        if (ambientRef && ambientRef.current) ambientRef.current.load();
    }, [videoSrc]);

    React.useEffect(() => {
        if (effectiveHover && videoLoaded) {
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
    }, [effectiveHover, videoLoaded]);

    return (
        <div
            style={{
                width: "100%",
                aspectRatio: "16/9",
                position: "relative",
                borderRadius: "var(--borderRadiusSmall)",
                overflow: "hidden",
                background: "#222"
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Main preview still/video */}
            <img
                src={stillSrc}
                alt={alt}
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: effectiveHover && videoLoaded ? "none" : "block",
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
                    display: effectiveHover && videoLoaded ? "block" : "none",
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
    
    useEffect(() => {
        if ((window as any).goatcounter) {
            (window as any).goatcounter.count({
                path:  "HOMEPAGE-TOOLS",
                event: true,
            })
        }
    }, []);

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
                        flexWrap: "wrap",
                        gap: "20px",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        <ToolBox
                            stillSrc="/media/toolpreviews/spaghetti_still.jpg"
                            videoSrc="/media/toolpreviews/spaghetti_video.mp4"
                            alt="Spaghetti tool preview"
                            title="cyber spaghetti"
                            description={<><span>create warp speed animations</span><br /><br /></>}
                            buttonText="Temporarily unavailable"
                            buttonIcon='block'
                            buttonBgColor='var(--gray3)'
                            buttonHoverBgColor='var(--gray4)'
                            buttonUrl="https://run.pinsandcurves.app/?template=cyberspaghetti"
                            isMobile={isMobile}
                        />
                        <ToolBox
                            stillSrc="/media/toolpreviews/lissajous_still.jpg"
                            videoSrc="/media/toolpreviews/lissajous_video.mp4"
                            alt="Lissajous tool preview"
                            title="liquid lissajous"
                            description={<><span>create beautiful animated gradients</span><br /><br /></>}
                            buttonText="Run"
                            buttonUrl="https://run.pinsandcurves.app/?template=liquidlissajous"
                            isMobile={isMobile}
                        />
                    </section>
                    <section id="cta" style={{
                        textAlign: 'center',
                        maxWidth: "100vw",
                        padding: '50px 40px',
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                    <H2>... more tools are coming soon 🕙</H2>
                                            <P>
                            Sign up to our newsletter to get updates when new tools are released.
                        </P>
                        <br></br>
                        <Button text="Get updates" iconName='mail' bgColor='var(--yellow3)' color='var(--gray1)'
                            onClick={openSubscriptionForm}
                        ></Button>



                    <br></br>
                    </section>
                    <HR></HR>
                    {/* ----------------------- Roadmap section --------------------------- */}
                    <section id="cta" style={{
                        textAlign: 'center',
                        maxWidth: "100vw",
                        padding: '50px 40px',
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
