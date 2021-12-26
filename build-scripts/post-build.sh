#!/bin/bash

echo "Creating build artifacts"


echo "Pushing the Docker images..."
docker push $REPOSITORY_URI:latest
docker push $REPOSITORY_URI:$IMAGE_TAG