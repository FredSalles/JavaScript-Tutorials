//
// Variables
//
var count = 0;

//
// Body onload
//
function load() {
    var board = document.getElementById("board"); 
    for (var row=0; row<=2; ++row) {
        for (var col=0; col<=2; ++col) {
            var element = document.createElement("div"); 
            var id = col*10 + row;
            element.id = id;
            element.className = "cell";
            element.style.top = 10 + row * 90;
            element.style.left = 10 + col * 90;
            element.onclick = new Function("onclick(this)");
            board.appendChild(element);
        }
    }
}

//
// ClassName update
//
function update(type, id) {
    var element = document.getElementById(type + id);
    element.className = type;
}

//
// Board cleanup
//
function cleanup() {
    var board = document.getElementById("board");
    var children = board.children;
    for (var i = 0; i < children.length; ++i) {
        children[i].style["opacity"] = 0;
        children[i].style["-webkit-transition-property"] = "opacity, -webkit-transform";
        children[i].style["-webkit-transition-duration"] = 5000 * Math.random() + 'ms';
        children[i].style["-webkit-transform"] = "translateY(300%)";
        children[i].style.webkitAnimationDelay = 2000 * Math.random() + 'ms';
    }
}

//
// Cell onCLick
//
function onclick(source) {
    source.onclick = null;
    var id = source.id;
    var board = document.getElementById("board"); 
    var element = document.createElement("div");
    var col = Math.floor(id / 10);
    var row = (id % 10);
    if ((count % 2) == 0) {
        //
        // Circle
        //
        element.id = "circle" + id;
        element.className = "circle_origin";
        element.style.top = 57 - 90 + row * 90;
        element.style.left = 57 - 90 + col * 90;
        board.appendChild(element); 
        setTimeout('update("circle",'+ id +');', 0);
    } else {
        //
        // Cross
        //
        // First segment
        //
        element.id = "cross1" + id;
        element.className = "cross1_origin";
        element.style.top = 131 - 90 + row * 90;
        element.style.left = 88 - 90 + col * 90;
        board.appendChild(element);
        setTimeout('update("cross1",'+ id +');', 0);
        //
        // Second segment
        // 
        element = document.createElement("div");
        element.id = "cross2" + id;
        element.className = "cross2_origin";
        element.style.top = 131 - 90 + row * 90;
        element.style.left = 88 - 90 + col * 90;
        board.appendChild(element); 
        setTimeout('update("cross2",'+ id +');', 0);
    }
    
    if (++count == 9) {
        //
        // Board Cleanup
        //
        setTimeout('cleanup();', 1000);
    }
}
