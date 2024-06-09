// const extendHex = (shortHex) => {
//   // write your code here
// 	if(shortHex.startsWith('#')){
// 		shortHex=shortHex.slice(1);
// 	}
// 	if(shortHex.lenght !== 3){
// 		 throw new Error("Input must be a 3-character hex code.");
// 	}
// 	let fullHex="#";
// 	for(let i=0; i<shortHex.length; i++){
// 		fullHex+=shortHex[i]+shortHex[i];
// 	}
// 	return fullHex;
// };

// // Do not change the code below.
// const shortHex = prompt("Enter Short Hex.");
// alert(extendHex(shortHex));
function extendHex(shortHex) {
    // Remove the leading # if present
    if (shortHex.startsWith('#')) {
        shortHex = shortHex.slice(1);
    }
    
    // Validate the input to ensure it's exactly 3 characters
    if (shortHex.length !== 3) {
        throw new Error("Input must be a 3-character hex code.");
    }
    
    // Extend each character using a loop
    let fullHex = '#';
    for (let i = 0; i < shortHex.length; i++) {
        fullHex += shortHex[i] + shortHex[i];
    }