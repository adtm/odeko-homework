
all: start

.PHONY: start
start:
	docker-compose up --build

.PHONY: mysqldb
mysqldb:
	docker-compose up --build mysqldb
