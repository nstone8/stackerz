console.log("hi");
WebAssembly.instantiateStreaming(fetch('/main.wasm'))
    .then(obj => {
	// Call an exported function:
	console.log("instantiated");
	console.log(obj.instance.exports.the_answer());
    });
