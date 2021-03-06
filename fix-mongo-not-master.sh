docker-compose stop mongo
docker-compose -f docker-compose-fix-mongo-not-master.yml up -d mongo

sleep 20

# wait a moment about 30 seconds
docker exec -it mongo mongo local --eval "db.dropDatabase()"

docker-compose -f docker-compose-fix-mongo-not-master.yml stop mongo

docker-compose up -d mongo

sleep 20

# wait a moment about 30 seconds
docker exec -it mongo mongo --eval "rs.initiate()"
