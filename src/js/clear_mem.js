window.onload = function () {
     var readFile = this.document.querySelector('#clearMem')
    var fileContent = this.document.querySelector('#rust_json')
     readFile.onclick = function () {
        var _path = path.join(__dirname, '', 'page/data/clearURL.html');
        fs.readFile(_path, (err, data) => {
            fileContent.innerHTML = data;
        })
    }
 } 