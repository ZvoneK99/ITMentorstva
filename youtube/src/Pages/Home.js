import GetAllVideos from '../Components/AllVideos'
import SearchBar from '../Components/SearchBar';
import VIDEOS from '../videos.json'
import { useState } from 'react';

const Home = () => {

    const [videos, setVideos] = useState(VIDEOS);
    const [filteredVideos, setFilteredVideos] = useState(VIDEOS);

    const handleSearchVideo = (result) => {
        setFilteredVideos(result);
    }

    return (
        <>
            <SearchBar videos={videos} onSearchVideo={handleSearchVideo} />
            <GetAllVideos videos={filteredVideos} />
        </>
    );
}
export default Home;