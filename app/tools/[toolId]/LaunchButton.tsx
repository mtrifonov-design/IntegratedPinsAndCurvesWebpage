"use client";
import React from "react";
import { Button } from "@mtrifonov-design/pinsandcurves-design";
import { useEffect } from "react";

export default function LaunchButton({ launchUrl }: { launchUrl: string }) {

    const [isMobile, setIsMobile] = React.useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize(); // Set initial state
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    },[])

    return (
        !isMobile ?
        <Button
            text={"Launch Tool"}
            iconName={"open_in_new"}
            bgColor={'var(--green3)'}
            color={'var(--gray8)'}
            hoverBgColor={'var(--green2)'}
            hoverColor={'var(--gray8)'}
            onClick={() => window.open(launchUrl, "_blank")}
        />
        :
        <Button
            text={"Not available on mobile"}
            iconName={"block"}
        />
    );
}
