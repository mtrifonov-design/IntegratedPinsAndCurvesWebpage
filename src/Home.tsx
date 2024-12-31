import React from 'react';
import { Button } from '@mtrifonov-design/pinsandcurves-specialuicomponents';
import { Navigate, useNavigate } from 'react-router';


const H1 = (props: { children: React.ReactNode }) => <h1 style={{ fontSize: '2.75em', margin: '0.75em 0', fontFamily: "nudicamedium", color: "var(--gray8)" }}>{props.children}</h1>;
const H2 = (props: { children: React.ReactNode, style?: any }) => <h2 style={{ fontSize: '1.75em', maxWidth: "600px", margin: '1em 0', fontFamily: "nudicamedium", color: "var(--gray8)", ...props.style }}>{props.children}</h2>;
const P = (props: { children: React.ReactNode }) => <p style={{ maxWidth: "500px", margin: "0" }}>{props.children}</p>;

const discordUrl = "https://discord.gg/TU8G3J5v";
const aboutUrl = "https://pinsandcurves.notion.site/About-1695fdbd72d380f4b03dd67972d6abae?pvs=4"
const resourcesUrl = "https://pinsandcurves.notion.site/Pins-And-Curves-1695fdbd72d380a78b03e586c2802150?pvs=4"


const Menu = () => {
    return (

            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "calc(100vh - 70px)",
                gap: "40px",
                justifyContent: "center",
            }}>
                <a href={discordUrl} style={{ color: "var(--gray7)" }}>Discord</a>
                <a href={resourcesUrl} style={{ color: "var(--gray7)" }}>Resources</a>
                <a href={aboutUrl} style={{ color: "var(--gray7)" }}>About</a>
                <Button text="Request Early Access" iconName='mail' bgColor='var(--yellow3)' color='var(--gray1)'
                    onClick={openSubscriptionForm}
                ></Button>
            </div>
    );
}


const openSubscriptionForm = () => {
    window.open("http://eepurl.com/i6WBsQ", "_blank");
}

