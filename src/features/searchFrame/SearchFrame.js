import React from 'react'
import searchBackground from "../../assets/searchbackground.jpg"
import "./searchFrame.scss"

function SearchFrame() {
    return (
        <div className="searchFrame" 
        style={{backgroundImage:`url(${searchBackground})`}}>
            {/* <h1>Search Window</h1> */}
            <div className="searchBox">
                <div className="findLocker">
                    <h1 className="findLockerText">Find a Locker</h1>
                </div>
                <div className="findSearchInput">
                    <input type="text" placeholder="Enter City or State"/>
                    {/* <div className="findSearch"> */}
                        <div className="findLockerButton">
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
    )
}

export default SearchFrame
