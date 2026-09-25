FROM maven:3.9-eclipse-temurin-25-alpine AS build
WORKDIR /workspace

COPY pom.xml .
COPY backend/notification-service/pom.xml backend/notification-service/pom.xml
RUN mvn dependency:go-offline -pl backend/notification-service -am -q

COPY backend/notification-service/src backend/notification-service/src
RUN mvn package -pl backend/notification-service -am -DskipTests -q

FROM eclipse-temurin:25-jre-alpine
WORKDIR /app
RUN addgroup -S spring && adduser -S spring -G spring
USER spring:spring

COPY --from=build /workspace/backend/notification-service/target/*.jar app.jar
EXPOSE 8087
ENTRYPOINT ["java", "-XX:MaxRAMPercentage=75.0", "-jar", "app.jar"]
