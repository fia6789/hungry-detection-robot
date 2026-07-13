basic.forever(function () {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showString("HELLO YOU NEED FOOD")
    music.play(music.stringPlayable("B E C5 - E G - B ", 256), music.PlaybackMode.LoopingInBackground)
})
