$(function() {
    $("#hw").change(getData);
});

function getData() {
    var urlpath = `resources/${$("#hw").val()}`;
    $.get(urlpath).done(ajaxSuccess).fail(ajaxFailure);
}

function ajaxSuccess(data) {
    $("#output").val(data);
}

function ajaxFailure(xhr, status, exception) {
    console.log(xhr, status, exception);
}