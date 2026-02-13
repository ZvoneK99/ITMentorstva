
const SearchBar = ({ videos, onSearchVideo }) => {

    return (
        <form>
            <label>
                Search:
                <input type="text" name="search" onInput={(e) => SearchVideoByName(e.currentTarget.value, videos, onSearchVideo)} />
            </label>
        </form >
    );
}

//Fuzzy search

const SearchVideoByName = (name, videos, onSearchVideo) => {

    let foundVideos = [];

    videos.forEach(video => {

        name = name.toLowerCase();
        video.title = video.title.toLowerCase();

        if (video.title.includes(name)) {
            foundVideos.push(video);
        }

    });
    onSearchVideo(foundVideos);
}



export default SearchBar;