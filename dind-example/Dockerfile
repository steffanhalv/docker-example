FROM docker:dind

#VOLUME /var/run/docker.sock:/var/run/docker.sock
WORKDIR /usr/src/app
COPY src /usr/src/app

ENV PORT 3000
EXPOSE $PORT

CMD docker build -t example/test . & sleep 10s; docker run -dp $PORT:3333 example/test