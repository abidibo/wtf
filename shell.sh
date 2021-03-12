if [ $# -eq 0 ]; then
    echo "Usage: $0 [client|server]"
    exit 1
fi
echo "ssh into $1"

if [ $1 = "client" ];
then
    docker-compose exec client sh
else
    docker-compose exec server bash
fi
