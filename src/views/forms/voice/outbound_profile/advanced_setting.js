// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Button,
    CardContent,
    CardActions,
    Switch,
    Divider,
    Grid,
    TextField,
    FormHelperText,
    FormControlLabel,
    Autocomplete,
    Typography,
    ButtonGroup
} from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import InputLabel from 'ui-component/extended/Form/InputLabel';
import { gridSpacing } from 'store/constant';

const data = [
    { label: 'BILL_GESTIONCAMISA', id: 1 },
    { label: 'BILL_PETROPASS', id: 2 },
    { label: 'BILL_SERVICESMSP', id: 3 },
    { label: 'BILL_VIDEOTRON', id: 4 },
    { label: 'BILL_GARAGEJPS', id: 5 },
    { label: 'BILL_CONSTKG2', id: 6 }
];
function StickyActionBar() {
    const theme = useTheme();
    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <MainCard content={false} sx={{ overflow: 'visible' }} title="Advanced Setting">
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Grid item xs={12} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '0 !important' } }}>
                                    <InputLabel>Assign a Billing Group</InputLabel>
                                </Grid>
                                <Grid item xs={12} sm={9} lg={4}>
                                    <Autocomplete
                                        disableClearable
                                        options={data}
                                        defaultValue={data[0]}
                                        renderInput={(params) => <TextField {...params} label="" />}
                                    />
                                    <FormHelperText>
                                        Billing Groups allow you to manage your customer sub-accounts, making it easy to categorize usage
                                        reports and end-of-month invoice records.
                                    </FormHelperText>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <Divider />
                    <CardContent>
                        <Grid container spacing={3} alignItems="center">
                            <Grid item xs={12} sm={4}>
                                <InputLabel>Channel Limit</InputLabel>
                                <TextField fullWidth />
                                <FormHelperText>
                                    Allows you to set a limit for outbound Concurrent Channels (1 call amounts to 1 channel)
                                </FormHelperText>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <InputLabel>Max Destination Rate</InputLabel>
                                <TextField fullWidth />
                                <FormHelperText>Maximum rate for a Destination to be allowed when making outbound calls.</FormHelperText>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <InputLabel>Enable Daily Spend Limit Per Connection</InputLabel>
                                <Switch
                                    defaultChecked
                                    sx={{
                                        color: theme.palette.success.dark,
                                        '& .Mui-checked': { color: `${theme.palette.success.dark} !important` },
                                        '& .Mui-checked+.MuiSwitch-track': { bgcolor: `${theme.palette.success.light} !important` }
                                    }}
                                />
                                <FormHelperText>
                                    Define the maximum amount of money that can be spent on outbound calls per day for each Connection
                                    associated to this Outbound Voice Profile.
                                </FormHelperText>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <Divider />
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Grid item xs={12} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '0 !important' } }}>
                                    <InputLabel>Record Outbound Calls</InputLabel>
                                </Grid>
                                <Grid item xs={12} sm={9} lg={4}>
                                    <ButtonGroup variant="contained">
                                        <Button
                                            variant="contained"
                                            sx={{
                                                background: '#6cbd45',
                                                '&:hover': { background: '#6cbd35' }
                                            }}
                                        >
                                            Do Not Record
                                        </Button>
                                        <Button
                                            variant="contained"
                                            sx={{
                                                background: '#6cbd45',
                                                '&:hover': { background: '#6cbd35' }
                                            }}
                                        >
                                            Record Outbound Calls
                                        </Button>
                                    </ButtonGroup>
                                    <FormHelperText>
                                        Enable Call Recording for all outbound calls or only those outbound calls with a specific ANI
                                    </FormHelperText>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <Divider />
                    <CardContent>
                        <Grid container spacing={3} alignItems="center">
                            <Grid item xs={12} sm={4}>
                                <ButtonGroup variant="contained">
                                    <Button
                                        variant="contained"
                                        sx={{
                                            background: '#6cbd45',
                                            '&:hover': { background: '#6cbd35' }
                                        }}
                                    >
                                        .WAV
                                    </Button>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            background: '#6cbd45',
                                            '&:hover': { background: '#6cbd35' }
                                        }}
                                    >
                                        .MP3
                                    </Button>
                                </ButtonGroup>
                                <FormHelperText>Choose between WAV and MP3 audio formats</FormHelperText>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <InputLabel>Audio File Channel Type</InputLabel>
                                <ButtonGroup variant="contained">
                                    <Button
                                        variant="contained"
                                        sx={{
                                            background: '#6cbd45',
                                            '&:hover': { background: '#6cbd35' }
                                        }}
                                    >
                                        Single Channel
                                    </Button>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            background: '#6cbd45',
                                            '&:hover': { background: '#6cbd35' }
                                        }}
                                    >
                                        Double Channel
                                    </Button>
                                </ButtonGroup>
                                <FormHelperText>
                                    Choose between Single Channel (mono file with both, caller and callee on the same track) and Double
                                    Channel
                                </FormHelperText>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <Divider />
                    <CardActions>
                        <Grid container spacing={2} alignItems="center">
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
                                            Save
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            variant="outlined"
                                            sx={{
                                                borderColor: '#6cbd45',
                                                '&:hover': {
                                                    borderColor: '#6cbd35',
                                                    color: '#6cbd35',
                                                    backgroundColor: 'transparent'
                                                }
                                            }}
                                        >
                                            cancel
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
