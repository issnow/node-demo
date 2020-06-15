### nodejs
- 主线是单线程(异步),callback(将后续的逻辑写成函数,传入到当前执行的函数中,当执行的函数得到了结果后,执行传入的函数:回调函数)
- 阻塞不能异步(阻塞是针对内核说的)
- i/o操作 读写操作,异步读写(能用异步绝不用同步)
- event-driven事件驱动(发布订阅)
### 异步
- settimeout
- callback
- onclick
- ajax