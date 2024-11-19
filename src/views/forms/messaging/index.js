import React, { useState } from 'react';
import {
    Button,
    CardContent,
    CardActions,
    Radio,
    Divider,
    Grid,
    TextField,
    FormControlLabel,
    Typography,
    RadioGroup,
    FormControl
} from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import InputLabel from 'ui-component/extended/Form/InputLabel';
import { gridSpacing } from 'store/constant';

const MessagingForm = () => {
    const [type, setType] = useState('SMS');
    const [to, setTo] = useState('');
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState(null);

    const handleSend = async () => {
        try {
            const res = await fetch('http://66.55.66.7:5000/api/messaging/send', {
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
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <MainCard content={false} sx={{ overflow: 'visible' }}>
                    <Divider />
                    <CardContent>
                        <Grid container spacing={3} alignItems="center">
                            <Grid item xs={12}>
                                <Typography variant="h3" sx={{ mb: 2 }}>
                                    Send a Message
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '0 !important' } }}>
                                <InputLabel horizontal sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                                    Message Type:
                                </InputLabel>
                            </Grid>
                            <Grid item xs={12} sm={9} lg={6} sx={{ pt: { xs: 2, sm: '0 !important' } }}>
                                <FormControl>
                                    <RadioGroup
                                        row
                                        aria-label="message_type"
                                        value={type}
                                        onChange={(e) => setType(e.target.value)}
                                        name="row-radio-buttons-group"
                                    >
                                        <FormControlLabel
                                            value="SMS"
                                            control={
                                                <Radio
                                                    sx={{
                                                        color: '#6cbd45',
                                                        '&.Mui-checked': { color: '#6cbd45' }
                                                    }}
                                                />
                                            }
                                            label="SMS"
                                        />
                                        <FormControlLabel
                                            value="WhatsApp"
                                            control={
                                                <Radio
                                                    sx={{
                                                        color: '#6cbd45',
                                                        '&.Mui-checked': { color: '#6cbd45' }
                                                    }}
                                                />
                                            }
                                            label="WhatsApp"
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '0 !important' } }}>
                                <InputLabel horizontal sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                                    Recipient:
                                </InputLabel>
                            </Grid>
                            <Grid item xs={12} sm={9} lg={6} sx={{ pt: { xs: 2, sm: '0 !important' } }}>
                                <TextField fullWidth placeholder="e.g., +1234567890" value={to} onChange={(e) => setTo(e.target.value)} />
                            </Grid>
                            <Grid item xs={12} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '0 !important' } }}>
                                <InputLabel horizontal sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                                    Message:
                                </InputLabel>
                            </Grid>
                            <Grid item xs={12} sm={9} lg={6}>
                                <TextField fullWidth multiline rows={4} value={message} onChange={(e) => setMessage(e.target.value)} />
                            </Grid>
                        </Grid>
                    </CardContent>
                    <Divider />
                    <CardActions>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={12} sm={3} lg={4} />
                            <Grid item xs={12} sm={9} lg={6}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleSend}
                                    sx={{ background: '#6cbd45', '&:hover': { background: '#6cbd45' } }}
                                >
                                    Send Message
                                </Button>
                                {response && (
                                    <Typography variant="body1" sx={{ mt: 2 }}>
                                        Response: {JSON.stringify(response)}
                                    </Typography>
                                )}
                            </Grid>
                        </Grid>
                    </CardActions>
                </MainCard>
            </Grid>
        </Grid>
    );
};

export default MessagingForm;
