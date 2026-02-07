// const marvel_heros = ["Thor", "IronMan", "SpiderMan"]
// const dc_heroes = ["Superman", "Batman", "Flash"]

// marvel_heros.push(dc_heroes)
// console.log(marvel_heros); // 4th element is whole dc_heros
//[ 'Thor', 'IronMan', 'SpiderMan', [ 'Superman', 'Batman', 'Flash' ] ]

// const all_heros = marvel_heros.concat(dc_heroes)
// console.log(all_heros);
//[ 'Thor', 'IronMan', 'SpiderMan', 'Superman', 'Batman', 'Flash' ]

//another method we have its called spread operator
// const allSuperHeroes = [...marvel_heros, ...dc_heroes]
// console.log(allSuperHeroes);



const arr1 = [1,2,3,4,[5,6,7,8],10,11, [12,13,14]]
const allElem = arr1.flat(Infinity)
console.log(allElem);