const PinsAndCurvesLandingPage: React.FC = () => {

    const isMobile = window.innerWidth < 800;
    const under2000 = window.innerWidth < 2000;

    const [menuOpen, setMenuOpen] = React.useState(false);
    const navigate = useNavigate();


    return (
        
        <div style={{
            fontFamily: "Roboto, sans-serif",
            fontSize: isMobile? "1rem" : "1.2rem",
            backgroundColor: "var(--gray1)",
            color: "var(--gray7)",
            padding: "50px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflowY: "auto",
            height: "100vh",
        }}>
            <div style={{
                position: "fixed",
                top: "0",
                left: "0",
                width: "100%",
                height: "70px",
                // borderBottom: "1px solid var(--gray3)",
                color: "var(--gray7)",
                zIndex: 100,
            }}>
            <div style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 30px",
                zIndex: 101,
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "8px",
                }}>
                <img src="/media/LOGO.svg" alt="Pins and Curves" style={{
                    height: "40px",
                }} />
                <strong style={{
                    backgroundColor: "var(--danger)",
                    padding: "5px",
                    borderRadius: "var(--borderRadiusSmall)",
                    color: "var(--gray1)",
                    fontSize: "0.5em",
                }}>BETA</strong>
                </div>

                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "20px",
                }}>
                    {isMobile ?
                    <span 
                        onClick={() => setMenuOpen(!menuOpen)}
                    
                    style={{fontSize: "30px"}} className="materialSymbols">{menuOpen ? "close" : "menu"}</span>:
                    (<>
                    <a href={discordUrl} style={{ color: "var(--gray7)" }}>Discord</a>                    
                    <a href={resourcesUrl} style={{ color: "var(--gray7)" }}>Resources</a>
                    <a href={aboutUrl} style={{ color: "var(--gray7)" }}>About</a>
                    <Button text="Request Early Access" iconName='mail' bgColor='var(--yellow3)' color='var(--gray1)'
                    onClick={openSubscriptionForm}
                    ></Button>
                    
                    </>

                    )
                
                    }


                </div>


            </div>

            <div style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                backgroundColor: "var(--gray1)",
                opacity: 0.75,
            }}></div>

            </div>
            <br></br>

            {menuOpen ? <Menu /> :
                <>

<div style={{
                maxWidth: isMobile ?  "100vw" : "1600px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
                {/* Hero Section */}
                <header id="hero" style={{
                    textAlign: 'center', padding: '50px 20px',
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "20px",

                }}>
                    <img src="/media/screenshot3.png" alt="Overview 1" style={{
                        width: `clamp(100px, ${under2000 ? "600px" : "1000px"}, calc(100vw - 100px))`,
                        filter: "drop-shadow(0px 0px 30px rgba(0,0,0,0.7))", borderRadius: "var(--borderRadiusSmall)"

                    }} />
                    <H1>Pins and Curves:<br></br> Motion Design, Reimagined</H1>
                    <P>
                    Pins and Curves is a free motion design tool that runs in your browser. With its unique signal-based approach,
                    it combines manual keyframing with procedural elements, making your animation workflow smarter.
                    </P>
                    <Button text="Request Early Access" iconName='mail' bgColor='var(--yellow3)' color='var(--gray1)'
                        onClick={openSubscriptionForm}
                    ></Button>

                </header>

                {/* Overview Section */}
                <hr style={{
                        width: "100%",
                        border: "none",
                        borderBottom: "1px solid var(--gray3)",
                        margin: "50px 0"
                    }}></hr>
                <section id="overview" style={{
                    padding: '0px 20px',
                    display: isMobile ? "none" : "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "50px",
                    width: isMobile ? "100vw" : undefined,
                }}>


                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        <H2>Signals: The Building Blocks of Motion</H2>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: "40px",
                            marginBottom: "100px",
                            flexWrap: "wrap",
                            marginTop: "50px"

                        }}>
                            
                            <P>
                                <strong>WHAT ARE SIGNALS?</strong><br></br>
                                Signals are simply values that change over time.
                                Create Signals by placing Pins (manual keyframes) and shaping the curves between them using expressions or presets.
                                Apply signals to your object’s visual properties to bring them to life.
                                <br></br><br></br>
                            </P>

                            <img src="/media/singlesignal.png" alt="Overview 1" style={{ width: isMobile ? "calc(100vw - 100px)" : "1000px", }} />
                        </div>

                        <div style={{
                            marginBottom: "100px",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: "40px",
                            flexWrap: "wrap",
                        }}>
                            <img src="/media/combined.png" alt="Overview 1" style={{ width: isMobile ? "calc(100vw - 100px)" : "1000px", }} />
                            <P>
                                <strong>COMBINING SIGNALS</strong><br></br>
                                Layer and combine simple Signals using operations like addition or multiplication to create intricate, dynamic motion. Need to make a change? Just tweak an individual Signal, and all related animations adapt automatically.
                                <br></br><br></br>
                                <br></br><br></br>
                            </P>

                        </div>

                    </div>

                    <hr style={{
                        width: "100%",
                        border: "none",
                        borderBottom: "1px solid var(--gray3)",
                    }}></hr>
                    <div style={{
                        marginBottom: "100px",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "80px",
                    }}>

                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: "40px",

                        }}>
                            <img src="/media/JavaScript-logo.png" alt="JavaScript Logo" style={{ width: "100px" }} />
                            <img src="/media/HTML5_Logo.svg" alt="HTML Logo" style={{ width: "100px" }} />
                        </div>
                        <div >
                            <H2>Open standards, endless possibilities</H2>
                            <P>
                                Don’t let proprietary file formats limit what you can make. Design scenes with web-native formats like HTML and
                                SVG. Start by importing SVGs from tools like Illustrator—no coding required. For those who want more, extend
                                functionality with JavaScript to create intricate, rigged setups.
                            </P>

                        </div>


                    </div>
                                        <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "center",
                        gap: "100px",
                        padding: "50px",
                        paddingBottom: "100px",
                        width: "100%",
                        backgroundColor: "var(--gray2)",
                        borderRadius: "var(--borderRadiusSmall)",
                        marginBottom: "100px"
                    }}>

                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            maxWidth: "500px",
                            width: "30%",

                        }}>
                        <span className="materialSymbols" style={{ fontSize: "50px", marginBottom: "20px" }}>speed</span>
                        <p>
                        <strong style={{ color: "white", textAlign: "center" }}>STAY AGILE, ITERATE FASTER</strong><br></br><br></br>
                        With Pins and Curves, your workflow keeps up with your ideas, no matter how fast they evolve. Automate repetitive tasks, experiment freely, and refine your animations without starting from scratch.
                        </p>
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        maxWidth: "500px",
                        width: "30%",
                    }}>
                        <span className="materialSymbols" style={{ fontSize: "50px", marginBottom: "20px" }}>code</span>
                        <p>
                            <strong style={{ color: "white", textAlign: "center" }}>CUSTOMIZE, AUTOMATE AND EXTEND</strong><br></br><br></br>
                            Pins and Curves integrates seamlessly with web technologies, empowering you to tailor your project to your vision—whether through simple tweaks or powerful scripting.
                        

                        </p>

                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        maxWidth: "500px",
                        width: "30%",
                    }}>
                        <span className="materialSymbols" style={{ fontSize: "50px", marginBottom: "20px" }}>key</span>
                        <p>
                            <strong style={{ color: "white", textAlign: "center" }}>ACCESSIBLE FOR EVERY CREATOR</strong><br></br><br></br>

