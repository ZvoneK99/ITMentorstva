import VIDEOS from './../videos.json'

const AllVideos = () => {
    return (
        <>
            {VIDEOS.map(video => {
                return <div key={video.id}>
                    <h1>{video.Title}</h1>
                    <h3>{video.url}</h3>
                    <iframe src={video.url} title={video.title} />
                </div>
            })}
        </>
    );
}
export default AllVideos;