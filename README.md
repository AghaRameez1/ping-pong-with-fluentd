# Description

Write a couple of shell scripts that will ping pong back and forth with each other and run them as containers.

## Run instructions

run docker-compose up -d

CONTAINER ID IMAGE COMMAND CREATED STATUS PORTS NAMES
fc211db19ea7 healthcheck1 "docker-entrypoint.s…" 17 seconds ago Up 16 seconds (healthy) 0.0.0.0:8000->8000/ tcp, :::8000->8000/tcp kind_franklin
46c589d38873 healthcheck "docker-entrypoint.s…" 28 seconds ago Up 27 seconds (healthy) 0.0.0.0:3000->3000/ tcp, :::3000->3000/tcp optimistic_tu
