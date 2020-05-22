// 打开文件
var openFile = document.getElementById("openFile")
openFile.onclick = function () {
    remote.dialog.showOpenDialog({
        title: '请选择照片',
        defaultPath: 'pic.jpg',
        filters: [{ name: 'image', extensions: ['jpg', 'jpeg', 'png'] }],
        buttonLabel: '选择'
    }).then(result => {
        let image = document.getElementById('images')
        let src = result.filePaths;
        if (src.length != 0) {
            image.setAttribute('src', src[0])
        } else {
            console.log('没有选择图片');
        }
    }).catch(err => {
        console.log(err)
    })
}

// 保存文件
var saveFile = document.getElementById('saveFile')
saveFile.onclick = function () {
    remote.dialog.showSaveDialog({
        title: '保存文件'
    }).then(result => {
        let path = result.filePath
        if (path != '') {
            fs.writeFileSync(path, '这是写入文件的内容')
        } else {
            console.log('取消文件写入');
        }
    }).catch(err => {
        console.log(err);
    })
}

// 弹出对话框
var messageClick = document.getElementById('messageClick')
messageClick.onclick = function () {
    remote.dialog.showMessageBox({
        type: 'warning',
        title: '提示框',
        message: '今天开发任务完成了吗',
        buttons: ['完美完成', '没有完成']
    }).then(result => {
        console.log(result);
    })
}

