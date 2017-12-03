import React from "react";
import { shallow, mount } from "enzyme";

import Register from "components/register";
import RequestAdapter from "adapters/request_adapter";
import UserModel from "models/user_model";

describe("<Register />", () => {
  it("should render a register form", () => {
    let rendered;

    rendered = shallow(<Register />);
  });
});

describe("#registerClick", () => {
	it("should call Register#register when clicked on register button", () => {
		let component, e, rendered, spy;

		e = { preventDefault: jasmine.createSpy("preventDefault") }; 

		spy = spyOn(Register.prototype, "register");
		rendered = mount(<Register />);	
		rendered.find('button').simulate('click', 'using prototype');

		expect(spy).toHaveBeenCalled();
	});
});

describe("#register", () => {
	it("should call RequestAdapter#send", () => {
		let stubUserModel, component;

		stubUserModel = new UserModel({ username: "stub-username", password: "stub-password" });

		spyOn(RequestAdapter, "send");

		component = new Register();
		component.register("stub-username", "stub-password");

		expect(RequestAdapter.send).toHaveBeenCalled;
	});
});