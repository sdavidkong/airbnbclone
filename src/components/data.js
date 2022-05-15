import baboon from "./baboon.jpg"
import weirdgoat from "./weirdgoat.png"
import sbf from "./sbf.jpg"


export default [
    {
        id: 1,
        title: "Hug this Weird Goat",
        description: "I will share with you what I call \"Positively Impactful Moments of Disappointment.\" Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals. -Weird Goat",
        price: 136,
        coverImg: weirdgoat,
        stats: {
            rating: 5.0,
            reviewCount: 6
        },
        location: "Nepal",
        openSpots: 0,
    },
    {
        id: 2,
        title: "Kiss this Baboon",
        description: "Interested in experimenting? For beginners and experienced professionals alike, join us in learning techniques required to leave with memories that'll last a lifetime.",
        price: 125,
        coverImg: baboon,
        stats: {
            rating: 5.0,
            reviewCount: 30
        },
        location: "Online",
        openSpots: 27,
    },
    {
        id: 3,
        title: "Get Adopted by Sam Bankman Fried",
        description: "Experience the effects of effective altruism firsthand and become the child of Sam Bankman Fried.",
        price: 50,
        coverImg: sbf,
        stats: {
            rating: 4.8,
            reviewCount: 2
        },
        location: "Norway",
        openSpots: 3,
    }
]