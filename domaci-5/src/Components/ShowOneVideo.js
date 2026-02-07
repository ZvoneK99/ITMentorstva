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
        <div className="outside-div py-4">
            <div className="w-50 mx-auto bg-white p-3 rounded shadow-sm">
                <h1 className="title text-center">{video.Title}</h1>
                <iframe className="w-100 mb-3 rounded" src={video.url} title={video.title} />
            </div>
        </div>
    );
}

export default ShowOneVideo;