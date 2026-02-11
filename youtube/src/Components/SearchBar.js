import VIDEOS from './../videos.json'

const SearchBar = () => {
    return (
        <form>
            <label>
                Search:
                <input type="text" name="search" onInput={(e) => SearchVideo(e)} />
            </label>
        </form >
    );
}

const SearchVideo = (e) => {
    VIDEOS.forEach(video => {
        if (e.target.value === video.title) {
            console.log("Nasli smo video:", { title: video.title });
        }
    });
}


export default SearchBar;