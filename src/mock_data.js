import { Home, Layers, LocalShipping, PersonPin, People } from "@material-ui/icons"

export const cards = [
    { image: "onwarehouse.jpg", title: "On Warehouse", link: "/t/onwarehouse", count: 12 },
    { image: "onoriginport.jpg", title: "On Origin Port", link: "/t/onoriginport", count: 2 },
    { image: "ondestinationport.jpg", title: "On Destination Port", link: "/t/ondestinationport", count: 5 },
    { image: "ondestinationoffice.jpg", title: "On Destination Office", link: "/t/ondestinationoffice", count: 8 },
]

export const menuItems = [
    { link: "/app", name: "Dashboard", icon: <Home /> },
    { link: "/transactions", name: "Transactions", icon: <Layers /> },
    { link: "/trips", name: "Trips", icon: <LocalShipping /> },
    { link: "/drivers", name: "Drivers", icon: <PersonPin /> },
    { link: "/users", name: "Users", icon: <People /> },
]