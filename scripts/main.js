function loadpkm(name) {
    let url = `https://pokeapi.co/api/v2/pokemon/${name}/`;
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            // document.getElementById("Nome").innerHTML = data['name'];
            // document.getElementById("Número").innerHTML = data['id'];

            select('#pkm_name').innerHTML = (data['name']).toUpperCase();
            let img = data.sprites.other["official-artwork"].front_default;
            document.getElementById("pkm_img").src = img;
        })
        .catch((erro) => {
            alert(`${name} é inválido`);
        })

}
function SearchPkmByName() {
    const pkmName = document.getElementById("pkm_search_input").value.toLowerCase();
    loadpkm(pkmName);
}

document.getElementById("pkm_search_button").onclick = SearchPkmByName;


//* Funções auxiliares
function render(obj, text, add) {
    if (typeof obj === 'string') obj = document.querySelector(obj);
    add === true ? obj.innerHTML += text : obj.innerHTML = text;
}

function select(obj) {
    return document.querySelector(obj);
}