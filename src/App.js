import React, { useEffect } from "react";
import "./App.css";
import Header from "./features/header/Header";
import axios from "./axios";
import { request } from "./urlPaths";
import { setLocations, setLockers } from "./AppSlice";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Rent from "./features/Rent";
import Home from "./features/Home";

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
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/rent" component={Rent}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
