window.onload = function () {
    var readFile = this.document.querySelector('#read_file')
    var fileContent = this.document.querySelector('#rust_json')
    readFile.onclick = function () {
        var _path = path.join(__dirname, '', 'assets/xiaojiejie.txt');
        fs.readFile(_path, (err, data) => {
           fileContent.innerHTML = data;
        })
    }
} 