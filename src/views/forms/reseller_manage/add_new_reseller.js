// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Avatar,
    Button,
    CardContent,
    CardActions,
    Radio,
    Divider,
    Grid,
    TextField,
    FormHelperText,
    FormControlLabel,
    Typography
} from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import InputLabel from 'ui-component/extended/Form/InputLabel';
import { gridSpacing } from 'store/constant';
import useConfig from 'hooks/useConfig';
import LAYOUT_CONST from 'constant';

// ==============================|| Sticky ActionBar ||============================== //

function StickyActionBar() {
    const theme = useTheme();
    const { layout } = useConfig();

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
                                    <Grid item xs={12} sm={3} lg={4} />
                                    <Grid item xs={12} sm={9} lg={6} />
                                    <Grid item xs={12} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '0 !important' } }}>
                                        <InputLabel horizontal sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                                            Name :
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={9} lg={6}>
                                        <TextField fullWidth placeholder="Enter full name" />
                                        <FormHelperText>Please enter your full name</FormHelperText>
                                    </Grid>
                                    <Grid item xs={12} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '0 !important' } }}>
                                        <InputLabel horizontal sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                                            Email :
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={9} lg={6}>
                                        <TextField fullWidth placeholder="Enter email" />
                                        <FormHelperText>Please enter your Email</FormHelperText>
                                    </Grid>
                                    <Grid item xs={12} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '0 !important' } }}>
                                        <InputLabel horizontal sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                                            Password :
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={9} lg={6}>
                                        <TextField fullWidth placeholder="Enter Password" />
                                        <FormHelperText>Please enter your Password</FormHelperText>
                                    </Grid>
                                    <Grid item xs={12} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '0 !important' } }}>
                                        <InputLabel horizontal sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                                            Confirm Password :
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={9} lg={6}>
                                        <TextField fullWidth placeholder="Enter Password" />
                                        <FormHelperText>Please enter your Confirm Password</FormHelperText>
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
                                        <FormControlLabel
                                            value="sucess"
                                            control={<Radio sx={{ color: '#6cbd45', '&.Mui-checked': { color: '#6cbd45' } }} />}
                                            label="Twillio"
                                        />
                                        <FormControlLabel
                                            value="sucess"
                                            control={<Radio sx={{ color: '#6cbd45', '&.Mui-checked': { color: '#6cbd45' } }} />}
                                            label="Telnyx"
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
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
