var bg1,bg1I;
var appState=0;
var startBut;
var eng,hin,rus,chi,jap,spa,ara,ger;
var butBack;
var output1;
var output2;
var finalText1="";   
var finalText2="";   
var engChose=true;
var hindChose=true;
function preload(){
bg1=loadImage("whitte.jpeg");

}
function setup(){
createCanvas(displayWidth+0.3,displayHeight-180);


output1=createElement();
output2=createElement();

startBut=createButton('LET\'S START')
startBut.size(250,50);
startBut.style('background','yellow')

  eng=createButton('ENGLISH')
  eng.size(250,50);
  eng.style('background','yellow')

  hin=createButton('HINDI')
  hin.size(250,50);
  hin.style('background','yellow')

  chi=createButton('CHINESE')
  chi.size(250,50);
  chi.style('background','yellow')

  jap=createButton('JAPANESE')
  jap.size(250,50);
  jap.style('background','yellow')

  spa=createButton('SPANISH')
  spa.size(250,50);
  spa.style('background','yellow')

  rus=createButton('RUSSIAN')
  rus.size(250,50);
  rus.style('background','yellow')

  ara=createButton('ARABIC')
  ara.size(250,50);
  ara.style('background','yellow')

  ger=createButton('GERMAN')
  ger.size(250,50);
  ger.style('background','yellow')
 
  eng.hide();
  hin.hide();
  spa.hide();
  jap.hide();
  rus.hide();
  chi.hide();
  ara.hide();
  ger.hide();

  butBack=createButton('BACK');
  butBack.position(width/2-700,height/2-320);
  butBack.size(130,50);
  butBack.style('background','yellow');
 
  butBack.hide();

 
}
function draw(){
if(appState===0){
  background(bg1);
 startBut.position(width/2-180,height/2+30);
  textSize(60);
  fill("yellow");
  stroke("yellow")
  strokeWeight(2);
  text("BY USING THIS APP, YOU CAN CONVERT SPEECH",width/2-715,height/2-170)
  text("INTO TEXT IN 8 DIFFERENT LANGUAGES",width/2-580,height/2-70)

  startBut.mousePressed(()=>{
    appState=1;
  })
}
if(appState===1){
  background(bg1);
  startBut.hide();

  eng.show();
  hin.show();
  spa.show();
  jap.show();
  rus.show();
  chi.show();
  ara.show();
  ger.show();

  eng.position(width/2-330,height/2-50);
  hin.position(width/2-330,height/2+10);
  spa.position(width/2-330,height/2+70);
  ara.position(width/2-330,height/2+130);

  jap.position(width/2+30,height/2-50);
  rus.position(width/2+30,height/2+10);
  chi.position(width/2+30,height/2+70);
  ger.position(width/2+30,height/2+130);

  textSize(52);
  fill("yellow");
  stroke("yellow")
  strokeWeight(1.7);
  text("CHOOSE THE LANGUAGE IN WHICH THE SPEECH",width/2-635,height/2-230)
  text("IS TO BE TRANSLATED",width/2-330,height/2-150)

  eng.mousePressed(()=>{
    appState=2;
  })
  hin.mousePressed(()=>{
    appState=3;
  })
  rus.mousePressed(()=>{
    appState=4;
  })
  spa.mousePressed(()=>{
    appState=5;
  })
  chi.mousePressed(()=>{
    appState=6;
  })
  jap.mousePressed(()=>{
    appState=7;
  })
  ara.mousePressed(()=>{
    appState=8;
  })
  ger.mousePressed(()=>{
    appState=9;
  })

}
if(appState===2 || appState===3 || appState===4 || appState===5 || appState===6 || appState===7 || appState===8 || appState===9){
  eng.hide();
  hin.hide();
  spa.hide();
  jap.hide();
  rus.hide();
  chi.hide();
  ara.hide();
  ger.hide();
}
if(appState===2){
  if(engChose)
  { english();}
   engChose=false;
  background(bg1);
  textSize(52);
  fill("yellow");
  stroke("yellow") 
  strokeWeight(1.7); 
  text("SPEECH TO                  TEXT",displayWidth/2-400,150)
  fill(random(0,255),100,random(0,255))
  
  stroke("black")
  strokeWeight(2)
  text(" ENGLISH",displayWidth/2-100,150)
  text("SPEAK ! ",displayWidth/2-170,220) 

  butBack.show();

  butBack.mousePressed(()=>{
    appState=10;
  })
  output1.position(displayWidth/2-450,280);
 line(width/2-500,50,width/2-500,815)
}
if(appState===3){
  if(hindChose){
    hindi();
  }
  hindChose=false;
  background(bg1);
  textSize(52);
  fill("yellow");
  stroke("yellow") 
  strokeWeight(1.7); 
  text("SPEECH TO            TEXT",displayWidth/2-400,150)
  fill(random(0,255),100,random(0,255))
  
  stroke("black")
  strokeWeight(2)
  text(" HINDI",displayWidth/2-100,150)
  text("SPEAK ! ",displayWidth/2-170,220) 

  butBack.show();

  butBack.mousePressed(()=>{
    appState=10;
  })
  output2.position(displayWidth/2-450,280);
  line(width/2-500,50,width/2-500,815)

}
if(appState===4){
  background(bg1);
  textSize(52);
  fill("yellow");
  stroke("yellow") 
  strokeWeight(1.7); 
  text("SPEECH TO                  TEXT",displayWidth/2-400,150)
  fill(random(0,255),100,random(0,255))
  
  stroke("black")
  strokeWeight(2)
  text(" RUSSIAN",displayWidth/2-100,150)
  text("SPEAK ! ",displayWidth/2-170,220) 

  butBack.show();

  butBack.mousePressed(()=>{
    appState=10;
  })
  line(width/2-500,50,width/2-500,815)

}
if(appState===5){
  background(bg1);
  textSize(52);
  fill("yellow");
  stroke("yellow") 
  strokeWeight(1.7); 
  text("SPEECH TO                  TEXT",displayWidth/2-400,150)
  fill(random(0,255),100,random(0,255))
  
  stroke("black")
  strokeWeight(2)
  text(" SPANISH",displayWidth/2-100,150)
  text("SPEAK ! ",displayWidth/2-170,220) 

  butBack.show();

  butBack.mousePressed(()=>{
    appState=10;
  })
  line(width/2-500,50,width/2-500,815)

}
if(appState===6){
  background(bg1);
  textSize(52);
  fill("yellow");
  stroke("yellow") 
  strokeWeight(1.7); 
  text("SPEECH TO                  TEXT",displayWidth/2-400,150)
  fill(random(0,255),100,random(0,255))
  
  stroke("black")
  strokeWeight(2)
  text(" CHINESE",displayWidth/2-100,150)
  text("SPEAK ! ",displayWidth/2-170,220) 

  butBack.show();

  butBack.mousePressed(()=>{
    appState=10;
  })
  line(width/2-500,50,width/2-500,815)
}
if(appState===7){
  background(bg1);
  textSize(52);
  fill("yellow");
  stroke("yellow") 
  strokeWeight(1.7); 
  text("SPEECH TO                     TEXT",displayWidth/2-400,150)
  fill(random(0,255),100,random(0,255))
  
  stroke("black")
  strokeWeight(2)
  text(" JAPANESE",displayWidth/2-100,150)
  text("SPEAK ! ",displayWidth/2-170,220) 

  butBack.show();

  butBack.mousePressed(()=>{
    appState=10;
  })
  line(width/2-500,50,width/2-500,815)
}
if(appState===8){
  background(bg1);
  textSize(52);
  fill("yellow");
  stroke("yellow") 
  strokeWeight(1.7); 
  text("SPEECH TO               TEXT",displayWidth/2-400,150)
  fill(random(0,255),100,random(0,255))
  
  stroke("black")
  strokeWeight(2)
  text(" ARABIC",displayWidth/2-100,150)
  text("SPEAK ! ",displayWidth/2-170,220) 

  butBack.show();

  butBack.mousePressed(()=>{
    appState=10;
  })
  line(width/2-500,50,width/2-500,815)
}
if(appState===9){
  background(bg1);
  textSize(52);
  fill("yellow");
  stroke("yellow") 
  strokeWeight(1.7); 
  text("SPEECH TO                  TEXT",displayWidth/2-400,150)
  fill(random(0,255),100,random(0,255))
  
  stroke("black")
  strokeWeight(2)
  text(" GERMAN",displayWidth/2-100,150)
  text("SPEAK ! ",displayWidth/2-170,220) 

  butBack.show();

  butBack.mousePressed(()=>{
    appState=10;
  })
  line(width/2-500,50,width/2-500,815)
}
if(appState===10){
butBack.hide();
appState=1;
}
}
async function english(){
  console.log("eng")

  speechRec=new p5.SpeechRec('en-US',gotSpeech);
  let continuous=true;
  let interimResults=false;

  speechRec.start(continuous,interimResults);

  function gotSpeech(){                    
  var finalText="";     
  var said=speechRec.resultString;              
  if(appState===2 ){                             
     finalText1=finalText1.concat(" "+said);       
  }                                               
    console.log(speechRec);                      
    output1.html(finalText1);                 
    output1.class("out");                         
  }
}
function hindi(){
  console.log("hindi")
  speechRec=new p5.SpeechRec('hi-IN',gotSpeech);
  let continuous=true;
  let interimResults=false;

  speechRec.start(continuous,interimResults);

  function gotSpeech(){                      
    var said=speechRec.resultString;              
    if(appState===3){                             
      finalText2=finalText2.concat(" "+said);       
    }                                               
      console.log(speechRec);                      
      output2.html(finalText2);                 
      output2.class("out");                         
    }
}

