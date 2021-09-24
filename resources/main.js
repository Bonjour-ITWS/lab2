//function dosomething(){
 //   document.getElementById('firstAmendment').innerHTML = 'Freedom of speech, press, right to assemble, petition.';
 //   }

function myFunction() {
    var x = document.getElementById("firstAmendment");
    if (x.innerHTML === "Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.") {
        x.innerHTML = "Freedom of speech, press, right to assemble, petition.";
    } else {
        x.innerHTML = "Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.";
    }
}