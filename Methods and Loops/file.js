const shows = [
    {
        name: "The Big Bang Theory",
        location: "Pasadena",
        lengthInHours: 139.66,
        genres: ["comedy", "nerd", "romance"]
    },
    {
        name: "Breaking Bad",
        location: "Albuquerque",
        lengthInHours: 49.5,
        genres: ["crime", "drama", "thriller"]
    },
    {
        name: "Friends",
        location: "New York",
        lengthInHours: 88.5,
        genres: ["comedy", "romance", "sitcom"]
    },
    {
        name: "Stranger Things",
        location: "Hawkins",
        lengthInHours: 35.2,
        genres: ["sci-fi", "horror", "drama"]
    },
    {
        name: "The Office",
        location: "Scranton",
        lengthInHours: 73.8,
        genres: ["comedy", "workplace", "sitcom"]
    },
    {
        name: "Game of Thrones",
        location: "Westeros",
        lengthInHours: 70.0,
        genres: ["fantasy", "drama", "action"]
    }
];

const catogery = shows.filter(function(genre){
    return genre.genres.includes('comedy')
})

console.log(catogery)