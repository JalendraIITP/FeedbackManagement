import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';

interface Feedback {
    id: number;
    name: string;
    feedback: string;
    CreatedAt: string;
}

const styles = {
    tableContainer: {
        height: '57vh',
        overflowY: 'auto',
        width: '180vh',
        minWidth: '400px',
        border: '1px solid black',
        borderRadius: '3px'
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
    },
    th: {
        backgroundColor: 'gray',
        position: 'sticky',
        top: 0,
        border: '1px solid #ddd',
        padding: '8px',
        textAlign: 'left',
    },
    td: {
        border: '1px solid #ddd',
        padding: '8px',
        textAlign: 'left',
        wordBreak: 'break-word',
    }
};

const SalesTable = () => {
    const [feedbackList, setFeedbackList] = useState<Feedback[]>([]);

    useEffect(() => {
        const fetchFeedback = async () => {
            try {
                const response = await axios.get('http://localhost:3001/items');
                setFeedbackList(response.data);
            } catch (error) {
                console.error('Error fetching feedback:', error);
            }
        };
        fetchFeedback();
    }, [feedbackList]);

    return (
        <div>
            <style>
                {`
                    .table-container::-webkit-scrollbar {
                        width: 2px;
                    }
                    .table-container::-webkit-scrollbar-thumb {
                        background-color: #888;
                        border-radius: 10px;
                    }
                    .table-container::-webkit-scrollbar-thumb:hover {
                        background-color: #555;
                    }
                `}
            </style>
            <div style={styles.tableContainer} className="table-container">
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={{ ...styles.th, width: '20%' }}>Name</th>
                            <th style={{ ...styles.th, width: '65%' }}>Feedback</th>
                            <th style={{ ...styles.th, width: '15%' }}>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {feedbackList.slice().reverse().map((feedback) => (
                            <tr key={feedback.id}>
                                <td style={{ ...styles.td, width: '20%' }}>{feedback.name}</td>
                                <td style={{ ...styles.td, width: '65%' }}>{feedback.feedback}</td>
                                <td style={{ ...styles.td, width: '15%' }}>{formatDistanceToNow(new Date(feedback.CreatedAt), { addSuffix: true })}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SalesTable;
