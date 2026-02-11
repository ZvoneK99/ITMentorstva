import VIDEOS from './../videos.json'

const SearchBar = () => {
    return (
        <form>
            <label>
                Search:
                <input type="text" name="search" onInput={(e) => SearchVideoByName(e.currentTarget.value)} />
            </label>
        </form >
    );
}

const SearchVideoByName = (name) => {
    let nameLower = name.toLowerCase();
    VIDEOS.forEach(video => {
        if (nameLower === video.title.toLowerCase()) {
            console.log("Nasli smo video:", { title: video.title });
        }
    });
}


export default SearchBar;