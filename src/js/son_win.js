// 占满整个页面
var aHref = document.querySelector('#aHref')
aHref.onclick = function (e) {
    e.preventDefault()
    var href = this.getAttribute('href')
    shell.openExternal(href)
}

// 父子窗口通讯
var mybtn = document.querySelector('#goSonBtn')
mybtn.onclick = function () {
    window.open('./page/popup.html')
}

window.addEventListener('message', (msg) => {
    let mytext = document.querySelector('#mytext')
    mytext.innerHTML = JSON.stringify(msg.data)
})