const code = document.getElementById('code')
const codeBtn = document.getElementById('code_btn')
codeBtn.onclick = function () {
    clipboard.writeText(code.innerHTML)
    alert('复制成功')
}