#!/bin/bash

echo "Creating build artifacts"

image_version=$IMAGE_TAG

cat >Dockerrun.aws.json <<EOL
{
  "AWSEBDockerrunVersion": "1",
  "Image": {
    "Name": "227046024389.dkr.ecr.us-east-1.amazonaws.com/web:${image_version}",
    "Update": "true"
  },
  "Ports": [{
    "ContainerPort": 80,
    "HostPort": 3000
  }]
}
EOL

cat Dockerrun.aws.json

echo "Pushing the Docker images..."
docker push $REPOSITORY_URI:latest
docker push $REPOSITORY_URI:$IMAGE_TAG