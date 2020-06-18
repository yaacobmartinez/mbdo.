import AppDrawer from '../src/AppDrawer'
import TopRightMenu from '../src/TopRightMenu'
import { makeStyles, Typography, Button } from '@material-ui/core'
import { Add } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2, 2, 2, 35),
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(2, 2, 2, 10)
        }
    },
    titleName: {
        fontSize: 40,
        fontWeight: 600,
        color: "#000",
        [theme.breakpoints.down('sm')]: {
            fontSize: 25
        }
    },
    titleCaption: {
        fontSize: 20,
        color: "#BBBEC1",
        [theme.breakpoints.down('sm')]: {
            fontSize: 15
        }
    }
}))
function Settings() {
    const classes = useStyles()
    return (
        <div>
            <AppDrawer />
            <TopRightMenu />
            <div className={classes.root}>
                <div className={classes.titleHolder}>
                    <Typography className={classes.titleName}>Settings</Typography>
                    <Typography className={classes.titleCaption} gutterBottom>Okay, here are the settings of your app.</Typography>
                </div>
            </div>
        </div>
    )
}

export default Settings
