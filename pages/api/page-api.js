const Capa = document.querySelector('#capaApi');
const Nome = document.querySelector('#nomeApi');
const classe = document.querySelector('#cor');
const Sinopse = document.querySelector('#sinopseApi');
const Api = document.querySelector('#Api');

const api = [{
        "id": "arrow",
        "capa": "/static/img/capaSerieDC/arrow.jpg",
        "nome": "Arqueiro Verde",
        "classe": "card-body cardTexto green",
        "sinopse": " <strong>Arrow, </strong> Inspirada nos quadrinhos do Arqueiro Verde, esta série acompanha as aventuras do playboy que se torna super-herói e luta contra vilões armado apenas com arco e flechas.",
        "api": "https://megahdfilmes.com/api-embed/?type=tvshows&imdb=tt2193021"
    },
    {
        "id": "flash",
        "capa": "/static/img/capaSerieDC/flash.jpg",
        "nome": "The Flash",
        "classe": "card-body cardTexto red",
        "sinopse": "<strong>Barry Allen</strong> (Grant Gustin) era um funcionário da Polícia Científica que, ao sofrer um acidente, foi banhado por produtos químicos em seu laboratório e, em seguida, atingido por um raio. Foi a partir disso que ele começou a ser capaz de canalizar os poderes.",
        "api": "https://megahdfilmes.com/api-embed/?type=tvshows&imdb=tt3107288"
    },
    {
        "id": "gotham",
        "capa": "/static/img/capaSerieDC/gotam.jpg",
        "nome": "Gotham City",
        "classe": "card-body cardTexto red",
        "sinopse": "<strong>Gotham City, </strong> Série focada na rotina do detetive James Gordon, antes de se tornar comissário de Gotham City e de conhecer o Batman. O policial investiga crimes realizados na cidade, incluindo o assassinato dos pais de Bruce Wayne.",
        "api": "https://megahdfilmes.com/api-embed/?type=tvshows&imdb=tt3749900"
    },
    {
        "id": "pennyworth",
        "capa": "/static/img/capaSerieDC/pennyworth.jpg",
        "nome": "Pennywort",
        "classe": "card-body cardTexto red",
        "sinopse": " <strong>Pennyworth, </strong> A origem de Alfred, o famoso mordomo de Bruce Wayne, em uma época onde ele era apenas um soldado britânico de 22 anos do Serviço Aéreo Especial do Reino Unido. Na Londres de 1960, Alfred é contratado para trabalhar como segurança do bilionário Thomas Wayne, e os dois tornam-se amigos improváveis.",
        "api": "https://megahdfilmes.com/api-embed/?type=tvshows&imdb=tt8425532"
    },
    {
        "id": "raio-negro",
        "capa": "/static/img/capaSerieDC/raionegro.jpg",
        "nome": "Raio Negro",
        "classe": "card-body cardTexto yellow",
        "sinopse": "  <strong>Jefferson Pierce, </strong>é um pai de família que precisa voltar a atuar como o justiceiro Black Lightning quando a violência de gangues ameaça o futuro de sua comunidade e sua filha se torna obcecada com a execução da justiça. Ele precisa agir com cuidado, entretanto, pois a polícia está á sua procura.",
        "api": "https://megahdfilmes.com/api-embed/?type=tvshows&imdb=tt6045840"
    },
    {
        "id": "shild",
        "capa": "/static/img/capaSerieDC/agentsShild.jpg",
        "nome": "Agents of S.H.I.E.L.D.",
        "classe": "card-body cardTexto blue",
        "sinopse": "  <strong>Agents of S.H.I.E.L.D, </strong> Após os acontecimentos em Nova York, retratados em Os Vingadores, a S.H.I.E.L.D. (Superintendência Humana de Intervenção, Espionagem, Logística e Dissuasão) deve mobilizar seus integrantes para solucionar vários casos relacionados com super-heróis. A equipe é liderada pelo agente Phil Coulson.",
        "api": "https://megahdfilmes.com/api-embed/?type=tvshows&imdb=tt2364582"
    },
    {
        "id": "SuperGirl",
        "capa": "/static/img/capaSerieDC/superGirl.jpg",
        "nome": "Super Girl.",
        "classe": "card-body cardTexto blue",
        "sinopse": "<strong>Kara Zor-El,</strong> nasceu no planeta Krypton, e escapou da destruição há anos. Desde então, ela chegou à Terra, e vem escondendo os poderes que ela e seus primos têm. Mas agora, aos 24 anos, ela ela decidiu assumir suas habilidades e ser a heroína que nasceu para ser.",
        "api": "https://megahdfilmes.com/api-embed/?type=tvshows&imdb=tt4016454"
    },
    {
        "id": "swamp",
        "capa": "/static/img/capaSerieDC/swamp.jpg",
        "nome": "Swamp Thing.",
        "classe": "card-body cardTexto green",
        "sinopse": "<strong>Swamp Thing, </strong> Com o objetivo de investigar uma espécie de vírus que parece ter tomado conta da área pantanosa do sul estadunidense, Abby Arcane viaja até a Luisiana. Chegando lá, Arcane percebe que as aparências enganam e descobre que existe um grande segredo por trás dos terrores do local: o Monstro do Pântano..",
        "api": "https://megahdfilmes.com/api-embed/?type=tvshows&imdb=tt8362852"
    },
    {
        "id": "tomorrow",
        "capa": "/static/img/capaSerieDC/tomorrow.jpg",
        "nome": "Legends of Tomorrow.",
        "classe": "card-body cardTexto red",
        "sinopse": "<strong>Legends of Tomorrow</strong> Concentra-se em Rogue Hunter, que tem que recrutar uma equipe de heróis e vilões para ajudar a evitar um apocalipse que poderia impactar não apenas a Terra, mas todo o tempo.",
        "api": "https://megahdfilmes.com/api-embed/?type=tvshows&imdb=tt4532368"
    },
    {
        "id": "titans",
        "capa": "/static/img/capaSerieDC/titans.jpg",
        "nome": "Os jovens Titans",
        "classe": "card-body cardTexto blue",
        "sinopse": "Uma equipe de jovens super-heróis liderada por Asa Noturna (anteriormente Robin de Batman) formada para combater o mal e outros perigos.",
        "api": "https://megahdfilmes.com/api-embed/?type=tvshows&imdb=tt1043813"
    }
]

function view() {

    // header('X-Frame-Options: GOFORIT');

    const queryString = window.location.search;
    console.log(queryString);

    const urlParams = new URLSearchParams(queryString);

    const idFilme = urlParams.get('id')
    console.log(idFilme);

    api.forEach(data => {
        if (data.id === idFilme) {
            Capa.setAttribute('src', `${data.capa}`)
            Nome.innerHTML = `${data.nome}`
            classe.setAttribute('class', `${data.classe}`)
            Sinopse.innerHTML = data.sinopse
            Api.setAttribute('href', `${data.api}`)
        }
    })

}
view();