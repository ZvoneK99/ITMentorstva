import { Videos } from './../videos.json'


function App() {
  return (
    <>
      {Videos.map(video => (
        <h1>{video.title}</h1>
      ))}
    </>
  );
}

export default App;
