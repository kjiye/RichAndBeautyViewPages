const Push = (function($){

    let searchMemberModal = function(){
        $('.ui.modal').modal({ centered: true }).modal('show');
    };

    // 푸시 발송 회원 선택
    let selected_arr = [];
    let selectMember = function(){
        let value = $(this).attr('data-value');
        let text = $(this).find('td').text();
        
        if (!(selected_arr.find(e => e == value) > 0)) {
            selected_arr.push(value);

            let tag = `<span class="ui large label name_tag" data-value="${value}" onclick="">
            ${text}<i class="delete icon"></i></span>`;
            $('div.selected_list_container').append(tag);      
        } else {
            alert('이미 선택된 회원입니다');
        }
    };

    // 푸시 발송 회원 제거
    let removeMember = function(ele){
        let value = ele.attr('data-value');
        selected_arr = selected_arr.filter(e => e != value);
        ele.remove();
    };

    // 푸시 예약 일정 선택 요소 보이기
    let showDateTimePicker = function(){
       let check_type = $(this).val();

       switch (check_type) {
            case "instant":
                $('div.reservation').addClass('none');
                break;
            case "reservation":
                $('div.reservation').removeClass('none');
                break;
       }
    };

    return {
        init: function(){
            $('#search_member').on('click', searchMemberModal);
            $('tr.search_result').on('click', selectMember);
            $('input[name="type"]').on('change', showDateTimePicker);
        },
        removeMember : (ele) => removeMember(ele),
    }
}(jQuery));

$(document).ready(function(){
    Push.init();
});

$(document).on('click', 'span.name_tag', function(){
    Push.removeMember($(this));
});