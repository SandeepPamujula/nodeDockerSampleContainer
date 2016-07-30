# nodeDockerSampleContainer

Start container:

git clone https://github.com/SandeepPamujula/nodeDockerSampleContainer.git

cd nodeDockerSampleContainer/

docker build -t nodesamplecontainer .

docker run -d -p 8080:8080 --name nodesamplecontainer nodesamplecontainer

Remove Container:

rm -r -f nodeDockerSampleContainer

docker rm -f nodesamplecontainer

docker rmi nodesamplecontainer

