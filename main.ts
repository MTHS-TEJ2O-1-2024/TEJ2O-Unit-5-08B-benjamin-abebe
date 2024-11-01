/* Simple test code for ultrasonic sensor */

// setup
basic.showIcon(IconNames.Happy)

let distanceOfObject: number

// loop forever
while (true) {
    distanceOfObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )

    if (distanceOfObject < 10) {
        robotbit.StpCarMove(0, 0)
        basic.showIcon(IconNames.No)
    } else {
        robotbit.StpCarMove(10, 48)
        basic.showIcon(IconNames.Yes)
    }
}
