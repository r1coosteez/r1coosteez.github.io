document.addEventListener('DOMContentLoaded', ()=>{
  term.init('#r2terminal');
});
function createTerminalWindow(){
  const desktop = document.querySelector('.r2desktop');
  desktop.insertAdjacentHTML('beforeend', terminalHtmlString);
  Terminal.init('#r2terminal');
}
