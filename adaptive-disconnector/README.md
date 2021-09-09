Put slave offline once build fails for insufficient temp or work space.

## Details

Whenever build fails, rerun all node monitors on given slave in case
some of the monitored metrics is over threshold. Therefore, the slave
can be disconnected before next jobs are scheduled.
