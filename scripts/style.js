function inicialization() {
    const screen = select("#screen");
    const saveScreenStyle = screen.style;
    screen.style.flexDirection = "column";
    screen.style.transition = "all 1.7s ease-in-out";
    screen.style.background = "rgba(0,0,150,0.5)";
    screen.style.color = "white";


    tittle = "<h1>Pokédex</h1>";
    subtittle = "<p>Pokedex made with data from pokeapi</p>";
    render('#screen', tittle);
    render('#screen', subtittle, true);



    //screen.style = saveScreenStyle;
}

//inicialization();


















// function updatePkmTypeColors() {
//     const pkm_types_colors = {
//         "Normal": "var(--Normal)",
//         "Lutador": "var(--Lutador)",
//         "Voador": "var(--Voador)",
//         "Venenoso": "var(--Venenoso)",
//         "Terrestre": "var(--Terrestre)",
//         "Pedra": "var(--Pedra)",
//         "Inseto": "var(--Inseto)",
//         "Fantasma": "var(--Fantasma)",
//         "Metal": "var(--Metal)",
//         "Fogo": "var(--Fogo)",
//         "Água": "var(--Água)",
//         "Grama": "var(--Grama)",
//         "Elétrico": "var(--Elétrico)",
//         "Psiquico": "var(--Psiquico)",
//         "Gelo": "var(--Gelo)",
//         "Dragão": "var(--Dragão)",
//         "Trevas": "var(--Trevas)",
//         "Fada": "var(--Fada)",
//         "Desconhecido": "var(--Desconhecido)",
//         "Sombras": "var(--Sombras)"
//     };
//     const type1 = document.querySelector("#pkm_type1");
//     const type2 = document.querySelector("#pkm_type2");
//     const keys = Object.keys(pkm_types_colors);
//     keys.forEach((key) => {
//         if (key.toLowerCase() == type1.innerHTML.toLowerCase())
//             document.documentElement.style.setProperty('--pokemon-color-theme', pkm_types_colors[key]);
//         if (key.toLowerCase() == type2.innerHTML.toLowerCase())
//             document.documentElement.style.setProperty('--pokemon-color-theme2', pkm_types_colors[key]);

//     });
//     if (type2.innerHTML.toLowerCase() == '') {
//         document.documentElement.style.setProperty('--pokemon-color-theme2', '--pokemon-color-theme');
//     }
// }

// function showSearchResult() {
//     const main = document.querySelector("#main");
//     const search_div = document.querySelector("#search_div");

//     if (main.classList.contains('invisible')) {
//         main.classList.remove('invisible');
//         main.style.width = '100%';
//         search_div.style.width = '0%';
//         search_div.style.display = 'none';
//     }
//     search_div.style.display = "none";
// }


// showSearchResult();
// updatePkmTypeColors();
// let document_Style = getComputedStyle(document.documentElement);
// let myVal = document_Style.getPropertyValue('--Dragão');
// console.log(myVal);