class Pared{


     setup() {
      
      
      tierra1 = createSprite(50,150,100,1500);
      tierra1.shapeColor = "red";
   
      tierra2 = createSprite(1200,700,70,70);
      tierra2.shapeColor = "blue";
       
      tierra3 = createSprite(660,28,760,50);
      tierra3.shapeColor = "black";
       
      tierra4 = createSprite(655,90,30,400);
      tierra4.shapeColor = "green";
   
      tierra5 = tierra5= createSprite(300,200,40,300);
      tierra5.shapeColor = "yellow";
   
      tierra6= createSprite(1300,100,60,500);
      tierra6.shapeColor = "ilver";
   
      tierra7= createSprite(390,600,65,90);
      tierra7.shapeColor = "orange";
   
      tierra8= createSprite(630,700,60,90);
      tierra8.shapeColor = "grey";
   
      tierra9 = createSprite(600,570,600,30);
      tierra9.shapeColor = "hotpink";
   
      tierra10 = createSprite(1070,600,40,250);
      tierra10.shapeColor = "olive";
   
     tierra11 = createSprite(200,20,70,70);
      tierra11.shapeColor = "purple";
   
      tierra12 = createSprite(500,330,80,300);
      tierra12.shapeColor = "blue";
   
      tierra13= createSprite(370,315,20,50);
      tierra13.shapeColor = "sky blue";
   
      tierra14= createSprite(340,450,600,50);
      tierra14.shapeColor = "lime";
   
      tierra15= createSprite(600,750,1000,50);
      tierra15.shapeColor = "violet";
   
      tierra16= createSprite(800,400,50,300);
      tierra16.shapeColor = "navy";
   
      tierra17= createSprite(820,600,60,90);
      tierra17.shapeColor = "ivory";
   
      tierra18= createSprite(1300,590,30,400);
      tierra18.shapeColor = "gold";
   
      tierra19= createSprite(1200,0,300,25);
      tierra19.shapeColor = "magenta";
   
      tierra20= createSprite(1050,25,30,300);
      tierra20.shapeColor = "cyan";
   
      tierra21= createSprite(1200,370,300,30);
      tierra21.shapeColor = "coral";

      
      tierrasGroup = new Group;
     }
      

      display(){
        background(rgb(198,135,103));
        tierra1.display();
        tierra2.display();
        tierra3.display();
        tierra4.display();
        tierra5.display();
        tierra6.display();
        tierra7.display();
        tierra8.display();
        tierra9.display();
        tierra10.display();
        tierra11.display();
        tierra12.display();
        tierra13.display();
        tierra14.display();
        tierra15.display();
        tierra16.display();
        tierra17.display();
        tierra18.display();
        tierra19.display();
        tierra20.display();
        tierra21.display();
      
        tierrasGroup.add(tierra1);
        tierrasGroup.add(tierra2);
        tierrasGroup.add(tierra3);
        tierrasGroup.add(tierra4);
        tierrasGroup.add(tierra5);
        tierrasGroup.add(tierra6);
        tierrasGroup.add(tierra7);
        tierrasGroup.add(tierra8);
        tierrasGroup.add(tierra9);
        tierrasGroup.add(tierra10);
        tierrasGroup.add(tierra11);
        tierrasGroup.add(tierra12);
        tierrasGroup.add(tierra13);
        tierrasGroup.add(tierra14);
        tierrasGroup.add(tierra15);
        tierrasGroup.add(tierra16);
        tierrasGroup.add(tierra17);
        tierrasGroup.add(tierra18);
        tierrasGroup.add(tierra19);
        tierrasGroup.add(tierra20);
        tierrasGroup.add(tierra21);
        drawSprites();  
      }
    };
