// material-ui
import { useTheme } from '@mui/material/styles';
import logo from 'assets/images/logo.svg';

const Logo = () => {
    const theme = useTheme();

    return <img src={logo} alt="Berry" width={90} height={50} />;
};

export default Logo;
