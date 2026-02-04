import './App.css';
import GetAllVideos from './Components/AllVideos';

const VIDEOS = [
  {
    id: 1,
    title: "How to learn React",
    url: "https://www.youtube.com/watch?v=s2skans2dP4&t=50s",
    cover: "https://i.ytimg.com/vi/s2skans2dP4/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLB_EAd36LXIk8Vl-p2qkZ9y_OTJiQ"
  },
  {
    id: 2,
    title: "How to learn CSS",
    url: "https://www.youtube.com/watch?v=Z4pCqK-V_Wo",
    cover: "https://i.ytimg.com/vi/Z4pCqK-V_Wo/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCf_uoqGukhMFc-j7qUQKEicLudUQ"
  },
]


const App = () => {

  return (
    <>
      <GetAllVideos videos={VIDEOS} />
    </>
  );
}

export default App;
