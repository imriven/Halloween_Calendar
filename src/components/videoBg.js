import { VideoCss } from "./style";


function Background() {
    return (
        <VideoCss>
            <video playsInline autoPlay muted loop poster="./img/halloween9.jpg" id="bgvid">
                <source src="./vid/Halloween2.mp4" type="video/mp4" />
            </video>
        </VideoCss>
    );
}

export default Background;