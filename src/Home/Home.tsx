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

const PinsAndCurvesLandingPage: React.FC = () => {
    const navigate = useNavigate();
    const isMobile = window.innerWidth < 768;
    const under2000 = window.innerWidth < 2000;

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
                                Building a motion design tool<br></br> that puts plugins first.
                            </H1>
                        </div>
                        <P>
                            The motion-design industry depends on third-party plugins that turbo-charge creative software and simplify workflows.
                            <br></br>
                            <br></br>
                            We're here to push that idea to its limit:<br></br>
                            Picture a bare bones motion design tool that anyone can create plugins for easily.
                            Developers ship helpful tools faster, designers mix and match them in seconds.
                            <br></br>
                            <br></br>
                            That's the vision behind <b>Pins & Curves.</b>

                        </P>
                        <Button text="Get updates" iconName='mail' bgColor='var(--yellow3)' color='var(--gray1)'
                            onClick={openSubscriptionForm}
                        ></Button>
                    </header>
                    <HR></HR>
                    {/* ----------------------- Latest Experiment section --------------------------- */}
                    <section id="cta" style={{
                        textAlign: 'center',
                        padding: '50px 20px',
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        <H2>Our latest experiments</H2>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "2px solid var(--gray1)",
                            paddingTop: "40px",
                            paddingBottom: "40px",
                            paddingLeft: "20px",
                            paddingRight: "20px",
                            borderRadius: "var(--borderRadiusSmall)",
                        }}>
                            <img src="/media/cyberspagpreview.png" alt="Overview 1" style={{
                                width: `clamp(100px, ${under2000 ? "1000px" : "1200px"}, calc(100vw - 100px))`,
                                filter: "drop-shadow(0px 0px 30px rgba(0,0,0,0.7))", borderRadius: "var(--borderRadiusSmall)"
                            }} />
                            <H2>cyber spaghetti </H2>
                            <P>
                                Based on our previous p5js timeline experiment, we are building a simple tool that lets you create stylised "cyber spaghetti" animations.
                                <br></br>
                                <br></br>
                            </P>
                            <Button text="Run demo" iconName='open_in_new' 
                                bgColor='var(--green3)' color='var(--gray8)'
                                hoverBgColor='var(--green2)' hoverColor='var(--gray8)'
                                onClick={() => {
                                    window.open("https://run.pinsandcurves.app/?template=cyberspaghetti", "_blank");
                                }}
                            ></Button>
                        </div>
                        <br></br>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "2px solid var(--gray1)",
                            paddingTop: "40px",
                            paddingBottom: "40px",
                            paddingLeft: "20px",
                            paddingRight: "20px",
                            borderRadius: "var(--borderRadiusSmall)",
                        }}>
                            <img src="/media/p5timeline.png" alt="Overview 1" style={{
                                width: `clamp(100px, ${under2000 ? "1000px" : "1200px"}, calc(100vw - 100px))`,
                                filter: "drop-shadow(0px 0px 30px rgba(0,0,0,0.7))", borderRadius: "var(--borderRadiusSmall)"
                            }} />
                            <H2>timeline for p5js sketches </H2>
                            <P>
                                As a first milestone on our journey, we built a tool that lets you add a timeline to your p5.js sketches.
                                <br></br>
                                <br></br>
                                This was achieved by creating several <b>panel plugins</b>  that work together to create a unified animation experience.
                                <br></br>
                                Amongst them are a <b>timeline panel</b>, a <b>code editor panel</b>, a <b>preview panel</b>, and a <b>signal panel</b>.
                                <br></br>
                                <br></br>
                                Through this experiment, we are putting our initial plugin architecture to the test.
                                <br></br>
                                <br></br>
                            </P>
                            <Button text="Run demo" iconName='open_in_new' 
                                bgColor='var(--green3)' color='var(--gray8)'
                                hoverBgColor='var(--green2)' hoverColor='var(--gray8)'
                                onClick={() => {
                                    window.open("https://run.pinsandcurves.app/?template=default", "_blank");
                                }}
                            ></Button>
                        </div>
                        <br></br>


                        <div style={{ display: isMobile ? "flex" : "none", flexDirection: "row", gap: "15px" }}>

                            <a href={resourcesUrl} style={{ color: "var(--gray7)", marginTop: "15px" }}>Resources</a>
                            <a href={aboutUrl} style={{ color: "var(--gray7)", marginTop: "15px" }}>About</a>
                        </div>
                    </section>
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
                        <H2>Roadmap</H2>
                        <P>

                            What we're working on now,
                            <br></br>
                            and what we plan to do next.
                            <br></br>
                            <br></br>
                            {"{ under construction }"}
                        </P>
                        <br></br>

                        <div style={{ display: isMobile ? "flex" : "none", flexDirection: "row", gap: "15px" }}>

                            <a href={resourcesUrl} style={{ color: "var(--gray7)", marginTop: "15px" }}>Resources</a>
                            <a href={aboutUrl} style={{ color: "var(--gray7)", marginTop: "15px" }}>About</a>
                        </div>
                    </section>
                    <HR></HR>
                    {/* -----------------------  Call to action --------------------------- */}
                    <section id="cta" style={{
                        textAlign: 'center',
                        padding: '50px 20px',
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        <H2>Become an early adopter</H2>

                        <P>
                            Subscribe to our newsletter to learn more about the project and get early access to beta launches and updates.
                            <br></br><br></br>
                            It's 100% free, and you can cancel anytime.
                        </P>
                        <br></br>
                        <Button text="Get updates" iconName='mail' bgColor='var(--yellow3)' color='var(--gray1)'
                            onClick={openSubscriptionForm}
                        ></Button>
                        <div style={{ display: isMobile ? "flex" : "none", flexDirection: "row", gap: "15px" }}>

                            <a href={resourcesUrl} style={{ color: "var(--gray7)", marginTop: "15px" }}>Resources</a>
                            <a href={aboutUrl} style={{ color: "var(--gray7)", marginTop: "15px" }}>About</a>
                        </div>
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
                        <a href={discordUrl} style={{ color: "var(--gray7)" }}>Discord</a>
                    </section>

                </div>

            </>
        </div>
    );
};

export default PinsAndCurvesLandingPage;
