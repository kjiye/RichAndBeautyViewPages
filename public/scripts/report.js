const Report = (function($){

    let regulationDetailView = function(){
        $('.ui.small.modal').modal({ centered: true }).modal('show');
    };

    return {
        init: function(){
            $('#regulation_detail').on('click', regulationDetailView);
        }
    }
}(jQuery));

$(document).ready(function(){
    Report.init();
});