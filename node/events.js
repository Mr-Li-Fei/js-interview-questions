// 这是时间触发器模块。
// 进行简单的注册和触发

import MyEvents from "events"

const events = new MyEvents();

events.on("start", (totle) => {
    console.log(`这是第${totle}运行`);
})

events.emit("start", 5);