import { BsPeopleFill } from "react-icons/bs"
import { IoHomeSharp, IoVideocam } from "react-icons/io5"

export const HOME_ADVANTAGE = [
    {
        title: "Your audience is there",
        content: `The world is changing and now your audience spends more time on new social networkds than on instagram.Your competitor doesn't know this you will be among a select group of professionals who know how to adverise through Lauayo ads, with this you will NOT have compoetition`
    },
    {
        title: "Whoever arrives first drinks clean water",
        content: `When your competitor arrives on the platform, you will already be there and using more efficient methods.`
    },
    {
        title: "It's much cheaper",
        content: `As there are still few advertisers, their capaigns have a much greater react and are less comppetive. The cost per range is very low.`
    },
]
export const NAVLINKS = [
    {
        name: "Home",
        to: "/"
    },
    {
        name: "About",
        to: "/about"
    },
    {
        name: "Contact",
        to: "/contact"
    },

]

export const SIDEBAR_LINKS = [
    {
        icon: IoHomeSharp,
        to: "/",
        title: "For You"
    },
    {
        icon: BsPeopleFill,
        to: "/following",
        title: "Following"
    },
    {
        icon: IoVideocam,
        to: "/live",
        title: "Live"
    },
]