import React, { useEffect } from "react";
// import { Counter } from './features/counter/Counter';
import "./App.css";
import Header from "./features/header/Header";
import SearchFrame from "./features/searchFrame/SearchFrame";
import Content from "./features/content/Content";
import axios from "./axios";
import { request } from "./urlPaths";
import { setLocations, setLockers } from "./AppSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchLocationAndLocker = async () => {
      const locations = await (
        await axios.get(request.location)
      ).data.resultObjects;
      // console.log(locations);
      const lockers = await (
        await axios.get(request.locker)
      ).data.resultObjects;
      // console.log(lockers);
      dispatch(setLocations(locations));
      dispatch(setLockers(lockers));
    };
    fetchLocationAndLocker();
  }, []);
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <h1>Welcome To HubLocker!!!</h1> */}
      <Header />
      <SearchFrame />
      <Content />
    </div>
  );
}

export default App;
