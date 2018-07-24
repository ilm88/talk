/*window.onload = function (){
    var inp_name = document.querySelector('input[name=name]');
    var inp_page_id = document.querySelector('input[name=page_id]');
    var inp_text_comment = document.querySelector('#text');

    document.querySelector('#send').onclick = function() {
        var params = 'name=' + inp_name.value + '&' + 'page_id=' + inp_page_id.value + '&' + 'text_comment=' + inp_text_comment.value;
        //alert(params);
        ajaxPost(params);
    }
} */

function sendMessage() {
    var inp_name = document.querySelector('input[name=name]');
    var inp_page_id = document.querySelector('input[name=page_id]');
    var inp_text_comment = document.querySelector('#text');

    document.querySelector('#send').onclick = function() {
        var params = 'name=' + inp_name.value + '&' + 'page_id=' + inp_page_id.value + '&' + 'text_comment=' + inp_text_comment.value;
        ajaxPost(params);
        
        document.comment.reset();
    }
}

function ajaxPost(params) {
    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if(request.readyState == 4 && request.status ==200){
            document.querySelector('#result').innerHTML = request.responseText;
        }
    }

    request.open('POST', '../php/send_comment.php');
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.send(params);

}
