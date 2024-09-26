from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
import cv2
import os
from datetime import datetime

app = Flask(__name__)
CORS(app)

# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['student_database']
students_collection = db['students']

# Directory to save recorded videos
VIDEO_SAVE_DIR = 'recorded_videos'
os.makedirs(VIDEO_SAVE_DIR, exist_ok=True)

# Endpoint to submit student data
@app.route('/submit_student', methods=['POST'])
def submit_student():
    student_data = request.json
    if not all(key in student_data for key in ("name", "scholarNo", "semester", "course")):
        return jsonify({"error": "Missing required fields"}), 400
    
    # Insert data into MongoDB
    students_collection.insert_one(student_data)
    return jsonify({"message": "Student added successfully"}), 201

# Endpoint to start recording video
@app.route('/start_camera', methods=['GET'])
def start_camera():
    # Initialize the camera
    cap = cv2.VideoCapture(0)
    if not cap.isOpened():
        return jsonify({"error": "Could not open video capture"}), 500

    # Face detection model
    face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
    
    # Generate a unique filename for the video
    video_filename = f"{VIDEO_SAVE_DIR}/student_{datetime.now().strftime('%Y%m%d_%H%M%S')}.avi"
    fourcc = cv2.VideoWriter_fourcc(*'XVID')
    out = cv2.VideoWriter(video_filename, fourcc, 20.0, (640, 480))

    while True:
        ret, frame = cap.read()
        if not ret:
            break
        
        # Convert to grayscale
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        
        # Detect faces
        faces = face_cascade.detectMultiScale(gray, 1.1, 4)
        
        # Draw rectangle around faces
        for (x, y, w, h) in faces:
            cv2.rectangle(frame, (x, y), (x + w, y + h), (255, 0, 0), 2)
        
        # Display the frame
        cv2.imshow('Recording... Press Q to stop', frame)
        
        # Write the frame to the video file
        out.write(frame)
        
        # Press Q to stop recording
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break
    
    # Release the camera and writer
    cap.release()
    out.release()
    cv2.destroyAllWindows()
    
    return jsonify({"message": "Video recording saved", "video_path": video_filename}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
