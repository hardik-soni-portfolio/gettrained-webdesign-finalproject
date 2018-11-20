# final-project-pixels
final-project-pixels created by GitHub Classroom

## What is this application about?
This is a microlearning web application that sends you a page on something you want to learn based on user's preferences. The content published will be sent from the application's database based upon the interest.

## Epics
- Master data management
- Registration
- Login
- Profile management
- Email notifications
- Database 

## User Stories

### Regitration Epic
|#User Story|Scenario|User Story|
|---|---|---|
|REG1|Unregistered User should see a link to user registration|As an Unregistered User, I should be able to navigate to the main site and view the Register button so that I can create my profile|
|REG2|Unregistered User should be able to see the registration form|As an Unregistered User, I should be able to click on the Register button and view the registration form so that I can create my profile|
|REG3|Unregistered User should be able to register and recieve confirmation email|As an Unregistered User, I should be able to fill out and submit the registration form and recieve a confirmation email|
|REG4|Unregistered User should be able to validate the account|As an Unregistered User, I should be able to verfiy my email address by clicking on the link recieved in the email|


### Master Data Management Epic
|#User Story|Scenario|User Story|
|---|---|---|
|MDM1|Admin adding a new interest to the interest List|As an admin, I should be able to add a new interest to the interest list|
|MDM2|Admin viewing the interest list|As an admin, I should be able to see the interest list|
|MDM3|Admin can enable/disable an interest|As an admin, I should be able to disable an already enabled interest or vice versa|
|MDM4|Admin adding a new link| As a admin, I should be able to add a new link and associate the link to interests|
|MDM5|Admin viewing the list of links for a specified interest|As an admin, when I select an interest I should be able to see list of links for that interest|
|MDM6|Admin can enable/disable an link|As an admin, I should be able to disable an already enabled link or vice versa|


### Login Epic
|#User Story|Scenario|User Story|
|---|---|---|
|LOG1|User can login to the application|As an user, I should be able to log in to the application so that I can use it|
|LOG2|User can logout of the application|As a user, I should be able to logout of the application|


### Profile Management Epic
|#User Story|Scenario|User Story|
|---|---|---|
|PM1|User can click on the add interest button|As a User, I should be able to click on the Add Interest button so that I can add interest I would want to subscribe|
|PM2|User can add/remove the interest|As a User, I should be able to select the interests I wish to subscribe to and click on the Save button|
|PM3|User can view the subscribed interests|As a User, I should be able to view the subscribed interests so that I can view the links for those interest|
|PM4|User can unsubscribe an interest|As a User, I should be able to unsubscribe an already selected interest so that I don't receive content for those interest|
|PM5|User can set a schedule to receive content|As a User, I should be able to set a timer of when/how frequently do I want to receive the content |
|PM6|User can view his homepage|As a User, I should be able to view the homepage with the links for the interest I am subscribed to|

## Services/APIs to be used in the application
- Email API: External email API to be identified and used in the application for sending emails
- Email Verification API: Verification API to send an email with a link to the user during registration (API to be identified)
- Google Material Design: Google material design API to be used for UI of the application
- Schedular: A schedule job to be written to find the list of users to send an email using email API

## Validation scenarios to be handled
- All of the text fields should have respective validation
  - Email address should follow the email address format specified
  - Password should be a combination of special characters, uppercase/lowercase characters, numbers and should not be less than 6 characters
- Email address used during registration should be unique, meaning email address should not be present in the User table

## Domain Model
Below is the domain model for the application.
![alt text](/assets/EduMail.jpg?raw=true "Optional Title")
![alt text](/assets/database_design.svg?raw=true "Optional Title")


