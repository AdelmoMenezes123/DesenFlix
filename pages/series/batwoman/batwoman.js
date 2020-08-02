const containerVideos = document.querySelector('#video');

var videos = [{
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
    },
]

function view() {

    videos.forEach(data => {
        const li = document.createElement('li')
        const a = document.createElement('a')
        const span = document.createElement('span')
        const button = document.createElement('button')

        span.textContent = "Epsodio: " + data.id
        span.setAttribute('class', 'span-ep')

        li.setAttribute('class', 'list-group-item')

        button.setAttribute('class', 'btn-lg red')
        button.innerHTML = 'Assistir'
        a.setAttribute('href', `${data.link}`)
        a.appendChild(button)
        li.appendChild(span)

        li.appendChild(a)

        containerVideos.appendChild(li)
    })
}
view()

$('#myAlert').on('closed.bs.alert', function() {
    // $('.alert').alert()
    $(".alert").alert('close')
})