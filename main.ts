/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Benjamin Abebe
 * Created on: Oct 2024
 * This program moves the motor and checks If theres an object nearby
*/

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

    // if distance of object is less than 10
    if (distanceOfObject < 10) {
        robotbit.StpCarMove(0, 0)
        basic.showIcon(IconNames.No)
        robotbit.StpCarMove(-10, 65)
    } else {
        robotbit.StpCarMove(10, 65)
        basic.showIcon(IconNames.Yes)
    }
}