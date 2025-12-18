import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Container from '../container';
import '../../assets/styles/footer.css';
const AppFooter = () => {
    return(
        <div style={{position: "fixed", bottom: "0", width: "100%",background: "#f2f2f2"}}>
            <Container style={{display: "flex", columnGap: "50px"}}>
                <AudioPlayer
                autoPlay
                style={{
                    boxShadow: "unset",
                    background: "#f2f2f2"
                }}
                layout="horizontal-reverse"
                volume={0.5}
                // src="../../../public/Mat-Ket-Noi.mp3"
                onPlay={e => console.log("onPlay")}
                // other props here
                />

                <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "start",
                            justifyContent: "center",
                            minWidth: "100px"
                        }}>
                            <div style={{ color: "#ccc"}}>genre</div>
                            <div style={{ color: "black"}}>Tên bài hát</div>
                </div>
            </Container>
        </div>
    )
}

export default AppFooter;