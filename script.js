function scrollToFeatures() {
    document.getElementById("features").scrollIntoView({
        behavior: "smooth"
    });
}

function generateIdea() {
    const ideas = [
        "Online thrift clothing business",
        "Milk tea stall near school",
        "Digital note-selling platform",
        "Student budgeting mobile app",
        "School supplies reselling business",
        "Freelance graphic design service",
        "Homemade food delivery service",
        "Social media marketing startup"
    ];

    const randomIdea = ideas[Math.floor(Math.random() * ideas.length)];
    document.getElementById("ideaResult").innerHTML = randomIdea;
}