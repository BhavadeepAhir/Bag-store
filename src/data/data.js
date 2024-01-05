import heroimg from "../assets/images/hero/heroimg.png";
import facebook from "../assets/images/socialmedia/facebook.svg"
import messenger from "../assets/images/socialmedia/messenger.svg"
import youtube from "../assets/images/socialmedia/youtube.svg"
import instagram from "../assets/images/socialmedia/instagram.svg"
import twitter from "../assets/images/socialmedia/twitter.svg"

import psale1 from "../assets/images/psale/psale1.png"
import psale2 from "../assets/images/psale/psale2.png"
import psale3 from "../assets/images/psale/psale3.png"


import product1 from "../assets/images/products/product1.png"
import product2 from "../assets/images/products/product2.png"
import product3 from "../assets/images/products/product3.png"
import product4 from "../assets/images/products/product4.png"
import product5 from "../assets/images/products/product5.png"
import product6 from "../assets/images/products/product6.png"
import product7 from "../assets/images/products/product7.png"
import product8 from "../assets/images/products/product8.png"
import product9 from "../assets/images/products/product9.png"
import product10 from "../assets/images/products/product10.png"
import product11 from "../assets/images/products/product11.png"
import product12 from "../assets/images/products/product12.png"

import highlightimg from "../assets/images/highlight/highlight.png"


const heroapi = {
    title: "Ready Set Road Trip",
    subtitle: "Pack More Fun",
    img: heroimg,
    btntext: "Explor Product",
    sociallinks: [
        { icon: facebook },
        { icon: messenger },
        { icon: instagram },
        { icon: twitter },
        { icon: youtube },
    ]


};

const bestselling = {
    title: "Most Popular",
    items: [
        {
            id: "0p0x1",
            title: "Play 4 Blue Countries",
            text: "Cabin Bag",
            rating: "4.9",
            btn: "Buy Now",
            img: psale1,
            price: "200",
            color: "from-blue-600 to-blue-500",
            shadow: "shadow-lg shadow-blue-500",
        },
        {
            id: "0p0x2",
            title: "Play 4 Blue Sport",
            text: "Spinner Large",
            rating: "4.5",
            btn: "Buy Now",
            img: psale2,
            price: "200",
            color: "from-red-500 to-rose-500",
            shadow: "shadow-lg shadow-rose-500",
        },
        {
            id: "0p0x3",
            title: "play 4 Blue Blue",
            text: "Spinner Cabin",
            rating: "5+",
            btn: "Buy Now",
            img: psale3,
            price: "200",
            color: "from-violet-500 to-indigo-500",
            shadow: "shadow-lg shadow-violet-500",
        },
    ],
};


const highlight = {
    heading: "HIGHLIGHTS",
    title: "AMERICAN TOURIST WITH LIMITLESS CHOICES",
    text: "Our Purpose is to move the world forward. We take action by building community, protecting our planet and increasing access to travell.",
    btn: "Explore More",
    url: "https://www.americantourister.in/backpacks",
    img: highlightimg,
};


