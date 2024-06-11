import React from 'react';
import FeedbackForm from './components/FeedbackForm.tsx';
import FeedbackList from './components/FeedbackList.tsx';
function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw',
      gap: '20px'
    }}>
      <h1>Feedback App</h1>

      <FeedbackForm />
      <FeedbackList />
    </div>
  );
}

export default App;
