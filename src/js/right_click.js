// 右击事件
var rightTemplate = [
    { label: '粘贴', accelerator: 'ctrl+c' },
    { label: '复制', accelerator: 'ctrl+v' },
]
var m = remote.Menu.buildFromTemplate(rightTemplate)

window.addEventListener('contextmenu', function (e) {
    e.preventDefault() // 阻止默认响应事件

    m.popup({ window: remote.getCurrentWindow() })
})