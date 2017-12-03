class UserModel {
	constructor(data) {
		this.username = data.username;
		this.password = data.password;
	}

	username() {
		return this.username || ""; 
	}

	password() {
		return this.password || "";
	}

	mutationBuild() {
		return JSON.stringify({
			query: "mutation {"+
				"addUser("+
					"data: { "+
						"username:"+ '"' + this.username + '"' + "," +
						"password:"+ '"' + this.password + '"' + 
					"}" +	
				")"+
			"}"
		});
	}
}

export default UserModel;