const pkm_types_colors = {
    "Normal": "rgb(169, 168, 112)",
    "Lutador": "rgb(191, 50, 32)",
    "Voador": "rgb(169, 142, 247)",
    "Venenoso": "rgb(159, 64, 168)",
    "Terrestre": "rgb(224, 193, 87)",
    "Pedra": "rgb(185, 160, 18)",
    "Inseto": "rgb(169, 185, 0)",
    "Fantasma": "rgb(113, 87, 160)",
    "Metal": "rgb(184, 184, 212)",
    "Fogo": "rgb(240, 127, 5)",
    "Água": "rgb(102, 143, 248)",
    "Grama": "rgb(123, 199, 51)",
    "Elétrico": "rgb(247, 209, 0)",
    "Psiquico": "rgb(247, 89, 137)",
    "Gelo": "rgb(154, 215, 216)",
    "Dragão": "rgb(109, 52, 255)",
    "Trevas": "rgb(113, 87, 70)",
    "Fada": "rgb(232, 179, 232)",
    "Desconhecido": "rgb(27, 148, 129)",
    "Sombras": "rgb(50, 0, 145)"
};

function updatePkmTypeColors() {
    const type1 = document.querySelector("#pkm_type1");
    const type2 = document.querySelector("#pkm_type2");
    console.log(pkm_types_colors);

    const keys = Object.keys(pkm_types_colors);
    keys.forEach((key) => {
        if (key.toLowerCase() == type1.innerHTML.toLowerCase())
            type1.style.backgroundColor = pkm_types_colors[key];
        if (key.toLowerCase() == type2.innerHTML.toLowerCase())
            type2.style.backgroundColor = pkm_types_colors[key];
    });
}

function showSearchResult() {
    const main = document.querySelector("#main");
    const search_div = document.querySelector("#search_div");

    if (main.classList.contains('invisible')) {
        main.classList.remove('invisible');
        main.style.width = '100%';
        search_div.style.width = '0%';
        search_div.style.display = 'none';
    }
    search_div.style.display = "none";
}

showSearchResult();
updatePkmTypeColors();


