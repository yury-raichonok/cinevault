FROM maven:3.9-eclipse-temurin-25-alpine AS build
WORKDIR /workspace

COPY pom.xml .
COPY backend/auth-service/pom.xml backend/auth-service/pom.xml
RUN mvn dependency:go-offline -pl backend/auth-service -am -q

COPY backend/auth-service/src backend/auth-service/src
RUN mvn package -pl backend/auth-service -am -DskipTests -q

FROM eclipse-temurin:25-jre-alpine
WORKDIR /app
RUN addgroup -S spring && adduser -S spring -G spring
USER spring:spring

COPY --from=build /workspace/backend/auth-service/target/*.jar app.jar
EXPOSE 8081
ENTRYPOINT ["java", "-XX:MaxRAMPercentage=75.0", "-jar", "app.jar"]
