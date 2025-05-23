import URLS from '../Home/URLS';
import React from 'react';
import { Button } from '@mtrifonov-design/pinsandcurves-specialuicomponents';
import { useNavigate } from 'react-router';

const { discordUrl } = URLS;

const NavLinks = ({ onNavigate, openSubscriptionForm }: { onNavigate: (path: string) => void, openSubscriptionForm: () => void }) => (
    <>
        <a onClick={() => onNavigate("/tools")} style={{ color: "var(--gray7)", textDecoration: "underline", cursor: "pointer" }}>Tools</a>
        <a onClick={() => onNavigate("/about")} style={{ color: "var(--gray7)", textDecoration: "underline", cursor: "pointer" }}>About</a>
        <a href={discordUrl} style={{ color: "var(--gray7)" }}>Discord</a>
        <Button text="Get updates" iconName='mail' bgColor='var(--yellow3)' color='var(--gray1)'
            onClick={openSubscriptionForm}
        ></Button>
    </>
);

const TopBar = ({ onMenuClick, showClose, onClose }: { onMenuClick?: () => void, showClose?: boolean, onClose?: () => void }) => (
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
            {showClose ? (
                <span
                    onClick={onClose}
                    style={{ fontSize: "30px", cursor: "pointer" }}
                    className="materialSymbols"
                >close</span>
            ) : (
                <span
                    onClick={onMenuClick}
                    style={{ fontSize: "30px", cursor: "pointer" }}
                    className="materialSymbols"
                >menu</span>
            )}
        </div>
    </div>
);

function NavigationBar({ openSubscriptionForm }: { openSubscriptionForm: () => void }) {
    const isMobile = window.innerWidth < 768;
    const [menuOpen, setMenuOpen] = React.useState(false);
    const navigate = useNavigate();

    const handleNavigate = (path: string) => {
        setMenuOpen(false);
        navigate(path);
    };

    if (isMobile) {
        return menuOpen ? (
            <div style={{
                position: "fixed",
                top: "0",
                left: "0",
                width: "100%",
                height: "70px",
                color: "var(--gray7)",
                zIndex: 100,
            }}>
                <TopBar showClose onClose={() => setMenuOpen(false)} />
                <div style={{
                    position: "fixed",
                    top: "0",
                    left: "0",
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: "black",
                    zIndex: 99,
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        height: "calc(100vh - 70px)",
                        gap: "40px",
                        justifyContent: "center",
                        marginTop: "70px"
                    }}>
                        <NavLinks onNavigate={handleNavigate} openSubscriptionForm={openSubscriptionForm} />
                    </div>
                </div>
            </div>
        ) : (
            <div style={{
                position: "fixed",
                top: "0",
                left: "0",
                width: "100%",
                height: "70px",
                color: "var(--gray7)",
                zIndex: 100,
            }}>
                <TopBar onMenuClick={() => setMenuOpen(true)} />
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
        );
    }

    // Desktop
    return (
        <div style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "70px",
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
                    <NavLinks onNavigate={navigate} openSubscriptionForm={openSubscriptionForm} />
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
    );
}

export default NavigationBar;