const toprateslaes = {
    title: "Top Rated Sales",
    items: [
        {
            id: "0M0x1",
            title: "Zork BagPack",
            text: "MEN BagPack",
            rating: "5+",
            btn: "Buy Now",
            img: product1,
            price: "150",
            color: "from-sky-600 to-indigo-600",
            shadow: "shadow-lg shadow-blue-500",
        },
        {
            id: "0M0x2",
            title: "Nord BagPack",
            text: "MEN BagPack",
            rating: "5+",
            btn: "Buy Now",
            img: product2,
            price: "150",
            color: "from-green-500 to-emerald-500",
            shadow: "shadow-lg shadow-green-500",
        },
        {
            id: "0M0x3",
            title: "Smoodle BagPack",
            text: "MEN BagPack",
            rating: "5+",
            btn: "Buy Now",
            img: product3,
            price: "150",
            color: "from-red-500 to-rose-500",
            shadow: "shadow-lg shadow-rose-500",
        },
        {
            id: "0M0x4",
            title: "Robio BagPack",
            text: "MEN BagPack",
            rating: "5+",
            btn: "Buy Now",
            img: product4,
            price: "150",
            color: "from-orange-500 to-amber-500",
            shadow: "shadow-lg shadow-orange-500",
        },
        {
            id: "0M0x5",
            title: "Sest BagPack",
            text: "MEN BagPack",
            rating: "5+",
            btn: "Buy Now",
            img: product5,
            price: "150",
            color: "from-gray-900 to-yellow-500",
            shadow: "shadow-lg shadow-yellow-500",
        },
        {
            id: "0M0x6",
            title: "Quad BagPack",
            text: "MEN BagPack",
            rating: "5+",
            btn: "Buy Now",
            img: product6,
            price: "150",
            color: "from-blue-500 to-cyan-500",
            shadow: "shadow-lg shadow-cyan-500",
        },
        {
            id: "0M0x7",
            title: "Herd BagPack",
            text: "MEN BagPack",
            rating: "5+",
            btn: "Buy Now",
            img: product7,
            price: "150",
            color: "from-yellow-500 to-yellow-500",
            shadow: "shadow-lg shadow-yellow-500",
        },
        {
            id: "0M0x8",
            title: "Brett BagPack",
            text: "MEN BagPack",
            rating: "5+",
            btn: "Buy Now",
            img: product8,
            price: "150",
            color: "from-[#936550] to-orange-900",
            shadow: "shadow-lg shadow-orange-800",
        },
        {
            id: "0M0x9",
            title: "Mia BagPack",
            text: "MEN BagPack",
            rating: "5+",
            btn: "Buy Now",
            img: product9,
            price: "150",
            color: "from-indigo-700 to-indigo-700",
            shadow: "shadow-lg shadow-indigo-500",
        },
        {
            id: "0M0x10",
            title: "Toodle",
            text: "MEN BagPack",
            rating: "5+",
            btn: "Buy Now",
            img: product10,
            price: "150",
            color: "from-green-600 to-lime-500",
            shadow: "shadow-lg shadow-lime-500",
        },
        {
            id: "0M0x11",
            title: "Pixie BagPack",
            text: "MEN BagPack",
            rating: "5+",
            btn: "Buy Now",
            img: product11,
            price: "150",
            color: "from-slate-900 to-black",
            shadow: "shadow-lg shadow-black",
        },
        {
            id: "0M0x12",
            title: "Pazzo BagPack",
            text: "MEN BagPack",
            rating: "5+",
            btn: "Buy Now",
            img: product12,
            price: "150",
            color: "from-blue-900 to-blue-500",
            shadow: "shadow-lg shadow-blue-500",
        },
    ],
};

