import React from 'react';
import { Button } from '@mtrifonov-design/pinsandcurves-specialuicomponents';
import { useNavigate } from 'react-router';
import URLS from '../Home/URLS';
import NavigationBar from '../NavigationBar/NavigationBar';

const { discordUrl, aboutUrl, resourcesUrl } = URLS;
import { P, H2, HR, H1, H3 } from './GenericStyleComponents';

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
                                Building a motion design platform<br></br> that puts plugins first.
                            </H1>
                        </div>
                        <P>
                            The motion-design industry depends on third-party plugins that turbo-charge creative software and simplify workflows.
                            <br></br>
                            <br></br>
                            We're here to push that idea to its limit:<br></br>
                            Picture a bare bones motion design platform that anyone can create plugins for easily.
                            Developers ship tools faster, designers mix and match them in seconds.
                            <br></br>
                            <br></br>
                            That's the vision behind <b>Pins & Curves.</b>

                        </P>
                        <Button text="Get updates" iconName='mail' bgColor='var(--yellow3)' color='var(--gray1)'
                            onClick={openSubscriptionForm}
                        ></Button>
                    </header>
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
                        <H2>Vision & Roadmap</H2>
                        <H3>Vision</H3>
                        <P>
                            Our goal is to build a platform that hosts a variety of tools for motion design professionals.
                            <br></br>
                            <br></br>
                            We want to work together with independent developers to bring this vision to life in a mutually beneficial way.
                            <br></br>
                            <br></br>
                            We understand our role as providing a platform and building infrastructure that allows developers to create tools that are easy to use and distribute.
                            Amongst other things, we aspire to offer developers the following affordances to more easily build creative tools:
                            <br></br>
                            <br></br>
                            <ul>
                                <li>
                                    <b>Timeline editor:</b><br></br>
                                    A clean, generic UI for keyframing animation
                                </li>
                                <br></br>
                                <li>
                                    <b>Multi-format export API:</b><br></br>
                                    Let users export images and videos with ease
                                </li>
                                <br></br>
                                <li>
                                    <b>UI component library:</b><br></br>
                                    Plug-and-play sliders, color pickers, and more
                                </li>
                                <br></br>
                                <li>
                                    <b>Cross-tool workflows:</b><br></br>
                                    Make your tool part of a bigger pipeline—connect it to inputs and outputs from other tools, including ones built by others
                                </li>
                                <br></br>
                                <li>
                                    <b>Built-in distribution:</b><br></br>
                                    Let users discover and use your tool directly on the platform
                                </li>
                                <br></br>
                                <li>
                                    <b>AI access layer:</b><br></br>
                                    Integrate powerful generative features without the boilerplate
                                </li>
                                <br></br>
                                <li>
                                    <b>Tool analytics:</b><br></br>
                                    Understand how your tool is used and improve it over time
                                </li>
                                <br></br>
                                <li>
                                    <b>Monetization (optional):</b><br></br>
                                    Built-in payments if you want to charge for your tool
                                </li>
                            </ul>


                        </P>

                        <br></br>
                        <H3>Roadmap</H3>
                        <P>
                            In the first phase, we are focusing on sketching out the UX of our platform and building a few simple tools
                            to be able to provide a working, end-to-end demonstration of our vision.<br></br><br></br>
                            On the engineering side, we are iterating on our plugin architecture,
                            and developing the affordances we want to offer developers to build their tools.
                            <br></br><br></br>
                            Once our initial platform is up and running and has been tested in production,
                            we hope to open up our platform to a small group of developers to start building their own tools.
                            In this phase, we want to work closely with developers to understand their needs and pain points,
                            and iterate on our platform to better serve them.
                            <br></br><br></br>
                            In the long run, we want to open up our platform to a wider audience of developers and users,
                            and build a vibrant ecosystem of tools and plugins that can be used by anyone.





                        </P>

                        <br></br>

                        <H3>Get in touch</H3>
                        <P>
                            Are you building creative tools?
                            We'd love to hear how we can make your life easier.
                            Help us shape a platform that truly supports developers like you.
                            <br></br><br></br>
                            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                                <GetInTouchButton />
                            </div>

                        </P>
                    </section>
                    <br></br>


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
