import React, { useRef, useState } from "react";
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
  const [myerror, setMyerror] = useState(false);

  const locations = useSelector((state) => state.app.locations);
  // const lockers = useSelector(state => state.app.lockers);

  const searchRef = useRef();

  const dispatch = useDispatch();

  const changeError = () => {
    const text = searchRef.current.value;
    // const splitText = text.split(",");
    if (text.includes(",")) {
      const splitText = text.split(",");
      if (
        locations.filter(
          (loc) =>
            loc?.city === splitText[0] && loc?.state === splitText[1].trim()
        ).length <= 0
      ) {
        setMyerror(true);
      } else setMyerror(false);
    } else setMyerror(true);
  };

  const updateTotalList = async () => {
    const locations = await (
      await axios.get(request.location)
    ).data.resultObjects;
    const lockers = await (await axios.get(request.locker)).data.resultObjects;
    dispatch(setLocations(locations));
    dispatch(setLockers(lockers));
    // console.log(lockers);
  };

  const updateList = async (stateOrCity) => {
    stateOrCity = stateOrCity.current.value.toLowerCase();
    if (myerror || stateOrCity === "" || stateOrCity === undefined) {
      return;
    }
    const stateCity = stateOrCity.split(",");
    const selectedLocations = locations.filter(
      (loc) =>
        loc.city.toLowerCase().includes(stateCity[0]) &&
        loc.state.toLowerCase().includes(stateCity[1].trim())
    );
    searchRef.current.value = "";
    // console.log(selectedLocations);
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
          {myerror ? (
            <span className="err">
              The entered city/state combination is invalid
            </span>
          ) : (
            ""
          )}
        </div>
        <div className="findSearchInput">
          <input
            // type="text"
            ref={searchRef}
            placeholder="Enter City or State"
            list="states_cities"
            onChange={() => {
              changeError();
            }}
          />
          <datalist id="states_cities">
            {locations.map((location) => (
              <option value={`${location?.city}, ${location?.state}`} />
              // <ListOption
              //   city={location?.city}
              //   state={location?.state}
              //   err={myerror}
              //   setErr={setMyerror}
              // />
            ))}
          </datalist>
          {/* <div className="findSearch"> */}
          <div
            className="findLockerButton"
            onClick={() => updateList(searchRef)}
          >
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
