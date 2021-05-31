var canvas = new fabric.Canvas("myCanvas");

block_width = 30;
block_height = 30;
player_x = 10;
player_y = 10;

player_obj = " ";
block_obj = " ";

function playerUpdate()
{
  fabric.Image.fromURL ("player.png", function (Img)
  {
    player_obj = Img;
    player_obj.scaleToWidth(150);
    player_obj.scaleToHeight(140);
    player_obj.set({top: player_y, left: player_x});
    canvas.add(player_obj);
  });
}

function new_image(get_image)
{
  fabric.Image.fromURL ( get_image, function (Img)
  {
    block_obj = Img;
    block_obj.scaleToWidth(block_width);
    block_obj.scaleToHeight(block_height);
    block_obj.set({top: player_y, left: player_x});
    canvas.add(block_obj);
  });
}

window.addEventListener("keydown", my_keydown)

function my_keydown(e)
{
  key_pressed = e.keyCode;
  console.log(key_pressed);

  if (e.shiftKey == true && key_pressed == "80")
  {
   console.log ("p and shift key have been pressed together");
   block_width = block_width + 10;
   block_height = block_height + 10;
   document.getElementById("current_width").innerHTML = block_width;
   document.getElementById("current_height").innerHTML = block_height;
  }

  if (e.shiftKey == true && key_pressed == "77")
  {
   console.log ("m and shift key have been pressed together");
   block_width = block_width - 10;
   block_height = block_height - 10;
   document.getElementById("current_width").innerHTML = block_width;
   document.getElementById("current_height").innerHTML = block_height;
  }

  if (key_pressed == '38')
  {
    up();
    console.log("up arrow");
  }

  if (key_pressed == '40')
  {
    down();
    console.log("down arrow");
  }

  if (key_pressed == '37')
  {
    left();
    console.log("left arrow");
  }

  if (key_pressed == '39')
  {
    right();
    console.log("right arrow");
  }

  if (key_pressed == '84')
  {
    //t is pressed, it is a trunk block
    new_image("trunk.jpg");
    console.log("trunk block");
  }

  if (key_pressed == '67')
  {
    //c is pressed, its a clay block
    new_image("cloud.jpg");
    console.log("clay block");
  }

  if (key_pressed == '68')
  {
    //d is pressed, its a dark green wool block
    new_image("dark_green.png");
    console.log("dark green wool block");
  }

  if (key_pressed == '70')
  {
    //f is pressed, its a dirt block
    new_image("ground.png");
    console.log("dirt block");
  }

  if (key_pressed == '76')
  {
    //l is pressed, its a light green wool block
    new_image("light_green.png");
    console.log("light green wool block");
  }

  if (key_pressed == '78')
  {
    //n is pressed, its a netherite block
    new_image("roof.jpg");
    console.log("netherite block");
  }

  if (key_pressed == '71')
  {
    //g is pressed, its a glowstone block
    new_image("unique.png");
    console.log("glowstone block");
  }

  if (key_pressed == '66')
  {
    //b is pressed, its a brick block
    new_image("wall.jpg");
    console.log("brick block");
  }

  if (key_pressed == '89')
  {
    //y is pressed, its a yellow brick block
    new_image("yellow_wall.png");
    console.log("yellow brick block");
  }

  if (key_pressed == '87')
  {
    //w is pressed, its a eraser block
    new_image("white.png");
    console.log("eraser block");
  }
}

function up()
{
  if (player_y >= 20)
  {
    player_y = player_y - block_height;
    console.log ("block's height is " + block_height);
    console.log ("when up is pressed, x = " + player_x + ", y = " + player_y);
    canvas.remove(player_obj);
    playerUpdate();
  }
}

function down()
{
  if (player_y <= 450)
  {
    player_y = player_y + block_height;
    console.log ("block's height is " + block_height);
    console.log ("when down is pressed, x = " + player_x + ", y = " + player_y);
    canvas.remove(player_obj);
    playerUpdate();
  }
}

function left()
{
  if (player_x >= 5)
  {
    player_x = player_x - block_width;
    console.log ("block's width is " + block_width);
    console.log ("when left is pressed, x = " + player_x + ", y = " + player_y);
    canvas.remove(player_obj);
    playerUpdate();
  }
}

function right()
{
  if (player_x <= 840)
  {
    player_x = player_x + block_width;
    console.log ("block's width is " + block_width);
    console.log ("when left is pressed, x = " + player_x + ", y = " + player_y);
    canvas.remove(player_obj);
    playerUpdate();
  }
}