Cooking Challenge
=================
## Components
* Symfony 3.2
* Angular 1.6
* SCSS
* TypeScript

## Requirements
* php >= 5.4
* node 7.2.0
* bower
* gulp

## Project Hierarchy
* ./app (Symfony configs + twig template files)
* ./front-end (Angular + static files)
* ./src (Symfony controllers + entities)
* ./web (web root folder)

## Instructions
* `cd <app_root_path>`
* run `sudo composer install` to install the required packages  
* create database user `cooking_challenge` pass `cook_chal` with all privileges  
**Note:**
if you want to change database name, username, password, host, port
open `config/parameters.yml`
* run `php bin/console doctrine:database:create` to create DataBase  
* run `php bin/console doctrine:query:sql 'ALTER DATABASE symfony_movie_theater CHARACTER SET utf8 COLLATE utf8_general_ci;'`  
* run `php bin/console doctrine:migrations:migrate` to run database migrations 
* run `npm install` to install npm components
* run `bower install` to install bower components
* run `gulp development` to build required front-end files
* run `php bin/console server:run` to start server  
* go to `localhost:8000` and enjoy  
**Note:**
if you faced any problem after running server 
run `sudo chmod -R 777 ./var/cache/` to change permission for cache folder 
