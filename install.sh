#!/bin/bash

if [[ "$1" == "" ]]
then
  read -p 'Enter your project name: ' PROJECT_NAME
else
  PROJECT_NAME=$1
fi

echo "Creating the project..."

mkdir $PROJECT_NAME
cd $PROJECT_NAME | cp -r ./source/ $PROJECT_NAME


echo "Npm install..."
cd $PROJECT_NAME && npm install


echo "Done."
echo "To run your project: cd $PROJECT_NAME && npm run dev"
