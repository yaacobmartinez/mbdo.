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
    },
    btnHolder: {
        textAlign: "right",
        padding: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
            textAlign: "center"
        }
    },
    new: {
        backgroundColor: "#b6eb7a",
        color: "#757575",
        borderRadius: 20,
        textTransform: "none"
    },
}))
function Drivers() {
    const classes = useStyles()
    return (
        <div>
            <AppDrawer />
            <TopRightMenu />
            <div className={classes.root}>
                <div className={classes.titleHolder}>
                    <Typography className={classes.titleName}>Drivers</Typography>
                    <Typography className={classes.titleCaption} gutterBottom>Your Drivers and their Information</Typography>
                </div>
                <div className={classes.btnHolder}>
                    <Button variant="contained" className={classes.new} startIcon={<Add />}>New Driver</Button>
                </div>
            </div>
        </div>
    )
}

export default Drivers
