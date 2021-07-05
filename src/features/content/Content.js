import React, { useEffect } from "react";
import "./content.scss";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import boxImage from "../../assets/sideimage.PNG";
import Row from "../row/Row";

function Content() {
  const [availableCount, setAvailableCount] = useState(0);
  const [sortedBy, setSortedBy] = useState("Closest");
  const dispatch = useDispatch();

  let selectedLocations = useSelector((state) => state.app.showingLocations);

  useEffect(() => {
    console.log(selectedLocations);
    setAvailableCount(selectedLocations.length);
  }, [selectedLocations]);
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
          <img src={boxImage} alt="" />
          <h6>address of the place</h6>
          <span>stars here</span>
          <span>0.3 miles away</span>
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
              <Row />
              <br />
              <Row />
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
