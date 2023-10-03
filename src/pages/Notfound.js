import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import React from "react";
import Shake from "react-reveal/Shake";
import notfound from "../images/404.svg";

export default function NotFound() {
  return (
    <div className="w-full mx-auto bg-gray-900 h-full">
      <Shake>
        <img
          className="mx-auto w-auto h-auto max-w-lg mt-20"
          src={notfound}
          alt="Not Found"
        />
      </Shake>
      <Fade up>
        <div>
          <a
            href="https://storyset.com/web"
            target="_blank"
            rel="noreferrer"
            className="text-center font-normal font-secondary text-sm text-gray-400"
          >
          </a>
        </div>
        <div>
          <h3 className="mt-5 text-center mx-2 font-primary font-black text-4xl text-white transition duration-500 ease-in-out transform hover:scale-104 hover:text-yellow-400">
            Looks like you've reached a Dead End!
          </h3>
        </div>
        <p className="text-center mt-4 mx-2 font-secondary font-normal text-xl text-gray-400">
          The page you are looking for does not exist. Please check the URL for
          spelling mistakes or capitalization and try again.
        </p>
        <p className="text-center mx-2 font-secondary font-normal text-xl text-gray-400">
          If you are having trouble locating your destination, try to visit the
          <span className="text-blue-500 hover:text-blue-700">
            <Link to="/"> Home Page</Link>
          </span>
          .
        </p>
        <div className="text-center">
          <Link to="/">
            <button className="w-50 mt-10 mb-10 bg-transparent transition duration-500 ease-in-out hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-4 px-6 border border-blue-500 hover:border-transparent rounded lg:w-auto">
              Back to Home
            </button>
          </Link>
        </div>
        
      </Fade>
    </div>
  );
}
