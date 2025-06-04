# Clean Architecture Documentation

## Overview

This project follows Clean Architecture principles to create a maintainable, testable, and scalable application structure.

## Architecture Layers

### 1. Domain Layer (`src/domain/`)
The innermost layer containing the core business logic and entities.

**Responsibilities:**
- Business entities
- Repository interfaces (contracts)
- Domain services (business rules)
- Value objects

**Key Files:**
- `entities/` - Business entities with TypeORM decorators
- `repositories/` - Repository interfaces that define data access contracts

### 2. Application Layer (`src/application/`)
Contains application-specific business rules and use cases.

**Responsibilities:**
- Use cases (application services)
- DTOs for data transfer
- Application interfaces
- Orchestration of domain objects

**Key Files:**
- `use-cases/` - Application services that orchestrate domain objects
- `dtos/` - Data transfer objects with validation decorators

### 3. Infrastructure Layer (`src/infrastructure/`)
The outermost layer dealing with external concerns.

**Responsibilities:**
- Controllers (HTTP endpoints)
- Repository implementations
- Database configurations
- External service integrations
- Framework-specific code

**Key Files:**
- `controllers/` - HTTP controllers handling requests/responses
- `persistence/` - Repository implementations using TypeORM
- `modules/` - NestJS modules for dependency injection

### 4. Shared Layer (`src/shared/`)
Common utilities, interfaces, and constants used across layers.

**Responsibilities:**
- Common interfaces
- Application constants
- Utility functions
- Types

## Dependencies Rule

The dependency rule states that source code dependencies can only point inwards:

```
Infrastructure → Application → Domain
       ↓             ↓          ↓
   External    Use Cases   Business
   Concerns                  Logic
```

## Benefits

1. **Testability**: Each layer can be tested independently
2. **Maintainability**: Changes in outer layers don't affect inner layers
3. **Flexibility**: Easy to swap implementations (e.g., database providers)
4. **Separation of Concerns**: Each layer has a single responsibility
5. **Framework Independence**: Business logic is not tied to any framework

## Project Structure

```
src/
├── domain/
│   ├── entities/
│   │   └── user.entity.ts
│   ├── repositories/
│   │   └── user.repository.interface.ts
│   └── index.ts
├── application/
│   ├── dtos/
│   │   └── user.dto.ts
│   ├── use-cases/
│   │   └── user.use-cases.ts
│   └── index.ts
├── infrastructure/
│   ├── controllers/
│   │   └── user.controller.ts
│   ├── modules/
│   │   └── user.module.ts
│   ├── persistence/
│   │   └── user.repository.ts
│   └── index.ts
├── shared/
│   ├── constants/
│   │   └── app.constants.ts
│   ├── interfaces/
│   │   └── base.interface.ts
│   └── index.ts
├── app.module.ts
└── main.ts
```

## Adding New Features

When adding new features, follow this pattern:

1. **Domain**: Create entities and repository interfaces
2. **Application**: Create DTOs and use cases
3. **Infrastructure**: Create controllers, repository implementations, and modules
4. **Wire everything**: Update modules for dependency injection

## Example: Adding a Product Feature

1. Create `src/domain/entities/product.entity.ts`
2. Create `src/domain/repositories/product.repository.interface.ts`
3. Create `src/application/dtos/product.dto.ts`
4. Create `src/application/use-cases/product.use-cases.ts`
5. Create `src/infrastructure/persistence/product.repository.ts`
6. Create `src/infrastructure/controllers/product.controller.ts`
7. Create `src/infrastructure/modules/product.module.ts`
8. Update `src/app.module.ts` to import the new module
