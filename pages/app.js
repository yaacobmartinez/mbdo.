import { Typography, makeStyles, Button, Grid, CardContent, CardMedia, Card, IconButton, Chip, Menu, MenuItem } from '@material-ui/core'
import AppDrawer from '../src/AppDrawer'
import TopRightMenu from '../src/TopRightMenu'
import { Add, MoreHoriz } from '@material-ui/icons'
import Link from '../src/Link'
import { cards } from '../src/mock_data'

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
    card: {
        display: "flex",
        height: 200,
        background: "#E6F4FF",
        borderRadius: 20,
        padding: theme.spacing(1)
    },
    cardContent: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        "& .MuiLink-underlineHover:hover": {
            textDecoration: "none"
        }
    },
    count: {
        fontSize: 50,
        fontWeight: 600,
        height: 70,
        color: "#0353CE",
        padding: theme.spacing(1, 1, 0, 1),

    },
    transaction: {
        fontSize: 15,
        fontWeight: 700,
        color: "#0353CE",
        padding: theme.spacing(0, 0, 0, 1)
    }
}))
function App() {
    const classes = useStyles()
    return (
        <div>
            <AppDrawer />
            <TopRightMenu />
            <div className={classes.root}>
                <div className={classes.titleHolder}>
                    <Typography className={classes.titleName} >My Dashboard</Typography>
                    <Typography className={classes.titleCaption} gutterBottom>Welcome back John! Here's what's going on.</Typography>
                </div>
                <div className={classes.btnHolder}>
                    <Button variant="contained" className={classes.new} startIcon={<Add />}>New Transaction</Button>
                </div>
                <Grid container spacing={2}>
                    {cards.map((card) => (
                        <ShowCaseCard key={card.link} card={card} />
                    ))}
                </Grid>
            </div>
        </div>
    )
}

const ShowCaseCard = ({ card }) => {
    const classes = useStyles()
    const [open, setOpen] = React.useState(null)
    const handleClick = (e) => {
        setOpen(e.currentTarget)
    }
    const handleClose = () => {
        setOpen(null)
    }
    return (
        <Grid item xs={12} sm={6}>
            <Card className={classes.card} elevation={0}>
                <CardMedia
                    style={{ width: 250, borderRadius: 20 }}
                    image={`/images/categories/${card.image}`}
                    title={card.title}
                />
                <CardContent className={classes.cardContent}>
                    <div style={{ display: "flex" }}>
                        <div style={{ flex: 1 }} />
                        <IconButton size="small" onClick={handleClick}>
                            <MoreHoriz fontSize="inherit" />
                        </IconButton>
                        <Menu anchorEl={open} keepMounted open={Boolean(open)} onClose={handleClose} getContentAnchorEl={null}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}>
                            <MenuItem component={Link} as={card.link} href="/t/[status]">View More</MenuItem>
                            {/* <MenuItem>Close Panel</MenuItem> */}
                        </Menu>
                    </div>
                    <div style={{ display: "flex" }}>
                        <Chip style={{ backgroundColor: "#fff" }} label={
                            <Typography style={{ fontWeight: 600, fontSize: 12, color: "#8BC34A" }}>{card.title}</Typography>
                        } />
                        <div style={{ flex: 1 }} />
                    </div>
                    <Typography component={Link} as={card.link} href="/t/[status]" className={classes.count}>{card.count}</Typography>
                    <Typography className={classes.transaction}>Current Transactions</Typography>
                </CardContent>
            </Card>
        </Grid >
    )
}

export default App
