# Step 1: Build React Frontend
FROM node:18 AS frontend

WORKDIR /app

# Copy the React frontend code
COPY Bookings/package.json Bookings/package-lock.json ./Bookings/
RUN cd Bookings && npm install

COPY Bookings ./Bookings
RUN cd Bookings && npm run build

# Step 2: Setup Flask Backend
FROM python:3.11 AS backend

WORKDIR /app

# Set environment variables for Flask
ENV FLASK_ENV=production
ENV FLASK_APP=api.py

# Install Python dependencies
COPY Backend/requirements.txt ./Backend/
RUN pip install --no-cache-dir -r Backend/requirements.txt

# Copy Backend source code
COPY Backend ./Backend

# Copy built React frontend into Flask static folder
COPY --from=frontend /app/Bookings/build ./Backend/static

# Expose the port for Gunicorn
EXPOSE 8000

# Run the application using Gunicorn
CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:8000", "api:app", "--chdir", "./Backend"]