FROM maven:3.9-eclipse-temurin-25-alpine AS build
WORKDIR /workspace

COPY pom.xml .
COPY backend/user-service/pom.xml backend/user-service/pom.xml
RUN mvn dependency:go-offline -pl backend/user-service -am -q

COPY backend/user-service/src backend/user-service/src
RUN mvn package -pl backend/user-service -am -DskipTests -q

FROM eclipse-temurin:25-jre-alpine
WORKDIR /app
RUN addgroup -S spring && adduser -S spring -G spring
USER spring:spring

COPY --from=build /workspace/backend/user-service/target/*.jar app.jar
EXPOSE 8082
ENTRYPOINT ["java", "-XX:MaxRAMPercentage=75.0", "-jar", "app.jar"]
