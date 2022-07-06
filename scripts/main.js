//* @note Funções auxiliares

const render = (obj, text, add) => {
    if (typeof obj === 'string') obj = document.querySelector(obj);
    add === true ? obj.innerHTML += text : obj.innerHTML = text;
}

const select = (obj) => {
    return document.querySelector(obj);
}

//* @note api work
async function loadPkm(name) {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}/`;

    fetch(url)
        .then(response => { return response.json() })
        .then(data => {
            console.log(data);
            showSarch(data);
        })
        .catch((erro) => {
            alert(`${name} é inválido`);
        })
}

function SearchPkm() {
    const pkmName = (select("#pkm_search_input").value).replace(/\s/g, '');
    loadPkm(pkmName.toLowerCase());
}
select("#pkm_search_button").onclick = SearchPkm;


//* @note Show api search result
function showSarch(data) {
    select("#pkm_img").src = data.sprites.other["official-artwork"].front_default;

    render('#pkm_name', (data.name).toUpperCase());
    data.types.forEach(type => {
        render(
            '#pkm_type',
            `<span class="type ${type.type.name}">${(type.type.name).toUpperCase()}</span>`,
            true);
    });
    
    render('#pkm_id', `Nº ${data.id}`);
}