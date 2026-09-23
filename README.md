# 🎬 CineVault

> A desktop cinema application — browse movies, stream public domain films, write reviews, and get AI-powered recommendations.

<!-- DEMO VIDEO PLACEHOLDER
[![CineVault Demo](https://img.shields.io/badge/▶_Watch_Demo-FF0000?style=for-the-badge&logo=youtube)](YOUR_YOUTUBE_LINK)
-->

<!-- SCREENSHOT PLACEHOLDER
![CineVault Screenshot](docs/images/screenshot-main.png)
-->

---

## Overview

CineVault is a full-stack portfolio project built to demonstrate production-grade microservices architecture, reactive programming, and cloud deployment. The app runs as a native desktop application (Electron) backed by 8 Spring Boot microservices deployed on Azure AKS.

**Key features:**
- Movie catalog powered by TMDB API
- Public domain film streaming via Archive.org
- User reviews and ratings
- AI-powered recommendations (local Ollama LLM)
- Azure AD B2C authentication

---

## Architecture

<!-- ARCHITECTURE DIAGRAM PLACEHOLDER
![Architecture Diagram](docs/images/architecture.png)
-->

```
┌─────────────────────────────────────────────────┐
│              Electron Desktop App                │
│              React 19 + TypeScript               │
└──────────────────────┬──────────────────────────┘
                       │ HTTP / WebSocket
                       ▼
              ┌─────────────────┐
              │   API Gateway   │  :8080
              └────────┬────────┘
          ┌────────────┼────────────┐
          ▼            ▼            ▼
   ┌─────────┐  ┌───────────┐  ┌──────────┐
   │  Auth   │  │  Catalog  │  │  Review  │
   │ :8081   │  │  :8083    │  │  :8084   │
   └─────────┘  └───────────┘  └──────────┘
          ▼            ▼            ▼
   ┌─────────┐  ┌───────────┐  ┌──────────────────┐
   │  User   │  │ Streaming │  │ Recommendation   │
   │ :8082   │  │  :8085    │  │     :8086        │
   └─────────┘  └───────────┘  └──────────────────┘
                                ┌──────────────────┐
                                │  Notification    │
                                │     :8087        │
                                └──────────────────┘
```

---

## Tech Stack

### Backend
| Technology | Purpose |
|---|---|
| Java 25 + Spring Boot 4.1.1 | Microservices framework |
| Spring WebFlux (Reactor) | Reactive, non-blocking I/O |
| PostgreSQL + R2DBC | Reactive relational persistence |
| MongoDB (reactive driver) | Document storage (catalog, reviews) |
| Redis | Caching, sessions |
| Apache Kafka | Async inter-service messaging |
| Ollama (llama3.1:8b) | Local AI — recommendations & assistant |

### Frontend
| Technology | Purpose |
|---|---|
| React 19 + TypeScript | UI framework |
| Electron | Desktop app wrapper |
| TanStack Query v5 | Server state management |
| Vite | Build tooling |

### Infrastructure
| Technology | Purpose |
|---|---|
| Azure AKS | Kubernetes cluster |
| Azure AD B2C | Authentication (50K MAU free tier) |
| Azure Blob Storage | User avatar storage |
| Azure Container Registry | Docker image registry |
| Azure Application Insights | Observability & monitoring |
| GitHub Actions | CI/CD pipelines |

### External APIs
| API | Usage |
|---|---|
| [TMDB](https://www.themoviedb.org/documentation/api) | Movie metadata, posters, trailers |
| [Archive.org](https://archive.org) | Public domain film streaming (free) |

---

## Project Structure

```
cinevault/
├── backend/
│   ├── api-gateway/          # Spring Cloud Gateway — routing & auth filter
│   ├── auth-service/         # Azure AD B2C integration, JWT issuance
│   ├── user-service/         # User profiles, watchlists, avatars
│   ├── catalog-service/      # TMDB integration, movie/genre data
│   ├── review-service/       # Reviews, ratings, likes
│   ├── streaming-service/    # Archive.org streaming proxy
│   ├── recommendation-service/ # Ollama AI recommendations
│   └── notification-service/ # Kafka consumer, email/push notifications
├── frontend/                 # React + Electron desktop app
├── infrastructure/
│   ├── docker/               # Docker Compose for local dev
│   └── k8s/                  # Kubernetes manifests (AKS)
└── .github/
    └── workflows/            # CI/CD pipelines
```

---

## Getting Started

### Prerequisites

- Java 25
- Node.js 22+
- Docker Desktop
- Ollama ([install](https://ollama.ai)) with `ollama pull llama3.1:8b`
- TMDB API key (free at [themoviedb.org](https://www.themoviedb.org/settings/api))

### Run locally

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/cinevault.git
cd cinevault

# 2. Start infrastructure (PostgreSQL, MongoDB, Redis, Kafka)
cd infrastructure/docker
docker compose up -d

# 3. Start backend services
cd ../../backend/api-gateway
./mvnw spring-boot:run
# repeat for other services or use the root docker-compose

# 4. Start the desktop app
cd ../../frontend
npm install
npm run dev
```

<!-- DETAILED SETUP GUIDE PLACEHOLDER
> Full setup guide with screenshots: [docs/SETUP.md](docs/SETUP.md)
-->

---

## Roadmap

<!-- ROADMAP / PROGRESS SCREENSHOT PLACEHOLDER
![Progress](docs/images/progress.png)
-->

- [ ] Project setup & infrastructure
- [ ] Authentication (Azure AD B2C)
- [ ] Movie catalog (TMDB integration)
- [ ] User profiles & watchlists
- [ ] Reviews & ratings
- [ ] Public domain streaming
- [ ] AI recommendations (Ollama)
- [ ] Notifications
- [ ] AKS deployment
- [ ] CI/CD pipelines

---

## License

This project is for portfolio and educational purposes.

---

<!-- BADGES PLACEHOLDER — add after first CI/CD setup
![Build](https://github.com/YOUR_USERNAME/cinevault/actions/workflows/ci.yml/badge.svg)
![Java](https://img.shields.io/badge/Java-25-orange)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-4.1.1-brightgreen)
-->
