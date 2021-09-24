//function dosomething(){
 //   document.getElementById('firstAmendment').innerHTML = 'Freedom of speech, press, right to assemble, petition.';
 //   }

//<script src="script.js" type="/resources/main.js"></script>


function myFunction() {
    var x = document.getElementById("firstAmendment");
    if (x.innerHTML == "Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.") {
        x.innerHTML = "Freedom of speech, press, right to assemble, petition.";
    } else {
        x.innerHTML = "Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.";
    }
}

function mySecAmend() {
    var x = document.getElementById("secAmendment");
    if (x.innerHTML == "A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms shall not be infringed. ") {
        x.innerHTML = "Right to bear arms.";
    } else {
        x.innerHTML = "A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms shall not be infringed. ";
    }
}

function myThirdAmend() {
    var x = document.getElementById("thirdAmendment");
    if (x.innerHTML == "No Soldier shall, in time of peace be quartered in any house, without the consent of the Owner, nor in time of war, but in a manner to be prescribed by law. ") {
        x.innerHTML = "Soldier housing will only happen during times of war.";
    } else {
        x.innerHTML = "No Soldier shall, in time of peace be quartered in any house, without the consent of the Owner, nor in time of war, but in a manner to be prescribed by law. ";
    }
}

function myFourthAmend() {
    var x = document.getElementById("fourthAmendment");
    if (x.innerHTML == "The right of the people to be secure in their persons, houses, papers, and effects, against unreasonable searches and seizures, shall not be violated, and no Warrants shall issue, but upon probable cause, supported by Oath or affirmation, and particularly describing the place to be searched, and the persons or things to be seized. ") {
        x.innerHTML = "Search warrants are required to search personal property. ";
    } else {
        x.innerHTML = "The right of the people to be secure in their persons, houses, papers, and effects, against unreasonable searches and seizures, shall not be violated, and no Warrants shall issue, but upon probable cause, supported by Oath or affirmation, and particularly describing the place to be searched, and the persons or things to be seized. ";
    }
}

function myFifthAmend() {
    var x = document.getElementById("fifthAmendment");
    if (x.innerHTML == "No person shall be held to answer for a capital, or otherwise infamous crime, unless on a presentment or indictment of a Grand Jury, except in cases arising in the land or naval forces, or in the Militia, when in actual service in time of War or public danger; nor shall any person be subject for the same offence to be twice put in jeopardy of life or limb; nor shall be compelled in any criminal case to be a witness against himself, nor be deprived of life, liberty, or property, without due process of law; nor shall private property be taken for public use, without just compensation. ") {
        x.innerHTML = "Innocent Until Proven Guilty by the judicial system. ";
    } else {
        x.innerHTML = "No person shall be held to answer for a capital, or otherwise infamous crime, unless on a presentment or indictment of a Grand Jury, except in cases arising in the land or naval forces, or in the Militia, when in actual service in time of War or public danger; nor shall any person be subject for the same offence to be twice put in jeopardy of life or limb; nor shall be compelled in any criminal case to be a witness against himself, nor be deprived of life, liberty, or property, without due process of law; nor shall private property be taken for public use, without just compensation. ";
    }
}