import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';

const Login = () => {

    const myStyle = makeStyles((theme) => ({
        center: {
            display: 'block',
            marginTop: theme.spacing(10),
        }, 
        marginText: {
            marginTop: '4px',
        },
        margin: {
            margin: '10px'
        },
        large: {
            margin: 'auto',
            width: theme.spacing(7),
            height: theme.spacing(7),
          },
        textAlign:{
            textAlign: 'center',
        }
    }))

    const classes = myStyle();

    return (
        <Container component="main" maxWidth="xs" className={classes.center}>
            <Box>
                <Avatar alt="Logo" src="https://source.unsplash.com/random" className={classes.large} />
                <p className={classes.textAlign}>Please Log In to Continue</p>

            </Box>
            
            <CssBaseline />
            <Box border={2} borderRadius="borderRadius" borderColor="primary.main">
                <form className={classes.margin}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Sign In
                    </Button>
                    <Grid container className={classes.marginText}>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Container>
    )
}

export default Login;