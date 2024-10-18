import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, TextField, Button } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import InputLabel from 'ui-component/extended/Form/InputLabel';
import { gridSpacing } from 'store/constant';

function Layouts() {
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const handleInputChange = (e) => {
        setName(e.target.value);
    };
    const handleEditProfile = () => {
        navigate('/voice/outbound_profile/edit');
    };
    const nHeight = '40px';

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <MainCard title="Profile Info">
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12}>
                            <InputLabel>Name (Required)</InputLabel>
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                fullWidth
                                placeholder="Enter full name"
                                value={name}
                                onChange={handleInputChange}
                                sx={{ height: nHeight }}
                                InputProps={{ sx: { height: nHeight } }}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <Button
                                variant="contained"
                                sx={{
                                    background: '#6cbd45',
                                    '&:hover': { background: '#6cbd35' },
                                    height: nHeight
                                }}
                                disabled={!name.trim()}
                                onClick={handleEditProfile}
                            >
                                Create
                            </Button>
                        </Grid>
                    </Grid>
                </MainCard>
            </Grid>
        </Grid>
    );
}

export default Layouts;
