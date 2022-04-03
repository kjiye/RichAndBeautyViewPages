const Cash = (function ($) {

    let payCash = function () {
        if (confirm("00명에게 00캐시를 지급하시겠습니까?")) {
            alert("캐시 지급이 완료됐습니다");
        } else {
            return;
        }
    };

    let takeBackCash = function () {
        if (confirm("00명에게 캐시를 회수하시겠습니까?")) {
            alert("캐시 회수가 완료됐습니다");
        } else {
            return;
        }
    };

    let sendPushModal = function () {
        $('.ui.modal').modal({
            centered: true
        }).modal('show');
    };

    let sendPushAction = function () {
        alert('푸시 발송이 완료됐습니다');
    };

    return {
        init: function () {
            $('#pay').on('click', payCash);
            $('#take_back').on('click', takeBackCash);
            $('button.send_push').on('click', sendPushModal);
            $('#push_action').on('click', sendPushAction);
        }
    }
}(jQuery));

$(document).ready(function () {
    Cash.init();
});