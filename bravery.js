console.log("hello from the land of the code");
function supremefunctionofhope() {
    console.log("I am Dr. Frankenstein");
}
function testfunction() {
    const racecar = document.querySelector('.scheduleinfoholder')
    
    if(racecar.style.display === "block"){
        racecar.style.display = "none";
    }else{
        racecar.style.display = "block";
        
    }
    //This is the old way, with ID, and that is torture
    //document.getElementById("hello").style.display = "none";
}