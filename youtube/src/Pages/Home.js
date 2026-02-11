import GetAllVideos from '../Components/AllVideos'
import SearchBar from '../Components/SearchBar';

const Home = () => {
    return (
        <>
            <SearchBar />
            <GetAllVideos />
        </>
    );
}
export default Home;