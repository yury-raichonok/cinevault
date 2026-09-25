.DEFAULT_GOAL := help
COMPOSE = docker compose
s ?= ""

.PHONY: help up down restart build logs ps infra clean nuke ollama-pull

help:
	@echo ""
	@echo "CineVault Dev Commands"
	@echo "----------------------"
	@echo "  make up            Start all services"
	@echo "  make infra         Start infrastructure only (no microservices)"
	@echo "  make down          Stop all services"
	@echo "  make restart       Restart all services"
	@echo "  make build         Rebuild all microservice images"
	@echo "  make logs          Tail logs (all services)"
	@echo "  make logs s=<svc>  Tail logs for a specific service"
	@echo "  make ps            Show container status"
	@echo "  make clean         Remove volumes (resets all databases)"
	@echo "  make nuke          Remove containers, images, and volumes"
	@echo "  make ollama-pull   Download llama3.1:8b model into Ollama"
	@echo ""

up:
	$(COMPOSE) up -d

infra:
	$(COMPOSE) up -d postgres mongodb redis kafka ollama

down:
	$(COMPOSE) down

restart:
	$(COMPOSE) down && $(COMPOSE) up -d

build:
	$(COMPOSE) build

logs:
	@if [ -n "$(s)" ]; then \
		$(COMPOSE) logs -f $(s); \
	else \
		$(COMPOSE) logs -f; \
	fi

ps:
	$(COMPOSE) ps

clean:
	$(COMPOSE) down -v

nuke:
	$(COMPOSE) down -v --rmi all --remove-orphans

ollama-pull:
	docker exec -it cinevault-ollama-1 ollama pull llama3.1:8b
