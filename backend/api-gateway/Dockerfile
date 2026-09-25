FROM maven:3.9-eclipse-temurin-25-alpine AS build
WORKDIR /workspace

COPY pom.xml .
COPY backend/api-gateway/pom.xml backend/api-gateway/pom.xml
RUN mvn dependency:go-offline -pl backend/api-gateway -am -q

COPY backend/api-gateway/src backend/api-gateway/src
RUN mvn package -pl backend/api-gateway -am -DskipTests -q

FROM eclipse-temurin:25-jre-alpine
WORKDIR /app
RUN addgroup -S spring && adduser -S spring -G spring
USER spring:spring

COPY --from=build /workspace/backend/api-gateway/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-XX:MaxRAMPercentage=75.0", "-jar", "app.jar"]
