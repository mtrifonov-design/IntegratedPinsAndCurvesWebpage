
type ToolInfo = {
    toolName: string;
    images: string[];
    overview: string;
    launchUrl: string;
};

const toolsData: Record<string, ToolInfo> = {
    "liquidlissajous": {
        toolName: "Liquid Lissajous",
        overview: `With Liquid Lissajous, you can create beautiful looping gradient animations that make great backgrounds or textures for your creative projects.
        You can export the animations as MP4 videos or png sequences, making it easy to use them as assets in After Effects, Premiere or any other editing software.
        The tool allows you to customize the colors and movement of the gradients, giving you full control over the final look and feel of your animations.`,
        
        images: [
            "/media/toolpreviews/liquidlissajousstill_p.webp",
            "/media/toolscreenshots/liquidlissajous-prev-3.jpg",
            "/media/toolscreenshots/liquidlissajous-prev-4.jpg",
            "/media/toolscreenshots/liquidlissajous-prev-1.jpg",
            "/media/toolscreenshots/liquidlissajous-prev-2.jpg",

        ],
        launchUrl: "https://run.pinsandcurves.app/?template=liquidlissajous",
    },
    "echoknight": {
        toolName: "Echo Knight",
        overview: `Echo Knight is a tool that allows you to create mesmerizing ripple tunnel animations from your png images. 
        You can customize the colors, speed, and other parameters to create unique effects. 
        The tool exports the animations as MP4 videos or png sequences, making it easy to use them in After Effects, Premiere or any other editing software.
        Whether you're looking to create hypnotic backgrounds, textures, or just want to experiment with motion design, Echo Knight is a powerful tool for your creative projects.`,
        images: [
            "/media/toolpreviews/echoknightstill_p.webp",
            "/media/toolscreenshots/echoknight-prev-1.jpg",
            "/media/toolscreenshots/echoknight-prev-2.jpg",
            "/media/toolscreenshots/echoknight-prev-3.jpg",
        ],
        launchUrl: "https://run.pinsandcurves.app/?template=echoknight",
    },
    "cyberspaghetti": {
        toolName: "Cyber Spaghetti",
        overview: `Cyber Spaghetti is a tool that allows you to create warp speed animations. 
        You can customize the number of rays, colors, speed, and other parameters to create unique effects. 
        The tool exports the animations as MP4 videos or png sequences, making it easy to use them in After Effects, Premiere or any other editing software.
        Whether you're looking to create futuristic backgrounds, textures, or just want to experiment with motion design, Cyber Spaghetti is a powerful tool for your creative projects.`,
        images: [
            "/media/toolpreviews/cybspagstill_p.webp",
            "/media/toolscreenshots/cyberspaghetti-prev-3.jpg",
            "/media/toolscreenshots/cyberspaghetti-prev-4.jpg",
            "/media/toolscreenshots/cyberspaghetti-prev-1.jpg",
            "/media/toolscreenshots/cyberspaghetti-prev-2.jpg",
        ],
        launchUrl: "https://run.pinsandcurves.app/?template=cyberspaghetti",
    },
}

export default toolsData;