const story = {
    title: "Top Stories",
    news: [
        {
            title: "Jayson Tatum Debuts",
            text: "american tour signature model for the past few years, Jayson Tatum will be dawning the Air 37 this season before attaining potentially his first signature bag with Jumpman, which he rumored to be in the works recently via his Twitter.",
            img: "https://cdn.anscommerce.com/live/image/catalog/brandstore/americantourister/editorial-ready-set.jpg",
            url: "https://www.americantourister.in/ready-set",
            like: "3/5",
            time: "11 Mins",
            by: "Jared Ebanks",
            btn: "Read More"
        },
        {
            title: "Editoria Stories wots",
            text: "Arriving right time for the Fall, this upcoming take on the Zoom Freak 4 seemingly draws inspiration from Thanksgiving. Orange and brown, two staples of the holiday, are used throughout the upper, dressing the parts not bathed in shades of grey.",
            img: "https://cdn.anscommerce.com/live/image/catalog/brandstore/americantourister/tile_editorial_wotson_2.jpg",
            time: "41 Mins",
            like: "5/5",
            url: "https://www.americantourister.com.au/editorial-stories-wots-on/",
            by: "Michael Le",
            btn: "Read More"
        },
        {
            title: "Travel Buddy",
            text: "The Zort Bag Max Plus has enjoyed the reveal of several colorways these last few of months. And as we officially embark on the Fall season, an additional set have been added to the calendar, including this newly-revealed grey and orange colorway.",
            img: "https://cdn.anscommerce.com/live/image/catalog/brandstore/americantourister/travel-buddy.jpg",
            time: "2 Hours",
            url: "https://www.americantourister.in/travel-buddy",
            like: "5/5",
            by: "Michael Le",
            btn: "Read More"
        },
        {
            title: "The not SO SO solo Travel",
            text: " Retro High OG popular series of AJ1s with the popular color-blocking with the original Yellow Toe flavor. The colorway was revealed back PE by musician Zach Myers, nearly four years later, fanatics will finally get their shot a GR release.",
            img: "https://cdn.anscommerce.com/live/image/catalog/brandstore/americantourister/solo-travel.jpg",
            time: "7 Months",
            url: "https://www.americantourister.com.au/the-not-so-solo-solo-travel.html",
            like: "5/5",
            by: "Sneaker News",
            btn: "Read More"
        },
        {
            title: "Brands Gets Hike",
            text: "The Bred coloryway of Zoom GT Cut 2 will be first to release this Friday, For Members Nation World Wide while Sabrina Ionescus colorway is set for an October 13th release date. In the meantime, enjoy official images of both colorways below.",
            img: "https://cdn.anscommerce.com/live/image/catalog/brandstore/americantourister/Editoria-Banner-Airconic.jpg",
            time: "1 Months",
            url: "https://www.americantourister.in/brand-story",
            like: "3/5",
            by: "Jared Ebanks",
            btn: "Read More"
        },
        {
            title: "All carry On its Created",
            text: "For the first time in over a decade, a signature bag silhouette is being made for one of the WNBA’s best and brightest stars, Olympic Gold Medalist and Seattle Storm superstar Breanna Stewart. Puma Stewie 1 Quiet Fire will be available this Friday.",
            img: "https://cdn.anscommerce.com/live/image/catalog/brandstore/americantourister/tile_editorial_front_page_2.jpg",
            time: "25 Days",
            url: "https://www.americantourister.com.au/not-all-carry-on-is-created-equal.html",
            like: "3/5",
            by: "Jared Ebanks",
            btn: "Read More"
        },
        {
            title: "Events Worth Travelling",
            text: "From lace toggles to city-inspired makeovers, the Force 1 has delivered a number of unique modifications. Here though, the brand is taking things down quite a few notches, opting for a simple colorway helmed primarily by black and Laser Orange.",
            img: "https://cdn.anscommerce.com/live/image/catalog/brandstore/americantourister/editorial-events-worth-travelling.jpg",
            url: "https://www.americantourister.com.au/events-worth-travelling-2022.htm",
            time: "6 Days",
            like: "4/5",
            by: "Micael Le",
            btn: "Read More"
        },
        {
            title: "Where the Funs At",
            text: "The world of Sanrio is vast and replete with many an iconic character. Few among the family, though, rival the immense influence of Hello Kitty, who’s played mascot for everything from Pringles merchandise to sneaker collaborations.",
            img: "https://cdn.anscommerce.com/live/image/catalog/brandstore/americantourister/editorial-wheres-the-fun-at.jpg",
            url: "https://www.americantourister.in/where-the-funs-at",
            time: "5 Days",
            like: "4/5",
            by: "Micael Le",
            btn: "Read More"
        },

    ],
};

const footerAPI = {
    titles: [{ title: "About AT" }, { title: "Get Help" }, { title: "Company" }],
    links: [
        [
            { link: "News" },
            { link: "Careers" },
            { link: "Investors" },
            { link: "Prupose" },
            { link: "Sustainability" },
        ],
        [
            { link: "Order Status" },
            { link: "Shipping & Delivery" },
            { link: "Payment Options" },
            { link: "Gift Card Balance" },
            { link: "Contact Us" },
            { link: "FAQ" },
            { link: "Blog" },
        ],
        [
            { link: "Gift Cards" },
            { link: "Promotions" },
            { link: "Find A Store" },
            { link: "Send Us Feeback" },
        ],
    ]
};


export { heroapi, toprateslaes, bestselling, highlight, story, footerAPI };