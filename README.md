## NewsApp - A Case Study

## Problem Statement
Build a system to search for news article, open the article, add article to favourite/bookmark articles to user.

## Requirements
The application needs to fetch news article data by registering with the following API link and get API Key required to call the API.
https://newsapi.org/

	-Example API:
	https://newsapi.org/v2/everything?q=bitcoin&from=2019-01-06&sortBy=publishedAt&apiKey=b170738ea8d145159da715566679a48fea

	- A frontend where the user can register/login to the application. The login page should have a link for registration using which the user
	should be able to register. On Successful registration the user should be taken to the login page.
	
	- Proper navigation links for all the pages should be
	available within pages

	- Error handling should be implemented across pages.
	Appropriate messages should be displayed for the same. Success
	messages should be displayed for the User Registration.

	- Logout feature should be implemented.

**User can add an article to favourite/bookamark list and should be able to view the favourite/bookmark list.**

## Modules
### UI (User interface) - should be able to
1. List common News articles with **pagination**
2. View or open an article from the list
3. Search for a news article
4. Add an article into favourite/bookmark list
5. View favourite/bookmark articles with **pagination**
6. View bookmarked articles **pagination**
7. View news by filters (country,category,date) with **pagination**
8. View News by sources **pagination**
9. UI should be appealing and user friendly.

### AuthenticationService - should be able to manage user accounts
### favoriteService - should be able to store all the favourite/bookmarks articles for a specific user
## Tech Stack
- Spring Boot
- MySQL, MongoDB
- Angular
- Docker, Docker Compose

## Flow of Modules
### Building frontend
1. Register/Login.
2. Show list of news articles - populating from external API.
3. Show news details - populating from external API.
4. Build a view to show favorite/bookmarks news articles.
5. Add Pagination for favorite/bookmarks news articles.
6. Search for a news article by any keyword.
7. Display News by Sources
	for example - TechCrunch,BBC news etc.
8. Create a view for Display news by sources.
9. Add Pagintaion for News by Sources.
10. Read Older News 
	having filter - categorywise,countrywise and Datewise.
8. Create a view for Display Older News.
9. Add Pagintaion for Older News.


- Using Services to populate these data in views
- Stitching these views using Routes and Guards
- Unit Tests should be created for the Components and Services
- E2E scripts using protractor should be created for the functional flows
- Implement CI - continuous Integration (use,.gitlab-ci.yml)
- Dockerize the frontend (create dockerfile,docker-compose.yml and get it executed through docker compose)

### Note: FrontEnd and all the backend services should be dockerized
and run through docker-compose

### Building the UserService
- Creating a server in Spring Boot to facilitate user registration and login with MySQL as backend. Upon login, JWT token has to be generated. 	It has to be used in the Filters set in other services.- Writing swagger documentation.
- Unit Testing of the entire code which involves the positive and negative scenarios.
- Implement continuous Integration CI ( use .gitlab-ci.yml).
- Dockerize the UserService (create dockerfile, docker-compose.yml and get it executed through docker compose).

### Building the favorite Service
- Building a server in Spring Boot to facilitate CRUD operation over favorite news articles stored in MongoDB. JWT Filter should be
  applied for all the API calls of the favorite service. JWT token should be used to authorize the user access to all the resources.
- Writing Swagger Documentation.
- Write Unit Test Cases and get it executed.
- Implement CI - continuous Integration ( use .gitlab-ci.yml).
- Dockerize the favorite Service(create dockerfile and update the docker-compose.yml).

### Demonstrate the entire application
1. Make sure all the functionalities are implemented.
2. Make sure both the UI (Component and Services) and server side (For all layers) codes are unit tested.
3. All the Services are up and running using docker (Dockercompose should be used for running them)
4. E2E tests should be executed and shown.


