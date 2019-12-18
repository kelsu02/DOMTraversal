const e = document.createElement;

function buildCard(student) {
    let article = e("article"),
        card = e("div");
    
    article.id = student.name.toLowerCase();
    article.classList.add("column", "is-3");
    card.classList.add("card");

    card.appendChild(buildCardImage(student.imgUrl));
    card.appendChild(buildCardContent(student.name));
    article.appendChild(card);
    
    return article;
}

function buildCardImage(studentImageUrl) {
    let cardImage = e("div"),
        figure = e("figure"),
        image = e("img");
   
    cardImage.classList.add("card-image");
    figure.classList.add("image", "is-4by3");
    image.src = studentImageUrl;

    figure.appendChild(image);
    cardImage.appendChild(figure);

    return cardImage;
}

function buildMedia(studentName) {
    let media = e("div"),
        mediaLeft = e("div"),
        figure = e("figure"),
        image = e("img"),
        mediaContent = e("div"),
        title = e("p"),
        subtitle = e("p");

    media.classList.add("media");
    mediaLeft.classList.add("media-left");
    figure.classList.add("image", "is-48x48");
    image.src = "https://bulma.io/images/placeholders/96x96.png";
    mediaContent.classList.add("media-content");
    title.classList.add("title", "is-4");
    subtitle.classList.add("subtitle", "is-6");
    
    title.innerText = `${studentName[0].toUpperCase()}${studentName.slice(1)}`;
    subtitle.innerText = `@${studentName.toLowerCase()}`;
    
    figure.appendChild(image);
    mediaLeft.appendChild(figure);
    
    mediaContent.appendChild(title);
    mediaContent.appendChild(subtitle);
    
    media.appendChild(mediaLeft);
    media.appendChild(mediaContent);

    return media;
}

function buildCardContent(studentName){
    let cardContent = e("div"),
        content = e("div");

    cardContent.classList.add("card-content");
    content.classList.add("content");

    content.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.";

    cardContent.appendChild(buildMedia(studentName));
    cardContent.appendChild(content);

    return cardContent;
}

/**
 * 
 * @param {string} name 
 * @param {string} imgUrl 
 */
function Student(name, imgUrl) {
    this.name = name;
    this.imgUrl = imgUrl;
}

let students = [
    new Student("reegan", '/images/reegan.jpg'),
    new Student('Brett', '/images/brett.jpg'),
    new Student('erica', '/images/erica.jpg'),
    new Student('Justin', '/images/justin.jpg'),
    new Student('Kelly', '/images/kelly.jpg'),
    new Student('lauryn', "/images/lauryn.jpg"),
    new Student('Marc', '/images/marc.jpg')
];

function Professor(name, imgUrl)

students.forEach(function (student) {
    document.getElementById("students").appendChild(buildCard(student));
});