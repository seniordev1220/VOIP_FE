// material-ui
import { Grid, Box, TextField, Button, Autocomplete } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import InputLabel from 'ui-component/extended/Form/InputLabel';
import { gridSpacing } from 'store/constant';

const data = [
    { label: 'I am a Business Owner', id: 1 },
    { label: 'I am a Team Leader', id: 2 },
    { label: 'I am a Team Member', id: 3 },
    { label: 'I am a Freelancer', id: 4 },
    { label: 'I am a Director/C-level/VP', id: 5 },
    { label: 'I am a Developer', id: 6 }
];

// ==============================|| Columns Layouts ||============================== //
function ColumnsLayouts() {
    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <MainCard title="Account Settings">
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} lg={6}>
                            <InputLabel>First Name</InputLabel>
                            <TextField fullWidth placeholder="John" />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <InputLabel>Last Name</InputLabel>
                            <TextField fullWidth placeholder="Doe" />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <InputLabel>Company</InputLabel>
                            <TextField fullWidth placeholder="Enter Company Name" />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <InputLabel>Phone Number</InputLabel>
                            <TextField fullWidth placeholder="Enter your Phone Number" />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <InputLabel>Role</InputLabel>
                            <Autocomplete disablePortal options={data} renderInput={(params) => <TextField {...params} label="" />} />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Box display="flex" justifyContent="flex-end" pr={4} mt={4}>
                                <Button
                                    variant="contained"
                                    sx={{
                                        background: '#6cbd45',
                                        '&:hover': { background: '#6cbd35' }
                                    }}
                                >
                                    Save Changes
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </MainCard>
            </Grid>
        </Grid>
    );
}

export default ColumnsLayouts;
