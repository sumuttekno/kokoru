class RequestAdapter {
  static send(payload, callback) {
	let request = new XMLHttpRequest();
	request.open("POST", "/graphql", true);
	request.setRequestHeader("Content-Type","application/json");
	request.setRequestHeader("Accept", "application/json");
	request.send(payload);
	request.onreadystatechange = () => {
		if (request.readyState === 4) {
			callback(request.responseText);
		}
	}
  }
}

export default RequestAdapter;