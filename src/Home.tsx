import React from "react";
import { Button, SimpleCommittedTextInput } from "@mtrifonov-design/pinsandcurves-specialuicomponents"
import { useNavigate } from 'react-router';

function Home() {
    const navigate = useNavigate();
    const [serverUrl, setServerUrl] = React.useState("http://localhost:3000");
  return (
    <div style={{
        backgroundColor: "var(--gray1)",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }}>
        <div style={{
            backgroundColor: "var(--gray2)",
            borderRadius: "var(--borderRadiusSmall)",
            padding: "45px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "600px",
            fontSize: "16px",
        }}>
            <img src="/media/LOGOTEXT.svg" alt="Pins and Curves" style={{
                width: "100%",
                marginBottom: "20px"
            }}/>
            <br></br>
            <div style={{
                color: "var(--gray6)"
            }}> Welcome to Pins and Curves. Enter your server url to launch the editor.</div>
            <br></br>
            <div style={{display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "10px",
                color: "var(--gray6)",

            }}>
            Server url:
            <SimpleCommittedTextInput initialValue={serverUrl}
                isValid={(serverUrl: string) => {
                    const trimmedUrl = serverUrl.trim();
                    const urlPattern = /^(https?:\/\/)/;
                    if (!urlPattern.test(trimmedUrl)) {
                        return false;
                    }
                    return true;
                }}
                onCommit={setServerUrl}
            
            
            />
            <Button text="launch editor" 
                iconName="rocket_launch"
                onClick={() => {
                // Encode the URL for safe use in the route
                const encodedUrl = encodeURIComponent(serverUrl);
                navigate(`run/${encodedUrl}`);

            }} />
            </div>



        </div>

    </div>
  );
}

export default Home;