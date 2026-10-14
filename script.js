
/* TIMELINE DATA
   These are placeholders until real historical events are researched.
*/

const events = [
    { title: "Content", year: "Event 1", description: "Add the first historical event here." },
    { title: "Content", year: "Event 2", description: "Add the second historical event here." },
    { title: "Content", year: "Event 3", description: "Add the third historical event here." },
    { title: "Content", year: "Event 4", description: "Add the fourth historical event here." },
    { title: "Content", year: "Event 5", description: "Add the fifth historical event here." },
    { title: "Content", year: "Event 6", description: "Add the sixth historical event here." }
];

/* TEAM DATA
   Replace these sample entries with researched teams and image paths.
   Example image path: "images/team-example.jpg"
*/

const teams = [
    {
        name: "Example Robotics Team",
        number: "To be researched",
        rookieYear: "To be researched",
        description: "Team history will be added here.",
        history: "Historical match data: To be researched.",
        images: []
    },
    {
        name: "Another Robotics Team",
        number: "To be researched",
        rookieYear: "To be researched",
        description: "Competition achievements will be added here.",
        history: "Historical match data: To be researched.",
        images: []
    },
    {
        name: "Third Robotics Team",
        number: "To be researched",
        rookieYear: "To be researched",
        description: "Additional team information will be added here.",
        history: "Historical match data: To be researched.",
        images: []
    }
];

/* PAGE ELEMENTS */

const timelinePage = document.getElementById("timeline-page");
const teamsPage = document.getElementById("teams-page");

const timelineButton = document.getElementById("timeline-button");
const teamsButton = document.getElementById("teams-button");

const timelineEvents = document.getElementById("timeline-events");
const collageTrack = document.getElementById("collage-track");
const teamInformation = document.getElementById("team-information");
const teamCounter = document.getElementById("team-counter");

let currentTeam = 0;

/* CREATE THE TIMELINE */

events.forEach(function(event, index) {
    const row = document.createElement("div");

    row.className =
        "timeline-event " +
        (index % 2 === 0 ? "left" : "right");

    const card = document.createElement("button");

    card.type = "button";
    card.className = "event-card";
    card.textContent = event.title;
    card.setAttribute(
        "aria-label",
        event.year + ": " + event.description
    );

    card.addEventListener("click", function() {
        alert(event.year + "\n\n" + event.description);
    });

    row.appendChild(card);
    timelineEvents.appendChild(row);
});

/* CREATE THE TEAM IMAGE COLLAGE */

function createCollage(team) {
    collageTrack.replaceChildren();

    if (team.images.length === 0) {
        const slide = document.createElement("div");
        slide.className = "collage-slide";

        const placeholder = document.createElement("div");
        placeholder.className = "image-placeholder";
        placeholder.textContent = "Robot/Team Image Collage";

        slide.appendChild(placeholder);
        collageTrack.appendChild(slide);
        return;
    }

    team.images.forEach(function(imagePath, index) {
        const slide = document.createElement("div");
        slide.className = "collage-slide";

        const image = document.createElement("img");
        image.src = imagePath;
        image.alt = team.name + " photograph " + (index + 1);

        slide.appendChild(image);
        collageTrack.appendChild(slide);
    });
}

/* SHOW THE SELECTED TEAM AND ITS IMAGES */

function showTeam() {
    const team = teams[currentTeam];

    createCollage(team);

    teamInformation.replaceChildren();

    const heading = document.createElement("h2");
    heading.textContent = team.name;
    teamInformation.appendChild(heading);

    const details = [
        "Team Number: " + team.number,
        "Rookie Year: " + team.rookieYear,
        "Description: " + team.description,
        team.history
    ];

    details.forEach(function(detail) {
        const paragraph = document.createElement("p");
        paragraph.textContent = detail;
        teamInformation.appendChild(paragraph);
    });

    teamCounter.textContent =
        "Team " + (currentTeam + 1) + " of " + teams.length;
}

/* NAVIGATION: TIMELINE */

timelineButton.addEventListener("click", function() {
    timelinePage.hidden = false;
    teamsPage.hidden = true;

    timelineButton.classList.add("active");
    teamsButton.classList.remove("active");
});

/* NAVIGATION: ORIGINAL TEAMS */

teamsButton.addEventListener("click", function() {
    timelinePage.hidden = true;
    teamsPage.hidden = false;

    teamsButton.classList.add("active");
    timelineButton.classList.remove("active");

    showTeam();
});

/* NEXT TEAM: MOVE FORWARD */

document.getElementById("next-team").addEventListener("click", function() {
    currentTeam = (currentTeam + 1) % teams.length;
    showTeam();
});

/* PREVIOUS TEAM: MOVE BACKWARD */

document.getElementById("previous-team").addEventListener("click", function() {
    currentTeam = (currentTeam - 1 + teams.length) % teams.length;
    showTeam();
});

console.log("Community Archives website is ready.");
