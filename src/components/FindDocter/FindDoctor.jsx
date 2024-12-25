import "./FindDoctor.scss";
import { HiOutlineArrowRight } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import Card from "../Card/Card";
const cards = [1, 2, 3];
function FindDoctor() {
    const [selectedFilters, setSelectedFilters] = useState({
        expertise: "",
        gender: "",
        fees: "",
        languages: "",
    });

    const [showAllFilters, setShowAllFilters] = useState(false);

    const handleSelect = (filterType, value) => {
        setSelectedFilters((prevFilters) => ({
            ...prevFilters,
            [filterType]: value === "0" ? "" : value,
        }));
    };

    const handleRemove = (filterType) => {
        setSelectedFilters((prevFilters) => ({
            ...prevFilters,
            [filterType]: "",
        }));
    };


    return (
        <div className="FindDoctor">
            <div className="banner">
                <h1>Find expert Doctors for an In-clinic session here </h1>
                <div className="search">
                    <FaLocationDot className="location" />
                    <select>
                        <option value="0">Delhi</option>
                        <option value="1">Noida</option>
                        <option value="2">Ghaziabad</option>
                    </select>
                    <div className="search2">
                        <input type="text" placeholder="eg. Doctor, specialisation, clinic name" />
                        <HiOutlineArrowRight className="arrow" />
                    </div>
                </div>

                <div className="circle cir1"></div>
                <div className="circle cir2"></div>
                <div className="circle cir3"></div>
                <div className="circle cir4"></div>
            </div>

            {/* Filters */}
            <div className="filter">
                <select
                    defaultValue="0"
                    className="filopt"
                    onChange={(e) => handleSelect("expertise", e.target.value)}
                >
                    <option value="0">Expertise</option>
                    <option value="Hair Care">Hair Care</option>
                    <option value="Skin Care">Skin Care</option>
                </select>

                <select
                    defaultValue="0"
                    className="filopt"
                    onChange={(e) => handleSelect("gender", e.target.value)}
                >
                    <option value="0">Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>

                <select
                    defaultValue="0"
                    className="filopt"
                    onChange={(e) => handleSelect("fees", e.target.value)}
                >
                    <option value="0">Fees</option>
                    <option value="0-500">Rs. 0 - Rs. 500</option>
                    <option value="500-1000">Rs. 500 - Rs. 1000</option>
                    <option value="1000-2000">Rs. 1000 - Rs. 2000</option>
                </select>

                <select
                    defaultValue="0"
                    className="filopt"
                    onChange={(e) => handleSelect("languages", e.target.value)}
                >
                    <option value="0">Languages</option>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                </select>


                <button
                    className="filopt all-filters-btn"
                    onClick={() => setShowAllFilters((prev) => !prev)}
                >
                    All Filters
                    <IoIosArrowDown />
                </button>
            </div>


            {showAllFilters && (
                <div className="selected-filters-dropdown">

                    {Object.entries(selectedFilters)
                        .filter(([key, value]) => value)
                        .map(([key, value]) => (
                            <div key={key} className="filter-tag">
                                <span>{value}</span>
                                <button onClick={() => handleRemove(key)} className="remove-btn">
                                    X
                                </button>
                            </div>
                        ))}

                </div>
            )}

            <div className="CardContainer">
                {cards.map((_, index) => (
                    <Card key={index} />
                ))}
            </div>


        </div>
    );
}

export default FindDoctor;
