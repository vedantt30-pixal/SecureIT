# SecureIT
- SecureIT is an IoT-based smart surveillance and access control system integrating:
- ESP32-CAM live video streaming
- PIR-based motion detection with Telegram alerts
- Remote relay and environmental control
- ESP8266 smart lock with Telegram PIN challenge
- Web dashboard with real-time access logs
- Node.js logging server

# System architecture 
1) ESP32-CAM handles:
- Live MJPEG streaming
- Motion-triggered image capture
- Telegram command interface
- Environmental monitoring (DHT11)
- Remote relay control

2) ESP8266 handles
- Button-triggered dynamic PIN challenge
- Telegram-based authentication
- Servo-based locking mechanism
- Event logging to Node server

3) Node.js server
- Stores logs (FIFO, last 10 entries)
- Serves web dashboard
- Displays real-time access history

4) Features
- Live camera feed
- Flash-enabled image capture
- Motion detection alerts
- Smart relay control
- Telegram-based secure authentication
- Real-time access log dashboard
- Lightweight MJPEG streaming
- WiFi reconnection handling
