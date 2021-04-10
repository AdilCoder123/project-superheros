var canvas = new fabric.Canvas('mycanvas');

blockimagewidth = 30;
blockimageheight = 30;

superherox=10;
superheroy=10;

var playerobject="";


function player_uptade()
{
   fabric.Image.fromURL("groot.png",function(Img) {
    playerobject=Img;

  
playerobject.scaleToWidth(150);
playerobject.scaleToWidth(140);
playerobject.set({

    top:playery,
    left:playerx
});

canvas.add(playerobject);

   });
}


function new_image(get_image)
{
    fabric.Image.fromURL(get_image,function(Img) {
       blockimageobject=Img;
    
       blockimageobject.scaleToWidth(blockimagewidth);
       blockimageobject.scaleToWidth(blockimageheight);
       blockimageobject.set({
       
           top:superheroy,
           left:superherox
       });
       
       canvas.add(blockimageobject);
       
          });
       }

       window.addEventListener("keydown",my_keydown);

       function my_keydown(e)
       {
           keyPressed= e.keyCode;
           console.log(keyPressed);

           if (e.shiftKey==true&& keyPressed=='80')
           {
               console.log("p+shift");
               blockimagewidth=blockimagewidth+10;
               blockimageheight=blockimageheight+10;
               document.getElementById("currunt-width").innerHTML=blockimagewidth;
               document.getElementById("curent_height").innerHTML=blockimageheight;
           }

           if (e.shiftKey==true&& keyPressed=='77')
           {
               console.log("m+shift");
               blockimagewidth=blockimagewidth-10;
               blockimageheight=blockimageheight-10;
               document.getElementById("currunt-width").innerHTML=blockimagewidth;
               document.getElementById("curent_height").innerHTML=blockimageheight;
           }

         if (keyPressed=='38') 
         {
             up();
         } 

         if (keyPressed=='40') 
         {
             down();
         } 

         if (keyPressed=='39') 
         {
             right();
         } 

         if (keyPressed=='37') 
         {
             left();
         }
         
         



         if (keyPressed=='65') 
         {
             new_image('ironman_body.png');
         } 


         if (keyPressed=='66') 
         {
             new_image('ironman_face.png');
         }
         
         if (keyPressed=='67') 
         {
            new_image('ironman_left_hand.png');
         }
         
         if (keyPressed=='68') 
         {
            new_image('ironman_right_hand.png');
         }
         if (keyPressed=='69') 
         {
            new_image('ironman_legs.png');
         }
         
         if (keyPressed=='70') 
         {
            new_image('hulk_face.png');
         }

         if (keyPressed=='71') 
         {
            new_image('hulk_left_hand.png');
         }

         if (keyPressed=='72') 
         {
            new_image('hulk_right_hand.png');
         }

         if (keyPressed=='73') 
         {
            new_image('hulk_legs.png');
         }

         if (keyPressed=='74') 
         {
            new_image('hulkd_body.png');
         }

         if (keyPressed=='75') 
         {
            new_image('spiderman_body.png');
         }

         if (keyPressed=='76') 
         {
            new_image('spiderman_face.png');
         }


         if (keyPressed=='77') 
         {
            new_image('spiderman_left_hand.png');
         }


         if (keyPressed=='78') 
         {
            new_image('spiderman_right_hand.png');
         }

         if (keyPressed=='79') 
         {
            new_image('spiderman_legs.png');
         }
         

         if (keyPressed=='81') 
         {
            new_image('thor_face.png');
         }

         if (keyPressed=='82') 
         {
            new_image('thor_left_hand.png');
         }


         if (keyPressed=='83') 
         {
            new_image('thor_right_hand.png');
         }


         if (keyPressed=='84') 
         {
            new_image('captain_america_left_hand.png');
         }

       }
       

       
