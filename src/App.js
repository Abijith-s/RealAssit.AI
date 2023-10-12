import { useEffect, useState } from "react";
import "./App.css";
import PrintButton from "./components/PrintButton/PrintButton";
import { burglaryReports } from "./apiManager/services/arrestRecordsServices";

function App() {
  const [showButton,setShowButton] = useState(false);
  const [data, setData] = useState(null)
  useEffect(() => {
    burglaryReports()
      .then((res) => {
        setData(res.data)
        setShowButton(true)
      })
      .catch((error) => console.error('error', error))
  }, [])

  return (
    <div className="App">
      {showButton && <PrintButton data={data}/>}
    </div>
  );
}

export default App;
