import { useParams } from "react-router-dom"
import VIDEOS from './../videos.json'

const ShowOneVideo = () => {
    const { id } = useParams();

    const IsThereVideoInList = () => {
        for (let i = 0; i < VIDEOS.length; i++) {
            if (VIDEOS[i].id === id) {
                console.log("Radi");
                return VIDEOS[i];
            }
        }
        return null;
    }

    const video = IsThereVideoInList();

    if (!video) {
        return <h1>There is no video with that ID.</h1>
    }
    return (
        <>
            <h1>{video.Title}</h1>
            <iframe src={video.url} title={video.title} />
        </>
    );
}

export default ShowOneVideo;