*
// DOGGY PLANNER SERVICE                                                        
// Write a PROGRAM that calculates the dog stuff for a community center (to host dog playdates).
// Your PROGRAM should return the number of dogs that are required to host a non-empty collection of dog playdates.
// This means you should implement the following operation (in UML definition):
// +calculate(dogType: Dog, dogPlaydates: DogPlaydate[1..*]): int
// All dogs are from the same type. This type defines the stuff each dog provides: toy, food, water.
// Each dog playdate is defined by the stuff it needs (on a dog): toy, food, water.
// The algorithm for the dog playdate distribution should implement a 'first fit' strategy.
// This means there is no resource optimization or 'look back': dog playdates are always allocated on the current or the next dog (in case of limited resources).
// If a dog playdate is too 'big' for a new dog, skip it.
// ------------------------------------------------------------------------------
// Example:
// dog type = {toy: 2, food: 32, water: 100}
// dog playdates = [{toy: 1, food: 16, water: 10}, {toy: 1, food: 16, water: 10}, {toy: 2, food: 32, water: 100}]
// Result = 2
// */
function calculate(dogType, dogPlaydates){
   // P => receiving an object of dog type , and a list of object of dog playdates. Can't be empty. you get so many toys, food, and water and need to find out how many dogs you can have without using more toys/water/food then you have. How do you know what your limitation on resources is? For doing a 'first fit' algorithm, you only need to worry about the first variable that overflows.
    // R => returning a number of how many dogs per resources you have
    // E =>  Calculate( )  => 2
    // P => i check if first toy in the dog playdate - toy of 
    
 
}
 //given an object with characteristics like 'toy', 'food', and 'water'. THIS SETS THE LIMITS
  const dogType = { "toy" : 2,  "food" : 32, "water" : 100  }

//cycle thru playdates, and check each object. 

for(i = 0; i < playdates.length; i++){

}
// compare each object with dogType. 

// once we compare, we need to subtract each of those numbers from the compared object from dogType.

// add to tally/count +1

//move on b**** (to the next one, this be a loop)

//keep doing the thing, and if the resources in the object exceed the resources in the updated dogType object, then STOP 

// return tally/count


 //given an array with those objects. 
    const playdates = [
        { "toy" : 1,  "food" : 16,  "water" : 32 },
        {  "toy" : 1,  "food" : 16, "water" : 10 },
        { "toy" : 2, "food" : 32, "water" : 100 }
        ]
    //calling the function. 
     calculate(dogType, playdates)

     console.log(calculate({toy: 2, food: 32, water: 100},  [{toy: 1, food: 16, water: 10}, {toy: 1, food: 16, water: 10}, {toy: 2, food: 32, water: 100}]),2)