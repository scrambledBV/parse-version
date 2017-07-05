#! /usr/bin/env bash

# This file is sourced by most scripts.
# It sets some shell options and  variables commonly used by other scripts.

set -e # If anything fails - exit immediately.
set -u # Treat reference to undefined variables as errors
set -o pipefail # Treat failure of any part of a pipeline as a command failure
set -vx # Print script lines as well as their substitutions

# Extract project name from package.json
export project=$(jq --raw-output .name package.json)
export version=$(jq --raw-output .version package.json)

# Conditionally generate Systemd unit files name
if [[ -f "systemd.service.template" ]]
then
  export service_file="monitoring.${project}.service"
fi

# Generate Systemd timer file name
if [[ -f "systemd.timer.template" ]]
then
  export timer_file="monitoring.${project}.timer"
fi

# Extract NPM token from .npmrc file in users home.
# This will be passed to docker build context. See Dockerfile.
export npm_token=$(
  cat $HOME/.npmrc \
    | grep \
      --only-matching \
      --perl-regexp \
      '_authToken=\K.+'
)
