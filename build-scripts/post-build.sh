#!/bin/bash

echo "Creating build artifacts"

frui_version=$IMAGE_TAG

cat >Dockerrun.aws.json <<EOL
{
  "AWSEBDockerrunVersion": "1",
  "Image": {
    "Name": "877638373584.dkr.ecr.us-east-1.amazonaws.com/fr-ui:${frui_version}",
    "Update": "true"
  },
  "Ports": [{
    "ContainerPort": 80,
    "HostPort": 80
  }]
}
EOL

cat Dockerrun.aws.json

echo "Pushing the Docker images..."
docker push $REPOSITORY_URI:latest
docker push $REPOSITORY_URI:$IMAGE_TAG