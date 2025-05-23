import URLS from '../Home/URLS';
import React from 'react';
import { Button } from '@mtrifonov-design/pinsandcurves-specialuicomponents';
import { useNavigate } from 'react-router';

const { discordUrl } = URLS;


const Menu = (p: {
    openSubscriptionForm: () => void
}) => {
    const navigate = useNavigate();
    const { openSubscriptionForm } = p;
    return (

        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "calc(100vh - 70px)",
            gap: "40px",
            justifyContent: "center",
        }}>
            <a onClick={() => navigate("/tools")} style={{ color: "var(--gray7)", textDecoration: "underline", cursor: "pointer" }}>Tools</a>
            <a onClick={() => navigate("/about")} style={{ color: "var(--gray7)", textDecoration: "underline", cursor: "pointer" }}>About</a>
            <a href={discordUrl} style={{ color: "var(--gray7)" }}>Discord</a>
            <Button text="Get updates" iconName='mail' bgColor='var(--yellow3)' color='var(--gray1)'
                onClick={openSubscriptionForm}
            ></Button>
        </div>
    );
}

function NavigationBar(p:
    { 
        openSubscriptionForm: () => void 
    }
) {
    const {  openSubscriptionForm } = p;

    const isMobile = window.innerWidth < 768;
    const [menuOpen, setMenuOpen] = React.useState(false);
    const navigate = useNavigate();

    return menuOpen ? <Menu {...{openSubscriptionForm}} /> : <div style={{
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

                            style={{ fontSize: "30px" }} className="materialSymbols">{menuOpen ? "close" : "menu"}</span> :
                        (<>

                            <a onClick={() => navigate("/tools")} style={{ color: "var(--gray7)", textDecoration: "underline", cursor: "pointer" }}>Tools</a>
                            <a onClick={() => navigate("/about")} style={{ color: "var(--gray7)", textDecoration: "underline", cursor: "pointer" }}>About</a>
                            <a href={discordUrl} style={{ color: "var(--gray7)" }}>Discord</a>

                            <Button text="Get updates" iconName='mail' bgColor='var(--yellow3)' color='var(--gray1)'
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
                backgroundColor: "black",
                opacity: 0.75,
            }}></div>

        </div>
}

export default NavigationBar;