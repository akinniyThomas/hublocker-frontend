import React, { useRef } from "react";
import searchBackground from "../../assets/searchbackground.jpg";
import "./searchFrame.scss";
import axios from "../../axios";
import { request } from "../../urlPaths";
import { useDispatch, useSelector } from "react-redux";
import {
  setLocations,
  setLockers,
//   setShowingLockers,
  setShwoingLocations,
} from "../../AppSlice";

function SearchFrame() {
    const locations = useSelector(state => state.app.locations);
    // const lockers = useSelector(state => state.app.lockers);

    const searchRef = useRef();

  const dispatch = useDispatch();
  const updateTotalList = async () => {
    const locations = await (
      await axios.get(request.location)
    ).data.resultObjects;
    const lockers = await (await axios.get(request.locker)).data.resultObjects;
    dispatch(setLocations(locations));
    dispatch(setLockers(lockers));
  };

  const updateList = async (stateOrCity) => {
      
      stateOrCity = stateOrCity.current.value.toLowerCase();
      const selectedLocations = locations.filter(
          loc => loc.city.toLowerCase().includes(stateOrCity) || loc.state.toLowerCase().includes(stateOrCity)
      );
    //   console.log(selectedLocations);
    dispatch(setShwoingLocations(selectedLocations));
    await updateTotalList();
  };

  return (
    <div
      className="searchFrame"
      style={{ backgroundImage: `url(${searchBackground})` }}
    >
      {/* <h1>Search Window</h1> */}
      <div className="searchBox">
        <div className="findLocker">
          <h1 className="findLockerText">Find a Locker</h1>
        </div>
        <div className="findSearchInput">
          <input type="text" ref={searchRef} placeholder="Enter City or State" />
          {/* <div className="findSearch"> */}
          <div className="findLockerButton" onClick={() => updateList(searchRef)}>
            <a href="#">
              <div className="findLockerButtonTexts">
                <h3>Find Locker</h3>
                <h6>One Naira For First Rent</h6>
              </div>
            </a>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default SearchFrame;
