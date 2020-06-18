import { Paper, IconButton, makeStyles, Menu, MenuItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core'
import { NotificationsNone, Person, ExitToApp } from '@material-ui/icons'
import Link from './Link'

const useStyles = makeStyles((theme) => ({
    root: {
        width: 35,
        position: "absolute",
        top: theme.spacing(2),
        right: theme.spacing(2),
        borderRadius: 50,
        "& .MuiIconButton-root:hover": {
            background: "#b6eb7a"
        }
    },
    menuItem: {
        fontSize: 15,
        fontWeight: 500,
        color: "#757575"
    }
}))
function TopRightMenu() {
    const classes = useStyles()
    const [open, setOpen] = React.useState(null)
    const handleClick = (e) => {
        setOpen(e.currentTarget)
    }
    const handleClose = () => {
        setOpen(null)
    }
    return (
        <div>
            <Paper className={classes.root} elevation={3}>
                <IconButton onClick={handleClick}>
                    <NotificationsNone style={{ fontSize: 12 }} />
                </IconButton>
            </Paper>
            <Menu anchorEl={open} keepMounted open={Boolean(open)} onClose={handleClose}>
                <MenuItem component={Link} href="/account">
                    <ListItemIcon>
                        <Person />
                    </ListItemIcon>
                    <ListItemText primary={
                        <Typography className={classes.menuItem}>My Account</Typography>
                    } />
                </MenuItem>
                <MenuItem component={Link} href="/">
                    <ListItemIcon>
                        <ExitToApp />
                    </ListItemIcon>
                    <ListItemText primary={
                        <Typography className={classes.menuItem}>Logout</Typography>
                    } />
                </MenuItem>
            </Menu>
        </div>
    )
}

export default TopRightMenu
