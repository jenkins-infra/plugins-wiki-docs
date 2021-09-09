Allows users to display build status ona Raspberry Pi via a multi-colour
LED [LedBorg](https://www.piborg.org/ledborg)

# Description

This project is for a Jenkins plugin to control the
[LedBorg](https://www.piborg.org/ledborg) module for the Raspberry Pi.  
It uses the [pi4j](http://pi4j.com/) / [wiringpi](http://wiringpi.com/)
libraries to drive the GPIO pins.

# Features

-   Reflect all build states using an LED display attached to the GPIO
    pins
-   Custom colour to state mapping

# Potential upcoming features

-   Custom GPIO pin to result mapping
-   Support for other SBC'supported by the pi4j library

# Requirements

Jenkins version 1.658 or newer is required.

# Special Requirements

I have found various issues with the GPIO pins being addressable. These
have been isolated down to which interfaces are enabled on the RPI. The
minimum set appears to be:

-   SPI
-   I2C
-   1-Wire

If you are having problems, make sure these are enabled (Preferences -\>
Raspberry Pi Configuartion)

This is correct as of raspbian\_jessie\_all\_rpi\_2017.01.11

# Setup

To configure Jenkins for the RPI, see the following
[README](https://github.com/jenkinsci/rpi-build-status-plugin/blob/master/README.md)

# Version history

## Version 0.4 (27-Feb-17)

-   First generally available release
