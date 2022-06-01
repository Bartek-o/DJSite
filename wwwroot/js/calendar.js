'use strict';

(function (window, Calendar) {

    var calendar = createCalendar();
    renderTypeShedules(CalendarList);
    setRenderRangeText();
    setEventListener();

    

    document.getElementById("btn-move-today").addEventListener("click", function () {
        calendar.today();
        setRenderRangeText();
    });

    document.getElementById("btn-move-prev").addEventListener("click", function () {
        calendar.prev();
        setRenderRangeText();
    });

    document.getElementById("btn-move-next").addEventListener("click", function () {
        calendar.next();
        setRenderRangeText();
    });

    function setEventListener() {
        $('#lnb-calendars').on('change', onChangeCalendars);
    }

    function setRenderRangeText() {
        var renderRange = document.getElementById('renderRange');
        var options = calendar.getOptions();
        var viewName = calendar.getViewName();

        var html = [];
        if (viewName === 'day') {
            html.push(currentCalendarDate('YYYY.MM.DD'));
        } else if (viewName === 'month' &&
            (!options.month.visibleWeeksCount || options.month.visibleWeeksCount > 4)) {
            html.push(currentCalendarDate('YYYY.MM'));
        } else {
            html.push(moment(calendar.getDateRangeStart().getTime()).format('YYYY.MM.DD'));
            html.push(' ~ ');
            html.push(moment(calendar.getDateRangeEnd().getTime()).format(' MM.DD'));
        }
        renderRange.innerHTML = html.join('');
    }

    function currentCalendarDate(format) {
        var currentDate = moment([calendar.getDate().getFullYear(),
                                calendar.getDate().getMonth(),
                                calendar.getDate().getDate()]);
        return currentDate.format(format);
    }

    function onChangeCalendars(e) {
        var calendarId = e.target.value;
        var checked = e.target.checked;
        var calendarElements = Array.prototype.slice.call(document.querySelectorAll('#calendarList input'));
        var allCheckedCalendars = true;

        if (calendarId === 'all') {
            allCheckedCalendars = checked;

            calendarElements.forEach(function (input) {
                var span = input.parentNode;
                input.checked = checked;
                span.style.backgroundColor = checked ? span.style.borderColor : 'transparent';
            });

            CalendarList.forEach(function (calendar) {
                calendar.checked = checked;
            });
        } else {
            findCalendar(calendarId).checked = checked;

            allCheckedCalendars = calendarElements.every(function (input) {
                return input.checked;
            });
        }

        refreshScheduleVisibility();
    }

    function refreshScheduleVisibility() {
        var calendarElements = Array.prototype.slice.call(document.querySelectorAll('#calendarList input'));

        CalendarList.forEach(function (calendarr) {
            calendar.toggleSchedules(calendarr.id, !calendarr.checked, true);
        });

        calendar.render(true);

        calendarElements.forEach(function (input) {
            var span = input.nextElementSibling;
            span.style.backgroundColor = input.checked ? span.style.borderColor : 'transparent';
        });
    }

})(window, tui.Calendar);
