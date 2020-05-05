# Project Name

## Instructions how to start

create `.env` file like the example `.env.sample`

start with `npm run start-dev`

**http://localhost:5000**

## Description

API destined for diabetic people with the intention of creating a daily record of glucose levels, administration of medications, daily activity and monitoring of diet.

## Motivation

Personal motivation, since I have diabetes and I know how difficult it is to keep good track of the different data. I would be very excited to use my own application.

## User Stories

**404** - As a user I want to see a 404 page when I access to a page that does not exist

**Homepage** - As a user I want to be able to access to a homepage where appears an introduction of the App 

**Sign up** - As a user I want to sign up on the App so that I can access to all the functionalities

**Login** - As a user I want to be able to log in on the App so that I can access to my account

**Logout** - As a user I want to be able to log out from the App

**Options list** - As a user I want to see a page with the 4 options this App allows me to do

**Record Creation** - As a user I want to create records of glucose levels, administration of medications, daily activity and monitoring of diet

**Record Edition** - As a user I want to edit my records of glucose levels, administration of medications, daily activity and monitoring of diet

**Record Deletion** - As a user I want to delete my records of glucose levels, administration of medications, daily activity and monitoring of diet


## Backlog

List of other features outside of the MVPs scope

My profile: Option to see my own profile, also to edit my own profile

Diet record: Able to show food records with images

Medication record: Able to show medication records with images

Friends: Have a list of friends with their profiles

## ROUTES Backend:

### Endpoints

| Method | Path         | description     | Body |
| :----: | ------------ | --------------- | ---- |
|  GET   | `/protected` | protected route |      |

### Auth

| Method | Path      | description    | Body                            |
| :----: | --------- | -------------- | ------------------------------- |
|  GET   | `/whoami` | who am i       |                                 |
|  POST  | `/signup` | signup a user  | `{ username, password, email }` |
|  POST  | `/login`  | login a user   | `{ username, password }`        |
|  GET   | `/logout` | logout session |                                 |

## Views

| View (Component) | Path                  | description             |
| :--------------- | --------------------- | --------------------    |
| Home             | `/`                   | home                    |
| Login            | `/login`              | login page              |
| Protected        | `/protected`          | protected view          |
| Options          | `/options`            | options                 |
| User             | `/users/:id`          | show my profile         |
| User Edit        | `/users/:id/edit`     | show form edit profile  |
| Blood            | `/blood`              | list all records        |
| Blood            | `/blood/add`          | show form create record |
| Blood            | `/blood/:id`          | get a record            |
| Blood            | `/blood/:id/update`   | update a record         |
| Activity         | `/activity`           | list all records        |
| Activity         | `/activity/add`       | show form create record |
| Activity         | `/activity/:id`       | get a record            |
| Activity         | `/activity/:id/update`| update a record         |
| Medicine         | `/medicine`           | list all records        |
| Medicine         | `/medicine/add`       | show form create record |
| Medicine         | `/medicine/:id`       | get a record            |
| Medicine         | `/medicine/:id/update`| update a record         |
| Diet             | `/diet`               | list all records        |
| Diet             | `/diet/add`           | show form create record |
| Diet             | `/diet/:id`           | get a record            |
| Diet             | `/diet/:id/update`    | update a record         |

 

## Links

### Trello

Link to Trello

### Git

The url to your repository and to your deployed project

[Repository Link](https://github.com/elucserr/for-sweet-people-frontend)

[Deploy Link](http://heroku.com/)

### Slides

[Slides Link](https://slides.com/elenalucas/deck/fullscreen)
