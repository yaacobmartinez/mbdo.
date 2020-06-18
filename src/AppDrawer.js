import { Typography, Drawer, makeStyles, List, ListItem, ListItemIcon, ListItemText, Hidden, Tooltip } from '@material-ui/core'
import { Settings } from '@material-ui/icons'
import Link from './Link'
import { menuItems } from '../src/mock_data'
const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    drawer: {
        // width: 240,
    },
    drawerPaper: {
        // width: 240,
        padding: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            padding: 0
        },
        "& .MuiListItem-button:hover": {
            background: "#b6eb7a"
        }
    },
    logoName: {
        fontSize: 30,
        fontWeight: 700,
    },
    listItem: {
        borderRadius: 20,
        paddingRight: theme.spacing(4),
        margin: theme.spacing(1, 0),
        [theme.breakpoints.down('sm')]: {
            paddingRight: theme.spacing(2)
        },

    },
    listItemText: {
        fontWeight: 600,
        fontSize: 18,
        color: "#757575"
    },
    listItemIcon: {
        [theme.breakpoints.down('sm')]: {
            minWidth: 0
        }
    },
    listItemBottom: {
        position: "fixed", bottom: 0, width: 220,
        borderRadius: 20,
        paddingRight: theme.spacing(4),
        margin: theme.spacing(2, 0),
        [theme.breakpoints.down('sm')]: {
            paddingRight: theme.spacing(2),
            width: 56
        }
    }
}))

function AppDrawer() {
    const classes = useStyles()
    return (
        <div>
            <Drawer variant="permanent" anchor="left" className={classes.drawer} classes={{
                paper: classes.drawerPaper,
            }}>
                <Hidden smDown >
                    <div className={classes.toolbar}>
                        <Typography className={classes.logoName} style={{ color: "#8BC34A" }} component="span">mbdo</Typography>
                        <Typography className={classes.logoName} style={{ fontFamily: "Roboto", fontSize: 40 }} component="span">.</Typography>
                    </div>
                </Hidden>
                <List>
                    {menuItems.map((_) => (
                        <ListItem component={Link} href={_.link} button className={classes.listItem} key={_.link}>
                            <Tooltip title={_.name} disableFocusListener>
                                <ListItemIcon className={classes.listItemIcon}>
                                    {_.icon}
                                </ListItemIcon>
                            </Tooltip>
                            <Hidden smDown>
                                <ListItemText primary={
                                    <Typography className={classes.listItemText}>{_.name}</Typography>
                                } />
                            </Hidden>
                        </ListItem>
                    ))}
                    <ListItem component={Link} href="/settings" button className={classes.listItemBottom}
                    >
                        <Tooltip title="Settings" disableFocusListener>
                            <ListItemIcon className={classes.listItemIcon}>
                                <Settings />
                            </ListItemIcon>
                        </Tooltip>
                        <Hidden smDown>
                            <ListItemText primary={
                                <Typography className={classes.listItemText}>Settings</Typography>
                            } />
                        </Hidden>
                    </ListItem>


                </List>
            </Drawer>
        </div>
    )
}

export default AppDrawer
