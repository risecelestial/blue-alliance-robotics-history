{
    id: "1",
    name: "Sample Robotics Team One",
    number: 1,
    rookieYear: 1992,
    description: "Sample team record. Replace this with verified FIRST Robotics Competition information.",
    history: "Historical information has not yet been researched and verified.",
    images: []
  },
  {
    id: "2",
    name: "Sample Robotics Team Two",
    number: 2,
    rookieYear: 1993,
    description: "Sample team record. Replace this with verified FIRST Robotics Competition information.",
    history: "Historical information has not yet been researched and verified.",
    images: []
  },
  {
    id: "3",
    name: "Sample Robotics Team Three",
    number: 3,
    rookieYear: 1994,
    description: "Sample team record. Replace this with verified FIRST Robotics Competition information.",
    history: "Historical information has not yet been researched and verified.",
    images: []
  }
];

export let teams = initialTeams.map((team) => ({ ...team }));

export function resetTeams() {
  teams = initialTeams.map((team) => ({ ...team }));
}

export function replaceTeams(newTeams) {
  teams = newTeams;
}
