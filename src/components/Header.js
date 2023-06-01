import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../utils/appSlice";
import { YOUTUBE_SEARCH_SUGGESTION_API } from "../utils/constant";
import { addSearchResult } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestionResult, setSuggestionResult] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const dispatch = useDispatch();
  const store = useSelector((store) => store.search.searchCache);

  useEffect(() => {
    const timeID = setTimeout(() => {
      getSearchSuggestion();
    }, 200);

    return () => {
      clearTimeout(timeID);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const result = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchQuery);
    const json = await result.json();
    setSuggestionResult(json[1]);

    // console.log(searchQuery in store);
    if (!store.hasOwnProperty(searchQuery) && searchQuery !== "") {
      const searchCache = { [searchQuery]: json[1] };
      dispatch(addSearchResult(searchCache));
    }
  };

  const toggleSidebar = () => {
    dispatch(toggle());
  };

  return (
    <div className="flex justify-between  px-5 h-28">
      <div className="flex items-center">
        <img
          onClick={toggleSidebar}
          className="h-10 cursor-pointer hover:bg-gray-200 hover:shadow-md"
          alt="Heburger"
          src="https://www.citypng.com/public/uploads/preview/hd-black-menu-burger-icon-transparent-background-31634946207uno2yrzogi.png"
        />
        <a href="/">
          <img
            className="h-20 pl-2"
            alt="youtube-logo"
            src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
          />
        </a>
      </div>
      <div className="flex flex-col mt-7">
        <div className="flex">
          <input
            className="w-[700px] h-14 rounded-l-full border pl-5 border-gray-300"
            placeholder="Search"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="h-14 w-24 rounded-r-full bg-gray-100 border border-gray-300 ">
            🔍
          </button>
        </div>
        {showSuggestion && (
          <ul className="sticky bg-white p-2 rounded-xl shadow-lg">
            {suggestionResult.map((result) => {
              return (
                <li className="p-2 hover:bg-gray-100" key={result}>
                  {" "}
                  🔍 {result}{" "}
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className="flex justify-center items-center ">
        <img
          className="h-14"
          alt="user-icon"
          src="https://cdn-icons-png.flaticon.com/512/552/552721.png"
        />
      </div>
    </div>
  );
};

export default Header;
