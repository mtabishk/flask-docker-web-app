function getImages() {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://13.232.129.9/cgi-bin/cmd.py?cmd=docker+images", true);
        xhr.send();
        xhr.onload = function () {
                var res = xhr.responseText;
                document.getElementById('div1').innerHTML = res;
        }
}

function getContainers() {
 	var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://13.232.129.9/cgi-bin/cmd.py?cmd=docker+ps+-a", true);
        xhr.send();
        xhr.onload = function () {
                var res = xhr.responseText;
                document.getElementById('div1').innerHTML = res;
        }
}

function runContainer() {
	name = document.getElementById('nameid').value;
	image = document.getElementById('imageid').value;
	console.log(name,image);
        var xhr = new XMLHttpRequest();
	var url = "http://13.232.129.9/cgi-bin/cmd.py?cmd=docker+run+-dit+--name+" + name + "+" + image;
        xhr.open("GET", url, true);
        xhr.send();
        xhr.onload = function () {
                var res = xhr.responseText;
                document.getElementById('div1').innerHTML = res;
        }
}

function runpop(){
	pop= document.getElementById("rundiv");
	pop.style.display="block";

}
function closeRunPop(){
	pop= document.getElementById("rundiv");
	pop.style.display="none";
}

function removeContainer() {
        id = document.getElementById('nameid2').value;
        console.log(id);
        var xhr = new XMLHttpRequest();
        var url = "http://13.232.129.9/cgi-bin/cmd.py?cmd=docker+rm+-f+" + id;
        xhr.open("GET", url, true);
        xhr.send();
        xhr.onload = function () {
                var res = xhr.responseText;
                document.getElementById('div1').innerHTML = res;
        }
}

function removepop(){
        pop= document.getElementById("removediv");
        pop.style.display="block";

}
function closeRemovePop(){
        pop= document.getElementById("removediv");
        pop.style.display="none";
}
