var canvas= new fabric.Canvas('myCanvas');
playerX= 10;
playerY= 10;
blockWidth= 30;
blockHeight= 30;
playerobject= "";
blockobject= "";
function player(){
    fabric.Image.fromURL("player.png",function(Img){
       playerobject= Img;
       playerobject.scaleToWidth(150);
       playerobject.scaleToHeight(150);
       playerobject.set({
           top:playerY,
           left:playerX
       });
       canvas.add(playerobject);
    });
} 
function block(getimage){
    fabric.Image.fromURL(getimage,function(Img){
       blockobject= Img;
       blockobject.scaleToWidth(blockWidth);
       blockobject.scaleToHeight(blockHeight);
       blockobject.set({
           top:playerY,
           left:playerX
       });
       canvas.add(blockobject);  
    });
} 
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(e.shiftKey == true && keyPressed == '80')
{
console.log("p and shift pressed together");
blockWidth = blockWidth + 10;
blockHeight = blockHeight + 10;
document.getElementById("width").innerHTML = blockWidth;
document.getElementById("height").innerHTML = blockHeight;
}
if(e.shiftKey && keyPressed == '77')
{
console.log("m and shift pressed together");
blockWidth = blockWidth - 10;
blockHeight = blockHeight - 10;
document.getElementById("width").innerHTML = blockWidth;
document.getElementById("height").innerHTML = blockHeight;
}

if(keyPressed == '38')
{
up();
console.log("up");
}
if(keyPressed == '40')
{
down();
console.log("down");
}
if(keyPressed == '37')
{
left();
console.log("left");
}
if(keyPressed == '39')
{
right();
console.log("right");
}
if(keyPressed == '87')
{
block('wall.jpg');
console.log("w");
}
if(keyPressed == '71')
{
block('ground.png');
console.log("g");
}
if(keyPressed == '76')
{
block('light_green.png');
console.log("l");
}
if(keyPressed == '84')
{
block('trunk.jpg');
console.log("t");
}
if(keyPressed == '82')
{
block('roof.jpg');
console.log("r");
}
if(keyPressed == '89')
{
block('yellow_wall.png');
console.log("y");
}
if(keyPressed == '68')
{
new_image('dark_green.png');
console.log("d");
}
if(keyPressed == '85')
{
block('unique.png');
console.log("u");
}
if(keyPressed == '67')
{
block('cloud.jpg');
console.log("c");
}

}
function up()
{
if(playerY >=0)
{
playerY = playerY - blockHeight;
console.log("block image height = " + blockHeight);
console.log("When Up arrow key is pressed, X =  " + playerX+ " , Y = "+playerY);
canvas.remove(playerobject);
player();
}
}

function down()
{
if(playerY <=500)
{
playerY = playerY + blockHeight;
console.log("block image height = " + blockHeight);
console.log("When Down arrow key is pressed, X =  " + playerX + " , Y = "+playerY);
canvas.remove(playerobject);
player();
}
}

function left()
{
if(playerX >0)
{
playerX = playerX - blockWidth;
console.log("block image width = " + blockWidth);
console.log("When Left arrow key is pressed, X =  " + playerX + " , Y = "+playerY);
canvas.remove(playerobject);
player();
}
}

function right()
{
if(playerX <=850)
{
playerX = playerX + blockWidth;
console.log("block image width = " + blockWidth);
console.log("When Right arrow key is pressed, X =  " + playerX + " , Y = "+playerY);
canvas.remove(playerobject);
player();
}
}
