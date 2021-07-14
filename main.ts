namespace SpriteKind {
    export const chest = SpriteKind.create()
    export const vehicle = SpriteKind.create()
}
function createLevel1 () {
    scene.setBackgroundColor(13)
    hero.setPosition(10, 10)
    boat = sprites.create(assets.image`boatImg`, SpriteKind.vehicle)
    boat.setPosition(150, 53)
    for (let index = 0; index <= 2; index++) {
        chest1 = sprites.create(img`
            . . b b b b b b b b b b b b . . 
            . b e 4 4 4 4 4 4 4 4 4 4 e b . 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e e 4 4 4 4 4 4 4 4 4 4 e e b 
            b e e e e e e e e e e e e e e b 
            b e e e e e e e e e e e e e e b 
            b b b b b b b d d b b b b b b b 
            c b b b b b b c c b b b b b b c 
            c c c c c c b c c b c c c c c c 
            b e e e e e c b b c e e e e e b 
            b e e e e e e e e e e e e e e b 
            b c e e e e e e e e e e e e c b 
            b b b b b b b b b b b b b b b b 
            . b b . . . . . . . . . . b b . 
            `, SpriteKind.chest)
        tiles.placeOnRandomTile(chest1, assets.tile`myTile5`)
        if (index == 0) {
        	
        } else if (index == 1) {
        	
        } else {
        	
        }
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath4, function (sprite, location) {
    if (level == 2) {
        hero.say(":)", 200)
        hero.setImage(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `)
    }
})
function createLevel2 () {
    hero.setPosition(10, 10)
    movementAmount = 80
    exitBoat = sprites.create(assets.image`boatImg`, SpriteKind.vehicle)
    tiles.placeOnRandomTile(exitBoat, assets.tile`myTile26`)
    for (let value of sprites.allOfKind(SpriteKind.chest)) {
        value.destroy()
    }
    for (let index = 0; index <= 3; index++) {
        chest2 = sprites.create(img`
            . . b b b b b b b b b b b b . . 
            . b e 4 4 4 4 4 4 4 4 4 4 e b . 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e e 4 4 4 4 4 4 4 4 4 4 e e b 
            b e e e e e e e e e e e e e e b 
            b e e e e e e e e e e e e e e b 
            b b b b b b b d d b b b b b b b 
            c b b b b b b c c b b b b b b c 
            c c c c c c b c c b c c c c c c 
            b e e e e e c b b c e e e e e b 
            b e e e e e e e e e e e e e e b 
            b c e e e e e e e e e e e e c b 
            b b b b b b b b b b b b b b b b 
            . b b . . . . . . . . . . b b . 
            `, SpriteKind.chest)
        tiles.placeOnRandomTile(chest2, sprites.swamp.swampTile13)
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile16, function (sprite, location) {
    if (level == 2) {
        movementAmount = 60
        controller.moveSprite(hero, movementAmount, movementAmount)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath5, function (sprite, location) {
    if (level == 2) {
        hero.say(":)", 200)
        hero.setImage(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `)
        movementAmount = 100
        controller.moveSprite(sprite, movementAmount, movementAmount)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.vehicle, function (sprite, otherSprite) {
    if (level == 1) {
        level += 1
        setTheLevel()
        otherSprite.destroy()
    } else if (level == 2) {
        if (chest2LeftToCollect == 0) {
            level += 1
            setTheLevel()
            otherSprite.destroy()
        }
    } else {
    	
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.chest, function (sprite, otherSprite) {
    otherSprite.setImage(img`
        . b b b b b b b b b b b b b b . 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b b b b b b b d d b b b b b b b 
        . b b b b b b c c b b b b b b . 
        b c c c c c b c c b c c c c c b 
        b c c c c c c b b c c c c c c b 
        b c c c c c c c c c c c c c c b 
        b c c c c c c c c c c c c c c b 
        b b b b b b b b b b b b b b b b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b c e e e e e e e e e e e e c b 
        b b b b b b b b b b b b b b b b 
        . b b . . . . . . . . . . b b . 
        `)
    if (level == 0) {
        level += 1
        setTheLevel()
        otherSprite.destroy()
    } else if (level == 2) {
        chest2LeftToCollect += -1
        otherSprite.say("You have " + chest2LeftToCollect + " chest(s) left to collect!", 2000)
        pause(2000)
        otherSprite.destroy()
        if (chest2LeftToCollect == 0) {
            game.splash("Great job! You've got all the chests. Now find the exit gate...")
        }
    }
})
function createLevel0 () {
    chest0 = sprites.create(img`
        . . b b b b b b b b b b b b . . 
        . b e 4 4 4 4 4 4 4 4 4 4 e b . 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
        b e e 4 4 4 4 4 4 4 4 4 4 e e b 
        b e e e e e e e e e e e e e e b 
        b e e e e e e e e e e e e e e b 
        b b b b b b b d d b b b b b b b 
        c b b b b b b c c b b b b b b c 
        c c c c c c b c c b c c c c c c 
        b e e e e e c b b c e e e e e b 
        b e e e e e e e e e e e e e e b 
        b c e e e e e e e e e e e e c b 
        b b b b b b b b b b b b b b b b 
        . b b . . . . . . . . . . b b . 
        `, SpriteKind.chest)
    chest0.setPosition(120, 90)
    game.setDialogFrame(img`
        8888.....88....888....88.88....888....888...8888
        867788..8768..86768..8678768..86768..8678.887768
        8767768.8777886767688777877788676768877788677678
        877677686767787767787767676778776778776786776778
        .8778766677678776778767767767877677876778678778.
        .8677866867668676768667686766867676866766687768.
        ..86668688676886868867688867688686886768686668..
        .888666888888888888888888888888888888888866688..
        87777688666666666666666666666666666666668886688.
        867677686666666666666666666666666666666688677778
        .87766786666666666666666666666666666666686776768
        ..877668666666666666666666666666666666668766778.
        ..88888866666666666666666666666666666666866778..
        .867768866666666666666666666666666666666888888..
        86777768666666666666666666666666666666668867768.
        876666886666666666666666666666666666666686777768
        867777686666666666666666666666666666666688666678
        .86776886666666666666666666666666666666686777768
        ..888888666666666666666666666666666666668867768.
        ..87768866666666666666666666666666666666888888..
        .877667866666666666666666666666666666666866778..
        86767768666666666666666666666666666666668766778.
        877776886666666666666666666666666666666686776768
        .88668886666666666666666666666666666666688677778
        87777688666666666666666666666666666666668886688.
        867677686666666666666666666666666666666688677778
        .87766786666666666666666666666666666666686776768
        ..877668666666666666666666666666666666668766778.
        ..88888866666666666666666666666666666666866778..
        .867768866666666666666666666666666666666888888..
        86777768666666666666666666666666666666668867768.
        876666886666666666666666666666666666666686777768
        867777686666666666666666666666666666666688666678
        .86776886666666666666666666666666666666686777768
        ..888888666666666666666666666666666666668867768.
        ..87766866666666666666666666666666666666888888..
        .877667866666666666666666666666666666666866778..
        86767768666666666666666666666666666666668766778.
        877776886666666666666666666666666666666686776768
        .88668886666666666666666666666666666666688677778
        ..886668888888888888888888888888888888888666888.
        ..86668686768868688676888676886868867688686668..
        .8677866676686767686676867668676768667686687768.
        .8778768776787767787677677678776778767766678778.
        877677687677877677877676767787767787767686776778
        8767768877788676768877787778867676887778.8677678
        867788.8768..86768..8678768..86768..8678..887768
        8888...888....888....88.88....888....88.....8888
        `)
    game.setDialogCursor(img`
        . . . . 6 6 6 6 6 6 6 . . . . 
        . . 6 6 7 7 7 7 7 7 7 6 6 . . 
        . 6 6 7 7 7 8 8 8 7 7 7 6 6 . 
        . 6 7 7 7 8 8 7 8 8 7 7 7 6 . 
        . c 7 7 8 8 8 8 8 8 8 7 7 c . 
        . c 9 7 8 7 7 7 7 7 8 7 9 c . 
        . c 9 9 7 7 7 7 7 7 7 9 9 c . 
        . c 6 6 9 9 9 9 9 9 9 6 6 c . 
        c c 6 6 6 6 6 6 6 6 6 6 6 c c 
        c d c c 6 6 6 6 6 6 6 c c d c 
        c d d d c c c c c c c d d d c 
        c c b d d d d d d d d d b c c 
        c c c c c b b b b b c c c c c 
        c c b b b b b b b b b b b c c 
        . c c b b b b b b b b b c c . 
        . . . c c c c c c c c c . . . 
        `)
    game.setDialogTextColor(1)
    game.showLongText("Welcome to the swamp! Help the hero ___!", DialogLayout.Bottom)
}
function setTheLevel () {
    tiles.loadMap(tileMaps[level])
    if (level == 0) {
        createLevel0()
    } else if (level == 1) {
        createLevel1()
    } else if (level == 2) {
        createLevel2()
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile9, function (sprite, location) {
    if (level == 2) {
        sprite.setImage(img`
            .......ffff.......
            .....fff22fff.....
            ....fff2222fff....
            ...fffeeeeeefff...
            ...ffe222222eef...
            ...fe2ffffff2ef...
            ...ffffeeeeffff...
            ..ffefbf44fbfeff..
            ..fee41fddf14eef..
            ...feeddddddeef...
            ....fee4444eef....
            ...e4f222222f4e...
            fff4df222222fd4fff
            fdf44f445544f44fdf
            feffffffffffffffef
            feeeeeeeeeeeeeeeef
            fdddeeddddddeeddef
            ffeeeeeeeeeeeeeeff
            .feeddddddeeddddf.
            .ffeeeeeeeeeeeeff.
            ..feddeeeedddeef..
            ..ffffffffffffff..
            ..................
            ..................
            `)
        movementAmount = 100
        controller.moveSprite(sprite, movementAmount, movementAmount)
    }
})
let chest0: Sprite = null
let chest2: Sprite = null
let exitBoat: Sprite = null
let chest1: Sprite = null
let boat: Sprite = null
let chest2LeftToCollect = 0
let movementAmount = 0
let hero: Sprite = null
let tileMaps: tiles.WorldMap[] = []
let level = 0
level = 0
tileMaps = [tiles.createMap(tilemap`level0TM`), tiles.createMap(tilemap`level1TM`), tiles.createMap(tilemap`level9`)]
hero = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
movementAmount = 100
controller.moveSprite(hero, movementAmount, movementAmount)
chest2LeftToCollect = 4
scene.cameraFollowSprite(hero)
setTheLevel()
