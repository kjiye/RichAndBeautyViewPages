const Forbidden = (function ($) {

    let addModal = function () {
        $('.ui.small.modal').modal({
            centered: true
        }).modal('show');
    };

    let modifyModal = function () {
        $('.ui.small.modal').modal({
            centered: true
        }).modal('show');
    };

    // 금지단어 관리 모달창 체크박스 전체 동작 처리
    let categoryCheckAllAction = function () {
        let checkbox = $('input.category_check_all').parent();
        let checked = checkbox.checkbox('is checked');
        let check_arr = $('input.category_check').parent().checkbox('is checked');
        
        if (check_arr.every(v => v === true)) {
            $('input.category_check').parent().checkbox('uncheck');
        } else if (check_arr.every(v => v === false)) {
            $('input.category_check').parent().checkbox('check');
        } else {
            if (checked) {
                $('input.category_check').parent().checkbox('check');
            } else {
                $('input.category_check').parent().checkbox('uncheck');
            }
        }
    };

    // 금지단어 관리 모달창 체크박스 개별 동작 처리
    let categoryCheckOneAction = function () {
        let all_checkbox = $('input.category_check_all').parent();
        let checked = $(this).parent().checkbox('is checked');
        let check_arr = $('input.category_check').parent().checkbox('is checked');

        if (!checked) {
            if (check_arr.every(v => v === false)) {
                all_checkbox.checkbox('uncheck');
            } else {
                all_checkbox.checkbox('uncheck');
            }
        } else {
            if (check_arr.every(v => v === true)) {
                all_checkbox.checkbox('check');
            }
        }
    };

    return {
        init: function () {
            $('#add').on('click', addModal);
            $('button.modify').on('click', modifyModal);
            $('input.category_check').on('change', categoryCheckOneAction);
        }
    }
}(jQuery));

$(document).ready(function () {
    Forbidden.init();
});

$(document).on('click', 'div.checkbox.all', function(){
    Forbidden.categoryCheckAllAction();
});