/**
 * though Array.isArray is ~96% supported, it's still a good idea to polyfill it
 */
if (!Array.isArray()) {
  Array.isArray = function (arg) {
    return Object.prototype.toString.call(arg) === "[object Array]";
    // why? because Object.prototype.toString() returns [object type] where type is the object type
    // why ? because Object.prototype.toString() is a method that returns a string representing the object
    // why call() is used?
  };
}
/**
 * All objects that inherit from Object.prototype (that is, all except null-prototype objects)
 *  inherit the toString() method.
 * The Object.prototype.toString method allows you to perform type checking on different objects, not just arrays
 *
 * The .call() method allows you to specify the `this` context explicitly.
 *  In this case, Object.prototype.toString.call(arg) ensures that the toString method is called in the context
 *  of the arg object.
 * This is important because some objects may have their own custom toString method, and using call ensures that
 *  the default toString method from Object.prototype is used.
 */

function isFunction(obj) {
  return Object.prototype.toString.call(obj) === "[object Function]";
}
console.log(isFunction(function () {})); // true

function isArray(obj) {
  return Object.prototype.toString.call(obj) === "[object Array]"; 
}

console.log(isArray([1, 2, 3])); // true
