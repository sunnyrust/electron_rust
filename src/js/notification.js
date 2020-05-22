var notifyBtn = document.getElementById('notifyBtn')
var option = {
    title: '小二，来订单了，出来捷克',
    body: '有大官人翻你牌子额'
}
notifyBtn.onclick = function () {
    new window.Notification(option.title, option)
}