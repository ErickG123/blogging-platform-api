# Blogging Platform API
Roadmap.sh Website Backend Project - Blogging Platform API

## Running the Project
```bash
# Install dependencies  
npm install  

# Create the database and apply migrations  
npx prisma migrate dev  

# Start the project  
npm run dev
```

## .env
Create a .env file with the necessary configurations.  

## Requirements
You should create a RESTful API for a personal blogging platform. The API should allow users to perform the following operations:
- Create a new blog post
- Update an existing blog post
- Delete an existing blog post
- Get a single blog post
- Get all blog posts
- Filter blog posts by a search term

Given below are the details for each API operation.

## Create Blog Post
Create a new blog post using the POST method
```json
POST /posts
{
  "title": "My First Blog Post",
  "content": "This is the content of my first blog post.",
  "category": "d83f082e-7fb0-4dfd-bb43-8404c3549bfd",
  "tags": [
    "c8a2ead0-473c-4be4-b2f9-0b3e8faf7ee6", 
    "f652d0f2-43c5-45cf-a09c-84a38248d5df"
  ]
}
```
The endpoint should validate the request body and return a 201 Created status code with the newly created blog post i.e.
```json
{
  "id": "56905861-f73b-4954-827f-f41a2792f3ff",
  "title": "Teste 3",
  "content": "Casa 3",
  "categoryId": "d83f082e-7fb0-4dfd-bb43-8404c3549bfd",
  "createdAt": "2025-04-04T17:43:14.148Z",
  "updatedAt": "2025-04-04T17:43:14.148Z",
  "category": {
    "id": "d83f082e-7fb0-4dfd-bb43-8404c3549bfd",
    "name": "Tecnologia"
  },
  "tags": [
    {
      "id": "c8a2ead0-473c-4be4-b2f9-0b3e8faf7ee6",
      "name": "CSS"
    },
    {
      "id": "f652d0f2-43c5-45cf-a09c-84a38248d5df",
      "name": "Node.js"
    }
  ]
}
```
or a 400 Bad Request status code with error messages in case of validation errors.

## Update Blog Post
Update an existing blog post using the PUT method

```json
PUT /posts/28222cfa-fa1f-4f7b-aba7-1620336848f8
{
  "title": "Roadmap.sh Backend",
  "content": "Description",
  "categoryId": "d83f082e-7fb0-4dfd-bb43-8404c3549bfd",
  "tagIds": [
    "c8a2ead0-473c-4be4-b2f9-0b3e8faf7ee6",
    "f652d0f2-43c5-45cf-a09c-84a38248d5df"
  ]
}
```
The endpoint should validate the request body and return a 200 OK status code with the updated blog post i.e.
```json
{
  "id": "56905861-f73b-4954-827f-f41a2792f3ff",
  "title": "Roadmap.sh",
  "content": "Description Updateded",
  "categoryId": "d83f082e-7fb0-4dfd-bb43-8404c3549bfd",
  "createdAt": "2025-04-04T17:43:14.148Z",
  "updatedAt": "2025-04-04T17:45:11.983Z",
  "category": {
    "id": "d83f082e-7fb0-4dfd-bb43-8404c3549bfd",
    "name": "Tecnologia"
  },
  "tags": [
    {
      "id": "c8a2ead0-473c-4be4-b2f9-0b3e8faf7ee6",
      "name": "CSS"
    },
    {
      "id": "f652d0f2-43c5-45cf-a09c-84a38248d5df",
      "name": "Node.js"
    }
  ]
}
```
or a 400 Bad Request status code with error messages in case of validation errors. It should return a 404 Not Found status code if the blog post was not found.

## Delete Blog Post
Delete an existing blog post using the DELETE method

```json
DELETE /posts/28222cfa-fa1f-4f7b-aba7-1620336848f8
```
The endpoint should return a 204 No Content status code if the blog post was successfully deleted or a 404 Not Found status code if the blog post was not found.

## Get Blog Post
Get a single blog post using the GET method

```json
GET /posts/28222cfa-fa1f-4f7b-aba7-1620336848f8
```
The endpoint should return a 200 OK status code with the blog post i.e.
```json
{
  "id": "28222cfa-fa1f-4f7b-aba7-1620336848f8",
  "title": "Teste 1",
  "content": "Descrição 2",
  "categoryId": "d83f082e-7fb0-4dfd-bb43-8404c3549bfd",
  "createdAt": "2025-04-04T16:38:08.848Z",
  "updatedAt": "2025-04-04T16:38:08.848Z",
  "category": {
    "id": "d83f082e-7fb0-4dfd-bb43-8404c3549bfd",
    "name": "Tecnologia"
  },
  "tags": [
    {
      "id": "c8a2ead0-473c-4be4-b2f9-0b3e8faf7ee6",
      "name": "CSS"
    },
    {
      "id": "f652d0f2-43c5-45cf-a09c-84a38248d5df",
      "name": "Node.js"
    }
  ]
}
```
or a 404 Not Found status code if the blog post was not found.

## Get All Blog Posts
Get all blog posts using the GET method

```json
GET /posts
```
The endpoint should return a 200 OK status code with an array of blog posts i.e.
```json
{
  "posts": [
    {
      "id": "28222cfa-fa1f-4f7b-aba7-1620336848f8",
      "title": "Teste 1",
      "content": "Descrição 2",
      "categoryId": "d83f082e-7fb0-4dfd-bb43-8404c3549bfd",
      "createdAt": "2025-04-04T16:38:08.848Z",
      "updatedAt": "2025-04-04T16:38:08.848Z",
      "category": {
        "id": "d83f082e-7fb0-4dfd-bb43-8404c3549bfd",
        "name": "Tecnologia"
      },
      "tags": [
        {
          "id": "c8a2ead0-473c-4be4-b2f9-0b3e8faf7ee6",
          "name": "CSS"
        },
        {
          "id": "f652d0f2-43c5-45cf-a09c-84a38248d5df",
          "name": "Node.js"
        }
      ]
    },
    {
      "id": "da543a99-3038-42ab-b443-24cedd6fefce",
      "title": "Teste 2",
      "content": "Casa 2",
      "categoryId": "d83f082e-7fb0-4dfd-bb43-8404c3549bfd",
      "createdAt": "2025-04-04T16:38:14.533Z",
      "updatedAt": "2025-04-04T16:38:14.533Z",
      "category": {
        "id": "d83f082e-7fb0-4dfd-bb43-8404c3549bfd",
        "name": "Tecnologia"
      },
      "tags": [
        {
          "id": "c8a2ead0-473c-4be4-b2f9-0b3e8faf7ee6",
          "name": "CSS"
        },
        {
          "id": "f652d0f2-43c5-45cf-a09c-84a38248d5df",
          "name": "Node.js"
        }
      ]
    }
  ]
}
```

While retrieving posts, user can also filter posts by a search term. You should do a wildcard search on the title, content or category fields of the blog posts. For example:
```json
GET /posts?term=tech
```

## Create Category
Request:
```json
POST /categories
{
  "name": "Frontend"
}
```
Response:
```json
{
  "id": "fab435de-dcbb-43c1-832e-da80efeaed3f",
  "name": "Frontend"
}
```

## Create Tag
Request:
```json
{
  "name": "Node.js"
}
```
Response:
```json
{
  "id": "1b7afced-a17a-40ab-81a7-3b26de15451f",
  "name": "Node.js"
}
```
Challenge Link: https://roadmap.sh/projects/blogging-platform-api
