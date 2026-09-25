FROM maven:3.9-eclipse-temurin-25-alpine AS build
WORKDIR /workspace

COPY pom.xml .
COPY backend/streaming-service/pom.xml backend/streaming-service/pom.xml
RUN mvn dependency:go-offline -pl backend/streaming-service -am -q

COPY backend/streaming-service/src backend/streaming-service/src
RUN mvn package -pl backend/streaming-service -am -DskipTests -q

FROM eclipse-temurin:25-jre-alpine
WORKDIR /app
RUN addgroup -S spring && adduser -S spring -G spring
USER spring:spring

COPY --from=build /workspace/backend/streaming-service/target/*.jar app.jar
EXPOSE 8085
ENTRYPOINT ["java", "-XX:MaxRAMPercentage=75.0", "-jar", "app.jar"]
