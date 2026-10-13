---
status: pending
title: Build a Todo App with Local Storage
---

1. **Set up the app shell** (`src/routes/__root.tsx`)
   - Create the root layout with a header and main content area
   - Expected outcome: basic page structure with title "Todo App"

2. **Create the todo page route** (`src/routes/index.tsx`)
   - Build the main todo list view
   - Expected outcome: a page that will display the todo list and input form

3. **Create a custom hook for todo management** (`src/hooks/useTodos.ts`)
   - Implement state management for todos (add, delete, toggle complete)
   - Implement localStorage persistence (save/load todos)
   - Expected outcome: hook provides todos array and functions to add, delete, and toggle completion

4. **Build the todo input form component** (`src/components/TodoInput.tsx`)
   - Create a text input and "Add" button to create new todos
   - Expected outcome: user can type and submit new tasks

5. **Build the todo list component** (`src/components/TodoList.tsx`)
   - Display all todos with checkboxes to mark complete/incomplete
   - Show delete button for each todo
   - Strike-through completed tasks
   - Expected outcome: interactive list showing all tasks with complete status and delete functionality

6. **Add styling** (`src/styles/global.css`)
   - Use Tailwind CSS to style the app (clean, modern look)
   - Expected outcome: polished UI with colors, spacing, and hover states

7. **Test the full flow**
   - Add a todo, mark it complete, delete it
   - Refresh the page and confirm todos persist
   - Expected outcome: all features working, data survives a page reload
