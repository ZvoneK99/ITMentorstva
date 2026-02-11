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

//Fuzzy search

const SearchVideoByName = (name) => {
    VIDEOS.forEach(video => {

        name = name.toLowerCase();
        video.title = video.title.toLowerCase();

        if (video.title.includes(name)) {
            console.log(video.title);
        }

    });
}





export default SearchBar;