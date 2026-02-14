let highestZ = 10;

function openWindow(id) {
    const windows = document.querySelectorAll('.window');
    
    windows.forEach(win => {
        win.classList.remove('active');
    });

    const targetWin = document.getElementById(id);
    if (targetWin) {
        targetWin.classList.add('active');
        targetWin.style.display = 'flex'; 
        
        highestZ++;
        targetWin.style.zIndex = highestZ;

        if (!targetWin.dataset.dragInit) {
            makeDraggable(targetWin);
            targetWin.dataset.dragInit = 'true';
        }
    } 
} // 

function makeDraggable(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    
    // Find the title bar (handle) inside the window
    const header = elmnt.querySelector('.title, .title-bar');

    if (header) {
        // FIXED: changed DragMouseDown to dragMouseDown (lowercase d)
        header.onmousedown = dragMouseDown; 
    }

    function dragMouseDown(e) {
        e.preventDefault();
        highestZ++;
        elmnt.style.zIndex = highestZ;
        
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

       function elementDrag(e) {
        e.preventDefault();
        // Calculate the new cursor position
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // Set the element's new position
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // Stop moving when mouse button is released
        document.onmouseup = null;
        document.onmousemove = null;
    }
} // <--- This curly bracket closes the entire makeDraggable function

// This tells the OS to make any window already on screen draggable immediately
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.window.active').forEach(win => {
        makeDraggable(win); // No arrow function needed here, just the name
    });
});
