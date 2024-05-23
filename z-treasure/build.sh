#!/bin/bash

# 检查是否存在 treasure-container 容器，如果存在则停止并删除
if docker ps -a | grep -q "treasure-container"; then
    echo "Stopping and removing treasure-container container..."
    docker stop treasure-container
    docker rm treasure-container
    echo "treasure-container container removed."
else
    echo "No treasure-container container found."
fi

# 检查是否存在 treasure-image 镜像，如果存在则删除
if docker images -q treasure-image; then
    echo "Removing treasure-image image..."
    docker rmi treasure-image
    echo "treasure-image image removed."
else
    echo "No treasure-image image found."
fi

# 构建 treasure-image 镜像
echo "Building treasure-image image..."
docker build -t treasure-image .
echo "treasure-image image built."

# 启动 treasure-container 容器
echo "Starting treasure-container container..."
docker run -d --name treasure-container treasure-image
echo "treasure-container container started."
