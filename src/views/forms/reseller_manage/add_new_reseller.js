import React from 'react';
import { useTheme } from '@mui/material/styles';
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
import useConfig from 'hooks/useConfig';

// ==============================|| STICKY ACTION BAR ||============================== //

function StickyActionBar() {
    const theme = useTheme();
    const { layout } = useConfig();

    const [valueSIP, setValueSIP] = React.useState('twillio');
    const [twilioSid, setTwilioSid] = React.useState('');
    const [twilioToken, setTwilioToken] = React.useState('');
    const [telnyxApiKey, setTelnyxApiKey] = React.useState('');

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <MainCard content={false} sx={{ overflow: 'visible' }}>
                    <Divider />
                    <CardContent>
                        <Grid container spacing={3} alignItems="center">
                            <Grid item xs={12}>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={12} sm={9} lg={6}>
                                        <Typography variant="h3" sx={{ mb: 0 }}>
                                            Add New Reseller
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Divider />
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={12} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '0 !important' } }}>
                                        <InputLabel horizontal sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                                            Name :
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={9} lg={6}>
                                        <TextField fullWidth placeholder="Enter full name" />
                                    </Grid>
                                    <Grid item xs={12} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '0 !important' } }}>
                                        <InputLabel horizontal sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                                            Email :
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={9} lg={6}>
                                        <TextField fullWidth placeholder="Enter email" />
                                    </Grid>
                                    <Grid item xs={12} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '0 !important' } }}>
                                        <InputLabel horizontal sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                                            Password :
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={9} lg={6}>
                                        <TextField fullWidth placeholder="Enter Password" type="password" />
                                    </Grid>
                                    <Grid item xs={12} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '0 !important' } }}>
                                        <InputLabel horizontal sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                                            Confirm Password :
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={9} lg={6}>
                                        <TextField fullWidth placeholder="Enter Password" type="password" />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={12} sm={3} lg={4} />
                                    <Grid item xs={12} sm={9} lg={6} />
                                    <Grid item xs={12} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '1 !important' } }}>
                                        <InputLabel horizontal sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                                            SIP Type :
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={9} lg={6}>
                                        <FormControl>
                                            <RadioGroup
                                                row
                                                aria-label="sip_provider"
                                                value={valueSIP}
                                                onChange={(e) => setValueSIP(e.target.value)}
                                                name="row-radio-buttons-group"
                                            >
                                                <FormControlLabel
                                                    value="twillio"
                                                    control={<Radio sx={{ color: '#6cbd45', '&.Mui-checked': { color: '#6cbd45' } }} />}
                                                    label="Twillio"
                                                />
                                                <FormControlLabel
                                                    value="telnyx"
                                                    control={<Radio sx={{ color: '#6cbd45', '&.Mui-checked': { color: '#6cbd45' } }} />}
                                                    label="Telnyx"
                                                />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Grid>

                            {/* Conditional Inputs */}
                            {valueSIP === 'twillio' && (
                                <>
                                    <Grid item xs={12} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '0 !important' } }}>
                                        <InputLabel horizontal sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                                            Twillio Account SID :
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={9} lg={6}>
                                        <TextField
                                            fullWidth
                                            placeholder="Enter Twillio Account SID"
                                            value={twilioSid}
                                            onChange={(e) => setTwilioSid(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '0 !important' } }}>
                                        <InputLabel horizontal sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                                            Twillio Auth Token :
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={9} lg={6}>
                                        <TextField
                                            fullWidth
                                            placeholder="Enter Twillio Auth Token"
                                            value={twilioToken}
                                            onChange={(e) => setTwilioToken(e.target.value)}
                                        />
                                    </Grid>
                                </>
                            )}
                            {valueSIP === 'telnyx' && (
                                <>
                                    <Grid item xs={12} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '0 !important' } }}>
                                        <InputLabel horizontal sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                                            Telnyx API Key :
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={9} lg={6}>
                                        <TextField
                                            fullWidth
                                            placeholder="Enter Telnyx API Key"
                                            value={telnyxApiKey}
                                            onChange={(e) => setTelnyxApiKey(e.target.value)}
                                        />
                                    </Grid>
                                </>
                            )}
                        </Grid>
                    </CardContent>
                    <Divider />
                    <CardActions>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={12} lg={4} />
                            <Grid item xs={12} lg={6}>
                                <Grid container alignItems="center" spacing={2}>
                                    <Grid item>
                                        <Button
                                            variant="contained"
                                            sx={{
                                                background: '#6cbd45',
                                                '&:hover': { background: '#6cbd35' }
                                            }}
                                        >
                                            Register
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardActions>
                </MainCard>
            </Grid>
        </Grid>
    );
}

export default StickyActionBar;
