This plugin allows to easily manage [Gitgear eXtreme Feedback
lamps](http://www.gitgear.com/xfd).

## Configuration

The Aggregate option combines results all the jobs tied to a lamp to a
single status. The overall result will always be the 'lowest
denominator' meaning if you have 3 jobs tied to the lamp and one of the
jobs is 'red' the lamp will show 'red' as status.

If the aggregate option is off the lamp will display the result of the
job that ran last.

The Alarm option makes a very noisy beep sound when a build fails.

The SFX sounds can be configured to some extend. If the SFX option is on
the Lamp will play a file by random from one of the directories on the
lamp, depending on the job status:  
/home/pi/extremefeedbacklamp/XFD-Audio/Green  
/home/pi/extremefeedbacklamp/XFD-Audio/Yellow  
/home/pi/extremefeedbacklamp/XFD-Audio/Red 

You can ssh into the lamp and place your own files (mp3) in the folders,
then they will be considered when playing a sound.

## Features

-   Automatically look for lamps in the subnet ﻿(1.0)
-   Possibility to label lamps, for easy ideantification (1.0)
-   Manually add lamps given the IP adress (1.1)
    -   This is particularly useful for large Jenkins installation,
        where broadcasting to the whole subnet wouldn't be ideal
-   Possibility to enable an alarm sound on the lamps (1.2)
-   Event stream CLI (1.3)
    -   This allows to reach lamps that sit behind a firewall
-   Possibility to use sound effects on the lamps (1.4)
-   Optional aggregate results for lamps with multiple jobs. (1.5)
    -   After 3 seconds from the end of the build the worst last results
        among the jobs is shown.

## Changelog

### 1.6

-   Added support for aggregating results for lamps with multiple jobs

### 1.5

-   Bug Fixes

### 1.4

-   Added support for sound effects on the lamp
-   Bug Fixes

### 1.3

-   Brand new UI based on AngularJS
-   Added event stream CLI command

### 1.2

-   Added support for the buzzer on the lamp

### 1.1

-   Added support for manual lamp adding
-   Bug Fixes

### 1.0

-   Initial Release
