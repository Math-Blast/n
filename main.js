function downloadGame(platform) {
    let downloadLinks = {
        android: 'https://www.mediafire.com/file/vc37mtuclvxfyet/MathBlast.apk/file?dkey=s0og4thtqxu&r=1893'
          };

    if (downloadLinks[platform]) {
        window.open(downloadLinks[platform], '_blank');
    } else {
        alert('Platform not supported.');
    }
}

