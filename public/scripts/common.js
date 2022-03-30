const Common = (function($){
    
    /**
     * 공통 사용 또는 전역 사용 스크립트 관리
     */
    const ROOT_PATH = '/RichAndBeautyViewPages/views';

    // 회원 프로필 이미지 새창 열기
    let profileDetailView = function(){
        window.open(`${ROOT_PATH}/account/member/profile_img.html`,"_blank", "width=650,height=650");
    };

    // 회원 뱃지 인증내역 상세 새창 열기
    let badgeDetailView = function(){
        window.open(`${ROOT_PATH}/account/member/badge.html`, "_blank", "width=1200,height=800");
    }

    // 회원 프로필 심사 새창 열기
    let profileConfirmView = function(){
        window.open(`${ROOT_PATH}/account/member/profile.html`,"_blank", "width=1200,height=800");
    }

    // 회원 본인 인증 상세 새창 열기
    let identificationView = function(){
        window.open(`${ROOT_PATH}/account/member/identification.html`,"_blank", "width=1000,height=800");
    }

    // 회원 직장 인증 상세 새창 열기
    let jobDetailView = function(){
        window.open(`${ROOT_PATH}/account/member/job.html`,"_blank", "width=760,height=800");
    }

    // 회원 학교 인증 상세 새창 열기
    let academicDetailView = function(){
        window.open(`${ROOT_PATH}/account/member/academic.html`,"_blank", "width=760,height=800");
    }

    // 유료 내역 새창 열기
    let paidListView = function(){
        window.open(`${ROOT_PATH}/account/member/popup/paid_list.html`, "_blank", "width=900,height=800");
    }

    // 이용 제한 새창 열기
    let restrictionListView = function(){
        window.open(`${ROOT_PATH}/account/member/popup/restriction_list.html`,"_blank", "width=1200,height=800");
    }

    // 상담 이력 새창 열기
    let counselingListView = function(){
        window.open(`${ROOT_PATH}/account/member/popup/counseling_list.html`,"_blank", "width=900,height=800");
    }

    // 매치이력 상세 새창 열기
    let matchDetailView = function(){
        window.open(`${ROOT_PATH}/match/detail.html`,"_blank", "width=1200,height=800");
    };

    // 파티 상세 새창 열기
    let partyDetailView = function(){
        window.open(`${ROOT_PATH}/party/detail.html`,"_blank", "width=800,height=800")
    };

    // 창 닫기
    let windowClose = function(){
        window.close();
    };

    // 회원 상세 새창 열기
    let memberDetailView = function(){
        window.open(`${ROOT_PATH}/party/popup/member_detail.html`,"_blank", "width=1200,height=800")
    };

    return {
        init: function(){
            // $('.ui.accordion').accordion();
            $('.ui.dropdown').dropdown();
            $(window).scroll(function(){
                $(".ui.segment.fixed_content").css("margin-top",Math.max(-100,0-$(this).scrollTop()));
            });
            $('a.profile_img').on('click', profileDetailView);
            $('a.badge').on('click', badgeDetailView);
            $('a.profile_confirm').on('click', profileConfirmView);
            $('a.identification').on('click', identificationView);
            $('a.job').on('click', jobDetailView);
            $('a.academic').on('click', academicDetailView);
            $('button.paid').on('click', paidListView);
            $('button.restriction').on('click', restrictionListView);
            $('button.counseling').on('click', counselingListView);
            $('button.match').on('click', matchDetailView);
            $('button.party').on('click', partyDetailView);
            $('button.close').on('click', windowClose);
            $('a.member').on('click', memberDetailView);
        }
    }

}(jQuery));

$(document).ready(function(){
    Common.init();
});