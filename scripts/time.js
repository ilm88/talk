setInterval(function () {
    /*var now = new Date();
    var date_box = document.querySelector(".date");
    console.log(date_box);
    date_box.innerHTML= now;*/
    var date = new Date()
    h = date.getHours()
    m = date.getMinutes()
    s = date.getSeconds()
    h = (h < 10) ? '0' + h : h
    m = (m < 10) ? '0' + m : m
    s = (s < 10) ? '0' + s : s
    document.querySelector('.date').innerHTML = h + ':' + m + ':' + s;
}, 1000);
