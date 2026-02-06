import { useParams } from "react-router-dom";


const Video = () => {

    const { id } = useParams();
    console.log(id)

    return (
        <>
            <p>Test</p>
        </>
    )
}
export default Video;