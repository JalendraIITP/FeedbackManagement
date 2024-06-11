import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm = () => {
    const [name, setName] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/items', {
                name: name,
                feedback: feedback,
                CreatedAt: new Date().toISOString(),
            });
            if (response.status === 201) {
                alert('Feedback submitted successfully!');
                setName('');
                setFeedback('');
            } else {
                throw new Error('Failed to submit feedback');
            }
        } catch (error) {
            console.error('Error submitting feedback:', error);
            alert('Failed to submit feedback. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '10px',
            width: '500px',
            margin: '0 auto',
            border: 'none',
            borderRadius: '3px',
            backgroundColor: 'white',
            boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2), 0 5px 25px 0 rgba(0, 0, 0, 0.19)',
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
            }}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
            }}>
                <label htmlFor="feedback">Feedback:</label>
                <textarea id="feedback" value={feedback} onChange={(e) => setFeedback(e.target.value)} />
            </div>
            <button type="submit" style={{
                marginTop: '5px',
            }}>Submit</button>
        </form>
    );
};

export default FeedbackForm;
