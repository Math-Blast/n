function downloadGame(platform) {
    let downloadLinks = {
        android: 'https://www.mediafire.com/file/h0g5t3g7jkveg3p/MathBlast.apk/file'
          };

    if (downloadLinks[platform]) {
        window.open(downloadLinks[platform], '_blank');
    } else {
        alert('Platform not supported.');
    }
}

