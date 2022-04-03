function updatePkmTypeColors() {
    const pkm_types_colors = {
        "Normal": "var(--Normal)",
        "Lutador": "var(--Lutador)",
        "Voador": "var(--Voador)",
        "Venenoso": "var(--Venenoso)",
        "Terrestre": "var(--Terrestre)",
        "Pedra": "var(--Pedra)",
        "Inseto": "var(--Inseto)",
        "Fantasma": "var(--Fantasma)",
        "Metal": "var(--Metal)",
        "Fogo": "var(--Fogo)",
        "Água": "var(--Água)",
        "Grama": "var(--Grama)",
        "Elétrico": "var(--Elétrico)",
        "Psiquico": "var(--Psiquico)",
        "Gelo": "var(--Gelo)",
        "Dragão": "var(--Dragão)",
        "Trevas": "var(--Trevas)",
        "Fada": "var(--Fada)",
        "Desconhecido": "var(--Desconhecido)",
        "Sombras": "var(--Sombras)"
    };
    const type1 = document.querySelector("#pkm_type1");
    const type2 = document.querySelector("#pkm_type2");
    const keys = Object.keys(pkm_types_colors);
    keys.forEach((key) => {
        if (key.toLowerCase() == type1.innerHTML.toLowerCase())
            document.documentElement.style.setProperty('--pokemon-color-theme', pkm_types_colors[key]);

        if (key.toLowerCase() == type2.innerHTML.toLowerCase())
            document.documentElement.style.setProperty('--pokemon-color-theme2', pkm_types_colors[key]);
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

// showSearchResult();
// updatePkmTypeColors();