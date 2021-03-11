echo "ssh into $1"

if [ $1 = "client" ];
then
    docker-compose exec client sh
else
    docker-compose exec server bash
fi
