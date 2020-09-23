const Icons = [
    {
        id: 1,
        name: "day"
    },
    {
        id: 2,
        name: "cloudy-day-1"
    },
    {
        id: 3,
        name: "cloudy-day-2"
    },
    {
        id: 4,
        name: "cloudy-day-3"
    },
    {
        id: 5,
        name: "cloudy-day-3"
    },
    {
        id: 6,
        name: "cloudy-day-3"
    },
    {
        id: 7,
        name: "cloudy"
    },
    {
        id: 8,
        name: "cloudy"
    },
    {
        id: 11,
        name: "cloudy"
    },
    {
        id: 12,
        name: "rainy-1"
    },
    {
        id: 13,
        name: "rainy-1"
    },
    {
        id: 14,
        name: "rainy-1"
    },
    {
        id: 15,
        name: "rainy-1"
    },
    {
        id: 16,
        name: "rainy-1"
    },
    {
        id: 17,
        name: "rainy-1"
    },
    {
        id: 18,
        name: "rainy-1"
    },
    {
        id: 19,
        name: "rainy-1"
    },
    {
        id: 20,
        name: "rainy-1"
    },
    {
        id: 21,
        name: "rainy-1"
    },
    {
        id: 22,
        name: "snowy-1"
    },
    {
        id: 23,
        name: "snowy-1"
    },
    {
        id: 24,
        name: "snowy-1"
    },
    {
        id: 25,
        name: "snowy-1"
    },
    {
        id: 26,
        name: "snowy-1"
    },
    {
        id: 29,
        name: "snowy-1"
    },
    {
        id: 30,
        name: "day"
    },
    {
        id: 31,
        name: "rainy-7"
    },
    {
        id: 32,
        name: "cloudy"
    },
    {
        id: 33,
        name: "night"
    },
    {
        id: 34,
        name: "night"
    },
    {
        id: 35,
        name: "night"
    },
    {
        id: 36,
        name: "night"
    },
    {
        id: 37,
        name: "night"
    },
    {
        id: 38,
        name: "night"
    },
    {
        id: 39,
        name: "night"
    },
    {
        id: 40,
        name: "night"
    },
    {
        id: 41,
        name: "night"
    },
    {
        id: 42,
        name: "night"
    },
    {
        id: 43,
        name: "night"
    },
    {
        id: 44,
        name: "night"
    },
];

export default function iconFinder(id) {
    const iconName = Icons.find(icon => icon.id === id).name;
    return iconName
};