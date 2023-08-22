import { cardUI1, cardUI2, cardUI3, iconBooking, iconGeography, iconWeather } from "./images";

const navLinks = [
    "Home",
    "Discover",
    "Special Deals",
    "Contact",
];

const serviceContent = [
    {
        id: 1,
        icon: iconBooking,
        heading: "Easy Booking",
        desc: "Square, was moving  across the sand in their  direction."
    },
    {
        id: 2,
        icon: iconGeography,
        heading: "Best Tour Guide",
        desc: "What looked like a small patch  of purple grass, above five feet."
    },
    {
        id: 3,
        icon: iconWeather,
        heading: "Weather Forecast",
        desc: "What looked like a small patch  of purple grass, above five feet."
    }
];

const destinations = [
    {
        id: 1,
        location: "Paradise Beach, Bantayan Island",
        price: "$550.16",
        country: "Rome, Italy",
        rate: 4.8,
        placeHolder: cardUI1
    },
    {
        id: 2,
        location: "Paradise Beach, Bantayan Island",
        price: "$550.16",
        country: "Rome, Italy",
        rate: 4.8,
        placeHolder: cardUI2
    },
    {
        id: 3,
        location: "Paradise Beach, Bantayan Island",
        price: "$550.16",
        country: "Rome, Italy",
        rate: 4.8,
        placeHolder: cardUI3
    }
]

const travelStats = [
    {
        id: 1,
        stat: "500+",
        desc: "Holiday Package"
    },
    {
        id: 2,
        stat: "100",
        desc: "Luxary Hotel"
    },
    {
        id: 3,
        stat: "7",
        desc: "premium airlines"
    },
    {
        id: 4,
        stat: "2K+",
        desc: "Happy Customer"
    }
];

export {
    navLinks,
    serviceContent,
    destinations,
    travelStats
}