# Step 1: Use OpenJDK as base
FROM openjdk:17-jdk-slim

# Step 2: Set working directory
WORKDIR /backend

# Step 3: Copy JAR file into the container
COPY target/backend-0.0.1-SNAPSHOT.jar backend.jar

# Step 4: Expose port (Render will set PORT)
EXPOSE 8080

# Step 5: Run the JAR file
ENTRYPOINT ["java", "-jar", "backend.jar"]
