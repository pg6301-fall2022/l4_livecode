import * as React from "react";
import * as ReactDOM from "react-dom";

import {ListMovies} from "../application";

describe("movie app tests", () => {

    it("shows movie list", ()=> {
        const element = document.createElement("div");
        ReactDOM.render(<ListMovies/>, element);

        expect(element.querySelector("h1").innerHTML).toEqual("Something else basic, but in a different file");
        expect(element.innerHTML).toMatchSnapshot();
    })


})