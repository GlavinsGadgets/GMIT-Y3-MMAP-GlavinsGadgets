function loadApple() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			myFunction1Apple(this);
		}
	}
	xhttp.open("GET", "XML/APPLEPRICES.XML", true);
	xhttp.send();
}
function myFunction1Apple(xml) {
	var i;
	var xmlDoc = xml.responseXML;
	var table="<tr><th>Model</th><th>Price</th></tr>";
	var x = xmlDoc.getElementsByTagName("PHONE");
	for (i = 0; i <x.length; i++) {
		table += "<tr><td class='XMLLeft'>" + 
		x[i].getElementsByTagName("MODEL")[0].childNodes[0].nodeValue + "</td><td class='XMLRight'>" + 
		x[i].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue + "</td></tr>"; 
	}
	document.getElementById("PricesApple").innerHTML = table;
}

function loadAndroid() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			myFunctionAndroid(this);
		}
	}
	xhttp.open("GET", "XML/ANDROIDPRICES.XML", true);
	xhttp.send();
}
function myFunctionAndroid(xml) {
	var i;
	var xmlDoc = xml.responseXML;
	var table="<tr><th>Model</th><th>Price</th></tr>";
	var x = xmlDoc.getElementsByTagName("PHONE");
	for (i = 0; i <x.length; i++) {
		table += "<tr><td class='XMLLeft'>" + 
		x[i].getElementsByTagName("MODEL")[0].childNodes[0].nodeValue + "</td><td class='XMLRight'>" + 
		x[i].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue + "</td></tr>"; 
	}
	document.getElementById("PricesAndroid").innerHTML = table;
}

function loadChargerPorts() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			myFunctionChargerPorts(this);
		}
	}
	xhttp.open("GET", "XML/CHARGERPORTS.XML", true);
	xhttp.send();
}
function myFunctionChargerPorts(xml) {
	var i;
	var xmlDoc = xml.responseXML;
	var table="<tr><th>Model</th><th>Price</th></tr>";
	var x = xmlDoc.getElementsByTagName("PHONE");
	for (i = 0; i <x.length; i++) {
		table += "<tr><td class='XMLLeft'>" + 
		x[i].getElementsByTagName("MODEL")[0].childNodes[0].nodeValue + "</td><td class='XMLRight'>" + 
		x[i].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue + "</td></tr>"; 
	}
	document.getElementById("PricesChargerPorts").innerHTML = table;
}