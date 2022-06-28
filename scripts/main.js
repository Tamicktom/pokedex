function loadpkm() {
    let url = "https://pokeapi.co/api/v2/pokemon/600/";
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            // document.getElementById("Nome").innerHTML = data['name'];
            // document.getElementById("Número").innerHTML = data['id'];
            let img = data.sprites.other["official-artwork"].front_default;
            document.getElementById("pkm_img").src = img;
        })
        .catch((erro) => {
            console.log(erro)
        })

    console.clear();
}

document.getElementById("pkm_search_button").onclick = loadpkm;

