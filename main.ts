basic.showNumber(input.temperature())
if (input.temperature() > 28) {
    robotbit.MotorRun(robotbit.Motors.M1A, 255)
} else {
    robotbit.MotorStop(robotbit.Motors.M1A)
}
if (robotbit.HoleUltrasonic(DigitalPin.P15, robotbit.ValueUnit.Millimeter) < 15) {
	
} else {
	
}
