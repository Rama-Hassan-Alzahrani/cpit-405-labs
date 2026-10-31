const data = [
    {
        name: "Joel Embiid",
        team: "Philadelphia 76ers (PHI)",
        points: 33,
        rebounds: 10.8,
        assists: 5.7,
        blocks: 1.5,
        turnovers: 4.2
    },
    {
        name: "Jalen Brunson",
        team: "New York Knicks (NYK)",
        points: 32.4,
        rebounds: 3.3,
        assists: 7.5,
        blocks: 0.2,
        turnovers: 2.7
    },
    {
        name: "Shai Gilgeous-Alexander",
        team: "Oklahoma City Thunder (OKC)",
        points: 30.2,
        rebounds: 7.2,
        assists: 6.4,
        blocks: 1.7,
        turnovers: 2.2
    },
    {
        name: "Tyrese Maxey",
        team: "Philadelphia 76ers (PHI)",
        points: 29.8,
        rebounds: 5.2,
        assists: 6.8,
        blocks: 0.3,
        turnovers: 2.2
    },
    {
        name: "Donovan Mitchell",
        team: "Cleveland Cavaliers (CAVS)",
        points: 29.6,
        rebounds: 5.4,
        assists: 4.7,
        blocks: 0.3,
        turnovers: 2.8
    },
    {
        name: "Luka Dončić",
        team: "Dallas Mavericks (DAL)",
        points: 28.9,
        rebounds: 9.5,
        assists: 8.1,
        blocks: 0.4,
        turnovers: 4.1
    },
    {
        name: "Nikola Jokić",
        team: "Denver Nuggets (DEN)",
        points: 28.7,
        rebounds: 13.4,
        assists: 8.7,
        blocks: 0.7,
        turnovers: 3.3
    },
    {
        name: "Anthony Davis",
        team: "Los Angeles Lakers (LAL)",
        points: 27.8,
        rebounds: 15.6,
        assists: 4,
        blocks: 1.6,
        turnovers: 2.2
    },
    {
        name: "LeBron James",
        team: "Los Angeles Lakers (LAL)",
        points: 27.8,
        rebounds: 6.8,
        assists: 8.8,
        blocks: 1,
        turnovers: 3.8
    },
    {
        name: "Anthony Edwards",
        team: "Minnesota Timberwolves (MIN)",
        points: 27.6,
        rebounds: 7,
        assists: 6.5,
        blocks: 0.6,
        turnovers: 3.3
    },
    {
        name: "Devin Booker",
        team: "Phoenix Suns (PHX)",
        points: 27.5,
        rebounds: 3.3,
        assists: 6,
        blocks: 0.3,
        turnovers: 2.8
    },
    {
        name: "Paolo Banchero",
        team: "Orlando Magic (ORL)",
        points: 27,
        rebounds: 8.6,
        assists: 4,
        blocks: 0.6,
        turnovers: 4.6
    },
    {
        name: "Kevin Durant",
        team: "Phoenix Suns (PHX)",
        points: 26.8,
        rebounds: 6.5,
        assists: 3.3,
        blocks: 1.5,
        turnovers: 2.5
    },
    {
        name: "Jayson Tatum",
        team: "Boston Celtics (BOS)",
        points: 25,
        rebounds: 9.7,
        assists: 6.3,
        blocks: 0.7,
        turnovers: 2.6
    },
    {
        name: "Khris Middleton",
        team: "Milwaukee Bucks (MIL)",
        points: 24.7,
        rebounds: 9.2,
        assists: 4.7,
        blocks: 0.2,
        turnovers: 2.3
    },
    {
        name: "Jaylen Brown",
        team: "Boston Celtics (BOS)",
        points: 23.9,
        rebounds: 5.9,
        assists: 3.3,
        blocks: 0.6,
        turnovers: 2.7
    },
    {
        name: "Bam Adebayo",
        team: "Miami Heat (MIA)",
        points: 22.6,
        rebounds: 9.4,
        assists: 3.8,
        blocks: 0,
        turnovers: 1.6
    },
    {
        name: "Kyrie Irving",
        team: "Dallas Mavericks (DAL)",
        points: 22.1,
        rebounds: 3.7,
        assists: 5.1,
        blocks: 0.3,
        turnovers: 2.3
    },
    {
        name: "Pascal Siakam",
        team: "Indiana Pacers (IND)",
        points: 21.6,
        rebounds: 7.5,
        assists: 3.8,
        blocks: 0.4,
        turnovers: 1.1
    },
    {
        name: "James Harden",
        team: "Los Angeles Clippers (LAC)",
        points: 21.2,
        rebounds: 4.5,
        assists: 8,
        blocks: 1,
        turnovers: 2.3
    },
    {
        name: "Jamal Murray",
        team: "Denver Nuggets (DEN)",
        points: 20.6,
        rebounds: 4.3,
        assists: 5.6,
        blocks: 0.5,
        turnovers: 2.6
    },
    {
        name: "Paul George",
        team: "Los Angeles Clippers (LAC)",
        points: 19.5,
        rebounds: 6.8,
        assists: 4.8,
        blocks: 0.5,
        turnovers: 2.3
    },
    {
        name: "Karl-Anthony Towns",
        team: "Minnesota Timberwolves (MIN)",
        points: 19.1,
        rebounds: 9,
        assists: 2.6,
        blocks: 0.2,
        turnovers: 1.7
    },
    {
        name: "Franz Wagner",
        team: "Orlando Magic (ORL)",
        points: 18.9,
        rebounds: 6.9,
        assists: 4.4,
        blocks: 1.3,
        turnovers: 1.3
    },
    {
        name: "Jalen Williams",
        team: "Oklahoma City Thunder (OKC)",
        points: 18.7,
        rebounds: 6.8,
        assists: 5.4,
        blocks: 0.5,
        turnovers: 1.9
    },
    {
        name: "Tyrese Haliburton",
        team: "Indiana Pacers (IND)",
        points: 18.7,
        rebounds: 4.8,
        assists: 8.2,
        blocks: 0.7,
        turnovers: 2.1
    },
    {
        name: "Donte DiVincenzo",
        team: "New York Knicks (NYK)",
        points: 17.8,
        rebounds: 4,
        assists: 2.6,
        blocks: 0.9,
        turnovers: 1.2
    },
    {
        name: "CJ McCollum",
        team: "New Orleans Pelicans (NOP)",
        points: 17.8,
        rebounds: 4.8,
        assists: 4.8,
        blocks: 0.8,
        turnovers: 4
    },
    {
        name: "Brook Lopez",
        team: "Milwaukee Bucks (MIL)",
        points: 17.7,
        rebounds: 4.3,
        assists: 1.8,
        blocks: 1.3,
        turnovers: 1.5
    },
    {
        name: "Myles Turner",
        team: "Indiana Pacers (IND)",
        points: 17,
        rebounds: 6.6,
        assists: 2.1,
        blocks: 1.5,
        turnovers: 1.9
    },
    {
        name: "Austin Reaves",
        team: "Los Angeles Lakers (LAL)",
        points: 16.8,
        rebounds: 3.8,
        assists: 3.6,
        blocks: 0.6,
        turnovers: 0.8
    },
    {
        name: "Tyler Herro",
        team: "Miami Heat (MIA)",
        points: 16.8,
        rebounds: 3.6,
        assists: 5.4,
        blocks: 0,
        turnovers: 2.8
    },
    {
        name: "Derrick White",
        team: "Boston Celtics (BOS)",
        points: 16.7,
        rebounds: 4.3,
        assists: 4.1,
        blocks: 1.2,
        turnovers: 0.8
    },
    {
        name: "Bobby Portis",
        team: "Milwaukee Bucks (MIL)",
        points: 16.5,
        rebounds: 11.3,
        assists: 1,
        blocks: 0.2,
        turnovers: 1.5
    },
    {
        name: "Bradley Beal",
        team: "Phoenix Suns (PHX)",
        points: 16.5,
        rebounds: 2.8,
        assists: 4.5,
        blocks: 0.3,
        turnovers: 3.3
    },
    {
        name: "Ivica Zubac",
        team: "Los Angeles Clippers (LAC)",
        points: 16.2,
        rebounds: 9.3,
        assists: 1,
        blocks: 0.5,
        turnovers: 1.3
    },
    {
        name: "Evan Mobley",
        team: "Cleveland Cavaliers (CAVS)",
        points: 16,
        rebounds: 9.3,
        assists: 2.3,
        blocks: 2.2,
        turnovers: 1.8
    },
    {
        name: "Michael Porter Jr.",
        team: "Denver Nuggets (DEN)",
        points: 15.8,
        rebounds: 6.8,
        assists: 1.1,
        blocks: 0.8,
        turnovers: 1.5
    },
    {
        name: "Darius Garland",
        team: "Cleveland Cavaliers (CAVS)",
        points: 15.7,
        rebounds: 3.6,
        assists: 5.8,
        blocks: 0.2,
        turnovers: 2.3
    },
    {
        name: "Chet Holmgren",
        team: "Oklahoma City Thunder (OKC)",
        points: 15.6,
        rebounds: 7.2,
        assists: 2.1,
        blocks: 2.5,
        turnovers: 1.9
    },
    {
        name: "Andrew Nembhard",
        team: "Indiana Pacers (IND)",
        points: 14.9,
        rebounds: 3.3,
        assists: 5.5,
        blocks: 0.2,
        turnovers: 1.4
    },
    {
        name: "Jalen Suggs",
        team: "Orlando Magic (ORL)",
        points: 14.7,
        rebounds: 5.1,
        assists: 3.3,
        blocks: 0.4,
        turnovers: 2.9
    },
    {
        name: "Josh Hart",
        team: "New York Knicks (NYK)",
        points: 14.5,
        rebounds: 11.5,
        assists: 4.5,
        blocks: 0.8,
        turnovers: 2.6
    },
    {
        name: "Jonas Valančiūnas",
        team: "New Orleans Pelicans (NOP)",
        points: 14.5,
        rebounds: 11,
        assists: 1.3,
        blocks: 0,
        turnovers: 2.5
    },
    {
        name: "Aaron Gordon",
        team: "Denver Nuggets (DEN)",
        points: 14.3,
        rebounds: 7.3,
        assists: 4.4,
        blocks: 0.6,
        turnovers: 1.5
    },
    {
        name: "Brandon Ingram",
        team: "New Orleans Pelicans (NOP)",
        points: 14.3,
        rebounds: 4.5,
        assists: 3.3,
        blocks: 1.3,
        turnovers: 2.3
    },
    {
        name: "D'Angelo Russell",
        team: "Los Angeles Lakers (LAL)",
        points: 14.2,
        rebounds: 2.8,
        assists: 4.2,
        blocks: 0.2,
        turnovers: 1.8
    },
    {
        name: "Kelly Oubre Jr.",
        team: "Philadelphia 76ers (PHI)",
        points: 13.2,
        rebounds: 4,
        assists: 1.7,
        blocks: 1.2,
        turnovers: 1.3
    },
    {
        name: "Jrue Holiday",
        team: "Boston Celtics (BOS)",
        points: 13.2,
        rebounds: 6.1,
        assists: 4.4,
        blocks: 0.6,
        turnovers: 1.5
    }
];







