const containerNav = document.querySelector('#nav');
const containerVideos = document.querySelector('#video');
const containerCapa = document.querySelector('#capa');
const containerCapaS = document.querySelector('#capaS');
const containertitle = document.querySelector('#title');
const containerSinopse = document.querySelector('#sinopse');

var videos = [{
        "id": "shild06",
        "imgCapa": "/static/img/capaSerieDC/agentsShild.jpg",
        "nome": "<h1>Agents of S.H.I.E.L.D. temporada 6</h1>",
        "sinopse": "<strong>Agents of S.H.I.E.L.D.</strong>, Após os acontecimentos em Nova York, retratados " +
            "em Os Vingadores, a S.H.I.E.L.D. (Superintendência Humana de Intervenção, Espionagem, Logística e Dissuasão)" +
            "deve mobilizar seus integrantes para solucionar vários casos relacionados com super-heróis.  " +
            "A equipe é liderada pelo agente Phil Coulson ",
        "cor": "blue",
        "links": [{
                id: 1,
                link: 'https://mixdrop.to/e/qll60r8mb7jqk7'
            },
            {
                id: 2,
                link: 'https://mixdrop.to/e/3nn0wx7qilqrgm'
            },
            {
                id: 3,
                link: 'https://mixdrop.to/e/n00mer6lh8v0gz'
            },
            {
                id: 4,
                link: 'https://mixdrop.to/e/dqqemwxlt73k0jj'
            },
            {
                id: 5,
                link: 'https://mixdrop.to/e/rwwd74xmc9xlp4'
            },
            {
                id: 6,
                link: 'https://mixdrop.to/e/8447mdr6sd43dg'
            },
            {
                id: 7,
                link: 'https://mixdrop.to/e/4nn7jzkwcoj9go'
            },
            {
                id: 8,
                link: 'https://mixdrop.to/e/n00merv8im07v7'
            },
            {
                id: 9,
                link: 'https://mixdrop.to/e/gnno8xemcwd0jq9'
            },
            {
                id: 10,
                link: 'https://mixdrop.to/e/pkkmdqzzsg7619l'
            },
            {
                id: 11,
                link: 'https://mixdrop.to/e/6qqdxgl9aqzlen'
            },
            {
                id: 12,
                link: 'https://mixdrop.to/e/dqqemw1ktz1ek8'
            },
            {
                id: 13,
                link: 'https://mixdrop.to/e/1vv6kj6mu34npz'
            }
        ]
    },
    {
        "id": "pennyworth",
        "imgCapa": "/static/img/capaSerieDC/pennyworth.jpg",
        "nome": "<h1>pennyworth</h1>",
        "sinopse": "<strong>pennyworth</strong>, A origem de Alfred, o famoso mordomo de Bruce Wayne" +
            ", em uma época onde ele era apenas um soldado britânico de 22 anos do Serviço Aéreo Especial do Reino Unido." +
            "Na Londres de 1960, Alfred é contratado para trabalhar como segurança do bilionário Thomas Wayne," +
            "herói Starman (Joel McHale). Armada com seu bastão mágico, ela vai acabar inspirando uma nova geração" +
            "e os dois tornam-se amigos improváveis.",
        "cor": "red",
        "links": [{
                id: 1,
                link: ''
            },
            {
                id: 2,
                link: ''
            },
            {
                id: 3,
                link: ''
            }
        ]
    },
    {
        "id": "watchman",
        "imgCapa": "/static/img/capaSerieDC/watchman.jpg",
        "nome": "<h1>Watchman</h1>",
        "sinopse": "<strong>Watchman</strong>, Situada em uma realidade alternativa onde super-heróis são tratados como bandidos," +
            "Watchmen abraça a nostalgia da graphic novel original inovadora" +
            "e segue em busca de abrir novos caminhos próprios.",

        "cor": "blue",
        "links": [{
                id: 1,
                link: 'https://mixdrop.to/e/j99q0pqraw9wm0'
            },
            {
                id: 2,
                link: 'https://mixdrop.to/e/pkk41zk8cgww10d'
            },
            {
                id: 3,
                link: 'https://mixdrop.to/e/zppo6kpdigmv4vv'
            },
            {
                id: 4,
                link: 'https://mixdrop.to/e/gnn0pen0tr43px'
            },
            {
                id: 5,
                link: 'https://mixdrop.to/e/0vv9npvlte0o9v'
            },
            {
                id: 6,
                link: 'https://mixdrop.to/e/gnn0pen6bem193'
            },
            {
                id: 7,
                link: 'https://mixdrop.to/e/1vv9rmvrb9kv9g'
            },
            {
                id: 8,
                link: 'https://mixdrop.to/e/zppo6k1gfgoexwp'
            },
            {
                id: 9,
                link: 'https://mixdrop.to/e/7rr9l3kphk86zx'
            }
        ]
    },
    {
        "id": "starGirl",
        "imgCapa": "/static/img/capaSerieDC/StarGirl.jpg",
        "nome": "<h1>Stargirl</h1>",
        "sinopse": "<strong>Stargirl</strong>, conta a história de Courtney Whitmore (Brec Bassinger)," +
            "estudante forçada a se mudar para uma nova cidade, depois que sua mãe se casa novamente. Ela só" +
            "não esperava que seu padrasto, Pat Dugan (Luke Wilson), costumava ser Stripesy, o braço direito do" +
            "herói Starman (Joel McHale). Armada com seu bastão mágico, ela vai acabar inspirando uma nova geração" +
            "de heróis inusitados.",
        "cor": "blue",
        "links": [{
                id: 1,
                link: 'https://ulala.us/v/py3wmbmmk4k0y6r/'
            },
            {
                id: 2,
                link: 'https://play.assistir.io/embed/b70d41d80e3dbe31bbd8'
            },
            {
                id: 3,
                link: 'https://play.assistir.io/embed/ccd4211ce43f309bc0ea'
            },
            {
                id: 4,
                link: 'https://play.assistir.io/embed/4372edec29b93cab9d72'
            },
            {
                id: 5,
                link: 'https://play.assistir.io/embed/cd52936e27cbd0ff683d'
            },
            {
                id: 6,
                link: 'https://play.assistir.io/embed/1bd321f8a9b239f6f4ec'
            },
            {
                id: 7,
                link: 'https://play.assistir.io/embed/98366a4a986bc33f3d3e'
            },
            {
                id: 8,
                link: 'https://play.assistir.io/embed/924e16c772dcb718fcd0'
            },
            {
                id: 9,
                link: 'https://play.assistir.io/embed/35d13102459f8784f1a2'
            },
            {
                id: 10,
                link: 'https://play.assistir.io/embed/fbd3fec3772fba142a46'
            },
            {
                id: 11,
                link: 'https://play.assistir.io/embed/7d1a08da4919b5bb95bf'
            },
            {
                id: 11,
                link: 'https://play.assistir.io/embed/6aec340b8426490977ef'
            }
        ]
    },
    {
        "id": "batwoman",
        "imgCapa": "/static/img/capaSerieDC/batwoman.jpg",
        "nome": "<h1>batwoman</h1>",
        "sinopse": "<strong>Kate Kane</strong>, uma jovem lésbica, decide utilizar suas altas habilidades de combate para luta contra o crime em Gotham City." +
            "Armada apenas com sua paixão por justiça e falando sempre o que pensa, Kate ainda precisa superar" +
            "seus próprios demônios antes de se tornar um símbolo de esperança para os cidadãos de Gotham.",
        "cor": "red",
        "links": [{
                id: 1,
                link: 'https://serieflix.net/blogger/video-play.mp4/?contentId=60c190e78647ba6b'
            },
            {
                id: 2,
                link: 'https://serieflix.net/blogger/video-play.mp4/?contentId=e3174393fbd73f1a'
            },
            {
                id: 3,
                link: 'https://serieflix.net/blogger/video-play.mp4/?contentId=12c21e97b85187be'
            },
            {
                id: 4,
                link: 'https://serieflix.net/blogger/video-play.mp4/?contentId=b7cebd494f271e84'
            },
            {
                id: 5,
                link: 'https://serieflix.net/blogger/video-play.mp4/?contentId=be9487142cd806ac'
            },
            {
                id: 6,
                link: 'https://serieflix.net/blogger/video-play.mp4/?contentId=cb3a23de09ba05df'
            },
            {
                id: 7,
                link: 'https://serieflix.net/blogger/video-play.mp4/?contentId=faabd94f32f8b280'
            },
            {
                id: 8,
                link: 'https://serieflix.net/blogger/video-play.mp4/?contentId=48ba38511423f289'
            },
            {
                id: 9,
                link: 'https://serieflix.net/blogger/video-play.mp4/?contentId=d1505d48a79a7635'
            },
            {
                id: 10,
                link: 'https://serieflix.net/blogger/video-play.mp4/?contentId=ed731d454e9275de'
            },
            {
                id: 11,
                link: 'https://serieflix.net/blogger/video-play.mp4/?contentId=81fb2fb91ce1eb14'
            },
            {
                id: 12,
                link: 'https://serieflix.net/blogger/video-play.mp4/?contentId=0f481393f68d1e42'
            },
            {
                id: 13,
                link: 'https://serieflix.net/blogger/video-play.mp4/?contentId=ccdbabb4bca91bae'
            },
            {
                id: 14,
                link: 'https://serieflix.net/blogger/video-play.mp4/?contentId=fff4f45c73aefa80'
            },
            {
                id: 15,
                link: 'https://serieflix.net/blogger/video-play.mp4/?contentId=ac0671eb398ebfc8'
            },
            {
                id: 16,
                link: 'https://serieflix.net/blogger/video-play.mp4/?contentId=8928d7f2fea1899e'
            },
            {
                id: 17,
                link: 'https://bellareceitas.com/peixe-a-portuguesa/'
            },
            {
                id: 18,
                link: 'https://bellareceitas.com/polenta-cremosa-de-carne-moida/'
            },

            {
                id: 19,
                link: 'https://serieflix.net/blogger/video-play.mp4/?contentId=d9e3580512b2d34f'
            },
            {
                id: 20,
                link: 'https://serieflix.net/blogger/video-play.mp4/?contentId=9fb9c77ebb9d3e47'
            }
        ]
    },
]

function view() {

    const queryString = window.location.search;
    console.log(queryString);

    const urlParams = new URLSearchParams(queryString);

    const idFilme = urlParams.get('id')
    console.log(idFilme);

    videos.forEach(data => {

        if (data.id === idFilme) {

            containerCapaS.setAttribute('src', `${data.imgCapa}`);
            containertitle.innerHTML = `${data.nome}`;
            containerSinopse.innerHTML = `${data.sinopse}`;
            containerCapa.setAttribute('class', `${data.cor}`)
            containerNav.setAttribute('class', `navbar navbar-dark NavLogoMobile ${data.cor}`)
            data.links.forEach(link => {
                const li = document.createElement('li')
                const a = document.createElement('a')
                const span = document.createElement('span')
                const button = document.createElement('button')

                span.textContent = "Epsodio: " + link.id
                span.setAttribute('class', 'span-ep')

                li.setAttribute('class', 'list-group-item')

                button.setAttribute('class', `btn-lg ${data.cor}`)
                button.innerHTML = 'Assistir'
                a.setAttribute('href', `${link.link}`)
                a.appendChild(button)
                li.appendChild(span)

                li.appendChild(a)

                containerVideos.appendChild(li)
            })
        }
    })
}
view();