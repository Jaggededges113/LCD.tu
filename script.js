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

    // Generate QR code
    const qrCodeURL = 'https://chat.whatsapp.com/JFwMpd0lB49DRaCE4rDM7C';
    new QRCode(document.getElementById('qrcode'), {
        text: qrCodeURL,
        width: 200,
        height: 200,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
    });

    // Log event info to console
    console.log('Event Details:', eventData);
    console.log('QR Code URL:', qrCodeURL);
});
