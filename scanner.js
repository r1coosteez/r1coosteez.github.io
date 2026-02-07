function scan() {
    const output = document.getElementById("output"); 
    const range = document.getElementById("range").value;

    if (!range) {
    output.textContent = "Please enter a network range."; 
    return;
    }

    output.textContent = 'Scanning ${range}...\n';

    setTimeout(() => {
    output.textContent += "\nDevices found:\n"; 
    output.textContent += "192.168.1.1 - aa:bb:cc:dd:ee:ff\n"; 
    output.textContent += "192.168.1.2 - 11:22:33:44:55:66\n"; 
    output.textContent += "192.168.1.3 - 77:88:99:aa:bb:cc\n";
    }, 1500);
}

function clearResults() {
    document.getElementById("output").textContent = "";
}
