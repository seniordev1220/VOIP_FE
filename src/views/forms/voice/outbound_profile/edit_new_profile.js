import React, { useState } from 'react';
import { Grid, TextField, Button, CardActions } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import InputLabel from 'ui-component/extended/Form/InputLabel';
import { gridSpacing } from 'store/constant';
import AssociatedConnection from './associated_connections';
import AdvancedSetting from './advanced_setting';
import useConfig from 'hooks/useConfig';
import LAYOUT_CONST from 'constant';

function Layouts() {
    const [name, setName] = useState('');
    const { layout } = useConfig();
    const handleInputChange = (e) => {
        setName(e.target.value);
    };
    const nHeight = '40px';

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <MainCard title="Profile Info">
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} lg={4}>
                            <Grid item xs={12}>
                                <InputLabel>Name (Required)</InputLabel>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    placeholder="Enter full name"
                                    value={name}
                                    onChange={handleInputChange}
                                    sx={{ height: nHeight }}
                                    InputProps={{ sx: { height: nHeight } }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <Grid container spacing={2} sx={{ ml: 10 }}>
                                <Grid item xs={12}>
                                    <InputLabel>Profile ID</InputLabel>
                                </Grid>
                                <Grid item xs={6}>
                                    <InputLabel>2544318013595715000</InputLabel>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </MainCard>
            </Grid>

            <Grid item xs={12}>
                <AssociatedConnection />
            </Grid>

            <Grid item xs={12}>
                <AdvancedSetting />
            </Grid>
        </Grid>
    );
}

export default Layouts;
