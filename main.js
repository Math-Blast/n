function downloadGame(platform) {
    let downloadLinks = {
        android: '/storage/emulated/0/Download/MathBlast.apk'
          };

    if (downloadLinks[platform]) {
        window.open(downloadLinks[platform], '_blank');
    } else {
        alert('Platform not supported.');
    }
}

