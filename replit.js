// const car = {
//     marka: 'BMW',
//     model: 'M5',
//     year: 2024,
//     isRunning: false,
//     start() {
//         this.isRunning = true
//         console.log('Araba calisdirildi')
//     },

//     stop() {
//         this.isRunning = false
//         console.log("Araba durduruldu");
//     },

//     isRunningCheck() {
//         return this.isRunning
//     }
// }

// car.start()
// car.stop()
// console.log(car.isRunningCheck());

// const rightAngle = {
//   length: 30,
//   with: 40,
//   calculateArea() {
//     return this.length * this.with;
//   },
//   calculatePerimeter() {
//     return 2 * (this.length + this.with);
//   },
// };

// console.log(rightAngle.calculateArea())
// console.log(rightAngle.calculatePerimeter())

// const Library = function (title, author, pages, isRead) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.isRead = isRead;
// };

// const $1984 = new Library("1984", "George Orwell", 328, true);
// const mockingbird = new Library("To Kill a Mockingbird", "Harper Lee", 281,false);
// const greatGatsby = new Library("The Great Gatsby", "F. Scott Fitzgerald", 218, true);

// const Book = {
//   arr: [],
//   addBooks(item) {
//     this.arr.push(item);
//   },
//   displayBooks() {
//     this.arr.map((item) => console.log(item.title));
//   },
//   toggleReadStatus(item) {
//     item.isRead = !item.isRead;
//   },
// };

// Book.addBooks($1984)
// Book.addBooks(mockingbird)
// Book.addBooks(greatGatsby)

// Book.displayBooks()
// console.log(Book.arr)

// Book.toggleReadStatus($1984)

// console.log(Book.arr);

// const shoppingCart = {
//   carts: [],
//   summary: 0,
//   addCart: function (name, price, qty) {
//     this.carts.push({ name, price, qty });
//   },
//   totalPrice: function () {
//     this.carts.map((item) => {
//       this.summary += item.price * item.qty;
//     });
//     console.log(this.summary);
//   },
// };

// shoppingCart.addCart("adidas", 500, 3);
// shoppingCart.addCart("nike", 200, 2);
// shoppingCart.addCart("h&m", 100, 2);

// shoppingCart.totalPrice();


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
