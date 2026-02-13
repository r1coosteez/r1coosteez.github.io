document.addEventListener('pointerdown', e=>{
  const title = e.target.closest('.title');
  if(!title) return;
  const win = title.closest('.r2window');
  win.style.cursor='grabbing';
  const rect = win.getBoundingClientRect();
  const startX = e.clientX, startY = e.clientY;
  const offsetX = startX - rect.left, offsetY = startY - rect.top;
  function move(ev){
    win.style.left = (ev.clientX - offsetX) + 'px';
    win.style.top = (ev.clientY - offsetY) + 'px';
  }
  function up(){
    document.removeEventListener('pointermove', move);
    document.removeEventListener('pointerup', up);
    win.style.cursor='';
  }
  document.addEventListener('pointermove', move);
  document.addEventListener('pointerup', up);
});
