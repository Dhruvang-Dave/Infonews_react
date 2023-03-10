import "./App.css";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import News from "./components/News";
import LoadingBar from 'react-top-loading-bar';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// export default class App extends Component {
const App = ()=>{
  const pageSize=20;
  const apiKey = process.env.REACT_APP_NEWS_API;

  let [progress, setProgress] = useState(0);
  // let state = {
  //   progress= 0;
  // }

  // let setProgress= (progress, callback )=> {
  //   setState({progress: progress});
  // }

  // render() {
  return (
      <div>
        <Router>
          <LoadingBar height={3} color="#ff0000" progress={progress} />
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country="in" category="general" />} />
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" />} />
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" />} />
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
  // }
}

export default App