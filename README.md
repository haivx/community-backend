
I. How to start:

```js
    docker-compose up --build
    docker-compose down
    docker-compose up
```

II. Reference command
docker build -t backend-nest  -f Dockerfile --platform linux/x86_64 . // using in M1 Mac
docker run --name postgres-nest -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d postgres
docker run -p 3000:3000 --platform linux/x86_64 backend-nest
docker exec -it  <container-name> psql -U <dataBaseUserName> <dataBaseName>
Get UID_GID: Using command <id> in terminal