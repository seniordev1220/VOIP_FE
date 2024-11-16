import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, Typography } from '@mui/material';

const MessagingForm = () => {
    const [type, setType] = useState('SMS');
    const [to, setTo] = useState('');
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState(null);

    const handleSend = async () => {
        try {
            const res = await fetch('/api/messaging/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ to, message, type })
            });
            const data = await res.json();
            setResponse(data);
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div>
            <Typography variant="h4">Send a Message</Typography>
            <Select value={type} onChange={(e) => setType(e.target.value)} fullWidth>
                <MenuItem value="SMS">SMS</MenuItem>
                <MenuItem value="WhatsApp">WhatsApp</MenuItem>
            </Select>
            <TextField label="Recipient" value={to} onChange={(e) => setTo(e.target.value)} placeholder="e.g., +1234567890" fullWidth />
            <TextField label="Message" value={message} onChange={(e) => setMessage(e.target.value)} multiline rows={4} fullWidth />

            <Button variant="contained" color="primary" onClick={handleSend}>
                Send Message
            </Button>
            {response && <Typography variant="body1">Response: {JSON.stringify(response)}</Typography>}
        </div>
    );
};

export default MessagingForm;
