# 🔥 PwC Interview — Question 2

Now I'm going to move into the area that will likely matter much more than your introduction.

### Interviewer:

> **"You mentioned that you're currently working on a membership-based application. Can you explain the overall architecture of the application and walk me through what happens when a user purchases a membership?"**

### Your task

Sure. For this question, I would give a **structured but not overly complicated answer**. Since you're presenting yourself as a 10+ year senior developer, focus on **request flow + responsibilities + design decisions**, not just listing technologies.

### 🎤 Interview Answer

> Sure. At a high level, our application follows a typical MERN-based architecture, where React handles the presentation layer, Node.js and Express handle the API and business logic, and MongoDB is used as the primary database.
>
> When a user wants to purchase a membership, the flow starts from the React application. The user selects a membership plan and submits the required information. React performs the initial client-side validation and then sends the request to our backend through a REST API.
>
> On the backend, the request first goes through authentication and validation middleware. We verify the user's identity and validate the request payload before passing it to the appropriate controller.
>
> The controller delegates the actual business logic to the service layer. For example, the service validates the membership rules, checks the user's existing membership status, calculates applicable rewards or benefits, and determines whether the operation is a new membership, renewal, or upgrade.
>
> Once the business validations are successful, we interact with MongoDB through Mongoose to create or update the membership and related user or reward information. We also make sure that important operations are handled consistently so that we don't end up with partially updated data.
>
> After the database operation is successful, the backend returns a standardized response to the React application. On the frontend, we update the relevant application state using Redux or Context API and update the UI accordingly, such as showing the new membership status or rewards.
>
> From a performance perspective, on the frontend I focus on avoiding unnecessary re-renders, code splitting, lazy loading, memoization where appropriate, and efficient API calls. On the backend, I focus on efficient database queries, proper MongoDB indexing, pagination where required, and avoiding unnecessary API or database calls.
>
> We also have proper error handling and logging so that failures can be traced and handled gracefully. The overall goal is to keep the frontend reusable and maintainable, while keeping the backend business logic separated from controllers and database access.

### 🧠 Architecture you should be able to draw

```text
                    User
                     |
                     ↓
                React App
                     |
          Redux / Context API
                     |
                     ↓
                REST API
                     |
                     ↓
              Node.js / Express
                     |
          ┌──────────┴──────────┐
          ↓                     ↓
   Authentication          Validation
      Middleware             Middleware
          |                     |
          └──────────┬──────────┘
                     ↓
                 Controller
                     |
                     ↓
                Service Layer
                     |
              Business Logic
                     |
                     ↓
                 Mongoose
                     |
                     ↓
                  MongoDB
                     |
                     ↓
                 Response
                     |
                     ↓
                  React
                     |
                     ↓
                Updated UI
```
