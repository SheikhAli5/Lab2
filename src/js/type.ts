
let i:number=0;
let ol=(<HTMLInputElement>document.getElementById("ol"));

function btnClick(b: number) {
    (<HTMLInputElement>document.getElementById("txt")).value=(<HTMLInputElement>document.getElementById("txt")).value+b;

};

function btnClear() {
    (<HTMLInputElement>document.getElementById("txt")).value='';


};
function btnSum() {

    (<HTMLInputElement>document.getElementById("txt")).value=(<HTMLInputElement>document.getElementById("txt")).value+'+';

};
function btnSub() {

    (<HTMLInputElement>document.getElementById("txt")).value=(<HTMLInputElement>document.getElementById("txt")).value+"-";

};
function btnMult() {

    (<HTMLInputElement>document.getElementById("txt")).value=(<HTMLInputElement>document.getElementById("txt")).value+'*';

};
function btnDiv() {

    (<HTMLInputElement>document.getElementById("txt")).value=(<HTMLInputElement>document.getElementById("txt")).value+'/';

};

function btnAnswer(b: number) {

    i++;
    (<HTMLInputElement>document.getElementById("txt")).value=(<HTMLInputElement>document.getElementById("txt")).value+"="+eval((<HTMLInputElement>document.getElementById("txt")).value);
    let liLast = document.createElement('li');
    let val:string = (<HTMLInputElement>document.getElementById("txt")).value;
    liLast.innerHTML = val;
    (<HTMLInputElement>document.getElementById("txt")).value='';
    ol.append(liLast);
    if (i==3){
        ol.removeChild(ol.childNodes[0]);
    i=2;
    }



};


