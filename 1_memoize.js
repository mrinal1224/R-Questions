//Given reducer method: 
function add(){
       return a+b
}


// The Memoize Function - Solution for this question
const memoize = (fn) => {
       let cache = {}
       return (...args) => {
           let cacheKey = args.map(n => n.toString() + '+').join('')
           if (cacheKey in cache) {
               return cache[cacheKey]
           } else {
               let result = args.reduce((acc, curr) => fn(acc, curr), 0);
               cache[cacheKey] = result;
               return result;
           }
       }
   }
   

   
const memoizeAdd = memoize(add)

console.log(memoizeAdd(100,100))
console.log(memoizeAdd(100))
console.log(memoizeAdd(100,200)) 
console.log(memoizeAdd(100,100))




// 1. “n” ➡️ “…args” (line3) — the return function now accepts an unspecified number of parameters 
// which can be accessed by using the array args or the arguments object.

// 2. “cacheKey” (lines 4, 5, 6, 9) — we declared a variable called “cacheKey” which represents the name 
// of the key (previously “n”) that will be used to either access the cache or declare a new cache property. 
// This change is made in order to keep track of multiple inputs. We form cacheKey by mapping 
// over the “args” array and returning a string of “n” and a “+”. For example, 
// when calling memoizeAdd(10, 20, 30) the cacheKey will be “10+20+30+”.


//3. “fn(n)” ➡️ “args.reduce((acc, curr) => fn(acc, curr), 0)” — due to the fact that
//  memoizeAdd can accept any unspecified number of parameters, 
//  in order to find the sum of all parameters we can use Array.prototype.reduce.



// Using our newly refurbished memoize function, after making the following function calls
// memoizeAdd(10, 20, 30, 40); //returns 100
// memoizeAdd(1, 2, 3, 4); //returns 10
// memoizeAdd(5, 10) //returns 15
// our cache will look something like:
// {
//    "10+20+30+40+" : 100,
//    "1+2+3+4+" : 10,
//    "5+10+" : 15
// }
// Then if we call again:
// memoizeAdd(1, 2, 3, 4); //returns 10 without arithmetic computations