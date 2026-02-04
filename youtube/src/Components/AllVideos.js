

const GetAllVideos = ({ videos }) => {

    return (
        <>
            {videos.map(video => {
                return <a href={video.url} target='_blank'>
                    <img src={video.cover} />
                    <h3>{video.title}</h3>
                </a>

            })}
        </>
    );
};
export default GetAllVideos;
