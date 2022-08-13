
all: start

.PHONY: start
start:
	docker-compose up --build -d

.PHONY: mysqldb
mysqldb:
	docker-compose up --build mysqldb
