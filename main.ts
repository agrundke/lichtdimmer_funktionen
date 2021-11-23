let Helligkeit = 0
function Licht_aus () {
    if (Helligkeit >= 250) {
        for (let index = 0; index < 13; index++) {
            Helligkeit = Helligkeit - 20
            led.setBrightness(Helligkeit)
            basic.pause(1000)
        }
    }
}
input.onButtonPressed(Button.A, function () {
    Licht_an()
})
function Licht_an () {
    if (Helligkeit <= 20) {
        for (let index = 0; index < 13; index++) {
            Helligkeit += 20
            led.setBrightness(Helligkeit)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
        }
    }
}
input.onButtonPressed(Button.B, function () {
    Licht_aus()
})
