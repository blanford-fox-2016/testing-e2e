# testing-e2e
# Tamvan Blog Engine build with TDD

Simple example of TDD implementation for building a simple blog engine.

This simple blog engine will only have two models, user and article. It's built with **Node.JS, Express (framework), MongoDB (database), mongoose (ODM), and passport (authentication), and also mocha and chai for testing**

## File Structure

```
```

## package.json

```
```

## API Routes

The default host and port for development is `http://localhost:3000/`

| Route | Method | Action |
|-------|--------|--------|
| /api/article/ | GET | Get all the article lists |
| /api/article/:id | GET | Get the spesific article detail based on id|
| /api/article/ | POST | Post a new article |
| /api/article/:id | PUT | Edit a single article based on id |
| /api/article/:id | DELETE | Delete single article based on id |
