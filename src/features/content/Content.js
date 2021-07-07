import React, { useEffect } from "react";
import "./content.scss";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import boxImage from "../../assets/sideimage.PNG";
import Row from "../row/Row";
import { setShowingLockers } from "../../AppSlice";
import Star from "../stars/Star";

function Content() {
  const [availableCount, setAvailableCount] = useState(0);
  const dispatch = useDispatch();
  const selectedLockers = useSelector((state) => state.app.showingLockers);

  const selectedLocations = useSelector((state) => state.app.showingLocations);

  const lockers = useSelector((state) => state.app.lockers);

  useEffect(() => {
    console.log(selectedLocations);
    // setAvailableCount(selectedLocations.length);
    console.log(lockers);
    let selLockers = [];
    selectedLocations.map((loc) =>
      lockers
        .filter((lk) => lk.location.id === loc.id)
        .map((l) => selLockers.push(l))
    );
    const sortedLockers = sortByGroup(selLockers);
    dispatch(setShowingLockers(sortedLockers));
  }, [selectedLocations]);

  const sortByGroup = (toSortLockers) => {
    let arr = toSortLockers;
    let sortedLockers = [];
    let count = 0;
    while (arr.length > 0) {
      const loc = arr[0];
      const sorted = arr.filter(
        (l) =>
          l?.height === loc?.height &&
          l?.depth === loc?.depth &&
          l?.width === loc?.width &&
          l?.isRented === loc?.isRented &&
          !l?.isRented
      );
      //   sortedLockers.map(l=>sortedLockers.push(l))
      sortedLockers.push([sorted, sorted.length]);
      count += sorted.length;
      arr = arr.filter(
        (l) =>
          l?.height !== loc?.height ||
          l?.depth !== loc?.depth ||
          l?.width !== loc?.width ||
          l?.isRented !== loc?.isRented ||
          l?.isRented
      );
    }
    setAvailableCount(count);
    return sortedLockers;
  };
  return (
    <div className="content">
      <div className="availableLockersSortBy">
        <div className="availableLockers">
          <span>{availableCount} Open Lockers Available</span>
        </div>
        <div className="sortBy">
          <label for="sort">Sort By</label>
          <select name="sort" id="sort">
            <option value="closest">Closest</option>
            <option value="lowestPrice">Lowest Price</option>
          </select>
        </div>
      </div>

      <div className="display">
        <div className="imageBox">
          {selectedLocations.length > 0 ? <img src={boxImage} alt="" /> : ""}
          {selectedLocations.length > 0 ? (
            <h6>
              {selectedLocations[0]?.address}, {selectedLocations[0]?.city},
              {selectedLocations[0]?.state} State,{" "}
              {selectedLocations[0]?.country}
            </h6>
          ) : (
            ""
          )}
          <div>
            <Star starsNumber={selectedLocations[0]?.stars} />
          </div>
          {selectedLocations.length > 0 ? <h6>0.3 miles away</h6> : ""}
        </div>
        <div className="topAndTable">
          <div className="top">
            <div className="selectBox">
              <select name="size" id="size">
                <option value="small">Small</option>
                <option value="medium">Meduim</option>
                <option value="large">Large</option>
              </select>
            </div>

            <div className="view">
              <a href="//#">View the guide size</a>
            </div>
          </div>
          <div className="tableContent">
            <table>
              {selectedLockers.map((locker) => (
                <Row locker={locker[0][0]} available={locker[0].length} />
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
