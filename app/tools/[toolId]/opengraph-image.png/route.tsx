import { ImageResponse } from 'next/og'
import toolsData from '../toolsData'
import { join } from 'node:path'
import { readFile } from 'node:fs/promises'
import { NextRequest } from 'next/server'
export const size = {
  width: 1200,
  height: 630,
}
export const dynamic = 'force-static'; 
export const contentType = 'image/png'

export async function generateStaticParams() {
    const toolIds = Object.keys(toolsData);
  return toolIds.map((toolId) => ({
    toolId,
  }))
}


export async function GET(req: NextRequest, { params }: { params: Promise<{ toolId: string }> }) {
  const toolId = (await params).toolId;
    const toolInfo = toolsData[(await params).toolId];
    if (!toolInfo) {
        return new ImageResponse(
            (
              <div
                style={{
                  fontSize: 48,
                  background: 'white',
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                Tool not found
              </div>
            ),
            {
              ...size,
            }
          )
    }

  const logoData = await readFile(join(process.cwd(),"public/opengraph/", toolId + ".jpg"))
  const fontData = await readFile(
    join(process.cwd(),'assets/nudica_nudica-medium-webfont.ttf')
  )
  const logoSrc = Uint8Array.from(logoData).buffer
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          backgroundColor: "black",
          //flexDirection: "column",
          padding: "20px",
        }}
      >
        {/* @ts-expect-error was like this in the docs */}
        <img src={logoSrc} alt={toolInfo.toolName}
          style={{
            width: '800px',
            height: '530px',
            objectFit: 'contain',
            border: "2px solid white",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        />
        {/* <LogoIcon style={{
            height: "90px",
            width: "110px",
        }} /> */}
        {/* <div style={{
          position: "absolute",
          color: 'white',
          fontSize: 56,
          fontWeight: 'bold',
          width: '100%',
          height: "100px",
          bottom: "0px",
          backgroundColor: "rgba(0,0,0,0.7)",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: "30px",
          fontFamily: "Nudica",
        }}> 
          {toolInfo.toolName}

          
        </div> */}
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Nudica',
          data: fontData,
          style: 'normal',
          weight: 400,
        },
      ],
    }
  )
}