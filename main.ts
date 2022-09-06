input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Sixteenth))
    sprite.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    music.playTone(220, music.beat(BeatFraction.Sixteenth))
    sprite.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    music.playTone(175, music.beat(BeatFraction.Sixteenth))
    sprite.move(1)
})
input.onGesture(Gesture.Shake, function () {
    music.playTone(147, music.beat(BeatFraction.Sixteenth))
    if (enemy) {
    	
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.playTone(330, music.beat(BeatFraction.Sixteenth))
    sprite.change(LedSpriteProperty.Y, -1)
})
let enemy_x = 0
let enemy_y = 0
let enemy: game.LedSprite = null
let sprite: game.LedSprite = null
music.setVolume(0)
sprite = game.createSprite(2, 2)
basic.forever(function () {
    enemy_y = randint(0, 5)
    enemy_x = randint(0, 5)
    music.rest(music.beat(BeatFraction.Breve))
    music.rest(music.beat(BeatFraction.Breve))
    music.rest(music.beat(BeatFraction.Breve))
    enemy = game.createSprite(enemy_x, enemy_y)
})
basic.forever(function () {
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(131, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(175, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Double))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Half))
})
