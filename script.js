document.addEventListener('DOMContentLoaded', function() {
    // Sample event data - you can modify these values
    const eventData = {
        title: 'Tech Conference 2024',
        date: 'Saturday, September 14, 2024',
        time: '9:00 AM - 5:00 PM',
        location: 'Convention Center, 123 Main Street, City, State 12345',
        capacity: '500 attendees',
        description: 'Join industry leaders and innovators for a day of inspiring talks, hands-on workshops, and networking opportunities. Learn about the latest trends and technologies shaping the future.'
    };

    // Populate event data
    document.getElementById('eventTitle').textContent = eventData.title;
    document.getElementById('eventDate').textContent = eventData.date;
    document.getElementById('eventTime').textContent = eventData.time;
    document.getElementById('eventLocation').textContent = eventData.location;
    document.getElementById('eventCapacity').textContent = eventData.capacity;
    document.getElementById('eventDescription').textContent = eventData.description;

    // Button event listeners
    document.getElementById('registerBtn').addEventListener('click', function() {
        alert('Registration feature would open here. Event: ' + eventData.title);
    });

    document.getElementById('detailsBtn').addEventListener('click', function() {
        alert('More details:\n\n' + 
              'Date: ' + eventData.date + '\n' +
              'Time: ' + eventData.time + '\n' +
              'Location: ' + eventData.location);
    });

    // Log event info to console
    console.log('Event Details:', eventData);
});
