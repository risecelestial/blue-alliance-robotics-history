
const events = [
    {
        title: "Content",
        description: "Timeline event 1: Add a researched historical event here."
    },
    {
        title: "Content",
        description: "Timeline event 2: Add a researched historical event here."
    },
    {
        title: "Content",
        description: "Timeline event 3: Add a researched historical event here."
    },
    {
        title: "Content",
        description: "Timeline event 4: Add a researched historical event here."
    },
    {
        title: "Content",
        description: "Timeline event 5: Add a researched historical event here."
    }
];

const teams = [
    {
        name: "Team Name: To be researched",
        number: "To be researched",
        year: "To be researched",
        description: "Team history will be added here.",
        history: "Historical match data: To be researched."
    },
    {
        name: "Another Team: To be researched",
        number: "To be researched",
        year: "To be researched",
        description: "Add this team's description here.",
        history: "Historical match data: To be researched."
    }
];

const timeline = document.getElementById("timeline");
const timelinePage = document.getElementById("timeline-page");
const teamsPage = document.getElementById("teams-page");

const timelineButton = document.getElementById("timeline-button");
const teamsButton = document.getElementById("teams-button");

const teamInformation = document.getElementById("team-information");
const teamImage = document.getElementById("team-image");

let currentTeam = 0;

/* Build the alternating timeline */
events.forEach(function(event, index) {
    const eventRow = document.createElement("div");

    eventRow.className = "timeline-event " +
        (index % 2 === 0 ? "left" : "right");

    const card = document.createElement("button");
    card.type = "button";
    card.className = "event-card";
    card.textContent = event.title;
    card.setAttribute("aria-label", event.description);

    card.addEventListener("click", function() {
        alert(event.description);
    });

    eventRow.appendChild(card);
    timeline.appendChild(eventRow);
});

/* Display the selected team's information */
function showTeam() {
    const team = teams[currentTeam];

    teamImage.textContent = "Robot/Team Image Collage";

    teamInformation.replaceChildren();

    const fields = [
        team.name,
        "Team Number: " + team.number,
        "Rookie Year: " + team.year,
        "Description: " + team.description,
        team.history
    ];

    fields.forEach(function(text) {
        const paragraph = document.createElement("p");
        paragraph.textContent = text;
        teamInformation.appendChild(paragraph);
    });
}

/* Change between pages */
timelineButton.addEventListener("click", function() {
    timelinePage.hidden = false;
    teamsPage.hidden = true;

    timelineButton.classList.add("active");
    teamsButton.classList.remove("active");
});

teamsButton.addEventListener("click", function() {
    timelinePage.hidden = true;
    teamsPage.hidden = false;

    teamsButton.classList.remove("active");
    timelineButton.classList.remove("active");
    teamsButton.classList.add("active");

    showTeam();
});

/* Previous and next team buttons */
document.getElementById("previous-team").addEventListener("click", function() {
    currentTeam = (currentTeam - 1 + teams.length) % teams.length;
    showTeam();
});

document.getElementById("next-team").addEventListener("click", function() {
    currentTeam = (currentTeam + 1) % teams.length;
    showTeam();
});

console.log("Community Archives loaded.");
