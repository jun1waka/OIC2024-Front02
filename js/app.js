console.log("処理A");

fetch("./data.json")
.then(response =>{
	console.log(response.url);
	console.log(response.status);
	return response;
})
.then(result =>{
	console.log(result);
})


console.log("処理F");
