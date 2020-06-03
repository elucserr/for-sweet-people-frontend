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

**Homepage** - As a user I want to be able to access to a homepage where appears an introduction of the App 

**Sign up** - As a user I want to sign up on the App so that I can access to all the functionalities

**Login** - As a user I want to be able to log in on the App so that I can access to my account

**User profile** - As a user I want to see my own page with my personal details

**Edit User profile** - As a user I want to be able to edit my profile

**Options list** - As a user I want to see a page with the 4 options this App allows me to do

**Record Creation** - As a user I want to create records of glucose levels, administration of medications, daily activity and monitoring of diet

**Record Edition** - As a user I want to edit my records of glucose levels, administration of medications, daily activity and monitoring of diet

**Record Deletion** - As a user I want to delete my records of glucose levels, administration of medications, daily activity and monitoring of diet

**Logout** - As a user I want to be able to log out from the App


## Backlog

Diet record: Able to show food records with images using an external API

Medication record: Able to show medication records with images or options using an external API

Have effects on buttons and general views


## ViewsFrontEnd:

### Auth

| Method | Path      | description    | Body                            |
| :----: | --------- | -------------- | ------------------------------- |
|  POST  | `/signup` | signup a user  | `{ username, password }` |
|  POST  | `/login`  | login a user   | `{ username, password }`        |
|  POST   | `/logout` | logout session |                                 |

## More Views

| View (Component) | Path                  | description             |
| :--------------- | --------------------- | --------------------    |
| Home             | `/`                   | home                    |
| Options          | `/options`            | options                 |
| User             | `/users/:id`          | show my profile         |
| Blood            | `/blood`              | list all records        |
| Activity         | `/activity`           | list all records        |
| Medicine         | `/medicine`           | list all records        |
| Diet             | `/diet`               | list all records        |
| 404              | `/404`                | show 404 error          |
 

## Links

### Trello

[Link to Trello](https://trello.com/b/WxBh6cxW)

### Git

[Repository Link](https://github.com/elucserr/for-sweet-people-frontend)

[Linked to Backend](https://github.com/elucserr/for-sweet-people-backend)

### Deploy

[Deploy Link](https://forsweetpeople.netlify.app/)

### Slides

[Slides Link](https://slides.com/elenalucas/forsweetpeople/fullscreen)
