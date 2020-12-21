const cron = require('node-cron');

const taskList = require('./modules');

class CreateTasks {
  start() {
    const tasks = [];

    Object.keys(taskList).forEach(task => {
      tasks[task] = new taskList[task]();

      cron.schedule(tasks[task].schedule(), () => {
        tasks[task].handle();
      });
    });
  }
}

module.exports = CreateTasks;
