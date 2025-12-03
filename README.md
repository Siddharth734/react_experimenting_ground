# React Practice App

A simple React application for learning and experimenting with different React concepts and features.

## Features

### 1. Todo List
- Add new todos with the input field
- Click on todos to mark them as complete/incomplete
- Press any key to automatically focus the input field
- Press Enter to quickly add a todo

### 2. Color Changing Card
- Interactive card that changes color on click
- Automatically changes color every 10 seconds
- Wrapped in an Error Boundary for error handling

### 3. Stopwatch
- Simple stopwatch component
- Start, stop, and reset functionality

## What I'm Learning

- **useState**: Managing component state (todos, input values, colors)
- **useEffect**: Side effects like event listeners and intervals
- **useRef**: DOM manipulation and focusing elements
- **Error Boundaries**: Handling component errors gracefully
- **Component composition**: Breaking UI into reusable components
- **Event handling**: onClick, onChange, onKeyDown events
- **Conditional rendering**: Dynamic className based on state

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and start experimenting!

## Project Structure

```
src/
├── App.jsx                 # Main app component
├── App.css                 # Styles
├── components/
│   ├── errorBoundary.jsx   # Error handling component
│   └── Stopwatch.jsx       # Stopwatch component
```

## Notes

This is a practice project where I add new sections and features as I learn new React concepts. Feel free to explore and modify!