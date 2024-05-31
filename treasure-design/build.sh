#!/bin/bash

# 检查是否存在 treasure-design-container 容器，如果存在则停止并删除
if docker ps -a | grep -q "treasure-design-container"; then
    echo "Stopping and removing treasure-design-container container..."
    docker stop treasure-design-container
    docker rm treasure-design-container
    echo "treasure-design-container container removed."
else
    echo "No treasure-design-container container found."
fi

# 检查是否存在 treasure-design-image 镜像，如果存在则删除
if docker images -q treasure-design-image; then
    echo "Removing treasure-design-image image..."
    docker rmi treasure-design-image
    echo "treasure-design-image image removed."
else
    echo "No treasure-design-image image found."
fi

# 构建 treasure-design-image 镜像
echo "Building treasure-design-image image..."
docker build -t treasure-design-image .
echo "treasure-design-image image built."

# 启动 treasure-design-container 容器
echo "Starting treasure-design-container container..."
docker run -d --name treasure-design-container -p 93:80 treasure-design-image
echo "treasure-design-container container started."
