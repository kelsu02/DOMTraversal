function buildCard(student) {
    let cardTemplate = document.getElementById("cardTemplate"),
        clone = document.importNode(cardTemplate.content, true),
        cardElement = clone.firstElementChild;

    cardElement.id = student.name.toLowerCase();
    cardElement.querySelector('.card-image img').src = student.imgUrl;
    cardElement.querySelector('.title').innerText = student.name;
    cardElement.querySelector('.subtitle').innerText = `@${student.name.toLowerCase()}`;

    document.getElementById("students").appendChild(cardElement);
}

function Student(name, imgUrl) {
    this.name = name;
    this.imgUrl = imgUrl;
}

let students = [
    new Student("Kelly", "/images/kelly.jpg"),
    new Student("Justin", "/images/justin.jpg")
];

students.forEach(function(student){
    buildCard(student);
});

document
    .getElementsByTagName('body')[0]
    .removeChild(document.getElementById("cardTemplate"));