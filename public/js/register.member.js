$(document).ready(function() {
    $('#registerInfo').hide('fast');
    $('#registerMember').click(function() {
        if (!$('#loginInfo').hide()) {
            $('#loginInfo').hide();
            $('#registerInfo').toggle('fast');
        }
        $('#registerInfo').toggle('fast');
    });
    $('#registerCancel').click(function() {
        $('#registerInfo').hide('fast');
    });
});

