/**
 * ONE: create a new branch with the name develop-{your name}
 * 
 * TWO: write some JavaScript to find the article element with an id that has your name.
 * Using that element as a starting point, select the element with class="title" and change the innerHtml to be 
 * your full name. Next, Select the element with a class="subtitle" and add a class of "twitter-handle" to the classList.
 * Finally, select the img element and setAttribute src to the relative url string that loads your picture.
 * 
 * THREE: write some JavaScript that finds ALL articles with a class="professor". Loop through each element and set the child
 * img element src to the relative clown file. Change the title to 'Clown', and subtitle to '@arrayClown' 
 */

let kelly = document.getElementById('kelly'); //targeting id #kelly from html

kelly.querySelector('.title').innerText = "Kelly Redmond"; //changing title text through targeting .title in #kelly
kelly.querySelector('.subtitle').classList.add("twitter-handle"); //adding subtitle class targeting .subtitle in #kelly
let newImage = kelly.querySelectorAll('img'); //creating array for all img tags withing #kelly
newImage.forEach(function(image){ //forEach method to target every instance of img within #kelly
    image.setAttribute('src', '/images/kelly.jpg'); //changing source to my pic
}); //closing forEach method

let updateProfessor = document.querySelectorAll('.professor'); //creating array for all .professor identified in html

updateProfessor.forEach(function(professor){ //creating forEach method to iterate over every item in update professor array
    professor.querySelector('.title').innerText = "Clown"; //changing title of all instances of .title in .professor
    professor.querySelector('.subtitle').innerText = "@arrayClown"; //changing subtitle of all instance of .subtitle in .professor
    let profImage = professor.querySelectorAll('img'); //creating array for all img tags within .professor classes
    profImage.forEach(function(image){ //forEach method to target every instance of img within updateProfessor array
        image.setAttribute('src', '/images/clown.jpg'); //replacing image source
    }); //closing image forEach method
}); // closing forEach method for each iteration of professor