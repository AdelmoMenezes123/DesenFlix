const containerFilmes = document.querySelector('#filmes');
const containerDesenhos = document.querySelector('#desenhos');
const containerAnimes = document.querySelector('#animes');
const containerSeries = document.querySelector('#series');

const filmes = [{

}]

const desenhos = [{

}]

const animes = [{

}]

var series = [{
    id: 1,
    page: "pages/series/batwoman/batwoman.html",
    img: "static/img/capaSeries/batwoman.jpg"
}]

function viewFilme() {

}
viewFilme();

function viewDesenho() {

}
viewDesenho()

function viewAnimes() {

}
viewAnimes()

function viewSeries() {

    series.forEach(data => {
        const a = document.createElement('a')
        const div = document.createElement('div')
        const img = document.createElement('img')

        a.setAttribute('href', `${data.page}`)
        div.setAttribute('class', 'cardImagem')
        img.setAttribute('src', `${data.img}`)
        img.setAttribute('class', 'img')

        div.appendChild(img)
        a.appendChild(div)
        containerSeries.appendChild(a)
    })
}
viewSeries()