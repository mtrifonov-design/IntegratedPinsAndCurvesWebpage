import { notFound } from "next/navigation";
import toolsData from "./toolsData";
import LaunchButton from "./LaunchButton";
import Carousel from "./Carousel/Carousel";
import TextLink from "@/components/TextLink";

import { Metadata } from "next";
type Props = {
    params: Promise<{ toolId: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateStaticParams() {
    const toolIds = Object.keys(toolsData);
    return toolIds.map((toolId) => ({
        toolId,
    }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const id = (await params).toolId;
    const toolInfo = toolsData[id];
    if (!toolInfo) {
        return {
            title: 'Tool Not Found',
        }
    }
    const url = `/tools/${id}/opengraph-image.png`;
    return {
        metadataBase: new URL('https://pinsandcurves.app'),
        title: toolInfo.toolName + " | Pins And Curves",
        openGraph: { images: [url] },
        twitter:   { images: [url] },
    }
}

function Breadcrumbs({ toolName }: { toolName: string }) {
    return (
        <nav style={{ marginBottom: '20px' }}>
            <TextLink href="/tools">Tools</TextLink> / {toolName}
        </nav>
    );
}

export default async function ToolPage(p: { params: { toolId: string } }) {
    const params = await p.params;
    const { toolId } = params;
    const toolInfo = toolsData[toolId];
    if (!toolInfo) {
        return notFound();
    }
    const { toolName, images, overview, launchUrl } = toolInfo;

    return (
        <div style={{
            paddingLeft: '40px',
            paddingRight: '40px',
            paddingTop: '40px',
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
        }}>
            <div style={{
                maxWidth: '1400px',
                minWidth: 'min(600px, 100vw)',
            }}>
                <section style={{


                    paddingLeft: '60px',
                    paddingRight: '60px',
                    paddingBottom: '40px',
                }}>

                    <Breadcrumbs toolName={toolName} />
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '20px',
                        flexWrap: 'wrap',
                        width: '100%',
                    }}>
                        <h1>{toolName}</h1>
                        <LaunchButton launchUrl={launchUrl} />

                    </div>

                </section>

                <section style={{

                }}>
                    <Carousel slides={images} />

                </section>
                <section style={{
                    paddingLeft: '60px',
                    paddingRight: '60px',
                    paddingTop: '20px',
                    paddingBottom: '20px',
                }}>
                    <h3 style={{
                        marginBottom: '10px',
                    }}>Overview</h3>
                    <p style={{
                        maxWidth: '800px',
                    }}>{overview}</p>
                </section>


            </div>
        </div>
    );
}