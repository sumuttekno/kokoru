import UserModel from "models/user_model"; 

describe("UserModel", () => {
	describe("#username", () => {
		it("return username", () => {
			let model;
			
			model = new UserModel({ username: "stub-username" });

			expect(model.username).toEqual("stub-username");
		});
	});

	describe("#password", () => {
		it("return password", () => {
			let model;
			
			model = new UserModel({ password: "stub-password" });

			expect(model.password).toEqual("stub-password");
		});
	});

	describe(".mutationBuild", () => {
		it("return json of mutation query", () => {
			let model, expectedResult, stubUsername, stubPassword;

			stubUsername = "stub-username";
			stubPassword = "stub-password";
			model = new UserModel({ username: "stub-username", password: "stub-password" }).mutationBuild();
			expectedResult = JSON.stringify({
				query: "mutation {"+
					"addUser("+
						"data: { "+
							"username:" + '"' + stubUsername + '"' + "," +
							"password:" + '"' + stubPassword + '"' + 
						"}" +	
					")"+
				"}"
			});

			expect(model).toEqual(expectedResult);
		});
	});
});