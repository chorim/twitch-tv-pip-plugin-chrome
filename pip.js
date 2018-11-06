(function() {

    var video = document.querySelector('div.player-video video');

    if (!video) {
        alert('This plugin only support for twitch.tv.');
        return;
    }
    var available = !document.pictureInPictureEnabled || video.disablePictureInPicture;

    if (available) {
        alert('Picture in picture is not supported or disabled.\nPlease update this plugin.');
        return;
    }
    if (!document.pictureInPictureElement) {
        video.requestPictureInPicture()
        .catch(error => {
            console.error('pip.js[requestPictureInPicture]', error);
            alert('Failed to request picture in picture mode.')
        });
    } else {
        document.exitPictureInPicture()
        .catch(error => {
            console.error('pip.js[exitPictureInPicture]', error);
            alert('Failed to exit picture in picture mode.')
        });
    }
})();