#!/bin/bash

if [[ $TRAVIS_BRANCH == 'master' ]]; then
    echo "Starting deploy..."
    scp -r dist/* ubuntu@jacaran.tech:/home/ubuntu/www/jacarantech
else
    echo "This isn't a commit to master branch, thus travis will not run deploy."
fi
