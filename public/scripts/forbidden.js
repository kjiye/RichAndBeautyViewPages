const Forbidden = (function($){

    let addModal = function(){
        $('.ui.small.modal').modal({ centered: true }).modal('show');
    };

    let modifyModal = function(){
        $('.ui.small.modal').modal({ centered: true }).modal('show');
    };

    return {
        init: function(){
            $('#add').on('click', addModal);
            $('button.modify').on('click', modifyModal);
        }
    }
}(jQuery));

$(document).ready(function(){
    Forbidden.init();
});