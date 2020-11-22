var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("play video");
	video.play();
	
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("pause video");
	video.pause();
	
});


document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("New speed is" + video.playbackRate);
	
	
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log("New speed is" + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("skip ahead");
	video.currentTime += 5;
	if (video.duration <= video.currentTime){
		video.currentTime = 0
		console.log("play from beginning" )}

	else{
		console.log("skip to " + video.currentTime )}
	});


document.querySelector("#mute").addEventListener("click", function() {
	if (document.getElementById("muted").innerHTML =="Mute"){
		video.muted = false;
		document.getElementById("mute").innerHTML == "Unmute"
		console.log("mute");}
		
	else{
		video.muted = true;
		document.getElementById("mute").innerHTML = "mute";
		console.log("unmute");}

});

document.querySelector("#volumeSlider").addEventListener("volume", function() {
	var video = document.getElementById("video");
	var volume = document.getElementById("volumeSlider");
	
	window.setInterval(changevolume(), 1);

	function changevolume() {
		var x = volume.value;
		var y = x / 100;

		video.volume = y;
	}
	console.log("Volume is" + video.volume);
	

});




