# README

HabitTracker is a tool to track your personal goals and habits. Once you create habits, you can see them all in a list, to remind you of what you want to do. All kinds of habits can be tracked including health and fitness habits, educational habits, and relationship habits.

You can click to log that you have completed your habit for the day. If you click on the habit, you will see all the details for that habit plus your current streak and longest streak to date.

# Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Installing
Fork this repo and clone it to your computer. Run
```
bundle install
```
and then migrate the database with
```
rake db:migrate
```
There is a seed file that will give you the list of categories, run
```
rake db:seed
```

# Buit with
Rails API
PostgresSQL database
Knock and JWT for authentication
React
Redux

# Contributing
Please read [CONTRIBUTING.md](./contributing.md) for details on our code of conduct, and the process for submitting pull requests to us.

# License
This project is licensed under the MIT License - see the [LICENSE.md](./license.md) file for details
