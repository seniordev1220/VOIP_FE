// material-ui
import { FormControl, FormControlLabel, FormGroup, Grid, Switch, Button, Stack, Typography, Autocomplete, TextField } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

const Emergency = () => {
    const [switchChecked, setSwitchChecked] = useState(false);
    const [formData, setFormData] = useState({ phoneNumberSid: '', emergencyAddressSid: '' });
    const [response, setResponse] = useState(null);
    const { state } = useLocation();
    const phoneNumber = state?.phoneNumber;

    useEffect(() => {
        if (phoneNumber) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                phoneNumberSid: phoneNumber
            }));
        }
    }, [phoneNumber]);

    const featuresItemList = [
        { title: 'SANAM, 289 RUE DU BON-PASTEUR MATANE QC' },
        { title: 'ANDRE BEAULIEU, ATELIER VITRO BOIS, 165 CHEMIN DES RAYMOND RIVIERE-DU-LOUP QC' },
        { title: ' LES QUARTIERS A, 167 CHEMIN DES PIONNIERS O LISLET QC' },
        { title: 'Jordan Gagnon, Dépot-Direct inc, 1782 STE-ANNE RIMOUSKI QC' },
        { title: ' ST-NICOLAS HYUNDAI, 550 RUE DE LARENA LEVIS QC' },
        { title: ' Keirs Overhead Doors Ltd, 998 UNION RD CHARLOTTETOWN PE' },
        { title: 'Jonathan Michaud, EKO STRUCTURE, 304 BD INDUSTRIEL CACOUNA QC' },
        { title: 'Greg McQuaid, Austin McQuaid inc, 30 JORDAN CRESCENT CHARLOTTETOWN PE' },
        { title: 'Andre Beaulieu, RDL Telecom, 65 RUE IBERVILLE RIVIÈRE-DU-LOUP QC' },
        { title: 'CAROLE CARRIER, TOUKIPARC INC, 1325 3E AV VAL-DOR QC' },
        { title: 'Israel Jacob, Honda de Val-dOr, 1720 3E AV VAL-DOR QC' },
        { title: 'Christian Cloutier, Baton Rouge Val-dOr, 1325 3E AV VAL-DOR QC' },
        { title: 'Valérie Hallé, Centre dentaire de la Vallée-de-lOr, 1452 RUE DE LA QUÉBÉCOISE VAL-DOR QC' },
        { title: 'Guillaume Julien, Construction KG2, 190 RUE GEORGES-DUMONT VAL-DOR QC' },
        { title: 'Stephane Poirier, Coiffure Euphoria, 798 3E AV VAL-DOR QC' },
        { title: 'Patrick Desrochers, Nettoyeur Sigma Ltee, 307 3E AV VAL-DOR QC' },
        { title: 'Christian Roy, Boulonnerie Mirault inc, 25 RUE ROLAND-MASSÉ VAL-DOR QC' },
        { title: 'Ginette Rioux, Poirier Nissan, 1689 3E AV VAL-DOR QC' },
        { title: 'Ginette Rioux, Poirier KIA, 1908 3E AV VAL-DOR QC' },
        { title: 'Justin Pelletier, Traiteur chez Vic, 2855 BOUL JEAN-JACQUES-COSSETTE VAL-DOR QC' },
        { title: 'Ginette Rioux, Garage Poirier & Fils Ltee, 1780 3E AV VAL-DOR QC' },
        { title: ' BOULONNERIE MIRAULT, 25 RUE ROLAND-MASSÉ VAL-DOR QC' }
    ];

    const featuresProps = {
        options: featuresItemList,
        getOptionLabel: (option) => option.title
    };

    const handleSwitchChange = (event) => {
        setSwitchChecked(event.target.checked);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async () => {
        try {
            const res = await fetch('http://66.55.66.7:5000/api/emergency/enable-calling', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            setResponse(data);
        } catch (error) {
            console.error('Error enabling emergency calling:', error);
        }
    };

    return (
        <MainCard title="Emergency">
            <Grid container spacing={gridSpacing}>
                {phoneNumber && (
                    <Grid item xs={12}>
                        <Typography variant="h4">Phone Number: {phoneNumber}</Typography>
                    </Grid>
                )}
                <Grid item xs={12} md={6}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <FormControl>
                                <FormGroup row>
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={switchChecked} // Use the state to control the checked state
                                                onChange={handleSwitchChange} // Handle changes to update the state
                                                sx={{
                                                    color: '#6cbd45',
                                                    '&.Mui-checked': { color: '#6cbd45' }
                                                }}
                                            />
                                        }
                                        label="Emergency Service"
                                    />
                                </FormGroup>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>

                {switchChecked && (
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} />
                        <Grid item xs={12} md={4} sx={{ ml: 5 }}>
                            <Stack spacing={1}>
                                <Typography variant="subtitle1">Address</Typography>
                                <Autocomplete
                                    {...featuresProps}
                                    id="include-input-in-list"
                                    includeInputInList
                                    name="emergencyAddressSid"
                                    onChange={handleChange}
                                    renderInput={(params) => <TextField {...params} label="Address" />}
                                />
                            </Stack>
                        </Grid>
                        {/* <Grid item xs={12} md={4}>
                            <Button
                                variant="contained"
                                sx={{
                                    mt: 4,
                                    background: '#6cbd45',
                                    '&:hover': { background: '#6cbd35' }
                                }}
                            >
                                New Address
                            </Button>
                        </Grid> */}
                    </Grid>
                )}
            </Grid>
            <Grid container>
                <Grid item xs={12} lg={4} />
                <Grid item xs={12} lg={6}>
                    <Grid container>
                        <Grid item>
                            <Button
                                variant="contained"
                                sx={{
                                    mt: 4,
                                    background: '#6cbd45',
                                    '&:hover': { background: '#6cbd35' }
                                }}
                                onClick={handleSubmit}
                            >
                                Save Changes
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                variant="contained"
                                sx={{
                                    mt: 4,
                                    background: '#6cbd45',
                                    '&:hover': { background: '#6cbd35' }
                                }}
                            >
                                Cancel
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default Emergency;
