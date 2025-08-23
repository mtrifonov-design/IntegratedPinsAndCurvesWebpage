
"use client";
import React from "react";
import { Button } from "@mtrifonov-design/pinsandcurves-design";

export default function NewsletterButton() {
const openSubscriptionForm = () => {
    window.open("http://eepurl.com/i6WBsQ", "_blank");
}

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
        }}>
            <Button text="Get updates" iconName='mail' bgColor='var(--yellow3)' color='var(--gray1)'
                onClick={openSubscriptionForm}
            ></Button>
        </div>  
    );
}