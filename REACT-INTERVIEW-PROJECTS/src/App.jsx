import "./App.css";
import Accordion from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider/index";
import LoadMoreData from "./components/load-more-data/index";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import QRCodeGenerator from "./components/qr-code-generator";
import LightDarkMode from "./components/light-dark-mode";
import ScrollIndicator from "./components/scroll-indicator/index";

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
      {/* <TreeView menus={menus}/> */}

      {/* QR Code Generator */}
      {/* <QRCodeGenerator/> */}

      {/* Light Dark Mode Generator using LocalStorage */}
      {/* <LightDarkMode/> */}

      {/* Scroll Indicator */}
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/>
    </div>
  );
}

export default App;
