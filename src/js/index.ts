
let input: HTMLInputElement = <HTMLInputElement> document.getElementById("input");
let selection: HTMLSelectElement = <HTMLSelectElement> document.getElementById("selection");
let btn: HTMLButtonElement = <HTMLButtonElement> document.getElementById("btn");
let output: HTMLDivElement = <HTMLDivElement> document.getElementById("output");

btn.addEventListener("click", function(){OutputHandler();});

function OutputHandler(){
    
    if(selection.selectedIndex==0) output.innerHTML = input.value.toUpperCase();
    else if(selection.selectedIndex==1) output.innerHTML = input.value.toLowerCase();
    
    
}

