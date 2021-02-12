import React from 'react';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const AntSwitch = withStyles((theme: Theme) =>
    createStyles({
        root: {
            width: 40,
            height: 24,
            padding: 0,
            display: 'flex',
        },
        switchBase: {
            padding: 2,
            color: theme.palette.grey[500],
            '&$checked': {
                transform: 'translateX(16px)',
                color: theme.palette.common.white,
                '& + $track': {
                    opacity: 1,
                    backgroundColor: theme.palette.primary.main,
                    borderColor: theme.palette.primary.main,
                },
            },
        },
        thumb: {
            width: 20,
            height: 20,
            boxShadow: 'none',
        },
        track: {
            border: `1px solid ${theme.palette.grey[500]}`,
            borderRadius: 24 / 2,
            opacity: 1,
            backgroundColor: theme.palette.common.white,
        },
        checked: {},
    }),
)(Switch);

interface ThemeModeProps {
    themeMode: string;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const ColorToggleSwitch = ({ toggleTheme }: ThemeModeProps) => {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedC: true,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        toggleTheme(event.target.checked ? 'light' : 'dark');
        setState({ ...state, [event.target.name]: event.target.checked });
        console.log(event.target.checked);
    };

    return (
        <Typography component="div">
            <Grid component="label" container alignItems="center" spacing={1}>
                <Grid item>
                    <AntSwitch
                        checked={state.checkedC}
                        onChange={handleChange}
                        name="checkedC"
                    />
                </Grid>
                <Grid item>{state.checkedC ? '🌚' : '🌞'}</Grid>
            </Grid>
        </Typography>
    );
};

export default ColorToggleSwitch;
