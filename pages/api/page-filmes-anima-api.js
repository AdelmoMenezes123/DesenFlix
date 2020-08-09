const Capa = document.querySelector('#capaApi');
const Nome = document.querySelector('#nomeApi');
const classe = document.querySelector('#cor');
const Sinopse = document.querySelector('#sinopseApi');
const Api = document.querySelector('#Api');
//"sinopse": "",

const api = [{
        "id": "liga-da-justica-ponto-de-ignicao",
        "sinopse": "<strong>Barry Allen</strong>, o herói Flash, nunca conseguiu esquecer o dia em que sua mãe foi vítima de um horrendo crime e faleceu. Determinado a mudar a sua história, ele quebra as barreiras do tempo com sua hipervelocidade e volta no tempo, para impedir que a tragédia aconteça. No entanto, mexer com a linha temporal traz sérias consequências para o presente. Por conta da sua volta, o mundo é devastado por uma grande guerra entre as amazonas da Mulher-Maravilha e o exército de Atlantis, liderados por Aquaman. Junto com o Batman dessa nova realidade, mais violento e destemido, e a ajuda do Cyborg, ele tenta restaurar o fluxo temporal e impedir que esse mundo alternativo se concretize.",
        "nome": 'Liga da Justiça: ponto de ingnição',
        "img": '/static/img/capaFilmesDC/ponto-ignicao.jpg',
        "api": "https://megahdfilmes.com/api-embed/?type=movies&imdb=tt2820466"
    },
    {
        "id": "liga-da-justica-trono-de-atlanta",
        "img": '/static/img/capaFilmesDC/atlanta.jpg',
        "sinopse": "<strong>Após os eventos de Liga da Justiça: Guerra</strong>, o Mestre do Oceano e o Arraia Negra declararam guerra contra a superfície em retaliação aos testes com armas realizados pela marinha após a invasão planetária do Senhor de Apokolips, Darkseid. Enquanto isso, a Rainha Atlanna busca pelo seu outro filho, meio-irmão do Mestre do oceano, Arthur Curry, um meio-humano com poderes aquáticos, mas sem o conhecimento de sua linhagem. Mesmo que ele viva com poderes além de sua compreensão, ele percebe os perigos que o cercam e se junta à Liga da Justiça, e junto aos seus novos companheiros ele deve abraçar o seu destino e lutar contra a destruição da Terra.",
        "nome": 'Liga da Justiça: Trono da Atlântida',
        "api": "https://megahdfilmes.com/api-embed/?type=movies&imdb=tt3878542"
    },
    {
        "id": "batman-sangue-ruin",
        "img": '/static/img/capaFilmesDC/sangueRuim.jpeg',
        "sinopse": "O manto do <strong>Batman</strong> passa para as mãos de Dick Grayson quando Bruce Wayne desaparece misteriosamente. Alfred cobre o sumiço do patrão enquanto o Asa Noturna e o Robin patrulham Gotham City. Uma nova personagem surge na história, a Batwoman, que está investigando o desaparecimento do Batman.",
        "nome": 'Batman sangue ruim',
        "api": "https://megahdfilmes.com/api-embed/?type=movies&imdb=tt4870838"
    },
    {
        "id": "o-filho-do-batman",
        "img": '/static/img/capaFilmesDC/filho-batman.jpg',
        "sinopse": "Quando Batman descobre que tem um filho, Damian, que é neto de Ra’s Al Ghul, ele decide criar o menino, para evitar que ele se transforme no assassino que estava preparado para ser.",
        "nome": 'O Filho do Batman',
        "api": "https://megahdfilmes.com/api-embed/?type=movies&imdb=tt3139072"
    },
    {
        "id": "batman-x-roben",
        "img": '/static/img/capaFilmesDC/batman-x-robem.jpg',
        "sinopse": "Quando Damian Wayne assume o manto de Robin, ele passa a seguir um caminho de teimosia e imprudência ao lado de seu pai, o Batman. Enquanto investiga uma cena de crime, Robin encontra Talon, um sujeito misterioso que o leva até as profundezas de uma sociedade secreta de Gotham. Será uma jornada perigosa e que forçará Batman e Robin enfrentarem os seus adversário mais perigosos: um ao lado do outro.",
        "nome": 'Batman vs Robin',
        "api": "https://megahdfilmes.com/api-embed/?type=movies&imdb=tt4324274"
    },
    {
        "id": "batman-silencio",
        "img": '/static/img/capaFilmesDC/batman-silencio.jpg',
        "sinopse": "O passado de Batman começa a se desenrolar, dá-se início a uma corrida para o Cavaleiro das Trevas solucionar os jogos mortais do Silêncio. O misterioso vilão conhecido como Silêncio está determinado a destruir tanto a carreira de combatente ao crime de Batman, quanto a vida pessoal de Bruce Wayne",
        "nome": 'Batman – Silêncio',
        "api": "https://megahdfilmes.com/api-embed/?type=movies&imdb=tt8752440"
    },
    {
        "id": "piada-mortal",
        "img": '/static/img/capaFilmesDC/piadamortal.jpg',
        "sinopse": "Do produtor executivo Bruce Timm e baseado na aclamada graphic novel da DC Comics, “Batman: A Piada Mortal” é uma jornada adentro da sombria psique do Príncipe Palhaço do Crime. Acompanhando desde o seu humilde começo, quando era um comediante esforçado, até seu fatídico encontro com o Cavaleiro das Trevas, que mudou tudo. Agora fugitivo do Asilo Arkham, o Coringa planeja provar para todos que um dia ruim é capaz de tornar qualquer um tão insano quanto ele.",
        "nome": 'Batman: A Piada Mortal',
        "api": "https://megahdfilmes.com/api-embed/?type=movies&imdb=tt4853102"
    },
    {
        "id": "suicida",
        "img": '/static/img/capaFilmesDC/suicida.jpg',
        "sinopse": "É uma batalha na Belle Reve e isso só pode significar que Amanda Waller, a diretora fria e calculista da penitenciária, tem uma missão que apenas os condenados vão assumir. É hora de desencadear a Força Tarefa X novamente, cheia de veteranos experientes, como Pistoleiro, Capitão Bumerangue e Arlequina. Esses criminosos ardilosos são acompanhados dos recém-chegados Copperhead, Nevasca e o mestre da arte marcial, Tigre de Bronze! Com o seu alvo sendo um objeto místico tão poderoso que eles estão dispostos a arriscar suas próprias vidas para roubá-lo, você pode ter certeza de que será colisão de caos, tiroteios e atitudes. Então, mire para uma viagem furiosa com o Esquadrão Suicida",
        "nome": 'Esquadrão Suicida: Acerto de Contas',
        "api": "https://megahdfilmes.com/api-embed/?type=movies&imdb=tt7167602"
    },
    {
        "id": "liga-da-justica-e-os-jovens-titans",
        "img": '/static/img/capaFilmesDC/jovensTitans.jpg',
        "sinopse": "Robin é enviado para trabalhar junto com os Jovens Titãs depois de seu comportamento volátil comprometer uma missão da Liga da Justiça. Mas, quando Trigon possui e consegue controlar todos os membros da Liga, a jovem equipe deverá enfrentar o terrível vilão, que ameaça acabar do mundo, e lutar contra todos eles.",
        "nome": 'Liga da Justiça vs. Jovens Titãs',
        "api": "https://megahdfilmes.com/api-embed/?type=movies&imdb=tt5091548"
    },
    {
        "id": "liga-da-justica-war",
        "img": '/static/img/capaFilmesDC/LigadaJusticaWAR.jpg',
        "sinopse": "Uma misteriosa figura espreita nas sombras de Gotham City, um guardião silencioso conhecido apenas como o Batman. Enquanto combate o crime e ganha cada vez mais a desconfiança do público, ele enfrenta as injustiças da noite sozinho. Durante uma perseguição a um criminoso, Batman cruza o caminho do arrogante tira intergaláctico, o Lanterna Verde, e a improvável dupla descobre uma ameaça iminente, maior e mais mortal do que qualquer coisa que Terra já tenha encarado.",
        "nome": 'Liga da Justiça: Guerra',
        "api": "https://megahdfilmes.com/api-embed/?type=movies&imdb=tt3060952"
    },
    {
        "id": "liga-da-justica-deuses-e-monstros",
        "img": '/static/img/capaFilmesDC/deusesemonstros.jpg',
        "sinopse": "Viaje a uma realidade divergente, onde a Liga da Justiça protege o planeta – mas responde apenas a ela própria. Utilizando métodos de intimidação e medo, estes Superman, Batman e Mulher-Maravilha usam força bruta em nome da justiça. Neste universo alternativo, Superman não foi criado pelos Kents em Smallville, o Cavaleiro das Sombras não é Bruce Wayne, e Mulher Maravilha não é uma guerreira amazona de Themyscira. Quando um grupo de cientistas famosos passam por “acidentes”, uma força-tarefa do governo é acionada e segue uma trilha de pistas que os leva à Liga – mas será que há mais alguém nas sombras operando esse estratagema? Trata-se de um jogo de altas apostas envolvendo intrigas, mistérios e ação, que pretende responder a pergunta: Como você leva a justiça para aqueles que estão acima da lei?",
        "nome": 'Liga da Justiça: Deuses e Monstros',
        "api": "https://megahdfilmes.com/api-embed/?type=movies&imdb=tt2494376"
    },
    {
        "id": "liga-da-justica-apocalipse",
        "img": '/static/img/capaFilmesDC/apokalipse.jpg',
        "sinopse": "O filme-animado é uma sequência de Liga da Justiça Sombria, animação de 2017 com classificação para maiores. Na trama, Batman reunia um grupo de heróis mágicos para lidar com ameaças sobrenaturais. Entre a galeria de heróis da Liga da Justiça Sombria, temos Constantine, Monstro do Pântano, Zatanna, Etrigan, entre outros. É aguardado a aparição de alguns personagens como Darkseid, as Fúrias e até mesmo o Pai Celestial.",
        "nome": 'Liga da Justiça: Guerra de Apokolips',
        "api": "https://megahdfilmes.com/api-embed/?action=modal&what=iframe&type=stream&id=aHR0cHM6Ly9zdHJlYW10YXBlLmNvbS9lL2paTzNnYksySzBoejl2cg=="
    },
    {
        "id": "a-morte-e-retorno-de-superman",
        "img": '/static/img/capaFilmesDC/morteSuperMan.jpg',
        "sinopse": "A Morte do Superman e Reino do Superman agora apresentados como um filme de animação de mais de duas horas, de forma contínua sem cortes. Presencie a batalha sem limites entre a Liga da Justiça e uma força alienígena implacável conhecida somente pela alcunha de Apocalypse, batalha essa que somente o Superman é capaz de dar um basta e que mudará Metrópolis para sempre.",
        "nome": 'A Morte e o Retorno do Superman',
        "api": "https://megahdfilmes.com/api-embed/?action=modal&what=iframe&type=stream&id=aHR0cHM6Ly9zdHJlYW10YXBlLmNvbS9lL202a0dLMlJHOEFIYjBWbw=="
    },
    {
        "id": "mulher-maravilha-linhagem-sangrenta",
        "img": '/static/img/capaFilmesDC/mulhermaravilaLinagemdeSangue.jpg',
        "sinopse": "Veja a origem lendária de um dos renomados membros da Liga da Justiça, Mulher Maravilha, conforme ela enfrenta o mal com sua espada e seu laço mágico. Determinada e igualmente forte no corpo e no coração, ela assume a missão de ajudar uma jovem garota problemática que foi recrutada por uma organização mortal conhecida como Corporação Vilania, cujos membros criminosos almejam invadir Themyscira, o lar paradisíaco de nossa heroína. A batalha será épica, porque se há uma coisa que as Amazonas conhecem bem, é a guerra!",
        "nome": 'Mulher Maravilha: Linhagem de Sangue',
        "api": "https://megahdfilmes.com/api-embed/?type=movies&imdb=tt8752498"
    },
    {
        "id": "a-morte-de-superman",
        "img": '/static/img/capaFilmesDC/AMortedoSuperman.jpg',
        "sinopse": "Um monstro gigantesco batizado de Doomsday surge do mundo subterrâneo para começar uma destruição em massa na cidade de Metropolis. A Liga da Justiça precisa intervir imediatamente, mas parece que só os poderes do Superman são compatíveis com o do terrível monstro. Em uma luta mortal, o destino do super-herói torna-se incerto.",
        "nome": 'A Morte do Superman',
        "api": "https://megahdfilmes.com/api-embed/?action=modal&what=iframe&type=fembed&id=aHR0cHM6Ly9wbGF5ZXItbWVnYWhkZmlsbWVzLmNvbS92L2psZGs0aGRrcWU0eC16ZA=="
    }
]

function view() {

    const queryString = window.location.search;
    console.log(queryString);

    const urlParams = new URLSearchParams(queryString);

    const idFilme = urlParams.get('id')
    console.log(idFilme);

    api.forEach(data => {
        if (data.id === idFilme) {
            Capa.setAttribute('src', `${data.img}`)
            Nome.innerHTML = `${data.nome}`
            Sinopse.innerHTML = data.sinopse
            Api.setAttribute('src', `${data.api}`)
        }
    })

}
view();