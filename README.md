# "Equity Community app" - Frontend application with REACT JS

# DOCUMENTATION.

### NON-TECHNICAL DOCUMENTATION (How to use the application).

The application, when navigated to, presents a login screen where the user is supposed to provide a username and a password to be authenticated. There are three types of users for this application.

1. **A user** - This is a wings to fly/ Elp scholar. 
2. **A moderator** - This is an Equity employee tasked with posting updates and communication from Equity. They have more access than the user.
3. **Admin** - Deals with maintenance of the app. They have access to users only and have the permissions to upgrade a user to a moderator.


**Typically, everyone signing up on the platform is only given a user role first. Additional roles, such as a moderator priviledges from a user, are granted by the admin. This is for security purposes, for more vetting on who becomes a moderator because they basically will be incharge of all the communication to other users.**

#### PERMISSIONS.
The app follows a Role based access control (RBAC).  What each user can do on any part of the application is limited to the roles they have as shown below.

The application is divided into five major parts as outlined in the proposal. These parts are accessible via the sidebar of the application on the left side of the app.:
   
   1. **The Feed** - This is where the important information from Equity is posted. 
      
      For a regular user/scholar:
        1. They can only view the announcements from equity.
        2. They can comment on the announcements.
        3. They can like the announcements  to engage with it.
      
      For a moderator:
        1. They can do all that the user does.
        2. They additionally have access to post on the feed page. The intuition is that the moderators will be equity employees who are in charge of 
        disseminating information to the scholars for any communication i.e. events, scholarships, internships, or any other information.
  
  2. **The Search** - This allows all users of the app to search for any communication, event, or users on the platform.
  
  3. **Forum** - unlike the feed page which is limited to only moderators, the forum is accessible to regular users to post their concerns and queries. 
                  Scholars can post    their concerns and other users can engage with their posts by liking or proposing a solution to them
 
  4. **Events** - We created a separate page for the events where all events posted by the moderators appear. These events show up in the feed as well so 
                  users/scholars won't miss them. Scholars can join an event which will send a reminder to their email
    
  5. **Chapters** - This shows the current user which university chapters are available. Scholars can join a chapter, and any communication posted to the chapter
  
#### LIMITATIONS.
Due to time constraints we had to scope the functionalities that we had to implement to the **Feed** and **Forum** because we felt that based on the solution we proposed, those were the components that provided most of the value. Consequently, the search, Chapters and events functionalities are not 100% done.

