const ChartJS = (function ($) {

    /**
     * 차트 관련 스크립트
     */
    let getWeek = function () {

        let currentDay = new Date();
        let theYear = currentDay.getFullYear();
        let theMonth = currentDay.getMonth();
        let theDate = currentDay.getDate();
        let theDayOfWeek = currentDay.getDay();

        let thisWeek = [];

        for (let i = 0; i < 7; i++) {
            let resultDay = new Date(theYear, theMonth, theDate + (i - theDayOfWeek));
            let yyyy = resultDay.getFullYear();
            let mm = Number(resultDay.getMonth()) + 1;
            let dd = resultDay.getDate();

            mm = String(mm).length === 1 ? '0' + mm : mm;
            dd = String(dd).length === 1 ? '0' + dd : dd;

            thisWeek[i] = yyyy + '-' + mm + '-' + dd;
        }
        return thisWeek;
    };

    return {
        init: function () {
            let ctx = document.getElementById('bar_chart').getContext('2d');
            let week = getWeek();
            let myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: week,
                    datasets: [{
                            label: '남자',
                            data: [300, 200, 13, 150, 20, 30, 50],
                            backgroundColor: [
                                'rgba(33, 133, 208, .4)',
                            ],
                            borderColor: [
                                'rgba(33, 133, 208, 1)',
                            ],
                            borderWidth: 1
                        },
                        {
                            label: '여자',
                            data: [120, 190, 30, 50, 20, 90, 200],
                            backgroundColor: [
                                'rgba(255, 99, 132, .4)',
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                            ],
                            borderWidth: 1
                        }
                    ],

                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

        }
    }

}(jQuery));

$(document).ready(function () {
    ChartJS.init();
});