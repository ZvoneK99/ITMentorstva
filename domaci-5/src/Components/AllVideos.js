import VIDEOS from './../videos.json'

const AllVideos = () => {
    return (
        <>
            {VIDEOS.map(video => {
                return <div className='d-block m-auto bg-primary'>
                    <div className='d-block w-50 mb-5 m-auto border bg-secondary' key={video.id}>
                        <h1>Video tite: {video.Title}</h1>
                        <h3>{video.url}</h3>
                        <iframe src={video.url} title={video.Title} />
                    </div>
                </div>
            })}
        </>
    );
}
export default AllVideos;