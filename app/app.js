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

let kelly = document.getElementById('kelly'); 

kelly.querySelector('.title').innerText = "Kelly Redmond"; 
kelly.querySelector('.subtitle').classList.add("twitter-handle"); 
let newImage = kelly.querySelectorAll('img'); 
newImage.forEach(function(image){ 
    image.setAttribute('src', '/images/kelly.jpg'); 
}); 

let updateProfessor = document.querySelectorAll('.professor'); 
updateProfessor.forEach(function(professor){ 
    professor.querySelector('.title').innerText = "Clown"; 
    professor.querySelector('.subtitle').innerText = "@arrayClown"; 
    let profImage = professor.querySelectorAll('img'); 
    profImage.forEach(function(image){ 
        image.setAttribute('src', '/images/clown.jpg');
    }); 
});