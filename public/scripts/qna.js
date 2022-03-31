const QnA = (function($){
    
    /**
     * 고객센터 문의 관련 페이지 스크립트 관리
     */

    let showReplyTextArea = function(){
        $('#qna_reply').parents('tr').removeClass('none');
        $(".write_reply").addClass('none');
        $(".reg_reply").removeClass('none');
    };

    let regReply = function(){
        if (confirm("답변을 등록하시겠습니까?")) {
            alert('답변이 등록됐습니다');
        } else {
            return;
        }
    }

    // detail.html 답변 작성 모드인지 상세 모드인지 체크
    let checkPageMode = function(){
        let url = window.location.href;
        if (url.includes('/qna/detail.html')) {
            let qs = window.location.search;
            if (qs.includes('reply')) {
                console.log('!!!');
                return showReplyTextArea();
            }
        }
    };

    return {
        init: function(){
            checkPageMode();
            $('.write_reply').on('click', showReplyTextArea);
            $('.reg_reply').on('click', regReply);
        }
    }

}(jQuery));

$(document).ready(function(){
    QnA.init();
});