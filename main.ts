basic.clearScreen()
let bitList = [
4,
3,
2,
1,
0
]
let carry = true
basic.forever(function () {
    for (let bit of bitList) {
        if (!(led.point(bit, 0)) && carry) {
            led.plot(bit, 0)
            carry = false
        } else if (led.point(bit, 0) && carry) {
            led.unplot(bit, 0)
            carry = true
        }
    }
    carry = true
    basic.pause(500)
})
