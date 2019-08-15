#!/bin/bash

. ./deployment/push-image.sh
if [  $? -ne 0 ];then
echo "failed to push image to repository"
exit 1
fi

. ./deployment/create-deployment.sh
if [  $? -ne 0 ];then
echo "failed to deploy"
exit 1
fi



echo "Sucessfully pushed and deployed"
echo "Image tag: $imagetag"
echo "Deployment name: $deployment_name"