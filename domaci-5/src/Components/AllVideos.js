import VIDEOS from './../videos.json'

const AllVideos = () => {
    return (
        <>
            {VIDEOS.map(video => (
                <div key={video.id} className="outside-div py-4">
                    <div className="w-50 mx-auto bg-white p-3 rounded shadow-sm">
                        <iframe
                            className="w-100 mb-3 rounded"
                            src={video.url}
                            title={video.Title}
                            allowFullScreen
                        />
                        <h5 className="text-center fw-semibold">
                            <span className="text-muted">Video Title:</span> {video.Title}
                        </h5>

                    </div>
                </div>
            ))}
        </>
    );
}

export default AllVideos;
