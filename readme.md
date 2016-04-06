# Beer Digest

This is a MEAN Stack App with the following features:

* If a beer has already been marked as sampled/not sampled, fetch a new random beer.
* If the user has sampled the beer, they should then be able to rate it on a scale from 1-10 and leave comments about it.
* User auth (email/password). This includes registration, login, and logout. Users cannot sign up with an email address already in use.
* Users can view all beers they have sampled (along with their ratings/comments, edit ratings and comments, or mark them as "not sampled" which will also remove ratings a comments. List should be sortable by name and rating (ascending/descending)
* Users can view all beers they have not sampled, and mark them as sampled. This will then prompt them to rate and comment. List should be sortable by name (ascending/descending)
* Users can edit their profile (name, email, password, image)
Organize your functionality with services and factories. For instance, all HTTP requests should be in a service



### Installation

1. Run an `npm install` and a `bower install`.
2. Export the required JWT_SECRET environment variable.
3. Run `gulp` to start the server.
