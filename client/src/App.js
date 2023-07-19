import { useState } from "react";
import Header from "./components/Header/Header";
import InputComponent from "./components/Input/Input";

import fetcher from "./fetchers/fetcher";
import ColumnChart from "./components/Chart/Chart";

const App = () => {
  const [showChart, setShowChart] = useState(false);
  const [data, setData] = useState([]);
  const [years, setYears] = useState([]);
  const submitHandler = async (input) => {
    const res = await fetcher(input);
    setData(res[1].map((val) => val.value));
    setYears(
      res[1]
        .map((val) => parseInt(val.date))
        .sort()
        .filter(function (item, i, ar) {
          return ar.indexOf(item) === i;
        })
    );
    setShowChart(true);
  };

  const resetHandler = () => {
    setShowChart(false);
  };

  return (
    <div>
      <Header />
      <InputComponent onSubmit={submitHandler} />
      {showChart && <ColumnChart labels={years} data={data} />}
      {showChart && (
        <button
          style={{
            padding: "10px",
            "background-color": "#007bff",
            color: "#fff",
            border: "none",
            "border-radius": "4px",
            cursor: "pointer",
            margin: "auto",
          }}
          onClick={resetHandler}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default App;
