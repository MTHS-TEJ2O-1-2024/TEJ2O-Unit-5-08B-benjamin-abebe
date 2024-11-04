/* Simple motor movement program with sonar and icons */

// setup
basic.showIcon(IconNames.Happy)
let distanceOfObject: number

// loop forever
while (true) {
    distanceOfObject = sonar.ping(
        DigitalPin.P1, // TRIG pin
        DigitalPin.P2, // ECHO pin
        PingUnit.Centimeters
    )

    if (distanceOfObject > 10) {
        basic.showIcon(IconNames.Yes) // Show Yes icon when moving forward
        robotbit.StpCarMove(10, 48) // Move car forward
    } else {
        basic.showIcon(IconNames.No) // Show No icon when stopping
        robotbit.StpCarMove(0, 0) // Stop the car
        basic.pause(500)

        robotbit.StpCarMove(-10, 48) // Move car backward
        basic.pause(1000)

        robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B0) // Turn 90°
        basic.pause(500)

        robotbit.StpCarMove(10, 48) // Move car forward again
    }
}
