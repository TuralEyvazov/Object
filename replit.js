// 1. Rectangle Object:

// Create an object that represents a rectangle and can calculate its perimeter and area.

// const rectangleCalculate = {
//   length: 0,
//   width: 0,
//   perimetr(length, width) {
//     this.length = length;
//     this.width = width;
//     return 2 * (length + width);
//   },
//   area(length, width) {
//     this.length = length;
//     this.width = width;
//     return length * width;
//   },
// };

// console.log(`perimetri - ${rectangleCalculate.perimetr(20, 10)}`);
// console.log(`area - ${rectangleCalculate.area(20, 10)}`);

// Iki Variantda Yazdim Hansi Daha Duzgundur?

// const RectangleCalculate = function (length, width) {
//   this.length = length;
//   this.width = width;
//   this.perimetr = () => {
//     return 2 * (width + length);
//   };
//   this.area = () => {
//     return width * length;
//   };
// };

// const rectangle = new RectangleCalculate(40, 20);
// console.log(`Perimetr - ${rectangle.perimetr()}`);
// console.log(`Area - ${rectangle.area()}`);

// -----------------------------------------------------

// 2. Simple Todo Manager:

// Create an object to manage a to-do list. It should be able to add a task, complete a task, and display all tasks.

// const todoList = {
//   todos: [],
//   addTodo: function (item) {
//     this.todos.push({ todo: item, completed: false });
//   },
//   completedTodo: function (data) {
//     this.todos.find((item, index) => {
//       if (data == index) {
//         item.completed = true
//       }
//     })
//   },
//   showTodo: function () {
//     this.todos.forEach((item,index) => {
//       const status = item.completed ? "Tamamlandi" : "Tamamlanmadi";
//       console.log(`${index+1}) ${item.todo} - status:${status}`);
//     });
//   },
// };

// todoList.addTodo("Seher Derman ic");
// todoList.addTodo("Seher idmani");
// todoList.addTodo("Zeng et");
// todoList.addTodo("Axsam yuruyusu");
// todoList.completedTodo(1)
// todoList.completedTodo(2)
// todoList.showTodo();

// -----------------------------------------------------

// 3. Basic Counter Object:

// Create an object that represents a counter and can increase, decrease, and reset the count.

// const counter = {
//   count: 0,
//   increment: function () {
//     this.count += 1;
//     return this.count;
//   },
//   decrement: function () {
//     this.count -= 1;
//     return this.count;
//   },
//   reset: function () {
//     this.count = 0;
//     return this.count;
//   },
// };

// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.decrement())
// console.log(counter.reset())
// console.log(counter.count)
