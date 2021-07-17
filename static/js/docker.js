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

