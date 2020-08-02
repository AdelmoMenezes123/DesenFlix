const containerFilmes = document.querySelector('#filmes');
const containerDesenhos = document.querySelector('#desenhos');
const containerAnimes = document.querySelector('#animes');
const containerSeries = document.querySelector('#series');

const filmes = [{
        id: 1,
        nome: 'Liga da Justiça: Ponto de ingnição',
        img: '/static/img/capaSeries/ponto-ignicao.jpg',
        link: 'http://streamtape.com/get_video?id=D4eAol09z1SkrWw&expires=1596451297&ip=F0AWKRMAKxSHDN&token=PFfj6HCHweFx&stream=1'
    },
    {
        id: 2,
        nome: 'Liga da Justiça: Trono da Atlântida',
        img: '/static/img/capaSeries/atlanta.jpg',
        link: 'http://gofilmes.me/play/?dVBkSmZVQlg1Mi9xa1BzM0tSSlBFM3I0ZGpWY0JabS9rRXdGTmcrMjArVlFacGR0NTY5bnZaUWYvaUwrOG1ZWmtqWnBMN0toZDRMQ2hhd2ordm1nL0E9PQ=='
    },
    {
        id: 3,
        nome: 'Batman  sangue   ruim',
        img: '/static/img/capaSeries/sangueRuim.jpeg',
        link: 'https://cdn01.fluehost.com/f/animacoes-dc/hd/42.mp4'
    },
    {
        id: 4,
        nome: 'Liga da Justiça vs. Jovens Titãs',
        img: '/static/img/capaSeries/jovensTitans.jpg',
        link: 'http://streamtape.com/get_video?id=9pxgw074m6uB0m&expires=1596467656&ip=F0AWKRMAKxSHDN&token=wjDKCDpSAyCV'
    }
]

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

    filmes.forEach(data => {
        const input = document.createElement('input')
        const label = document.createElement('label')
        const divFlip = document.createElement('div')
        const divFront = document.createElement('div')
        const img = document.createElement('img')
        const divBack = document.createElement('div')
        const a = document.createElement('a')
        const divAssistir = document.createElement('div')

        const strong1 = document.createElement('strong')
        const strong2 = document.createElement('strong')
        const nomeFilme = document.createElement('h5')
        const nomeVoltar = document.createElement('h5')


        input.setAttribute('type', 'checkbox')
        input.setAttribute('hidden', '')
        input.setAttribute('id', 'switch')

        label.setAttribute('class', 'flip-container')
        label.setAttribute('for', 'switch')

        divFlip.setAttribute('class', 'flipper')
        divFront.setAttribute('class', 'front')
        divBack.setAttribute('class', 'back back-link red')

        img.setAttribute('width', '130')
        img.setAttribute('height', '180')
        img.setAttribute('src', `${data.img}`)

        strong1.setAttribute('class', 'back-link')
        strong2.setAttribute('class', 'back-link')

        a.setAttribute('href', `${data.link}`)

        divAssistir.setAttribute('class', 'btn-lg blue')
        divAssistir.innerHTML = 'Assistir';

        nomeFilme.setAttribute('class', 'back-link')
        nomeFilme.innerHTML = `${data.nome}`

        nomeVoltar.setAttribute('class', 'btn-lg blue')
        nomeVoltar.innerHTML = 'Voltar'

        a.appendChild(divAssistir)

        strong1.appendChild(nomeFilme)
        strong2.appendChild(nomeVoltar)

        divBack.appendChild(a)
        divBack.appendChild(strong1)
        divBack.appendChild(strong2)

        divFront.appendChild(img)
        divFlip.appendChild(divFront)
        divFlip.appendChild(divBack)

        label.appendChild(divFlip)

        containerFilmes.appendChild(input)
        containerFilmes.appendChild(label)

    })

    // <input type="checkbox" id="switch" hidden />
    //             <label class="flip-container" for="switch">
    //             <div class="flipper">

    //                     <div class="front">
    //                         <img width="130" height="180" src="/static/img/capaSeries/ponto-ignicao.jpg" />
    //                     </div>

    //                     <div class="back back-link red">

    //                         <a href="http://streamtape.com/get_video?id=D4eAol09z1SkrWw&expires=1596451297&ip=F0AWKRMAKxSHDN&token=PFfj6HCHweFx&stream=1">
    //                             <div class="btn btn-primary">ASSISTIR</div>
    //                         </a>
    //                          <strong class="back-link"><h5>click aqui para voltar</h5></strong> 
    //                         <strong class="back-link"><h5>cccccccccccccccccccccccc</h5></strong>
    //                     </div>


    //                 </div>
    //             </label>

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