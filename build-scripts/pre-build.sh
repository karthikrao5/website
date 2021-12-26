#!/bin/bash

aws --version
echo "Logging in to Amazon ECR..."
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 227046024389.dkr.ecr.us-east-1.amazonaws.com