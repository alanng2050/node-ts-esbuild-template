#!/bin/bash

source_dir="$( dirname "${BASH_SOURCE[0]}" )/../@alan-ng/ts-esbuild/source/"
if [[ "$1" == "" ]]
then
  read -p 'Enter your project name: ' project_name
else
  project_name=$1
fi

echo "Creating the project..."
cp -r $source_dir $project_name
cp -r $source_dir"../README.md" $project_name

cd $project_name
git init
mv gitignore .gitignore

echo "Running npm install..."
npm install
git init


echo "Done."
echo "To run your project: cd $project_name && npm run dev"
