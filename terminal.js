// js/terminal.js
const Terminal = (function(){
  let root = null;
  let outputEl = null;
  let inputEl = null;

  function init(selector){
    root = document.querySelector(selector);
    if(!root) {
      console.warn('Terminal.init: root not found', selector);
      return;
    }
    outputEl = root.querySelector('.terminal-output');
    inputEl = root.querySelector('input');
    print("r2OS Terminal ready. Type 'help'.");
    bindInput();
  }

  function bindInput(){
    if(!inputEl) return;
    inputEl.addEventListener('keydown', e=>{
      if(e.key === 'Enter'){
        const raw = inputEl.value.trim();
        inputEl.value = '';
        if(!raw) return;
        print(`$ ${raw}`);
        run(raw);
      }
    });
  }

  function print(text){
    if(!outputEl) return;
    outputEl.textContent += text + '\n';
    root.scrollTop = root.scrollHeight;
  }

  function run(raw){
    const [cmd, ...args] = raw.split(' ');
    switch(cmd){
      case 'help':
        print("Commands: help about skills projects ls open clear");
        break;
      case 'about':
        print("Mario — Cyber dev. Arch enthusiast.");
        break;
      case 'ls':
        print("/cyber  /beats  /fashion");
        break;
      case 'open':
        if(args[0]) {
          print(`Opening ${args[0]}...`);
          // Example integration point:
          // windowManager.open(args[0]);
        } else print("Usage: open <name>");
        break;
      case 'clear':
        outputEl.textContent = '';
        break;
      default:
        print(`${cmd}: command not found`);
    }
  }

  return { init, run, print };
})();

