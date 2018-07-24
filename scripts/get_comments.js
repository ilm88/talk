function getComments(){

    document.querySelector('#comment_reload').onclick = function() {
        ajaxGet();
    }

    setInterval(function () {
        ajaxGet();
    }, 2000);
}

function ajaxGet() {
    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if(request.readyState == 4 && request.status ==200){
            document.querySelector('#comments').innerHTML = request.responseText;
        }
    document.getElementById('comments').scrollTop = 9999;
    }

    request.open('GET', '../php/get_comments.php');
    //request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.send();

}
