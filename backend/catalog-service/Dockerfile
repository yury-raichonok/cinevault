FROM maven:3.9-eclipse-temurin-25-alpine AS build
WORKDIR /workspace

COPY pom.xml .
COPY backend/catalog-service/pom.xml backend/catalog-service/pom.xml
RUN mvn dependency:go-offline -pl backend/catalog-service -am -q

COPY backend/catalog-service/src backend/catalog-service/src
RUN mvn package -pl backend/catalog-service -am -DskipTests -q

FROM eclipse-temurin:25-jre-alpine
WORKDIR /app
RUN addgroup -S spring && adduser -S spring -G spring
USER spring:spring

COPY --from=build /workspace/backend/catalog-service/target/*.jar app.jar
EXPOSE 8083
ENTRYPOINT ["java", "-XX:MaxRAMPercentage=75.0", "-jar", "app.jar"]
