var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var sofia = createSprite(20, 25, 18, 18);
sofia.shapeColor = ("black")


var parede = createSprite(10, 70, 100, 20);
var parede1 = createSprite(100, 50, 20, 100);
var parede2 = createSprite(30, 140, 100, 20);
var parede3 = createSprite(45, 260, 20, 100);
var parede4 = createSprite(180, 100, 20, 100);
var parede5 = createSprite(130, 190, 100, 20);
var parede6 = createSprite(190, 250, 100, 20);
var parede7 = createSprite(240, 160, 20, 100);
var parede8 = createSprite(265, 25, 100, 20);
var parede9 = createSprite(260, 305, 100, 20);
var parede11 = createSprite(350, 75, 100, 20);
var parede12 = createSprite(316, 215, 20, 100);
var parede13 = createSprite(25, 340, 100, 20);
var parede14 = createSprite(140, 350, 20, 100);
var parede15 = createSprite(290, 395, 20, 100);
var parede16 = createSprite(395, 320, 100, 20);
var parede17 = createSprite(400, 390, 20, 100);
var parede18 = createSprite(385, 120, 100, 20);
var parede19 = createSprite(200, 390, 20, 100);
var parede20 = createSprite(350, 430, 20, 100);
var parede21 = createSprite(90, 430, 20, 100);
var parede22 = createSprite(90, 275, 20, 50);







function draw() {
background("white");
drawSprites();

text("sofia", 40, 25);
textSize(15);
textFont("Arial");
textAlign(LEFT);


text("Objetivo", 330, 352);
textSize(15);
textFont("Arial");
textAlign(RIGHT);


if (keyDown("d")) {
  sofia.x = sofia.x +2;
}
if (keyDown("a")) {
  sofia.x = sofia.x -2;
}
if (keyDown("w")) {
  sofia.y = sofia.y -2;
}
if (keyDown("s")) {
  sofia.y = sofia.y +2;
}
if (sofia.collide(parede)) {
  sofia.x = 20;
  sofia.y = 25;
}
if (sofia.collide(parede1)) {
  sofia.x = 20;
  sofia.y = 25;
}
if (sofia.collide(parede2)) {
  sofia.x = 20;
  sofia.y = 25;
}
if (sofia.collide(parede3)) {
  sofia.x = 20;
  sofia.y = 25;
}
if (sofia.collide(parede4)) {
  sofia.x = 20;
  sofia.y = 25;
}
if (sofia.collide(parede5)) {
  sofia.x = 20;
  sofia.y = 25;
}
if (sofia.collide(parede6)) {
  sofia.x = 20;
  sofia.y = 25;
}
if (sofia.collide(parede7)) {
  sofia.x = 20;
  sofia.y = 25;
}
if (sofia.collide(parede8)) {
  sofia.x = 20;
  sofia.y = 25;
}
if (sofia.collide(parede9)) {
  sofia.x = 20;
  sofia.y = 25;
}
if (sofia.collide(parede11)) {
  sofia.x = 20;
  sofia.y = 25;
}
if (sofia.collide(parede12)) {
  sofia.x = 20;
  sofia.y = 25;
}
if (sofia.collide(parede13)) {
  sofia.x = 20;
  sofia.y = 25;
}
if (sofia.collide(parede14)) {
  sofia.x = 20;
  sofia.y = 25;
}
if (sofia.collide(parede15)) {
  sofia.x = 20;
  sofia.y = 25;
}
if (sofia.collide(parede16)) {
  sofia.x = 20;
  sofia.y = 25;
}
if (sofia.collide(parede18)) {
  sofia.x = 20;
  sofia.y = 25;
}
if (sofia.collide(parede19)) {
  sofia.x = 20;
  sofia.y = 25;
}
if (sofia.collide(parede20)) {
  sofia.x = 20;
  sofia.y = 25;
}
if (sofia.collide(parede21)) {
  sofia.x = 20;
  sofia.y = 25;
}
if (sofia.isTouching(parede17)) {
  text("Você Ganhou!", 220, 220);
  textFont("Arial");
  textSize(50);
  textAlign(CENTER);
}
createEdgeSprites();
sofia.bounceOff(edges);
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
