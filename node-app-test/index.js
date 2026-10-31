//import {add,minus} from "./moudle.js"; // package.json이 module일경우에만 export 
import moduleA from "./moduleA.js";
import moduleB, { moduleB_fun1,moduleB_var1 } from "./moduleB.js";
// console.log(add(1,2));
// console.log(minus(2,3));
// console.log("Hello node!");
console.log(moduleA.moduleA_var1);
moduleA.moduleA_fun1();

moduleB_fun1();
console.log(moduleB_var1);
moduleB.moduleB_fun2();