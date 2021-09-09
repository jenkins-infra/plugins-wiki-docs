# Description

This Plugin disables a Job when a Build fails.

Please use this when you want to prevent the jobs that are regularly
performed, fail in a row.

 

ビルドが失敗した時に、ジョブを無効にするプラグインです。

定期実行されてるジョブが、続けて失敗することを防ぐ時などに利用して下さい。

# Usage

#### 1. Select "When Failed To Build, Disable Job" in "Add post-build action".

![](docs/images/スクリーンショット_2013-10-14_20.45.30.png)

#### 2. Select case you disable Job.

![](docs/images/スクリーンショット_2013-10-14_20.46.46.png)

![](docs/images/スクリーンショット_2013-10-14_20.46.11.png)

#### 3. When it became selected cases, Job is disabled.

![](docs/images/スクリーンショット_2013-10-14_20.47.34.png)

# Advanced

### set option to make disabling of jobs conditional

#### 1. Select "Advanced...".

![](docs/images/スクリーンショット_2014-05-18_11.42.32.png)

#### 2. Check "Disable job if it the last X builds have failed" and write "Number Of Consecutive Failures"

![](docs/images/スクリーンショット_2014-05-18_11.38.11.png)

# Version history

[TABLE]
