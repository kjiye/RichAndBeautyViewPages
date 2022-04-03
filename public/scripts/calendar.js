const Calendar = (function ($) {

    /**
     * 날짜 선택 캘린더 UI 관련 스크립트
     */

    let textTwice = function (number) {
        let zero = '';
        number = number.toString();

        if (number.length < 2) {
            for (let i = 0; i < 2 - number.length; i++)
                zero += '0';
        }
        return zero + number;
    };

    return {
        init: function () {
            $('#start_date').calendar({
                type: 'date',
                formatter: {
                    date: function (date, settings) {
                        if (!date) return '';
                        let day = textTwice(date.getDate());
                        let month = textTwice(date.getMonth() + 1);
                        let year = date.getFullYear();
                        return `${year}-${month}-${day}`;
                    }
                },
            });
            $('#end_date').calendar({
                type: 'date',
                formatter: {
                    date: function (date, settings) {
                        if (!date) return '';
                        let day = textTwice(date.getDate());
                        let month = textTwice(date.getMonth() + 1);
                        let year = date.getFullYear();
                        return `${year}-${month}-${day}`;
                    }
                },
            });
            $('#time_picker').calendar({
                type: 'time',
                ampm: false,
            });
        }
    }

}(jQuery));

$(document).ready(function () {
    Calendar.init();
});