Pins and Curves is free to use, with a forever-free tier that ensures everyone can start creating without barriers. Whether you're exploring new ideas or diving into advanced workflows, it’s always within reach.



                        </p>

                    </div>
                    </div>
                </section>



                {/* Demonstration Section */}
                <section id="demo" style={{ textAlign: 'center', padding: '50px 20px',
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
            
                }}>
                    <H2>See it in Action</H2>
                    <iframe 
                    style={{
                        width: isMobile ? "100vw" : undefined,
                        height: isMobile ? "calc(100vw * 0.5625)" : undefined,
                    }}
                    width={isMobile ? undefined : "1440"} height={isMobile ? undefined : "810"} src="https://www.youtube.com/embed/fHEpgb0IoYU?si=Ll6xT6PDo58MoO4A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen={true}></iframe>
                </section>

                {/* Call-to-Action Section */}


                <section id="cta" style={{ textAlign: 'center', padding: '50px 20px',
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <H2>Become a tester</H2>

                    <P>Join the early access program and let us know how we can make Pins and Curves work for you.</P>
                    <br></br>
                    <Button text="Request Early Access" iconName='mail' bgColor='var(--yellow3)' color='var(--gray1)'
                        onClick={openSubscriptionForm}
                    ></Button>
                    <div style={{display: isMobile ? "flex" : "none", flexDirection: "row", gap: "15px"}}>
                    <a href={discordUrl} style={{ color: "var(--gray7)",marginTop: "15px" }}>Discord</a>
                    <a href={resourcesUrl} style={{ color: "var(--gray7)", marginTop: "15px" }}>Resources</a>
                    <a href={aboutUrl} style={{ color: "var(--gray7)", marginTop: "15px" }}>About</a>
                    </div>
                </section>

                <hr style={{
                        width: "100%",
                        border: "none",
                        borderBottom: "1px solid var(--gray3)",
                        margin: "50px 0"
                    }}></hr>

                {/* Values Section */}
                <section id="values" style={{
                    padding: '50px',
                    borderRadius: "var(--borderRadiusSmall)",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start"
                }}>


                    <div style={{
                    }}>
                    <strong>OUR MISSION</strong>
                    <H2>Make Animation Smarter</H2>
                    <P>
                        Animation is inherently complex, but your tools shouldn’t make it harder. Pins and Curves is built on simple ideas that are easy to get started with, but are powerful enough to meet the complexity you need in your projects. By integrating with web technologies, it gives you the flexibility to customize and extend your animations effortlessly, leveraging existing javascript libraries. Whether you’re a designer, a developer, or somewhere in between, our mission is to help you create without limits.
                    </P>
                    </div>





                </section>

                <hr style={{
                        width: "100%",
                        border: "none",
                        borderBottom: "1px solid var(--gray3)",
                        margin: "50px 0"
                    }}></hr>



                {/* Vision Section */}
                <section id="end" style={{ padding: '50px 20px', display: "flex",
            
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "20px",
                }}>

                    Pins And Curves, 2024 ©
                    
                    <span style={{textDecoration: "underline", cursor: "pointer"}} onClick={() => navigate("privacy-policy")}>Privacy Policy</span>
                    <span style={{textDecoration: "underline", cursor: "pointer"}} onClick={() => navigate("imprint")}>Imprint</span>
                    <a href={discordUrl} style={{ color: "var(--gray7)" }}>Discord</a>

                    
                    
                    <a href={aboutUrl} style={{ color: "var(--gray7)" }}>Resources</a>
                    <a href={resourcesUrl} style={{ color: "var(--gray7)" }}>About</a>
                
                </section>

            </div>

                </>
            
            }

            

        </div>
    );
};

export default PinsAndCurvesLandingPage;
