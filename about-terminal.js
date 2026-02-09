const aboutOutput = document.getElementById("about-output");
const subButtons = document.getElementById("sub-buttons");

const responses = {
  skills: [
    "$ show skills",
    "> HTML, CSS, JavaScript",
    "> Networking fundamentals",
    "> Wireshark packet analysis",
    "> Purple team workflows",
    "> Clean UI design"
  ],

  experience: [
    "$ show experience",
    "> Built multiple cybersecurity lab projects",
    "> Created interactive web demos",
    "> Hands-on practice with TCP scanning + Wireshark",
    "> Strong troubleshooting workflow"
  ],

  goals: [
    "$ show goals",
    "> Select a category:",
    "> esports / fashion / music"
  ],

  interests: [
    "$ show interests",
    "> Cybersecurity",
    "> Web development",
    "> Purple team concepts",
    "> Clean UI/UX design",
    "> Learning new tools"
  ],

};

const subResponses = {
  esports: [
    "$ show esports",
    "> Try out for comp teams",
    "> Improve elo/rank",
    "> Build a twitch following",
    "> Become consistent with KBM",
    "> Compete in tournaments"
  ],

  fashion: [
    "$ show fashion",
    "> Build a digital canvas of fashion inspo",
    "> Become versatile with different styles",
    "> Learn to sew & make personal pieces",
    "> Build a strong IG presense",
    "> Create a clothing brand in the future"
  ],

  music: [
    "$ show music",
    "> Start & find my own sound",
    "> Learn more about production",
    "> Build a small home studio",
    "> Sell some beats online",
    "> (Hopefully) produce for some artists"
  ]
};

// MAIN BUTTONS
document.querySelectorAll(".terminal-buttons button").forEach(btn => {
  btn.addEventListener("click", () => {
    const cmd = btn.dataset.command;

    aboutOutput.textContent = responses[cmd].join("\n");

    // Show sub-buttons ONLY for goals
    if (cmd === "goals") {
      subButtons.style.display = "flex";
    } else {
      subButtons.style.display = "none";
    }
  });
});

// SUB BUTTONS
document.querySelectorAll(".sub-buttons button").forEach(btn => {
  btn.addEventListener("click", () => {
    const sub = btn.dataset.sub;
    aboutOutput.textContent = subResponses[sub].join("\n");
  });
});
