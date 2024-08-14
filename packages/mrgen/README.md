# Monorepo Generator

Helps generate boilerplate code for a monorepo.

This package assumes a number of things regarding your monorepo structure as
well as library choices.

1. Your monorepo contains a shared package that shares code betweens a frontend
   and a backend.
2. Your monorepo uses Zod for type-safety.
3. Your monorepo uses Express for the backend.
4. Your monorepo uses React Query for the frontend.
