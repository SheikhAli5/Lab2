var i = 0;
var ol = document.getElementById("ol");
function btnClick(b) {
    document.getElementById("txt").value = document.getElementById("txt").value + b;
}
;
function btnClear() {
    document.getElementById("txt").value = '';
}
;
function btnSum() {
    document.getElementById("txt").value = document.getElementById("txt").value + '+';
}
;
function btnSub() {
    document.getElementById("txt").value = document.getElementById("txt").value + "-";
}
;
function btnMult() {
    document.getElementById("txt").value = document.getElementById("txt").value + '*';
}
;
function btnDiv() {
    document.getElementById("txt").value = document.getElementById("txt").value + '/';
}
;
function btnAnswer(b) {
    i++;
    document.getElementById("txt").value = document.getElementById("txt").value + "=" + eval(document.getElementById("txt").value);
    var liLast = document.createElement('li');
    var val = document.getElementById("txt").value;
    liLast.innerHTML = val;
    document.getElementById("txt").value = '';
    ol.append(liLast);
    if (i == 3) {
        ol.removeChild(ol.childNodes[0]);
        i = 2;
    }
}
;
