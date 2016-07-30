$('#getNews').on('click', function (e) {
    e.preventDefault();
    $.ajax({
        url: 'query.php',
        data: {
            newsId: $('#newsId').val()
        },
        type: 'post',
        success: function (data) {
            console.log(data);
            renderPage(data)

        },
        error: function () {
            alert('登陆失败')
        },

    });
    $('#newsId').attr("disabled", "disabled");

})

function renderPage(data) {
    var newsId = $('#newsId');
    var newsType = $('#newsType');
    var newsTitle = $('#newsTitle');
    var src_f = $('#src_f');
    var src_s = $('#src_s');
    var src_t = $('#src_t');
    var detail = $('#detail')
    var address = $('#address');
    var result = data['result'];
    var news = result[0]
    newsId.val(news['newsId']);
    newsType.val(news['newsType']);
    newsTitle.val(news['newsTitle']);
    address.val(news['address']);
    src_f.val(news['src']);
    src_s.val(news['src2']);
    src_t.val(news['src3']);
    detail.val(news['detail']);
}

$('#change').on('click', function (e) {
    e.preventDefault();
    $.ajax({
        url: 'edit.php',
        data: {
            newsId2: $('#newsId').val(),
            newsType: $('#newsType').val(),
            newsTitle: $('#newsTitle').val(),
            src: $('#src_f').val(),
            src2: $('#src_s').val(),
            src3: $('#src_t').val(),
            detail: $('#detail').val(),
            address: $('#address').val()
        },
        method: 'post',
        dataType: 'json',

    })
    $('#newsId').removeAttr("disabled");
    $('#newsId').val('');
        $('#newsType').val('');
        $('#newsTitle').val('');
        $('#src_f').val('');
        $('#src_s').val('');
        $('#src_t').val('');
        $('#detail').val('');
        $('#address').val('');
        alert('修改成功');
})
