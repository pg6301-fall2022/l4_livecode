import * as React from "react";
import * as ReactDOM from "react-dom";

import {ListMovies, NewMovieForm} from "../application";
import {Simulate} from "react-dom/test-utils";

describe("movie app tests", () => {

    it("shows movie list", ()=> {
        const element = document.createElement("div");
        ReactDOM.render(<ListMovies/>, element);

        expect(element.querySelector("h1").innerHTML).toEqual("Something else basic, but in a different file");
        expect(element.innerHTML).toMatchSnapshot();
    });

    it("new movie form shows", () => {
        const element = document.createElement("div");
        ReactDOM.render(<NewMovieForm/>, element);

        expect(element.innerHTML).toMatchSnapshot();
    });

    it("form test", () => {
        const onAddMovieMocked = jest.fn(); // Mock function

        // on submit this will be called instead of the actual function (if that even exists).

        const element = document.createElement("div");
        ReactDOM.render(<NewMovieForm onAddMovie={onAddMovieMocked}/>, element);

        Simulate.change(
            element.querySelector("[data-testid=title]"),
            {target: {value: "Movie1"}}
        );
        // I simulate a change in the input on the form

        Simulate.change(
            element.querySelector("[data-testid=year]"),
            {target: {value: "2022"}}
        );

        // At this point, my form has some simulated data.

        Simulate.submit(element.querySelector("form")); // Submit the simulated data

        //expect(onAddMovieMocked).toHaveBeenCalled();

        expect(onAddMovieMocked).toHaveBeenCalledWith({
            title: "Movie1",
            year: "2022",
            plot: ""
            });

    });

})