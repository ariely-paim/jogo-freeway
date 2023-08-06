//código do ator
let xAtor = 85;
let yAtor = 366;
var colisao = false;

//pontos
let meusPontos = 0;

function mostraAtor(){
  image(imagemAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(moveAtor()){
      yAtor += 3;      
    }

  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for(let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if(colisao){
      retornPosicaoInicialAtor();
      somColisao.play();
      if(pontosPositivos()){
        meusPontos -= 1;
      }
    }
  }
}

function retornPosicaoInicialAtor(){
  yAtor = 366;
}

function incluiPontos(){
  fill(color(255, 255, 0));
  textAlign(CENTER);
  textSize(25);
  text(meusPontos, width/5, 27)
}

function marcaPontos(){
  if(yAtor < 15){
    meusPontos += 1;
    somPonto.play();
    retornPosicaoInicialAtor();
  }
}

function pontosPositivos(){
  return meusPontos > 0;
}

function moveAtor(){
  return yAtor < 366;
}