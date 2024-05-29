#!/bin/bash

# 检查是否存在 moonlightAd-container 容器，如果存在则停止并删除
if docker ps -a | grep -q "moonlightAd-container"; then
    echo "Stopping and removing moonlightAd-container container..."
    docker stop moonlightAd-container
    docker rm moonlightAd-container
    echo "moonlightAd-container container removed."
else
    echo "No moonlightAd-container container found."
fi

# 检查是否存在 moonlightAd-image 镜像，如果存在则删除
if docker images -q moonlightAd-image; then
    echo "Removing moonlightAd-image image..."
    docker rmi moonlightAd-image
    echo "moonlightAd-image image removed."
else
    echo "No moonlightAd-image image found."
fi

# 构建 moonlightAd-image 镜像
echo "Building moonlightAd-image image..."
docker build -t moonlightAd-image .
echo "moonlightAd-image image built."

# 启动 moonlightAd-container 容器
echo "Starting moonlightAd-container container..."
docker run -d --name moonlightAd-container -p 92:3000 moonlightAd-image
echo "moonlightAd-container container started."
