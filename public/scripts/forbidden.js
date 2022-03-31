const Forbidden = (function($){

    let addModal = function(){
        $('.ui.small.modal').modal({ centered: true }).modal('show');
    };

    let modifyModal = function(){
        $('.ui.small.modal').modal({ centered: true }).modal('show');
    };

    // 금지단어 관리 모달 체크박스 동작 처리
    let categoryCheckAllAction = function(){
        let checkbox = $('input.category_check_all').parent();
        let checked = checkbox.checkbox('is checked');
        let prevent = checkbox.hasClass('prevent');
        let action = '';
        if (!prevent) {
            action = checked ? 'check' : 'uncheck';
            $('input.category_check').parent().checkbox(action);
        }
        checkbox.removeClass('prevent');
    };

    // 금지단어 관리 모달 체크박스 개발 동작 처리
    let categoryCheckOneAction = function(){
        let all_checkbox = $('input.category_check_all').parent();
        let checked = $(this).parent().checkbox('is checked');

        if (!checked) {
            all_checkbox.addClass('prevent');
            all_checkbox.checkbox('uncheck');
        } else {
            let check_arr = $('input.category_check').parent().checkbox('is checked');
            if (!check_arr.includes(false)) {
                all_checkbox.checkbox('check');
            }

        }
    };

    return {
        init: function(){
            $('#add').on('click', addModal);
            $('button.modify').on('click', modifyModal);
            $('input.category_check_all').on('change', categoryCheckAllAction);
            $('input.category_check').on('change', categoryCheckOneAction);
        }
    }
}(jQuery));

$(document).ready(function(){
    Forbidden.init();
});