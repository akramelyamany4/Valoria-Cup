const valoriaFinal = {
  player1: "A4li",
  player2: "Yusuf",
  score1: 8,
  score2: 2
};
const valoriaChampion = "A4li";
const valoriaRunnerUp = "Yusuf";

const tournament = {
  name: "VALORIA CUP",
  status: "COMPLETED",
  champion: valoriaChampion,
  runnerUp: valoriaRunnerUp,
  finalScore: valoriaFinal,

  players: [
    "Ysn",
    "Yusuf",
    "Yasser",
    "Chati Ilyass",
    "Mosaab",
    "Redouan",
    "Salah",
    "Hamoudi",
    "Ghali",
    "Bilal",
    "Ilyass",
    "Reda",
    "Ziad",
    "Amin Mol Thon",
    "A4li",
    "Y.Ch"
  ],

  currentRoundIndex: 3,

  rounds: [
    {
      title: "Huitièmes de finale",
      matches: [
        { label: "MATCH 01", player1: "Ysn", player2: "Yusuf" },
        { label: "MATCH 02", player1: "Yasser", player2: "Chati Ilyass" },
        { label: "MATCH 03", player1: "Mosaab", player2: "Redouan" },
        { label: "MATCH 04", player1: "Salah", player2: "Hamoudi" },
        { label: "MATCH 05", player1: "Ghali", player2: "Bilal" },
        { label: "MATCH 06", player1: "Ilyass", player2: "Reda" },
        { label: "MATCH 07", player1: "Ziad", player2: "Amin Mol Thon" },
        { label: "MATCH 08", player1: "A4li", player2: "Y.Ch" }
      ]
    },
    {
      title: "Quarts de finale",
      matches: [
        { label: "MATCH 09", player1: "Yusuf", player2: "Chati Ilyass" },
        { label: "MATCH 10", player1: "Mosaab", player2: "Hamoudi" },
        { label: "MATCH 11", player1: "Ilyass", player2: "Bilal" },
        { label: "MATCH 12", player1: "Amin Mol Thon", player2: "A4li" }
      ]
    },
    {
      title: "SEMIFINAL",
      matches: [
        { label: "SEMIFINAL 1", player1: "Yusuf", player2: "Hamoudi" },
        { label: "SEMIFINAL 2", player1: "Bilal", player2: "A4li" }
      ]
    },
    {
      title: "Finale",
      matches: [{
        label: "MATCH 15",
        ...valoriaFinal,
        winner: valoriaChampion,
        status: "COMPLETED"
      }]
    }
  ]
};

tournament.matches = tournament.rounds.flatMap((round) => round.matches);
