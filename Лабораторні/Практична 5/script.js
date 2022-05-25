var elem = document.getElementById("t");
    t.onclick = function() {
        if(this.style.backgroundColor)
            this.style.backgroundColor = "";
        else
            this.style.backgroundColor = 'red';
    }

function zoomin(){
    var myImg = document.getElementById("city");
    var currWidth = myImg.clientWidth;
    if (currWidth ==2500) return false;
    else
    {
        myImg.style.width = (currWidth + 100) + "px";
    }
}

function zoomout(){
    var myImg = document.getElementById("city");
    var currWidth = myImg.clientWidth;
    if (currWidth ==100) return false;
    else
    {
        myImg.style.width = (currWidth - 100) + "px";
    }
}

function add() {
    var img = document.createElement("img");
    img.src = "lviv.jpg";
    var block = document.getElementById("lviv");
    block.appendChild(img);
}

function remove() {
    var image_x = document.getElementById("lviv");
    image_x.parentNode.removeChild(image_x);
}