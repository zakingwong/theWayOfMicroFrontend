#!/bin/bash

# 检查是否存在 treasure-exhibit-container 容器，如果存在则停止并删除
if docker ps -a | grep -q "treasure-exhibit-container"; then
    echo "Stopping and removing treasure-exhibit-container container..."
    docker stop treasure-exhibit-container
    docker rm treasure-exhibit-container
    echo "treasure-exhibit-container container removed."
else
    echo "No treasure-exhibit-container container found."
fi

# 检查是否存在 treasure-exhibit-image 镜像，如果存在则删除
if docker images -q treasure-exhibit-image; then
    echo "Removing treasure-exhibit-image image..."
    docker rmi treasure-exhibit-image
    echo "treasure-exhibit-image image removed."
else
    echo "No treasure-exhibit-image image found."
fi

# 构建 treasure-exhibit-image 镜像
echo "Building treasure-exhibit-image image..."
docker build -t treasure-exhibit-image .
echo "treasure-exhibit-image image built."

# 启动 treasure-exhibit-container 容器
echo "Starting treasure-exhibit-container container..."
docker run -d --name treasure-exhibit-container -p 94:80 treasure-exhibit-image
echo "treasure-exhibit-container container started."
