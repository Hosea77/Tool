function FullScreen(el) {
    var isFullscreen = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
    if (!isFullscreen) { //进入全屏,多重短路表达式
        (el.requestFullscreen && el.requestFullscreen()) ||
        (el.mozRequestFullScreen && el.mozRequestFullScreen()) ||
        (el.webkitRequestFullscreen && el.webkitRequestFullscreen()) || (el.msRequestFullscreen && el.msRequestFullscreen());

    } else { //退出全屏,三目运算符
        document.exitFullscreen ? document.exitFullscreen() :
            document.mozCancelFullScreen ? document.mozCancelFullScreen() :
            document.webkitExitFullscreen ? document.webkitExitFullscreen() : '';
    }
}

export function toggleFullScreen(e) {
    var el = e.srcElement || e.target; //target兼容Firefox
    // el.innerHTML == '点我全屏' ? el.innerHTML = '退出全屏' : el.innerHTML = '点我全屏';
    FullScreen(el);
}

export function handleFullScreen(fullscreen) {
    let element = document.documentElement;
    if (fullscreen) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    } else {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
            // IE11
            element.msRequestFullscreen();
        }
    }
    // this.fullscreen = !this.fullscreen;
    return !fullscreen
}