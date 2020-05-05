import {red, blue, yellow, green} from "../utilities/colors"



export const schedulerTimes = {
    availabilityOfCurrentWeek: [
        {label: "7:00", value: 7}, {label: "8:00", value: 8},
        {label: "9:00", value: 9},
        {label: "10:00", value: 10},
        {label: "11:00", value: 11},
        {label: "12:00", value: 12},
        {label: "13:00", value: 13},
        {label: "14:00", value: 14},
        {label: "15:00", value: 15},
        {label: "16:00", value: 16},
        {label: "17:00", value: 17}
    ],

}

export const daysOfWeek = [
    "Dec, 17th",
    "Dec, 18th"
]
export const eventsData = [
    {
        id: 1,
        resourceId: 'r1',
        title: 'Room1',
        description: "Children under 5",
        shifts: [
            {
                day: "Dec, 17th",
                shiftData: [
                    {
                        label: "A",
                        bgColor: red,
                        start: 7,
                        end: 17.5,
                    }
                ]
            },
            {
                day: "Dec, 18th",
                shiftData: [
                    {
                        label: "B",
                        bgColor: blue,
                        start: 7,
                        end: 17.5,
                    }
                ]
            },
        ]
    },
    {
        id: 2,
        resourceId: 'r2',
        title: 'Room2',
        description: "Children over 5",
        shifts: [
            {
                day: "Dec, 17th",
                shiftData: [
                    {
                        label: "A",
                        bgColor: red,
                        start: 7,
                        end: 12,
                    },
                    {
                        label: "B",
                        bgColor: blue,
                        start: 12,
                        end: 17.5,
                    }
                ]
            },
            {
                day: "Dec, 18th",
                shiftData: [
                    {
                        label: "C",
                        bgColor: yellow,
                        start: 7,
                        end: 12,
                    },
                    {
                        label: "D",
                        bgColor: green,
                        start: 12,
                        end: 17.5,
                    }
                ]
            },
        ]
    }

];
