import "./App.css";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import "swiper/css/bundle";

function App() {
  return (
    <div className="overflow-hidden w-full container max-w-7xl mx-auto">
      <Header />
      <Body />
    </div>
  );
}

export default App;