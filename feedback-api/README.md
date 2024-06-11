<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


# NestJS API

This project is a simple REST API built with NestJS, providing basic CRUD operations for managing items. It includes service-oriented architecture, CORS configuration, and rate limiting.

## API Overview

The API created can be summarized with the following points:

1. **Service-Oriented Architecture**: The application uses a service-oriented architecture to manage the business logic. The `ItemsService` class encapsulates the logic for managing items.

2. **CRUD Operations**:
   - **Create**: The `create(item: Item)` method allows adding new items.
   - **Read**: The `findAll()` and `findOne(id: number)` methods allow retrieving all items or a specific item by its ID.

3. **CORS Configuration**: The application is configured to allow cross-origin requests from any origin, supporting common HTTP methods (`GET`, `POST`, `PUT`, `DELETE`) and headers (`Content-Type`, `Authorization`).

4. **Rate Limiting**: Though not fully implemented in the provided code, the use of the `express-rate-limit` package indicates an intention to protect the API from abuse by limiting the number of requests a client can make within a certain time frame.
