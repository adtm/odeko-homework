
all: start

.PHONY: start
start:
	docker-compose up --build app