// ===================== DOM references =====================
let tbody = document.getElementById("player-rows");
let searchInput = document.getElementById("search");
let teamFilter = document.getElementById("team-filter");
let darkModeToggle = document.getElementById("dark-mode-toggle");
let tableHead = document.querySelector("#player-stats thead");
let headers = document.querySelectorAll("#player-stats th");

// Keys of the player object, in the same order as the table columns
let columns = ["name", "team", "points", "rebounds", "assists"];
// Header text for each column (used to reset the sort arrows)
let headerTitles = ["Name", "Team", "Points", "Rebounds", "Assists"];

// Sorting state (optional feature)
let sortKey = null;
let sortAscending = true;

// ===================== Helpers =====================
// "Philadelphia 76ers (PHI)" -> "PHI"
function getTeamAbbr(team) {
    let start = team.indexOf("(");
    let end = team.indexOf(")");
    if (start === -1 || end === -1) {
        return team;
    }
    return team.slice(start + 1, end);
}

// ===================== Populate team dropdown =====================
function populateTeamFilter() {
    // Build a list of unique team names
    let teams = [];
    for (let i = 0; i < data.length; i++) {
        if (!teams.includes(data[i].team)) {
            teams.push(data[i].team);
        }
    }
    teams.sort();

    for (let i = 0; i < teams.length; i++) {
        let option = document.createElement("option");
        option.value = teams[i];
        option.innerText = teams[i];
        teamFilter.appendChild(option);
    }
}

