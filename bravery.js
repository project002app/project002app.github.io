function supremefunctionofhope() {
	console.log("I am Dr. Frankenstein");
}

//Start of the right side info holders
//const regular = document.querySelector('.regularinfoholder');
function regularfunction() {
	const regular = document.querySelector(".regularinfoholder");
	/*if(document.querySelector('.mondayinfoholder').style.display === "block"){
        document.querySelector('.mondayinfoholder').style.display = "none";
    }*/
	if (regular.style.display === "block") {
		regular.style.display = "none";
		//make everything else none
		document.querySelector(".mondayinfoholder").style.display = "none";
		document.querySelector(".peprallyinfoholder").style.display = "none";
		document.querySelector(".specialinfoholder").style.display = "none";
		document.querySelector(".homeroominfoholder").style.display = "none";
		document.querySelector(".clubinfoholder").style.display = "none";
	} else {
		//make everything else none
		document.querySelector(".mondayinfoholder").style.display = "none";
		document.querySelector(".peprallyinfoholder").style.display = "none";
		document.querySelector(".specialinfoholder").style.display = "none";
		document.querySelector(".homeroominfoholder").style.display = "none";
		document.querySelector(".clubinfoholder").style.display = "none";
		regular.style.display = "block";
	}
}

function mondayfunction() {
	const monday = document.querySelector(".mondayinfoholder");
	if (monday.style.display === "block") {
		monday.style.display = "none";
		document.querySelector(".regularinfoholder").style.display = "none";
		document.querySelector(".peprallyinfoholder").style.display = "none";
		document.querySelector(".specialinfoholder").style.display = "none";
		document.querySelector(".homeroominfoholder").style.display = "none";
		document.querySelector(".clubinfoholder").style.display = "none";
	} else {
		document.querySelector(".regularinfoholder").style.display = "none";
		document.querySelector(".peprallyinfoholder").style.display = "none";
		document.querySelector(".specialinfoholder").style.display = "none";
		document.querySelector(".homeroominfoholder").style.display = "none";
		document.querySelector(".clubinfoholder").style.display = "none";
		monday.style.display = "block";
	}
}
function peprallyfunction() {
	const peprally = document.querySelector(".peprallyinfoholder");
	if (peprally.style.display === "block") {
		peprally.style.display = "none";
		document.querySelector(".mondayinfoholder").style.display = "none";
		document.querySelector(".regularinfoholder").style.display = "none";
		document.querySelector(".specialinfoholder").style.display = "none";
		document.querySelector(".homeroominfoholder").style.display = "none";
		document.querySelector(".clubinfoholder").style.display = "none";
	} else {
		document.querySelector(".mondayinfoholder").style.display = "none";
		document.querySelector(".regularinfoholder").style.display = "none";
		document.querySelector(".specialinfoholder").style.display = "none";
		document.querySelector(".homeroominfoholder").style.display = "none";
		document.querySelector(".clubinfoholder").style.display = "none";
		peprally.style.display = "block";
	}
}
function specialfunction() {
	const special = document.querySelector(".specialinfoholder");
	if (special.style.display === "block") {
		special.style.display = "none";
		document.querySelector(".mondayinfoholder").style.display = "none";
		document.querySelector(".peprallyinfoholder").style.display = "none";
		document.querySelector(".regularinfoholder").style.display = "none";
		document.querySelector(".homeroominfoholder").style.display = "none";
		document.querySelector(".clubinfoholder").style.display = "none";
	} else {
		document.querySelector(".mondayinfoholder").style.display = "none";
		document.querySelector(".peprallyinfoholder").style.display = "none";
		document.querySelector(".regularinfoholder").style.display = "none";
		document.querySelector(".homeroominfoholder").style.display = "none";
		document.querySelector(".clubinfoholder").style.display = "none";
		special.style.display = "block";
	}
}
function homeroomfunction() {
	const homeroom = document.querySelector(".homeroominfoholder");
	if (homeroom.style.display === "block") {
		homeroom.style.display = "none";
		document.querySelector(".mondayinfoholder").style.display = "none";
		document.querySelector(".peprallyinfoholder").style.display = "none";
		document.querySelector(".specialinfoholder").style.display = "none";
		document.querySelector(".regularinfoholder").style.display = "none";
		document.querySelector(".clubinfoholder").style.display = "none";
	} else {
		document.querySelector(".mondayinfoholder").style.display = "none";
		document.querySelector(".peprallyinfoholder").style.display = "none";
		document.querySelector(".specialinfoholder").style.display = "none";
		document.querySelector(".regularinfoholder").style.display = "none";
		document.querySelector(".clubinfoholder").style.display = "none";
		homeroom.style.display = "block";
	}
}
function clubfunction() {
	const club = document.querySelector(".clubinfoholder");
	if (club.style.display === "block") {
		club.style.display = "none";
		document.querySelector(".mondayinfoholder").style.display = "none";
		document.querySelector(".peprallyinfoholder").style.display = "none";
		document.querySelector(".specialinfoholder").style.display = "none";
		document.querySelector(".homeroominfoholder").style.display = "none";
		document.querySelector(".regularinfoholder").style.display = "none";
	} else {
		document.querySelector(".mondayinfoholder").style.display = "none";
		document.querySelector(".peprallyinfoholder").style.display = "none";
		document.querySelector(".specialinfoholder").style.display = "none";
		document.querySelector(".homeroominfoholder").style.display = "none";
		document.querySelector(".regularinfoholder").style.display = "none";
		club.style.display = "block";
	}
}

