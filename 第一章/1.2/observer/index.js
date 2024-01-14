// 主题（Subject）类
class Subject {
  constructor() {
    this.observers = []; // 观察者列表
  }

  // 注册观察者
  addObserver(observer) {
    this.observers.push(observer);
  }

  // 取消注册观察者
  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  // 通知观察者
  notify(data) {
    this.observers.forEach((observer) => {
      observer.update(data);
    });
  }
}

// 观察者（Observer）类
class Observer {
  constructor(name) {
    this.name = name;
  }

  // 观察者的更新方法
  update(data) {
    console.log(`${this.name} 收到通知：${data}`);
  }
}

// 创建主题实例
const subject = new Subject();

// 创建观察者实例
const observer1 = new Observer("Observer 1");
const observer2 = new Observer("Observer 2");

// 注册观察者
subject.addObserver(observer1);
subject.addObserver(observer2);

// 发送通知
subject.notify("Hello, observers!");

// 输出：
// Observer 1 收到通知：Hello, observers!
// Observer 2 收到通知：Hello, observers!
