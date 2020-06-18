import AppDrawer from '../../src/AppDrawer'
import TopRightMenu from '../../src/TopRightMenu'
import { makeStyles, Typography } from '@material-ui/core'
import { useRouter } from 'next/router'

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
function Status() {
    const router = useRouter()
    const status = router.query.status
    const classes = useStyles()
    return (
        <div>
            <AppDrawer />
            <TopRightMenu />
            <div className={classes.root}>
                <div className={classes.titleHolder}>
                    <Typography className={classes.titleName}>{status}</Typography>
                    <Typography className={classes.titleCaption} gutterBottom>Transactions with the status {status}</Typography>
                </div>
            </div>
        </div>
    )
}

export default Status
