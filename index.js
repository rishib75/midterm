// Om Sanghvi
// osanghvi@iastate.edu
// February 21, 2024

function getInputValue() {

    let movieName = document.forms["my_form"]["inputMovieName"];
    let inputMovieName = movieName.value;



    fetch("./data.json")
        .then(response => response.json())
        .then(myEvents => loadMovies(myEvents));

    function loadMovies(myEvents) {



        var mainContainer = document.getElementById("goodmovies");

        console.log(myEvents);

        for (let i = 0; i < myEvents.events.length; i++) {

            if(myEvents.events[i].eventName[2] === inputMovieName[2]){
            
            let eventName = myEvents.events[i].eventName;
            let description = myEvents.events[i].description;
            let src = myEvents.events[i].src;

            //console.log(title);
            //console.log(year);
            //console.log(url);

            let division = document.createElement("div");

            division.innerHTML = `
 
 <div class="col">
          <div class="card shadow-sm" style="border: rgb(128, 0, 0) solid 2px;">
            <img src = "${src}"
            <div class="card-body">
             <h2> ${eventName} </h2>
<div>
              <h4>  ${description} </h4></div>
            </div>
          </div>
        </div>
    `;
         
                
                
            mainContainer.appendChild(division);

            }

        }


    }
}
