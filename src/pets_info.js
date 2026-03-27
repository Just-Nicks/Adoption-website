const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const type = params.get("type")

console.log(id);
console.log(type);

fetch("../data/pets.json")
.then(res => res.json())
.then(data => {

    let pet = null

    if (type === "cat" && data.cats) {
        pet = data.cats.find(p => p.id == id);

    } else if (type === "dog" && data.dogs) {
        pet = data.dogs.find(p => p.id == id);
    }

    if (pet) {
        document.getElementById("pet-name").textContent = pet.name;
        document.getElementById("pet-age").textContent = pet.age;
        document.getElementById("pet-sex").textContent = pet.sex;
        document.getElementById("pet-desc").textContent = pet.description;
        document.getElementById("pet-img").src = pet.image;

    } else {
        document.getElementById("alert").style.display = "flex";
        document.getElementById("pet-info").style.display = "none";
    }

});