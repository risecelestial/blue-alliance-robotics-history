
/* Sample timeline events */
const events = [
    {
        year: "1989",
        title: "Robotics Beginnings",
        description: "An example event about the beginnings of robotics."
    },
    {
        year: "1992",
        title: "Early Competitions",
        description: "An example event about early robotics competitions."
    },
    {
        year: "2000",
        title: "Growing Teams",
        description: "An example event about the growth of robotics teams."
    },
    {
        year: "2005",
        title: "New Challenges",
        description: "An example event about new robotics challenges."
    },
    {
        year: "2010",
        title: "Robotics Today",
        description: "An example event about modern robotics."
    }
];

/* Sample team information */
const teams = [
    {
        name: "Example Robotics Team",
        number: "To be researched",
        location: "To be researched",
        year: "To be researched",
        description: "Team history will be added here."
    },
    {
        name: "Another Robotics Team",
        number: "To be researched",
        location: "To be researched",
        year: "To be researched",
        description: "Competition achievements will be added here."
    }
];

/* Find the HTML elements we need */
const timeline = document.getElementById("timeline");
const teamList = document.getElementById("team-list");

const timelinePage = document.getElementById("timeline-page");
const teamsPage = document.getElementById("teams-page");

const timelineButton = document.getElementById("timeline-button");
const teamsButton = document.getElementById("teams-button");

/* Add timeline events to the page */
events.forEach(function(event, index) {
    const eventBox = document.createElement("div");
    eventBox.className =
        "timeline-event " + (index % 2 === 0 ? "left" : "right");

    const card = document.createElement("button");
    card.className = "event-card";
    card.type = "button";
    card.textContent = event.year + " — " + event.title;

    card.addEventListener("click", function() {
        alert(event.description);
    });

    eventBox.appendChild(card);
    timeline.appendChild(eventBox);
});

/* Add team cards to the page */
teams.forEach(function(team) {
    const card = document.createElement("article");
    card.className = "team-card";

    const placeholder = document.createElement("div");
    placeholder.className = "team-placeholder";
    placeholder.textContent = team.name;

    const details = document.createElement("div");
    details.className = "team-details";

    const heading = document.createElement("h2");
    heading.textContent = team.name;

    const number = document.createElement("p");
    number.textContent = "Team number: " + team.number;

    const location = document.createElement("p");
    location.textContent = "Location: " + team.location;

    const year = document.createElement("p");
    year.textContent = "Year founded: " + team.year;

    const description = document.createElement("p");
    description.textContent = team.description;

    details.append(heading, number, location, year, description);
    card.append(placeholder, details);
    teamList.appendChild(card);
});

/* Show the timeline page */
timelineButton.addEventListener("click", function() {
    timelinePage.hidden = false;
    teamsPage.hidden = true;

    timelineButton.classList.add("active");
    teamsButton.classList.remove("active");
});

/* Show the teams page */
teamsButton.addEventListener("click", function() {
    timelinePage.hidden = true;
    teamsPage.hidden = false;

    teamsButton.classList.add("active");
    timelineButton.classList.remove("active");
});

console.log("Robotics History website loaded!");
