const containerFilmes = document.querySelector('#filmes');
const containerDesenhos = document.querySelector('#desenhos');
const containerAnimes = document.querySelector('#animes');
const containerSeries = document.querySelector('#series');


const filmes = [{
        "id": "liga-da-justica-ponto-de-ignicao",
        "img": '/static/img/capaFilmesDC/ponto-ignicao.jpg',
        "page": "/pages/page-filmes-anima/page-filmes-anima.html"
    },
    {
        "id": "liga-da-justica-trono-de-atlanta",
        "img": '/static/img/capaFilmesDC/atlanta.jpg',
        "page": "/pages/page-filmes-anima/page-filmes-anima.html"
    },
    {
        "id": "batman-sangue-ruin",
        "img": '/static/img/capaFilmesDC/sangueRuim.jpeg',
        "page": "/pages/page-filmes-anima/page-filmes-anima.html"
    },
    {
        "id": "o-filho-do-batman",
        "img": '/static/img/capaFilmesDC/filho-batman.jpg',
        "page": "/pages/page-filmes-anima/page-filmes-anima.html"
    },
    {
        "id": "batman-x-roben",
        "img": '/static/img/capaFilmesDC/batman-x-robem.jpg',
        "page": "/pages/page-filmes-anima/page-filmes-anima.html"
    },
    {
        "id": "batman-silencio",
        "img": '/static/img/capaFilmesDC/batman-silencio.jpg',
        "page": "/pages/page-filmes-anima/page-filmes-anima.html"
    },
    {
        "id": "piada-mortal",
        "img": '/static/img/capaFilmesDC/piadamortal.jpg',
        "page": "/pages/page-filmes-anima/page-filmes-anima.html"
    },
    {
        "id": "suicida",
        "img": '/static/img/capaFilmesDC/suicida.jpg',
        "page": "/pages/page-filmes-anima/page-filmes-anima.html"
    },
    {
        "id": "liga-da-justica-e-os-jovens-titans",
        "img": '/static/img/capaFilmesDC/jovensTitans.jpg',
        "page": "/pages/page-filmes-anima/page-filmes-anima.html"
    },
    {
        "id": "liga-da-justica-war",
        "img": '/static/img/capaFilmesDC/LigadaJusticaWAR.jpg',
        "page": "/pages/page-filmes-anima/page-filmes-anima.html"
    },
    {
        "id": "liga-da-justica-deuses-e-monstros",
        "img": '/static/img/capaFilmesDC/deusesemonstros.jpg',
        "page": "/pages/page-filmes-anima/page-filmes-anima.html"
    },
    {
        "id": "liga-da-justica-apocalipse",
        "img": '/static/img/capaFilmesDC/apokalipse.jpg',
        "page": "/pages/page-filmes-anima/page-filmes-anima.html"
    },
    {
        "id": "a-morte-e-retorno-de-superman",
        "img": '/static/img/capaFilmesDC/morteSuperMan.jpg',
        "page": "/pages/page-filmes-anima/page-filmes-anima.html"
    },
    {
        "id": "mulher-maravilha-linhagem-sangrenta",
        "img": '/static/img/capaFilmesDC/mulhermaravilaLinagemdeSangue.jpg',
        "page": "/pages/page-filmes-anima/page-filmes-anima.html"
    },
    {
        "id": "a-morte-de-superman",
        "img": '/static/img/capaFilmesDC/AMortedoSuperman.jpg',
        "page": "/pages/page-filmes-anima/page-filmes-anima.html"
    }
]

const desenhos = [{

}]

const animes = [{

}]

var series = [{
        "id": 1,
        "page": "pages/page-series.html",
        "id": "batwoman",
        "img": "static/img/capaSerieDC/batwoman.jpg"
    },
    {
        "id": 2,
        "page": "pages/page-series.html",
        "id": "starGirl",
        "img": "static/img/capaSerieDC/StarGirl.jpg"
    },
    {
        "id": 3,
        "page": "pages/page-api.html",
        "id": "arrow",
        "img": "static/img/capaSerieDC/arrow.jpg"
    },
    {
        "id": 4,
        "page": "pages/page-api.html",
        "id": "pennyworth",
        "img": "static/img/capaSerieDC/pennyworth.jpg"
    },
    {
        "id": 5,
        "page": "pages/page-series.html",
        "id": "watchman",
        "img": "static/img/capaSerieDC/watchman.jpg"
    },
    {
        "id": 6,
        "page": "pages/page-api.html",
        "id": "shild",
        "img": "static/img/capaSerieDC/agentsShild.jpg"
    },
    {
        "id": 7,
        "page": "pages/page-series.html",
        "id": "DoomPatrol",
        "img": "static/img/capaSerieDC/domPatrial.jpg"
    },
    {
        "id": 8,
        "page": "pages/page-series.html",
        "id": "kripton01",
        "img": "static/img/capaSerieDC/kripton.jpg"
    },
    {
        "id": 9,
        "page": "pages/page-series.html",
        "id": "kripton02",
        "img": "static/img/capaSerieDC/krip02.jpeg"
    },
    {
        "id": 10,
        "page": "pages/page-api.html",
        "id": "swamp",
        "img": "static/img/capaSerieDC/swamp.jpg"
    },
    {
        "id": 11,
        "page": "pages/page-api.html",
        "id": "gotham",
        "img": "static/img/capaSerieDC/gotham.jpeg"
    },
    {
        "id": 12,
        "page": "pages/page-api.html",
        "id": "raio-negro",
        "img": "static/img/capaSerieDC/raionegro.jpg"
    },
    {
        "id": 13,
        "page": "pages/page-api.html",
        "id": "SuperGirl",
        "img": "static/img/capaSerieDC/superGirl.jpg"
    },
    {
        "id": 14,
        "page": "pages/page-api.html",
        "id": "tomorrow",
        "img": "static/img/capaSerieDC/tomorrow.jpg"
    },
    {
        "id": 15,
        "page": "pages/page-api.html",
        "id": "flash",
        "img": "static/img/capaSerieDC/flash.jpg"
    },
    {
        "id": 16,
        "page": "pages/page-api.html",
        "id": "titans",
        "img": "static/img/capaSerieDC/titans.jpg"
    }
]

function viewFilme() {

    filmes.forEach(data => {

        const a = document.createElement('a')
        const div = document.createElement('div')
        const img = document.createElement('img')

        a.setAttribute('href', `${data.page}?id=${data.id}`)
        div.setAttribute('class', 'cardImagem')
        img.setAttribute('src', `${data.img}`)
        img.setAttribute('class', 'img')
        img.setAttribute('width', '130')
        img.setAttribute('heigth', '180')

        div.appendChild(img)
        a.appendChild(div)
        containerFilmes.appendChild(a)
    })

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

        a.setAttribute('href', `${data.page}?id=${data.id}`)
        div.setAttribute('class', 'cardImagem')
        img.setAttribute('src', `${data.img}`)
        img.setAttribute('class', 'img')
        img.setAttribute('width', '130')
        img.setAttribute('heigth', '180')

        div.appendChild(img)
        a.appendChild(div)
        containerSeries.appendChild(a)
    })
}
viewSeries()