// ===================== Render table rows =====================
function renderTable(players) {
    tbody.innerHTML = ""; // clear old rows

    if (players.length === 0) {
        let row = document.createElement("tr");
        let cell = document.createElement("td");
        cell.colSpan = columns.length;
        cell.innerText = "No players found.";
        cell.style.textAlign = "center";
        row.appendChild(cell);
        tbody.appendChild(row);
        return;
    }

    for (let i = 0; i < players.length; i++) {
        let player = players[i];
        let row = document.createElement("tr");

        for (let j = 0; j < columns.length; j++) {
            let key = columns[j];
            let cell = document.createElement("td");

            if (key === "team") {
                cell.innerText = getTeamAbbr(player.team);
                cell.title = player.team; // full team name shows on hover
            } else {
                cell.innerText = player[key];
            }


            row.appendChild(cell);
        }

        tbody.appendChild(row);
    }
}

// ===================== Sorting helper =====================
function comparePlayers(a, b) {
    let valA = a[sortKey];
    let valB = b[sortKey];

    // Make text comparisons case-insensitive
    if (typeof valA === "string") {
        valA = valA.toLowerCase();
        valB = valB.toLowerCase();
    }

    let result = 0;
    if (valA < valB) {
        result = -1;
    } else if (valA > valB) {
        result = 1;
    }

    if (sortAscending) {
        return result;
    }
    return -result;
}

