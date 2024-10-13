const listSelect = document.querySelectorAll(".pokedev");


listSelect.forEach(pokedev =>{
    pokedev.addEventListener("click", () =>{

        hideCardPokedev();

        const idCardSelected = ShowCardPokedev(pokedev);

        removeActiveList();

        activePokedevSelected(idCardSelected);

    })
})

function hideCardPokedev() {
    const cardOpen = document.querySelector(".open");
    cardOpen.classList.remove("open");
}

function ShowCardPokedev(pokedev) {
    const idCardSelected = pokedev.attributes.id.value;
    const idCardForOpen = "card-" + idCardSelected;
    const cardOpening = document.getElementById(idCardForOpen);
    cardOpening.classList.add("open");
    return idCardSelected;
}

function removeActiveList() {
    const pokedevListActive = document.querySelector(".active");
    pokedevListActive.classList.remove("active");
}

function activePokedevSelected(idCardSelected) {
    const pokedevSelected = document.getElementById(idCardSelected);
    pokedevSelected.classList.add("active");
}