function spanish(){
  speechRec=new p5.SpeechRec('es-SP',gotSpeech);
  let continuous=true;
  let interimResults=false;

  speechRec.start(continuous,interimResults);
  let output=select('#speech');

  function gotSpeech(){
  console.log(speechRec);
  if(speechRec.resultvalue){
    var said=speechRec.resultString;
    output.html(said);
  }
}
}
function chinese(){
  speechRec=new p5.SpeechRec('ch-CH',gotSpeech);
  let continuous=true;
  let interimResults=false;

  speechRec.start(continuous,interimResults);
  let output=select('#speech');

  function gotSpeech(){
  console.log(speechRec);
  if(speechRec.resultvalue){
    var said=speechRec.resultString;
    output.html(said);
  }
}
}
function japanese(){
  speechRec=new p5.SpeechRec('ja-JP',gotSpeech);
  let continuous=true;
  let interimResults=false;

  speechRec.start(continuous,interimResults);
  let output=select('#speech');

  function gotSpeech(){
  console.log(speechRec);
  if(speechRec.resultvalue){
    var said=speechRec.resultString;
    output.html(said);
  }
}
}

function arabic(){
  speechRec=new p5.SpeechRec('ar-AR',gotSpeech);
  let continuous=true;
  let interimResults=false;

  speechRec.start(continuous,interimResults);
  let output=select('#speech');

  function gotSpeech(){
  console.log(speechRec);
  if(speechRec.resultvalue){
    var said=speechRec.resultString;
    output.html(said);
  }
}
}
function russian(){
  speechRec=new p5.SpeechRec('ru-RU',gotSpeech);
  let continuous=true;
  let interimResults=false;

  speechRec.start(continuous,interimResults);
  let output=select('#speech');

  function gotSpeech(){
  console.log(speechRec);
  if(speechRec.resultvalue){
    var said=speechRec.resultString;
    output.html(said);
  }
}
}
function german(){
  speechRec=new p5.SpeechRec('de-DE',gotSpeech);
  let continuous=true;
  let interimResults=false;

  speechRec.start(continuous,interimResults);
  let output=select('#speech');

  function gotSpeech(){
  console.log(speechRec);
  if(speechRec.resultvalue){
    var said=speechRec.resultString;
    output.html(said);
  }
}
}

