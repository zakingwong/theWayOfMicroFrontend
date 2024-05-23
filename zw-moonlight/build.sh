#!/bin/bash

# 检查是否存在 moonlight-container 容器，如果存在则停止并删除
if docker ps -a | grep -q "moonlight-container"; then
    echo "Stopping and removing moonlight-container container..."
    docker stop moonlight-container
    docker rm moonlight-container
    echo "moonlight-container container removed."
else
    echo "No moonlight-container container found."
fi

# 检查是否存在 moonlight-image 镜像，如果存在则删除
if docker images -q moonlight-image; then
    echo "Removing moonlight-image image..."
    docker rmi moonlight-image
    echo "moonlight-image image removed."
else
    echo "No moonlight-image image found."
fi

# 构建 moonlight-image 镜像
echo "Building moonlight-image image..."
docker build -t moonlight-image .
echo "moonlight-image image built."

# 启动 moonlight-container 容器
echo "Starting moonlight-container container..."
docker run -d --name moonlight-container -p 91:81 moonlight-image
echo "moonlight-container container started."
