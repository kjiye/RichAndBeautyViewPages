const Certification = (function($){
    
    /**
     * 인증/심사 관리 페이지 스크립트
     */

    // 부결 버튼
    let denyCertification = function(){
        if (confirm("선택한 인증/심사 내역을 부결 처리하시겠습니까?")) {
            alert('부결 처리가 완료됐습니다');
        } else {
            return;
        }
    };

    // 승인 버튼
    let approveCertification = function(){
        if (confirm("선택한 인증/심사 내역을 승인 처리하시겠습니까?")) {
            alert('승인 처리가 완료됐습니다');
        } else {
            return;
        }        
    }


    return {
        init: function(){
           $('#deny').on('click', denyCertification);
           $('#approve').on('click', approveCertification);
                       
        }
    }

}(jQuery));

$(document).ready(function(){
    Certification.init();
});