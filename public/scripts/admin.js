const Admin = (function($){

    // 신규생성 버튼 누를 시 모달창 띄우기
    let showNewAccountModal = function(){
        $('.ui.small.modal').modal({ centered: true }).modal('show');            
    };

    // 계정 생성하기 사전 확인 처리
    let makeNewAccountConfirm = function(){
        if (confirm("신규 관리자 계정을 생성하시겠습니까?")) {
            // 유효성 검사 실패 시
            alert("입력하지 않은 항목이 있거나 이미 존재하는 아이디 입니다");
        } else {
            return;
        }
    };

    let resetPasswordConfirm = function(){
        if (confirm("해당 관리자의 비밀번호를 초기화하시겠습니까?")) {
            alert("비밀번호 초기화가 완료됐습니다");
        } else {
            return;
        }
    };

    let withdrawalAccountConfirm = function(){
        if (confirm("해당 관리자 계정을 탈퇴 처리하시겠습니까?")) {
            alert("탈퇴 처리가 완료됐습니다");
        } else {
            return;
        }
    };

    let modifyAccountConfirm = function(){
        if (confirm("해당 관리자의 정보를 수정하시겠습니까?")) {
            alert('수정이 완료됐습니다');
        } else {
            return;
        }
    };

    return {
        init: function(){
            $('#input_modal').on('click', showNewAccountModal);
            $('#new_account').on('click', makeNewAccountConfirm);
            $('#reset_password').on('click', resetPasswordConfirm);
            $('#withdrawal').on('click', withdrawalAccountConfirm);
            $('#modify').on('click', modifyAccountConfirm);
        }
    }

}(jQuery));

$(document).ready(function(){
    Admin.init();
});