// ===================== Search + filter (+ sort) =====================
function updateTable() {
    let query = searchInput.value.trim().toLowerCase();
    let selectedTeam = teamFilter.value;

    let result = [];
    for (let i = 0; i < data.length; i++) {
        let player = data[i];
        let matchesName = player.name.toLowerCase().includes(query);
        let matchesTeam = selectedTeam === "all" || player.team === selectedTeam;
        if (matchesName && matchesTeam) {
            result.push(player);
        }
    }

    if (sortKey !== null) {
        result.sort(comparePlayers);
    }

    renderTable(result);
}

// ===================== Event listeners =====================

// 1) Search input event: filter as the user types
searchInput.addEventListener("input", updateTable);

// 2) Dropdown change event: filter by team
teamFilter.addEventListener("change", updateTable);

// 3) Dark mode click event
darkModeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

// 4) Mouseover / mouseout using event delegation on <tbody>
//    One listener on the parent handles every row, even rows created later.
tbody.addEventListener("mouseover", function (event) {
    let row = event.target.closest("tr");
    if (row) {
        row.classList.add("highlight");
    }
});

tbody.addEventListener("mouseout", function (event) {
    let row = event.target.closest("tr");
    if (row) {
        row.classList.remove("highlight");
    }
});

// 5) [OPTIONAL] Sorting: click a header (event delegation on <thead>)
tableHead.addEventListener("click", function (event) {
    let th = event.target.closest("th");
    if (!th) {
        return;
    }

    // Find which column was clicked
    let index = -1;
    for (let i = 0; i < headers.length; i++) {
        if (headers[i] === th) {
            index = i;
        }
    }
    let key = columns[index];

    // Clicking the same column again flips the direction
    if (sortKey === key) {
        sortAscending = !sortAscending;
    } else {
        sortKey = key;
        sortAscending = true;
    }

    // Reset all header texts, then add an arrow to the sorted column
    for (let i = 0; i < headers.length; i++) {
        headers[i].innerText = headerTitles[i];
    }
    if (sortAscending) {
        th.innerText = headerTitles[index] + " ▲";
    } else {
        th.innerText = headerTitles[index] + " ▼";
    }

    updateTable();
});

// ===================== Initial load =====================
populateTeamFilter();
renderTable(data);
