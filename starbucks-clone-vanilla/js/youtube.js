//  Youtube IFrame API 를 비동기로 로드합니다.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// onYouTubePlayerAPIResdy 함수 이름은,
// Youtube IFrame Player API에서 사용하는 이름이기 때문에,
// 다르게 지정하면 동작하지 않는다!
// 그리고 함수는 전역(Global) 등록해야한다!
function onYouTubePlayerAPIReady() {
    // <div id="player"></div>
    new YT.Player('player', {
        videoId: 'An6LvWQuj_8', // 최초 재생할 유튜브영상 id
        playerVars: {
            autoplay: true, //자동재생 유무
            loop: true, //반복재생 유무
            playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 id 목록
        },
        events: {
            // ㅇ영상이 준비되었을때,
            onReady: function(event) {
                event.target.mute() //음소거
            }
        }
    })
}