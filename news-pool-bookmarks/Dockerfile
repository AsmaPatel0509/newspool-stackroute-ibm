FROM java:8-jre
WORKDIR /usr/src

COPY ./target/news-pool-bookmarks-0.0.1-SNAPSHOT.jar news-pool-bookmarks-0.0.1-SNAPSHOT.jar
#EXPOSE 8001
ENTRYPOINT ["java","-jar","/usr/src/news-pool-bookmarks-0.0.1-SNAPSHOT.jar"]
