const Common = (function($){
    
    /**
     * 공통 사용 또는 전역 사용 스크립트 관리
     */

    // 회원 프로필 이미지 새창 열기
    let profileDetailView = function(){
        window.open("/RichAndBeautyViewPages/views/account/member/profile_img.html","_blank", "width=650,height=650");
    };

    // 회원 뱃지 인증내역 상세 새창 열기
    let badgeDetailView = function(){
        window.open("/RichAndBeautyViewPages/views/account/member/badge.html", "_blank", "width=1200,height=800");
    }

    // 회원 프로필 심사 새창 열기
    let profileConfirmView = function(){
        window.open("/RichAndBeautyViewPages/views/account/member/profile.html","_blank", "width=1200,height=800");
    }

    // 회원 본인 인증 상세 새창 열기
    let identificationView = function(){
        window.open("/RichAndBeautyViewPages/views/account/member/identification.html","_blank", "width=1000,height=800");
    }

    // 회원 직장 인증 상세 새창 열기
    let jobDetailView = function(){
        window.open("/RichAndBeautyViewPages/views/account/member/job.html","_blank", "width=760,height=800");
    }

    // 회원 학교 인증 상세 새창 열기
    let academicDetailView = function(){
        window.open("/RichAndBeautyViewPages/views/account/member/academic.html","_blank", "width=760,height=800");
    }

    // 유료 내역 새창 열기
    let paidListView = function(){
        window.open("/RichAndBeautyViewPages/views/account/member/popup/paid_list.html", "_blank", "width=900,height=800");
    }

    // 이용 제한 새창 열기
    let restrictionListView = function(){
        window.open("/RichAndBeautyViewPages/views/account/member/popup/restriction_list.html","_blank", "width=1200,height=800");
    }

    // 상담 이력 새창 열기
    let counselingListView = function(){
        window.open("/RichAndBeautyViewPages/views/account/member/popup/counseling_list.html","_blank", "width=900,height=800");
    }

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
        }
    }

}(jQuery));

$(document).ready(function(){
    Common.init();
});