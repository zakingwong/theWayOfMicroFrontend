#!/bin/bash

# 检查是否存在 moonlight-ad-container 容器，如果存在则停止并删除
if docker ps -a | grep -q "moonlight-ad-container"; then
    echo "Stopping and removing moonlight-ad-container container..."
    docker stop moonlight-ad-container
    docker rm moonlight-ad-container
    echo "moonlight-ad-container container removed."
else
    echo "No moonlight-ad-container container found."
fi

# 检查是否存在 moonlight-ad-image 镜像，如果存在则删除
if docker images -q moonlight-ad-image; then
    echo "Removing moonlight-ad-image image..."
    docker rmi moonlight-ad-image
    echo "moonlight-ad-image image removed."
else
    echo "No moonlight-ad-image image found."
fi

# 构建 moonlight-ad-image 镜像
echo "Building moonlight-ad-image image..."
docker build -t moonlight-ad-image .
echo "moonlight-ad-image image built."

# 启动 moonlight-ad-container 容器
echo "Starting moonlight-ad-container container..."
docker run -d --name moonlight-ad-container -p 92:3000 moonlight-ad-image
echo "moonlight-ad-container container started."
