function zaza(){
    let far=document.getElementById("lala").value;
    let celcius = (far - 32) * 5/9;
    document.getElementById("result").innerHTML=(celcius);
}

document.getElementById("but").addEventListener("click",zaza);