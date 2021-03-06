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
        "api": `https://megahdfilmes.com/api-embed/?action=modal&what=iframe&type=stream&id=aHR0cHM6Ly9zdHJlYW10YXBlLmNvbS9lL0Q0ZUFvbDA5ejFTa3JXdw==`
    },
    {
        "id": "liga-da-justica-trono-de-atlanta",
        "img": '/static/img/capaFilmesDC/atlanta.jpg',
        "sinopse": "<strong>Após os eventos de Liga da Justiça: Guerra</strong>, o Mestre do Oceano e o Arraia Negra declararam guerra contra a superfície em retaliação aos testes com armas realizados pela marinha após a invasão planetária do Senhor de Apokolips, Darkseid. Enquanto isso, a Rainha Atlanna busca pelo seu outro filho, meio-irmão do Mestre do oceano, Arthur Curry, um meio-humano com poderes aquáticos, mas sem o conhecimento de sua linhagem. Mesmo que ele viva com poderes além de sua compreensão, ele percebe os perigos que o cercam e se junta à Liga da Justiça, e junto aos seus novos companheiros ele deve abraçar o seu destino e lutar contra a destruição da Terra.",
        "nome": 'Liga da Justiça: Trono da Atlântida',
        "api": `https://megahdfilmes.com/api-embed/?action=modal&what=iframe&type=stream&id=aHR0cHM6Ly9zdHJlYW10YXBlLmNvbS9lL1JtQjBBQlJRWERGZHY5Zw==`
    },
    {
        "id": "batman-cavaleiro-das-trevas-parte1",
        "img": '/static/img/capaFilmesDC/cavaleiro_treva_parte_1.jpg',
        "sinopse": "Mais uma noite cai sobre Gotham City e, com a chegada da escuridão, o crime e a vilania surgem em meio às sombras. Os dias do Batman e outros nobres super-heróis são somente memórias desaparecendo; a violência e o desespero são agora os arautos do nosso tempo. Mas um evento promoverá uma drástica mudança: quando Harvey “Duas Caras” Dent troca sua reabilitação por uma nova descida ao submundo do crime, um idoso e desgastado Bruce Wayne usa a máscara e capa mais uma vez. Com um elenco estelar de dubladores originais, incluindo Peter Weller, Ariel Winter e David Selby, esta indômita lenda da DC Comics ganha vida novamente para encarar batalhas esquecíveis, perseguições de tirar o fôlego e oferecer uma promessa de um melhor futuro para a humanidade, porque não existe lugar para os criminosos se esconderem quando o Cavaleiro das Trevas retorna.",
        "nome": 'Batman cavaleiro das trevas parte 1',
        "api": `https://megahdfilmes.com/api-embed/?action=modal&what=iframe&type=fembed&id=aHR0cHM6Ly9wbGF5ZXItbWVnYWhkZmlsbWVzLmNvbS92LzF4NWwtc2ozNDhxcG4xbQ==`
    },

    {
        "id": "batman-cavaleiro-das-trevas-parte2",
        "img": '/static/img/capaFilmesDC/cavaleiro_treva_parte_2.jpg',
        "sinopse": "O Cavaleiro das Trevas, com a jovem e corajosa Carrie Kelly ao seu lado como Robin, finalmente reclamam Gotham City de volta e permitem que um raio de esperança penetre no reino de terror que o grupo conhecido como Os Mutantes instaurou na cidade. Com Batman de volta às atenções, a intensa cobertura da mídia acabou despertando um mal, de longe muito pior, no Asilo Arkham – O Coringa! Destinado a ser o seu inimigo mortal, o Coringa tem um plano diabólico que pode conduzir Batman aos níveis mais sombrios da insanidade. Enquanto isso, no horizonte, uma catástrofe global se dirige rapidamente para Gotham e surge em uma face familiar, a do Homem-de-Aço, só que desta vez ele tem Batman em seus pensamentos. Um elenco estelar empresta sua voz aos personagens, liderado por Peter Weller, Ariel Winter e David Selby, e entrega ao espectador o épico final desta lenda da DC Comics.",
        "nome": 'Batman cavaleiro das trevas parte 2',
        "api": `https://megahdfilmes.com/api-embed/?action=modal&what=iframe&type=fembed&id=aHR0cHM6Ly9wbGF5ZXItbWVnYWhkZmlsbWVzLmNvbS92L3gxOG5lYzUxai1tMHpnMQ==`
    },

    {
        "id": "batman-sangue-ruin",
        "img": '/static/img/capaFilmesDC/sangueRuim.jpeg',
        "sinopse": "O manto do <strong>Batman</strong> passa para as mãos de Dick Grayson quando Bruce Wayne desaparece misteriosamente. Alfred cobre o sumiço do patrão enquanto o Asa Noturna e o Robin patrulham Gotham City. Uma nova personagem surge na história, a Batwoman, que está investigando o desaparecimento do Batman.",
        "nome": 'Batman sangue ruim',
        "api": `https://megahdfilmes.com/api-embed/?action=modal&what=iframe&type=fembed&id=aHR0cHM6Ly9wbGF5ZXItbWVnYWhkZmlsbWVzLmNvbS92LzQzeWUtaHo1N2c4cHI2ZQ==`
    },
    {
        "id": "o-filho-do-batman",
        "img": '/static/img/capaFilmesDC/filho-batman.jpg',
        "sinopse": "Quando Batman descobre que tem um filho, Damian, que é neto de Ra’s Al Ghul, ele decide criar o menino, para evitar que ele se transforme no assassino que estava preparado para ser.",
        "nome": 'O Filho do Batman',
        "api": `https://megahdfilmes.com/api-embed/?action=modal&what=iframe&type=fembed&id=aHR0cHM6Ly9wbGF5ZXItbWVnYWhkZmlsbWVzLmNvbS92LzhkbmstZjhwN3FtLTR4bQ==`
    },
    {
        "id": "batman-x-roben",
        "img": '/static/img/capaFilmesDC/batman-x-robem.jpg',
        "sinopse": "Quando Damian Wayne assume o manto de Robin, ele passa a seguir um caminho de teimosia e imprudência ao lado de seu pai, o Batman. Enquanto investiga uma cena de crime, Robin encontra Talon, um sujeito misterioso que o leva até as profundezas de uma sociedade secreta de Gotham. Será uma jornada perigosa e que forçará Batman e Robin enfrentarem os seus adversário mais perigosos: um ao lado do outro.",
        "nome": 'Batman vs Robin',
        "api": `https://megahdfilmes.com/api-embed/?action=modal&what=iframe&type=fembed&id=aHR0cHM6Ly9wbGF5ZXItbWVnYWhkZmlsbWVzLmNvbS92L2dtNHB4dS0wcGd3dzNlNw==`
    },
    {
        "id": "batman-silencio",
        "img": '/static/img/capaFilmesDC/batman-silencio.jpg',
        "sinopse": "O passado de Batman começa a se desenrolar, dá-se início a uma corrida para o Cavaleiro das Trevas solucionar os jogos mortais do Silêncio. O misterioso vilão conhecido como Silêncio está determinado a destruir tanto a carreira de combatente ao crime de Batman, quanto a vida pessoal de Bruce Wayne",
        "nome": 'Batman – Silêncio',
        "api": `https://megahdfilmes.com/api-embed/?action=modal&what=iframe&type=fembed&id=aHR0cHM6Ly9wbGF5ZXItbWVnYWhkZmlsbWVzLmNvbS92L3I2MjNraGVtcHhsNjZtZQ==`
    },
    {
        "id": "piada-mortal",
        "img": '/static/img/capaFilmesDC/piadamortal.jpg',
        "sinopse": "Do produtor executivo Bruce Timm e baseado na aclamada graphic novel da DC Comics, “Batman: A Piada Mortal” é uma jornada adentro da sombria psique do Príncipe Palhaço do Crime. Acompanhando desde o seu humilde começo, quando era um comediante esforçado, até seu fatídico encontro com o Cavaleiro das Trevas, que mudou tudo. Agora fugitivo do Asilo Arkham, o Coringa planeja provar para todos que um dia ruim é capaz de tornar qualquer um tão insano quanto ele.",
        "nome": 'Batman: A Piada Mortal',
        "api": `https://megahdfilmes.com/api-embed/?action=modal&what=iframe&type=fembed&id=aHR0cHM6Ly9wbGF5ZXItbWVnYWhkZmlsbWVzLmNvbS92LzU0eGwtc2Q0eC1rd3lqag==`
    }, ,
    {
        "id": "batman-arkham",
        "img": '/static/img/capaFilmesDC/batman-arkam.jpg',
        "sinopse": "Bem-vindo ao coração sombrio de Gotham City. Do centro das sombras surge o Asilo Arkham, um depósito purulento de tudo que é vil, perigoso e delirante, com uma população que cresce exponencialmente graças ao Cavaleiro das Trevas. Mas quando Batman frustra o mais recente plano do Charada e uma importante parte de uma evidência precisa ser secretamente recuperada no Arkham, a solução vem de uma inesperada fonte: uma equipe secreta de ataque do governo montada no submundo de Gotham City. O assassino Pistoleiro lidera o Esquadrão Suicida: Arlequina, Nevasca, Capitão Bumerangue, Tubarão Rei e Aranha Negra, um bando de desonestos que conhecem o Asilo Arkham e seus residentes muitíssimo bem.",
        "nome": 'Batman: Ataque a Arkham city',
        "api": `https://megahdfilmes.com/api-embed/?action=modal&what=iframe&type=fembed&id=aHR0cHM6Ly9wbGF5ZXItbWVnYWhkZmlsbWVzLmNvbS92LzQzeWUtaHo1ZDg1NmR3NA==`
    },
    {
        "id": "batman-vs-tartaruga-ninja",
        "img": '/static/img/capaFilmesDC/batman_x_tartaruga_ninja.jpg',
        "sinopse": "Quando uma nova ameaça começa a roubar tecnologia experimental da cidade de Gotham, Batman se coloca em estado de alerta. Mas uma equipe de guerreiros, que espreita por debaixo das ruas, também investiga o caso: as Tartarugas Ninja! Liderados por Leonardo, esses irmãos – o esperto Donatello, o destemido Raphael e o brincalhão Michelangelo – são artistas marciais misteriosos que acabarão cruzando caminhos com o Cavaleiro Negro. Warner Bros Home Entertainment, DC e Nickelodeon apresentam Batman vs. Tartarugas Ninja, uma aventura estonteante de acelerar o coração, numa proporção que Gotham jamais viu!",
        "nome": 'Batman vs As Tartarugas Ninja',
        "api": `https://megahdfilmes.com/api-embed/?action=modal&what=iframe&type=fembed&id=aHR0cHM6Ly9wbGF5ZXItbWVnYWhkZmlsbWVzLmNvbS92LzY2OGstaDA1bjIxOG53OA==`
    },
    {
        "id": "suicida",
        "img": '/static/img/capaFilmesDC/suicida.jpg',
        "sinopse": "É uma batalha na Belle Reve e isso só pode significar que Amanda Waller, a diretora fria e calculista da penitenciária, tem uma missão que apenas os condenados vão assumir. É hora de desencadear a Força Tarefa X novamente, cheia de veteranos experientes, como Pistoleiro, Capitão Bumerangue e Arlequina. Esses criminosos ardilosos são acompanhados dos recém-chegados Copperhead, Nevasca e o mestre da arte marcial, Tigre de Bronze! Com o seu alvo sendo um objeto místico tão poderoso que eles estão dispostos a arriscar suas próprias vidas para roubá-lo, você pode ter certeza de que será colisão de caos, tiroteios e atitudes. Então, mire para uma viagem furiosa com o Esquadrão Suicida",
        "nome": 'Esquadrão Suicida: Acerto de Contas',
        "api": `https://megahdfilmes.com/api-embed/?action=modal&what=iframe&type=fembed&id=aHR0cHM6Ly9wbGF5ZXItbWVnYWhkZmlsbWVzLmNvbS92L3p6bjF4YmpwazNwOC0xaw==`
    },
    {
        "id": "liga-da-justica-e-os-jovens-titans",
        "img": '/static/img/capaFilmesDC/jovensTitans.jpg',
        "sinopse": "Robin é enviado para trabalhar junto com os Jovens Titãs depois de seu comportamento volátil comprometer uma missão da Liga da Justiça. Mas, quando Trigon possui e consegue controlar todos os membros da Liga, a jovem equipe deverá enfrentar o terrível vilão, que ameaça acabar do mundo, e lutar contra todos eles.",
        "nome": 'Liga da Justiça vs. Jovens Titãs',
        "api": `https://megahdfilmes.com/api-embed/?action=modal&what=iframe&type=stream&id=aHR0cHM6Ly9zdHJlYW10YXBlLmNvbS9lL09rN0RhQTJvNHlpMTFR`
    },
    {
        "id": "liga-da-justica-war",
        "img": '/static/img/capaFilmesDC/LigadaJusticaWAR.jpg',
        "sinopse": "Uma misteriosa figura espreita nas sombras de Gotham City, um guardião silencioso conhecido apenas como o Batman. Enquanto combate o crime e ganha cada vez mais a desconfiança do público, ele enfrenta as injustiças da noite sozinho. Durante uma perseguição a um criminoso, Batman cruza o caminho do arrogante tira intergaláctico, o Lanterna Verde, e a improvável dupla descobre uma ameaça iminente, maior e mais mortal do que qualquer coisa que Terra já tenha encarado.",
        "nome": 'Liga da Justiça: Guerra',
        "api": `https://megahdfilmes.com/api-embed/?action=modal&what=iframe&type=stream&id=aHR0cHM6Ly9zdHJlYW10YXBlLmNvbS9lL3ZMWEtLdkwwZTd0Ymxt`
    },
    {
        "id": "liga-da-justica-deuses-e-monstros",
        "img": '/static/img/capaFilmesDC/deusesemonstros.jpg',
        "sinopse": "Viaje a uma realidade divergente, onde a Liga da Justiça protege o planeta – mas responde apenas a ela própria. Utilizando métodos de intimidação e medo, estes Superman, Batman e Mulher-Maravilha usam força bruta em nome da justiça. Neste universo alternativo, Superman não foi criado pelos Kents em Smallville, o Cavaleiro das Sombras não é Bruce Wayne, e Mulher Maravilha não é uma guerreira amazona de Themyscira. Quando um grupo de cientistas famosos passam por “acidentes”, uma força-tarefa do governo é acionada e segue uma trilha de pistas que os leva à Liga – mas será que há mais alguém nas sombras operando esse estratagema? Trata-se de um jogo de altas apostas envolvendo intrigas, mistérios e ação, que pretende responder a pergunta: Como você leva a justiça para aqueles que estão acima da lei?",
        "nome": 'Liga da Justiça: Deuses e Monstros',
        "api": `https://megahdfilmes.com/api-embed/?action=modal&what=iframe&type=stream&id=aHR0cHM6Ly9zdHJlYW10YXBlLmNvbS9lL2RMa2xZSnlYRDlma21aZQ==`
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
        "api": `https://megahdfilmes.com/api-embed/?action=modal&what=iframe&type=fembed&id=aHR0cHM6Ly9wbGF5ZXItbWVnYWhkZmlsbWVzLmNvbS92LzY2OGstaDBlOHo2Z3Fucg==`
    },
    {
        "id": "a-morte-de-superman",
        "img": '/static/img/capaFilmesDC/AMortedoSuperman.jpg',
        "sinopse": "Um monstro gigantesco batizado de Doomsday surge do mundo subterrâneo para começar uma destruição em massa na cidade de Metropolis. A Liga da Justiça precisa intervir imediatamente, mas parece que só os poderes do Superman são compatíveis com o do terrível monstro. Em uma luta mortal, o destino do super-herói torna-se incerto.",
        "nome": 'A Morte do Superman',
        "api": "https://megahdfilmes.com/api-embed/?action=modal&what=iframe&type=fembed&id=aHR0cHM6Ly9wbGF5ZXItbWVnYWhkZmlsbWVzLmNvbS92L2psZGs0aGRrcWU0eC16ZA=="
    },
    {
        "id": "superman-foice",
        "img": '/static/img/capaFilmesDC/superman-foice.jpg',
        "sinopse": "Quando o último filho de Krypton cai na Rússia, na época da Guerra Fria, em vez do bucólico Kansas, uma realidade alternativa se desdobra nesta aventura da DC Elseworlds. Aqui, nós encontramos o Superman liderando uma campanha comunista para avançar as ideologias do estado soviético. Enquanto isso, do outro lado do Atlântico, Lex Luthor, um brilhante cientista americano, cria um plano para dominar e, por fim, destruir a ameaça alienígena soviética. O que vem a seguir é uma perseguição emocionante que colocará em risco toda a humanidade.",
        "nome": 'Superman: Entre a Foice e o Martelo',
        "api": "https://megahdfilmes.com/api-embed/?action=modal&what=iframe&type=stream&id=aHR0cHM6Ly9zdHJlYW10YXBlLmNvbS9lLzZSVjM5WVhMTHFjOURhYQ=="
    },
    {
        "id": "superman-o-homen-do-amanha",
        "img": '/static/img/capaFilmesDC/superman-o-homem-do-amanha.jpg',
        "sinopse": "É o início de uma nova era de heróis, e Metrópolis acaba de conhecer o primeiro. Mas como o estagiário do Daily Planet Clark Kent – trabalhando ao lado da repórter Lois Lane – secretamente exerce seus poderes alienígenas de voo, super-força e visão de raio-x na batalha para sempre, há problemas ainda maiores no horizonte.",
        "nome": 'Superman: O Homem do Amanhã',
        "api": "https://megahdfilmes.com/api-embed/?action=modal&what=iframe&type=fembed&id=aHR0cHM6Ly9wbGF5ZXItbWVnYWhkZmlsbWVzLmNvbS92L3gxOG5lYzUxNnhnamRlcg=="
    },
    {
        "id": "superman-shazam",
        "img": '/static/img/capaFilmesDC/superman-shazam.jpg',
        "sinopse": "Neste encontro entre Superman e Shazam, Clark Kent conhece a história de Billy Batson, que foi escolhido por um antigo mago para representar o bem invocando o nome de um poderoso bruxo: Shazam. Seus poderes logo aparecem, e ele descobre que está sendo perseguido por um maligno vilão chamado Adão Negro, cujos poderes são tão fortes que nem o Superman é capaz de detê-lo.",
        "nome": 'Superman/Shazam!: O Retorno do Adão Negro',
        "api": "https://megahdfilmes.com/api-embed/?action=modal&what=iframe&type=fembed&id=aHR0cHM6Ly9wbGF5ZXItbWVnYWhkZmlsbWVzLmNvbS92L24tLW0wczI3cHc3NWpwMQ=="
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
            Api.setAttribute('href', `${data.api}`)
        }
    })

}
view();