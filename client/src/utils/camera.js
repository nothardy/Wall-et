export var localstream;
// if (navigator.webkitGetUserMedia != null) {
// 	var options = {
// 		video: true,
// 		audio: false,
// 	};
// 	navigator.webkitGetUserMedia(
// 		options,
// 		function (stream) {
// 			vid.src = window.webkitURL.createObjectURL(stream);
// 			localstream = stream;
// 			vid.play();
// 			console.log("streaming");
// 		},
// 		function (e) {
// 			console.log("background error : " + e.name);
// 		}
// 	);
// }

export function vidOff(webRef) {
	//    clearInterval(theDrawLoop);
	//    ExtensionData.vidStatus = 'off';
	navigator.webkitGetUserMedia(
		{
			video: true,
			audio: false,
		},
		(stream) => {
			webRef.src = window.webkitURL.createObjectURL();
			localstream = stream;
			webRef.pause();
			webRef.src = "";
			localstream.stop();
		},
		function (e) {
			console.log("background error : " + e.name);
		}
	);
	// vid.pause();
	// vid.src = "";
	// localstream.stop();
	// //    DB_save();
	// console.log("Vid off");
}
