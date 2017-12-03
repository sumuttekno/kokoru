import UserInput from "app/input/user_input"; 

describe("UserInput", () => {
	describe(".default", () => {
		it("return new graphql input object type", () => {
			expect(UserInput.name).toEqual("UserInput");
			expect(UserInput._typeConfig.name).toEqual("UserInput");
			expect(UserInput._typeConfig.fields.hasOwnProperty("_id")).toEqual(true);
			expect(UserInput._typeConfig.fields.hasOwnProperty("username")).toEqual(true);
			expect(UserInput._typeConfig.fields.hasOwnProperty("password")).toEqual(true);

			expect(UserInput._typeConfig.fields._id.type.name).toEqual("ID");
			expect(UserInput._typeConfig.fields.username.type.name).toEqual("String");
			expect(UserInput._typeConfig.fields.password.type.name).toEqual("String");
		});
	});
});