function sport1() {
	const firstsport = document.querySelector(".sport1infoholder");
	if (firstsport.style.display === "block") {
		firstsport.style.display = "none";
		document.querySelector(".sport2infoholder").style.display = "none";
		document.querySelector(".sport3infoholder").style.display = "none";
		document.querySelector(".sport4infoholder").style.display = "none";
		document.querySelector(".sport5infoholder").style.display = "none";
		document.querySelector(".sport6infoholder").style.display = "none";
		document.querySelector(".sport7infoholder").style.display = "none";
	} else {
		document.querySelector(".sport2infoholder").style.display = "none";
		document.querySelector(".sport3infoholder").style.display = "none";
		document.querySelector(".sport4infoholder").style.display = "none";
		document.querySelector(".sport5infoholder").style.display = "none";
		document.querySelector(".sport6infoholder").style.display = "none";
		document.querySelector(".sport7infoholder").style.display = "none";
		firstsport.style.display = "block";
	}
}
function sport2() {
	const secondsport = document.querySelector(".sport2infoholder");
	if (secondsport.style.display === "block") {
		secondsport.style.display = "none";
		document.querySelector(".sport1infoholder").style.display = "none";
		document.querySelector(".sport3infoholder").style.display = "none";
		document.querySelector(".sport4infoholder").style.display = "none";
		document.querySelector(".sport5infoholder").style.display = "none";
		document.querySelector(".sport6infoholder").style.display = "none";
		document.querySelector(".sport7infoholder").style.display = "none";
	} else {
		document.querySelector(".sport1infoholder").style.display = "none";
		document.querySelector(".sport3infoholder").style.display = "none";
		document.querySelector(".sport4infoholder").style.display = "none";
		document.querySelector(".sport5infoholder").style.display = "none";
		document.querySelector(".sport6infoholder").style.display = "none";
		document.querySelector(".sport7infoholder").style.display = "none";
		secondsport.style.display = "block";
	}
}
function sport2() {
	const secondsport = document.querySelector(".sport2infoholder");
	if (secondsport.style.display === "block") {
		secondsport.style.display = "none";
		document.querySelector(".sport1infoholder").style.display = "none";
		document.querySelector(".sport3infoholder").style.display = "none";
		document.querySelector(".sport4infoholder").style.display = "none";
		document.querySelector(".sport5infoholder").style.display = "none";
		document.querySelector(".sport6infoholder").style.display = "none";
		document.querySelector(".sport7infoholder").style.display = "none";
	} else {
		document.querySelector(".sport1infoholder").style.display = "none";
		document.querySelector(".sport3infoholder").style.display = "none";
		document.querySelector(".sport4infoholder").style.display = "none";
		document.querySelector(".sport5infoholder").style.display = "none";
		document.querySelector(".sport6infoholder").style.display = "none";
		document.querySelector(".sport7infoholder").style.display = "none";
		secondsport.style.display = "block";
	}
}
function sport3() {
	const thirdsport = document.querySelector(".sport3infoholder");
	if (thirdsport.style.display === "block") {
		thirdsport.style.display = "none";
		document.querySelector(".sport1infoholder").style.display = "none";
		document.querySelector(".sport2infoholder").style.display = "none";
		document.querySelector(".sport4infoholder").style.display = "none";
		document.querySelector(".sport5infoholder").style.display = "none";
		document.querySelector(".sport6infoholder").style.display = "none";
		document.querySelector(".sport7infoholder").style.display = "none";
	} else {
		document.querySelector(".sport1infoholder").style.display = "none";
		document.querySelector(".sport2infoholder").style.display = "none";
		document.querySelector(".sport4infoholder").style.display = "none";
		document.querySelector(".sport5infoholder").style.display = "none";
		document.querySelector(".sport6infoholder").style.display = "none";
		document.querySelector(".sport7infoholder").style.display = "none";
		thirdsport.style.display = "block";
	}
}
function sport4() {
	const fourthsport = document.querySelector(".sport4infoholder");
	if (fourthsport.style.display === "block") {
		fourthsport.style.display = "none";
		document.querySelector(".sport1infoholder").style.display = "none";
		document.querySelector(".sport2infoholder").style.display = "none";
		document.querySelector(".sport3infoholder").style.display = "none";
		document.querySelector(".sport5infoholder").style.display = "none";
		document.querySelector(".sport6infoholder").style.display = "none";
		document.querySelector(".sport7infoholder").style.display = "none";
	} else {
		document.querySelector(".sport1infoholder").style.display = "none";
		document.querySelector(".sport2infoholder").style.display = "none";
		document.querySelector(".sport3infoholder").style.display = "none";
		document.querySelector(".sport5infoholder").style.display = "none";
		document.querySelector(".sport6infoholder").style.display = "none";
		document.querySelector(".sport7infoholder").style.display = "none";
		fourthsport.style.display = "block";
	}
}
function sport5() {
	const fifthsport = document.querySelector(".sport5infoholder");
	if (fifthsport.style.display === "block") {
		fifthsport.style.display = "none";
		document.querySelector(".sport1infoholder").style.display = "none";
		document.querySelector(".sport2infoholder").style.display = "none";
		document.querySelector(".sport3infoholder").style.display = "none";
		document.querySelector(".sport4infoholder").style.display = "none";
		document.querySelector(".sport6infoholder").style.display = "none";
		document.querySelector(".sport7infoholder").style.display = "none";
	} else {
		document.querySelector(".sport1infoholder").style.display = "none";
		document.querySelector(".sport2infoholder").style.display = "none";
		document.querySelector(".sport3infoholder").style.display = "none";
		document.querySelector(".sport4infoholder").style.display = "none";
		document.querySelector(".sport6infoholder").style.display = "none";
		document.querySelector(".sport7infoholder").style.display = "none";
		fifthsport.style.display = "block";
	}
}
function sport6() {
	const sixthsport = document.querySelector(".sport6infoholder");
	if (sixthsport.style.display === "block") {
		sixthsport.style.display = "none";
		document.querySelector(".sport1infoholder").style.display = "none";
		document.querySelector(".sport2infoholder").style.display = "none";
		document.querySelector(".sport3infoholder").style.display = "none";
		document.querySelector(".sport4infoholder").style.display = "none";
		document.querySelector(".sport5infoholder").style.display = "none";
		document.querySelector(".sport7infoholder").style.display = "none";
	} else {
		document.querySelector(".sport1infoholder").style.display = "none";
		document.querySelector(".sport2infoholder").style.display = "none";
		document.querySelector(".sport3infoholder").style.display = "none";
		document.querySelector(".sport4infoholder").style.display = "none";
		document.querySelector(".sport5infoholder").style.display = "none";
		document.querySelector(".sport7infoholder").style.display = "none";
		sixthsport.style.display = "block";
	}
}
function sport7() {
	const seventhsport = document.querySelector(".sport7infoholder");
	if (seventhsport.style.display === "block") {
		seventhsport.style.display = "none";
		document.querySelector(".sport1infoholder").style.display = "none";
		document.querySelector(".sport2infoholder").style.display = "none";
		document.querySelector(".sport3infoholder").style.display = "none";
		document.querySelector(".sport4infoholder").style.display = "none";
		document.querySelector(".sport5infoholder").style.display = "none";
		document.querySelector(".sport6infoholder").style.display = "none";
	} else {
		document.querySelector(".sport1infoholder").style.display = "none";
		document.querySelector(".sport2infoholder").style.display = "none";
		document.querySelector(".sport3infoholder").style.display = "none";
		document.querySelector(".sport4infoholder").style.display = "none";
		document.querySelector(".sport5infoholder").style.display = "none";
		document.querySelector(".sport6infoholder").style.display = "none";
		seventhsport.style.display = "block";
	}
}
function special1() {
	const spec1 = document.querySelector(".special1infoholder");
	if (spec1.style.display === "block") {
		spec1.style.display = "none";
		document.querySelector(".special2infoholder").style.display = "none";
		document.querySelector(".special3infoholder").style.display = "none";
		document.querySelector(".special4infoholder").style.display = "none";
		document.querySelector(".special5infoholder").style.display = "none";
		document.querySelector(".special6infoholder").style.display = "none";
		document.querySelector(".special7infoholder").style.display = "none";
	} else {
		document.querySelector(".special2infoholder").style.display = "none";
		document.querySelector(".special3infoholder").style.display = "none";
		document.querySelector(".special4infoholder").style.display = "none";
		document.querySelector(".special5infoholder").style.display = "none";
		document.querySelector(".special6infoholder").style.display = "none";
		document.querySelector(".special7infoholder").style.display = "none";
		spec1.style.display = "block";
	}
}
function special2() {
	const spec2 = document.querySelector(".special2infoholder");
	if (spec2.style.display === "block") {
		spec2.style.display = "none";
		document.querySelector(".special1infoholder").style.display = "none";
		document.querySelector(".special3infoholder").style.display = "none";
		document.querySelector(".special4infoholder").style.display = "none";
		document.querySelector(".special5infoholder").style.display = "none";
		document.querySelector(".special6infoholder").style.display = "none";
		document.querySelector(".special7infoholder").style.display = "none";
	} else {
		document.querySelector(".special1infoholder").style.display = "none";
		document.querySelector(".special3infoholder").style.display = "none";
		document.querySelector(".special4infoholder").style.display = "none";
		document.querySelector(".special5infoholder").style.display = "none";
		document.querySelector(".special6infoholder").style.display = "none";
		document.querySelector(".special7infoholder").style.display = "none";
		spec2.style.display = "block";
	}
}
function special3() {
	const spec3 = document.querySelector(".special3infoholder");
	if (spec3.style.display === "block") {
		spec3.style.display = "none";
		document.querySelector(".special1infoholder").style.display = "none";
		document.querySelector(".special2infoholder").style.display = "none";
		document.querySelector(".special4infoholder").style.display = "none";
		document.querySelector(".special5infoholder").style.display = "none";
		document.querySelector(".special6infoholder").style.display = "none";
		document.querySelector(".special7infoholder").style.display = "none";
	} else {
		document.querySelector(".special1infoholder").style.display = "none";
		document.querySelector(".special2infoholder").style.display = "none";
		document.querySelector(".special4infoholder").style.display = "none";
		document.querySelector(".special5infoholder").style.display = "none";
		document.querySelector(".special6infoholder").style.display = "none";
		document.querySelector(".special7infoholder").style.display = "none";
		spec3.style.display = "block";
	}
}
function special4() {
	const spec4 = document.querySelector(".special4infoholder");
	if (spec4.style.display === "block") {
		spec4.style.display = "none";
		document.querySelector(".special1infoholder").style.display = "none";
		document.querySelector(".special2infoholder").style.display = "none";
		document.querySelector(".special3infoholder").style.display = "none";
		document.querySelector(".special5infoholder").style.display = "none";
		document.querySelector(".special6infoholder").style.display = "none";
		document.querySelector(".special7infoholder").style.display = "none";
	} else {
		document.querySelector(".special1infoholder").style.display = "none";
		document.querySelector(".special2infoholder").style.display = "none";
		document.querySelector(".special3infoholder").style.display = "none";
		document.querySelector(".special5infoholder").style.display = "none";
		document.querySelector(".special6infoholder").style.display = "none";
		document.querySelector(".special7infoholder").style.display = "none";
		spec4.style.display = "block";
	}
}
function special5() {
	const spec5 = document.querySelector(".special5infoholder");
	if (spec5.style.display === "block") {
		spec5.style.display = "none";
		document.querySelector(".special1infoholder").style.display = "none";
		document.querySelector(".special2infoholder").style.display = "none";
		document.querySelector(".special3infoholder").style.display = "none";
		document.querySelector(".special4infoholder").style.display = "none";
		document.querySelector(".special6infoholder").style.display = "none";
		document.querySelector(".special7infoholder").style.display = "none";
	} else {
		document.querySelector(".special1infoholder").style.display = "none";
		document.querySelector(".special2infoholder").style.display = "none";
		document.querySelector(".special3infoholder").style.display = "none";
		document.querySelector(".special4infoholder").style.display = "none";
		document.querySelector(".special6infoholder").style.display = "none";
		document.querySelector(".special7infoholder").style.display = "none";
		spec5.style.display = "block";
	}
}
function special6() {
	const spec6 = document.querySelector(".special6infoholder");
	if (spec6.style.display === "block") {
		spec6.style.display = "none";
		document.querySelector(".special1infoholder").style.display = "none";
		document.querySelector(".special2infoholder").style.display = "none";
		document.querySelector(".special3infoholder").style.display = "none";
		document.querySelector(".special4infoholder").style.display = "none";
		document.querySelector(".special5infoholder").style.display = "none";
		document.querySelector(".special7infoholder").style.display = "none";
	} else {
		document.querySelector(".special1infoholder").style.display = "none";
		document.querySelector(".special2infoholder").style.display = "none";
		document.querySelector(".special3infoholder").style.display = "none";
		document.querySelector(".special4infoholder").style.display = "none";
		document.querySelector(".special5infoholder").style.display = "none";
		document.querySelector(".special7infoholder").style.display = "none";
		spec6.style.display = "block";
	}
}
function special7() {
	const spec7 = document.querySelector(".special7infoholder");
	if (spec7.style.display === "block") {
		spec7.style.display = "none";
		document.querySelector(".special1infoholder").style.display = "none";
		document.querySelector(".special2infoholder").style.display = "none";
		document.querySelector(".special3infoholder").style.display = "none";
		document.querySelector(".special4infoholder").style.display = "none";
		document.querySelector(".special5infoholder").style.display = "none";
		document.querySelector(".special6infoholder").style.display = "none";
	} else {
		document.querySelector(".special1infoholder").style.display = "none";
		document.querySelector(".special2infoholder").style.display = "none";
		document.querySelector(".special3infoholder").style.display = "none";
		document.querySelector(".special4infoholder").style.display = "none";
		document.querySelector(".special5infoholder").style.display = "none";
		document.querySelector(".special6infoholder").style.display = "none";
		spec7.style.display = "block";
	}
}

