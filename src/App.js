import Chars from "./Characters";
import axios from "axios";

function App() {
  function getUrl(url) {
    url.map((item) => {
      axios.get(item).then((res) => {
        item = res.data.name;
        console.log(item);
      });
    });
  }

  return (
    <div className="App">
      <Chars getUrl={getUrl}></Chars>
    </div>
  );
}

export default App;
