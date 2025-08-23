
"use client";
import React, { useEffect } from "react";
import { Button } from "@mtrifonov-design/pinsandcurves-design";
import Link from "next/link";
import TextLink from "../TextLink";

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
    badgeText?: string;
    showBadge?: boolean;
    aboutRoute?: string; // Optional route for more details
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
    badgeText = "NEW",
    showBadge = false,
    aboutRoute = "/tools",
}) => {
    const [hovered, setHovered] = React.useState(false);
    const [isMobile, setIsMobile] = React.useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gridTemplateRows: "auto 1fr",
                width: "min(350px, calc(100vw - 40px))",
                margin: "10px",

                border: hovered ? "2px solid var(--gray6)" : "2px solid var(--gray2)",
                borderRadius: "var(--borderRadiusSmall)",
                //overflow: "hidden",
                padding: "5px",
                // boxShadow: hovered ? "0 0 25px 6px var(--green1)" : undefined,
                // transition: "box-shadow 0.25s"
                cursor: "pointer",
                position: "relative",
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
            <div style={{
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "10px",
                width: "100%",
            }}>
                <div>
                    <div style={{
                        marginBottom: '10px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <h3>{title}</h3>

                        {showBadge &&
                            <div style={{
                                backgroundColor: "var(--danger)",
                                fontSize: "0.5em",
                                padding: "2px 5px",
                                fontWeight: "bold",
                                marginLeft: "8px",
                                color: "var(--gray1)",
                                textTransform: "uppercase",
                                borderRadius: "var(--borderRadiusSmall)",
                            }}>{badgeText}</div>
                        }
                    </div>
                    <div style={{
                        fontSize: '1.1em',
                        color: 'var(--gray5)',
                        textAlign: 'center',
                    }}>{description}</div>
                </div>
                <Link style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 1,
                }} href={aboutRoute}></Link>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "20px",
                    position: "relative",
                    zIndex: 2,
                }}>
                    {!isMobile && <Button
                        text={buttonText}
                        iconName={buttonIcon}
                        bgColor={buttonBgColor}
                        color={buttonColor}
                        hoverBgColor={buttonHoverBgColor}
                        hoverColor={buttonHoverColor}
                        onClick={() => window.open(buttonUrl, "_blank")}
                    />}
                    <TextLink href={aboutRoute}>Learn more</TextLink>
                </div>
            </div>
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
                //borderRadius: "var(--borderRadiusSmall)",
                overflow: "hidden",
                background: "#222",
                pointerEvents: "none", // Prevents pointer events on the preview
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

export default ToolBox;