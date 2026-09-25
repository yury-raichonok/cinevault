FROM maven:3.9-eclipse-temurin-25-alpine AS build
WORKDIR /workspace

COPY pom.xml .
COPY backend/review-service/pom.xml backend/review-service/pom.xml
RUN mvn dependency:go-offline -pl backend/review-service -am -q

COPY backend/review-service/src backend/review-service/src
RUN mvn package -pl backend/review-service -am -DskipTests -q

FROM eclipse-temurin:25-jre-alpine
WORKDIR /app
RUN addgroup -S spring && adduser -S spring -G spring
USER spring:spring

COPY --from=build /workspace/backend/review-service/target/*.jar app.jar
EXPOSE 8084
ENTRYPOINT ["java", "-XX:MaxRAMPercentage=75.0", "-jar", "app.jar"]