function bellscheduleminimizer() {
	const schedulebody = document.querySelector(".bellscheduleholder");
	const belltriangle = document.querySelector(".belldropdownimg");
	if (schedulebody.style.display === "none") {
		schedulebody.style.display = "block";
		belltriangle.src = "downfacingtriangle.svg";
	} else {
		schedulebody.style.display = "none";
		belltriangle.src = "rightfacingtriangle.svg";
	}
}
function sportscheduleminimizer() {
	const schedulebody = document.querySelector(".sportscheduleholder");
	const belltriangle = document.querySelector(".sportdropdownimg");
	if (schedulebody.style.display === "block") {
		schedulebody.style.display = "none";
		belltriangle.src = "rightfacingtriangle.svg";
	} else {
		schedulebody.style.display = "block";
		belltriangle.src = "downfacingtriangle.svg";
	}
}
function specialscheduleminimizer() {
	const schedulebody = document.querySelector(".specialscheduleholder");
	const belltriangle = document.querySelector(".specialdropdownimg");
	if (schedulebody.style.display === "block") {
		schedulebody.style.display = "none";
		belltriangle.src = "rightfacingtriangle.svg";
	} else {
		schedulebody.style.display = "block";
		belltriangle.src = "downfacingtriangle.svg";
	}
}
