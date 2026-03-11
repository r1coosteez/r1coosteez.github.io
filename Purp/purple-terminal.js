const lines = [
  "[ATTACK] 10.0.2.5 → Sending SYN to 10.0.2.6:21",
  "[ATTACK] Response from 10.0.2.6: SYN/ACK — port 21 OPEN",
  "[ATTACK] 10.0.2.5 → Sending SYN to 10.0.2.6:22",
  "[ATTACK] Response from 10.0.2.6: RST — port 22 CLOSED",
  "[ATTACK] 10.0.2.5 → Scanning multiple ports on 10.0.2.6...",
  "",
  "[DETECTION] Wireshark capture: multiple SYN packets from 10.0.2.5",
  "[DETECTION] Pattern matches port scan behavior",
  "",
  "[DEFENSE] Logging suspicious activity",
  "[DEFENSE] Blocking source IP 10.0.2.5",
  "[DEFENSE] Alert sent to analyst"
];

const outputEl = document.getElementById("terminal-output");

let lineIndex = 0;
let charIndex = 0;
let currentLine = "";
let isTyping = false;

function typeNextChar() {
  if (!isTyping) return;
  if (charIndex < lines[lineIndex].length) {
    currentLine += lines[lineIndex][charIndex];
    renderOutput();
    charIndex++;
    setTimeout(typeNextChar, 25);
  } else {
    currentLine += "\n";
    renderOutput();
    isTyping = false;
    lineIndex++;
    if (lineIndex < lines.length) {
      setTimeout(startNextLine, 400);
    }
  }
}

function startNextLine() {
  currentLine = "";
  charIndex = 0;
  isTyping = true;
  typeNextChar();
}

function renderOutput() {
  const allText =
    lines.slice(0, lineIndex).join("\n") + "\n" + currentLine;
  outputEl.textContent = allText.trimStart();
  outputEl.scrollTop = outputEl.scrollHeight;
}

window.addEventListener("load", () => {
  startNextLine();
});
