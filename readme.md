1. Markdown
2. # RESTful API Activity - Jake Romar i, Sescar
3. ## Best Practices Implementation

**1. Environment Variables:**
- Why did we put `BASE_URI` in `.env` instead of hardcoding it?
 - Answer: We placed BASE_URI in the .env file so that it is not directly written inside the source code. This is safer because important configuration details are not exposed, especially when the project is uploaded to GitHub or shared with others.


 **2. Resource Modeling:**
 - Why did we use plural nouns (e.g., `/dishes`) for our routes?
 - Answer:We used plural nouns like /dishes because the route represents a collection of items, not just one. It makes the API clearer and more consistent, since /dishes refers to all dishes

 **3. Status Codes:**
- When do we use `201 Created` vs `200 OK`?
- Answer: We use 201 Created when the request successfully adds something new to the system, like creating a new record while we use 200 OK when the request is successful but nothing new is being created, such as when we are just getting data, updating an existing one, or deleting a record.

 - Why is it important to return `404` instead of just an empty array or a generic error?
 - Answer: It’s important to return 404 Not Found because it clearly tells the user or developer that the item they are looking for doesn’t exist. If we only return an empty array, it can be confusing since it might look like there is just no data, not that the specific item is missing.

 ![alt text](image.png)