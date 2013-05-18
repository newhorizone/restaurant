$(document).ready(function() {
    $('#loginInfo').hide('fast');
    $('#loginMember').click(function() {
        if (!$('#registerInfo').hide()) {
            $('#registerInfo').hide();
           $('#loginInfo').toggle('fast'); 
        } 
        $('#loginInfo').toggle('fast'); 
    });
    $('#loginCancel').click(function() {
        $('#loginInfo').hide('fast');
    });
});

