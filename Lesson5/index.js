function MyAwesomeSet(array) {
    let unique = () => {
        array = array.filter((item, index) => {
            if (Number.isNaN(item)) {
                return array.findIndex(Number.isNaN) === index
            }
            return array.indexOf(item) === index;
        });
    }
    unique();
    let newSet = {
        size: array.length,
        has: (elem) => {
            if (newSet.size === 0) {
                return false
            }
            if (Number.isNaN(elem)) {
                for (i=0; i < array.length; i++){
                    if (Number.isNaN(array[i])) {
                        return true
                    }
                }
                return false
            }
            return array.includes(elem);
        },
        add: (elem) => {
            array.push(elem);
            unique();
            newSet.size = array.length;
            return newSet
        },
        delete: (elem) => {
            if (newSet.has(elem)) {
                if (Number.isNaN(elem)) {
                    delete array[array.findIndex(Number.isNaN)];
                    array = array.filter(item => toString(item) == toString(elem));
                }else{
                    array = array.filter(item => item !== elem);
                }
                unique();
                newSet.size = array.length;
                return true
            }else{
                return false
            }
        },
        clear: () => {
            array = [];
            newSet.size = 0;
        },
    }
    return newSet
}


let object = null
let array = null
let set = null

let res = null


array = [1, 2, 3, 4, 5]
set = MyAwesomeSet(array)
console.assert(set.size === array.length, 'size property')

array = [4, 4, 8, 15, 15, 16, 23, 42]
set = MyAwesomeSet(array)
console.assert(set.size === new Set(array).size, 'unique value')

object = {}
array = [{}, object, 42, NaN, undefined]
set = MyAwesomeSet(array)

console.assert(set.has(23) === false, 'has not 23')
console.assert(set.has({}) === false, 'has not {}')

console.assert(set.has(42) === true, 'has 42')
console.assert(set.has(NaN) === true, 'has NaN')
console.assert(set.has(object) === true, 'has object')
console.assert(set.has(undefined) === true, 'has undefined')

set.add(NaN).add(undefined)
console.assert(set.size === array.length, 'add NaN & undefined')

set.add({})
array.push({})
console.assert(set.size === array.length, 'add {}')

res = set.delete(23)
console.assert(res === false, '23 is not deleted')
console.assert(set.size === array.length, 'same size after delete 23')

res = set.delete({})
console.assert(res === false, '{} is not deleted')
console.assert(set.size === array.length, 'same size after delete {}')

res = set.delete(42)
console.assert(res === true, '42 is deleted')
console.assert(set.has(42) === false, 'do not includes 42')

res = set.delete(object)
console.assert(res === true, 'object is deleted')
console.assert(set.has(object) === false, 'do not includes object')

res = set.delete(NaN)
console.assert(res === true, 'NaN is deleted')
console.assert(set.has(NaN) === false, 'do not includes NaN')

res = set.delete(undefined)
console.assert(res === true, 'undefined is deleted')
console.assert(set.has(undefined) === false, 'do not includes undefined')

set.clear()
console.assert(set.size === 0, 'empty after clear')

set.add(4).add(4).add(8).add(15).add(16).add(23).add(42).add(42)
console.assert(set.size === 6, 'add handels not unique values')

set.clear()
set.add({}).add({}).add({})
set.add(object).add(object).add(object).add(object).add(object)
console.assert(set.size === 4, 'add handels not unique refs')
