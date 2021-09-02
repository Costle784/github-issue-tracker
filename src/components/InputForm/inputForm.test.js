import React from "react";
import InputForm from "./InputForm";
import renderer from "react-test-renderer";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
    useSelector: jest.fn(),
    useDispatch: () => mockDispatch,
}));

describe("API key form snapshot test", () => {
    it("should render a form to input an API key", () => {
        const renderedForm = renderer.create(<InputForm />).toJSON();
        expect(renderedForm).toMatchSnapshot();
    });
});
