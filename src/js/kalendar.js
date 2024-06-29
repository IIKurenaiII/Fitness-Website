document.addEventListener('DOMContentLoaded', function() {
    function loadEvents() {
        var events = localStorage.getItem('calendarEvents');
        return events ? JSON.parse(events) : [];
    }

    function saveEvents(events) {
        localStorage.setItem('calendarEvents', JSON.stringify(events));
    }

    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'uk',
        dateClick: function(info) {
            var eventDate = document.getElementById('eventDate');
            eventDate.value = info.dateStr;
            var eventModal = new bootstrap.Modal(document.getElementById('eventModal'));
            eventModal.show();
        },
        eventClick: function(info) {
            var deleteEventModal = new bootstrap.Modal(document.getElementById('deleteEventModal'));
            deleteEventModal.show();
            document.getElementById('confirmDelete').onclick = function() {
                info.event.remove();
                saveEvents(calendar.getEvents().map(e => ({
                    title: e.title,
                    start: e.start.toISOString()
                })));
                deleteEventModal.hide();
            };
        },
        events: loadEvents()
    });
    calendar.render();

    var eventForm = document.getElementById('eventForm');
    eventForm.addEventListener('submit', function(event) {
        event.preventDefault();
        var eventTitle = document.getElementById('eventTitle').value;
        var eventTime = document.getElementById('eventTime').value;
        var eventDate = document.getElementById('eventDate').value;
        var eventDateTime = eventDate + 'T' + eventTime;

        calendar.addEvent({
            title: eventTitle,
            start: eventDateTime
        });

        saveEvents(calendar.getEvents().map(e => ({
            title: e.title,
            start: e.start.toISOString()
        })));

        var myModal = bootstrap.Modal.getInstance(document.getElementById('eventModal'));
        myModal.hide();

        eventForm.reset();
    });
});