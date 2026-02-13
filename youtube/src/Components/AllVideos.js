
const GetAllVideos = ({ videos }) => {

    return (
        <>
            {videos.map(video => {
                return <a href={video.url} target='_blank' rel='noreferrer'>
                    <img src={video.cover} alt={video.title} />
                    <h3>{video.title}</h3>
                </a>

            })}
        </>
    );
};
export default GetAllVideos;
