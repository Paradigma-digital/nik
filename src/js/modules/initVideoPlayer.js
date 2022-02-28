const initVideoPlayer = (id, trigger, wrapper, videoId) => {
    const btns = document.querySelectorAll(trigger),
        wrapp = document.querySelector(wrapper),
        poster =  wrapp.querySelector('.poster');

    

    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // const player;

    // function onYouTubeIframeAPIReady() {
    //     player = new YT.Player('player', {
    //         height: '100%',
    //         width: '100%',
    //         videoId: 'M7lc1UVf-VE',
    //         events: {
    //             'onReady': onPlayerReady,
    //             'onStateChange': onPlayerStateChange
    //         }
    //     });
    // }

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.style.zIndex = "-1000";
            poster.style.zIndex = "-1000";
            const player = new YT.Player(id, {
                height: '100%',
                width: '100%',
                videoId: videoId,
                events: {
                    'onReady': onPlayerReady,
                    // 'onStateChange': onPlayerStateChange
                }
            });
            function onPlayerReady(event) {
                event.target.playVideo();
            }

        })
    })



}   
export default initVideoPlayer;