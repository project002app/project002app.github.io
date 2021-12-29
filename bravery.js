console.log("hello from the land of the code");
function supremefunctionofhope() {
    console.log("I am Dr. Frankenstein");
}
//Start of the right side info holders
//const regular = document.querySelector('.regularinfoholder');
function regularfunction() {
    const regular = document.querySelector('.regularinfoholder');
    /*if(document.querySelector('.mondayinfoholder').style.display === "block"){
        document.querySelector('.mondayinfoholder').style.display = "none";
    }*/
    if(regular.style.display === "block"){
        regular.style.display = "none";
        //make everything else none
        document.querySelector('.mondayinfoholder').style.display = "none";
        document.querySelector('.peprallyinfoholder').style.display = "none";
        document.querySelector('.specialinfoholder').style.display = "none";
        document.querySelector('.homeroominfoholder').style.display = "none";
        document.querySelector('.clubinfoholder').style.display = "none";
    }else{
        //make everything else none
        document.querySelector('.mondayinfoholder').style.display = "none";
        document.querySelector('.peprallyinfoholder').style.display = "none";
        document.querySelector('.specialinfoholder').style.display = "none";
        document.querySelector('.homeroominfoholder').style.display = "none";
        document.querySelector('.clubinfoholder').style.display = "none";
        regular.style.display = "block";
        
    }
}
function mondayfunction() {
    const monday = document.querySelector('.mondayinfoholder');
    if(monday.style.display === "block"){
        monday.style.display = "none";
        document.querySelector('.regularinfoholder').style.display = "none";
        document.querySelector('.peprallyinfoholder').style.display = "none";
        document.querySelector('.specialinfoholder').style.display = "none";
        document.querySelector('.homeroominfoholder').style.display = "none";
        document.querySelector('.clubinfoholder').style.display = "none";
    }else{
        document.querySelector('.regularinfoholder').style.display = "none";
        document.querySelector('.peprallyinfoholder').style.display = "none";
        document.querySelector('.specialinfoholder').style.display = "none";
        document.querySelector('.homeroominfoholder').style.display = "none";
        document.querySelector('.clubinfoholder').style.display = "none";
        monday.style.display = "block";
        
    }
}
function peprallyfunction() {
    const peprally = document.querySelector('.peprallyinfoholder');
    if(peprally.style.display === "block"){
        peprally.style.display = "none";
        document.querySelector('.mondayinfoholder').style.display = "none";
        document.querySelector('.regularinfoholder').style.display = "none";
        document.querySelector('.specialinfoholder').style.display = "none";
        document.querySelector('.homeroominfoholder').style.display = "none";
        document.querySelector('.clubinfoholder').style.display = "none";
    }else{
        document.querySelector('.mondayinfoholder').style.display = "none";
        document.querySelector('.regularinfoholder').style.display = "none";
        document.querySelector('.specialinfoholder').style.display = "none";
        document.querySelector('.homeroominfoholder').style.display = "none";
        document.querySelector('.clubinfoholder').style.display = "none";
        peprally.style.display = "block";
        
    }
}
function specialfunction() {
    const special = document.querySelector('.specialinfoholder');
    if(special.style.display === "block"){
        special.style.display = "none";
        document.querySelector('.mondayinfoholder').style.display = "none";
        document.querySelector('.peprallyinfoholder').style.display = "none";
        document.querySelector('.regularinfoholder').style.display = "none";
        document.querySelector('.homeroominfoholder').style.display = "none";
        document.querySelector('.clubinfoholder').style.display = "none";
    }else{
        document.querySelector('.mondayinfoholder').style.display = "none";
        document.querySelector('.peprallyinfoholder').style.display = "none";
        document.querySelector('.regularinfoholder').style.display = "none";
        document.querySelector('.homeroominfoholder').style.display = "none";
        document.querySelector('.clubinfoholder').style.display = "none";
        special.style.display = "block";
        
    }
}
function homeroomfunction() {
    const homeroom = document.querySelector('.homeroominfoholder');
    if(homeroom.style.display === "block"){
        homeroom.style.display = "none";
        document.querySelector('.mondayinfoholder').style.display = "none";
        document.querySelector('.peprallyinfoholder').style.display = "none";
        document.querySelector('.specialinfoholder').style.display = "none";
        document.querySelector('.regularinfoholder').style.display = "none";
        document.querySelector('.clubinfoholder').style.display = "none";
    }else{
        document.querySelector('.mondayinfoholder').style.display = "none";
        document.querySelector('.peprallyinfoholder').style.display = "none";
        document.querySelector('.specialinfoholder').style.display = "none";
        document.querySelector('.regularinfoholder').style.display = "none";
        document.querySelector('.clubinfoholder').style.display = "none";
        homeroom.style.display = "block";
        
    }
}
function clubfunction() {
    const club = document.querySelector('.clubinfoholder');
    if(club.style.display === "block"){
        club.style.display = "none";
        document.querySelector('.mondayinfoholder').style.display = "none";
        document.querySelector('.peprallyinfoholder').style.display = "none";
        document.querySelector('.specialinfoholder').style.display = "none";
        document.querySelector('.homeroominfoholder').style.display = "none";
        document.querySelector('.regularinfoholder').style.display = "none";
    }else{
        document.querySelector('.mondayinfoholder').style.display = "none";
        document.querySelector('.peprallyinfoholder').style.display = "none";
        document.querySelector('.specialinfoholder').style.display = "none";
        document.querySelector('.homeroominfoholder').style.display = "none";
        document.querySelector('.regularinfoholder').style.display = "none";
        club.style.display = "block";
        
    }
}

function bellscheduleminimizer() {
    const schedulebody = document.querySelector('.bellscheduleholder');
    const belltriangle = document.querySelector('.belldropdownimg');
    if(schedulebody.style.display === "none"){
        schedulebody.style.display = "block";
        belltriangle.src = "downfacingtriangle.svg";
    }else{
        schedulebody.style.display = "none";
        belltriangle.src = "rightfacingtriangle.svg";
    }
}



//End of the right side info holders