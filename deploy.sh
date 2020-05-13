#!/bin/sh

set -e

(
    # Build site
    cd ../www/
    yarn build
)
(
    # Copy site
    rm -rf ./docs/
    cp -r ../www/build/ ./docs/
    cp ./docs/index.html ./docs/404.html
    git checkout ./docs/CNAME
)

echo
echo "Done building, opening editor to add a commit message"
echo
sleep 1

git add .
git commit

echo
echo "Great, pushing now"
echo 

git push github master