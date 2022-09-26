function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

/* function main() {
  
    let dadosSemTratar = fazGet("https://rickandmortyapi.com/api/character");
    let dados = JSON.parse(dadosSemTratar);
    let foto = dados.results[1].image
    let nome = dados.results[1].name

    let img = document.getElementById("rederiza")
    let Snome = document.getElementById("nome")
    
    img.innerHTML = `<img src="${foto}">` 
    Snome.innerHTML = nome
    console.log(dados.results[1]) 
}
 */

var lista = document.getElementById("lista")

function menu() {
    /* Dados */
    let dadosSemTratar = fazGet("https://rickandmortyapi.com/api/character");
    let dados = JSON.parse(dadosSemTratar);
    let pessoas = dados.results
    let pessoas8 = []
    for(i=0; i < 12; i++) {
        pessoas8.push(pessoas[i])
    }
    console.log(pessoas8)

    pessoas8.forEach((element, index) => {
        lista.innerHTML += `<a onclick="individual(${index})"><img src="${element.image}"></a>`
    });
}

function individual(index) {
    let dadosSemTratar = fazGet("https://rickandmortyapi.com/api/character");
    let dados = JSON.parse(dadosSemTratar);
    let pessoas = dados.results;
    lista.innerHTML = `<img src="${pessoas[index].image}">`
    lista.innerHTML += `<h3>Nome: </h3><p>${pessoas[index].name}</p>`
    lista.innerHTML += `<h3>Espécie: </h3><p>${pessoas[index].species}</p>`
}

menu()