import "./App.css";
import Accordion from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider/index";
import LoadMoreData from "./components/load-more-data/index";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";

function App() {
  //
  return (
    <div className="App">
      {/* Accordion Component */}
      {/* <Accordion/> */}

      {/* Random Color Components */}
      {/* <RandomColor/> */}

      {/* Star Rating Component */}
      {/* <StarRating noOfStars={10}/> */}

      {/* Image Slider component */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"2"}
        limit={"10"}
      /> */}

      {/* Load more products components */}
      {/* <LoadMoreData/> */}

      {/* File Folder Structure */}
      <TreeView menus={menus}/>
    </div>
  );
}

export default App;
