document.addEventListener("DOMContentLoaded", function (event) {
	var installButton = document.getElementById("install-button");

	var isChromium = window.chrome,
    vendorName = window.navigator.vendor;
	
	if(isChromium !== null && isChromium !== undefined && vendorName === "Google Inc.") {
   		installButton.addEventListener("click", add);
	} else { 
		var r = document.getElementById("remind");
		r.style.visibility = "visible";
		r.style.display = "block";
   		installButton.textContent = "Available on Chrome";
   		installButton.style.opacity = "0.5";
   		installButton.style.cursor = "default";
	}

	function add(){
		installButton.textContent = "Adding..."
		chrome.webstore.install("https://chrome.google.com/webstore/detail/acofpggflnnepicpbonmnjgpobnlfnin", showInstalled, showFailure);
	}

	function showInstalled() {
		installButton.setAttribute("id", ""); 
		installButton.removeEventListener("click", add);
		installButton.addEventListener("click", openYTTab);
		installButton.setAttribute("src", "https://youtu.be/o268qbb_0BM");
		installButton.setAttribute("target", "_blank");
		installButton.textContent = "Installed! Give it a spin?";

		showShare();
	} 

	function openYTTab() {
		window.open("https://youtu.be/o268qbb_0BM", "_blank");
	}

	function showShare() {
		document.getElementById("donate").style.visibility = "visible";
	}

	function showFailure() {
		installButton.textContent = "Yikes! Try again?"
	}
});