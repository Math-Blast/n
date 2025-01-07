function downloadGame(platform) {
    let downloadLinks = {
        android: 'https://www.mediafire.com/file/dm1ws0hsqgcigo9/MathBlast.apk/file'
          };

    if (downloadLinks[platform]) {
        window.open(downloadLinks[platform], '_blank');
    } else {
        alert('Platform not supported.');
    }
}

