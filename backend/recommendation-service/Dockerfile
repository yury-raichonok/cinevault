FROM maven:3.9-eclipse-temurin-25-alpine AS build
WORKDIR /workspace

COPY pom.xml .
COPY backend/recommendation-service/pom.xml backend/recommendation-service/pom.xml
RUN mvn dependency:go-offline -pl backend/recommendation-service -am -q

COPY backend/recommendation-service/src backend/recommendation-service/src
RUN mvn package -pl backend/recommendation-service -am -DskipTests -q

FROM eclipse-temurin:25-jre-alpine
WORKDIR /app
RUN addgroup -S spring && adduser -S spring -G spring
USER spring:spring

COPY --from=build /workspace/backend/recommendation-service/target/*.jar app.jar
EXPOSE 8086
ENTRYPOINT ["java", "-XX:MaxRAMPercentage=75.0", "-jar", "app.jar"]
