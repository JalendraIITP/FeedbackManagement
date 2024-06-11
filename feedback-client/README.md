# Feedback App

This project is a simple React application designed to collect and display user feedback. The main component, `App`, integrates a feedback form and a list of submitted feedback, arranged in a visually appealing, centered layout.

## Overview of `App` Component

The `App` component serves as the main entry point for the React application. It combines two key components: `FeedbackForm` and `FeedbackList`, arranging them in a vertically centered layout with some spacing.

### Key Features

1. **Centralized Layout**: The component uses inline CSS styles to ensure the layout is centered both horizontally and vertically. The style properties used include:
   - `display: 'flex'`: Enables flexbox layout.
   - `flexDirection: 'column'`: Stacks child elements vertically.
   - `justifyContent: 'center'`: Centers child elements vertically.
   - `alignItems: 'center'`: Centers child elements horizontally.
   - `width: '100vw'`: Sets the width of the container to the full viewport width.
   - `gap: '20px'`: Adds spacing between child elements.

2. **Title**: Displays a heading (`<h1>`) with the text "Feedback App" to clearly indicate the purpose of the application.

3. **FeedbackForm Component**: This component is expected to handle the collection of user feedback, likely containing form elements for users to submit their feedback.

4. **FeedbackList Component**: This component is expected to display a list of feedback items submitted by users.
