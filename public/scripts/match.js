const Match = (function ($) {

    // 이용정지 처리 사전 확인 문구 출력
    let memberBlockConfirm = function () {
        if (confirm("선택학 회원을 3일 정지(이용정지) 처리하시겠습니까?")) {
            alert("이용정지 처리가 완료됐습니다");
        } else {
            return;
        }
    };

    // 정상 처리 사전 확인 문구 출력
    let matchPassConfirm = function () {
        if (confirm("선택한 회원의 매치이력을 정상 처리하시겠습니까?")) {
            alert("정상 처리가 완료됐습니다");
        } else {
            return;
        }
    };

    // 경고 알림 처리 사전 확인 문구 출력
    let warningMessageConfirm = function () {
        if (confirm("선택한 회원에게 경고알림 메세지가 즉시 발송됩니다\n발송하시겠습니까?")) {
            alert("경고 알림 메세지가 발송됐습니다");
        } else {
            return;
        }
    };

    return {
        init: function () {
            $('#block').on('click', memberBlockConfirm);
            $('#pass').on('click', matchPassConfirm);
            $('#warning').on('click', warningMessageConfirm);
        }
    }

}(jQuery));

$(document).ready(function () {
    Match.init();
});