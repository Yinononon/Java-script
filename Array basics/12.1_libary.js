const library = [
    {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true
    },
    {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true
    },
    {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false
    }
    ];

    const libraryStatus = library.map((stat) => {
        
            if (stat.readingStatus) {
                delete stat.readingStatus
            return stat
        }
        delete stat.readingStatus
        
    }).filter(stat => stat)
    console.log(libraryStatus)