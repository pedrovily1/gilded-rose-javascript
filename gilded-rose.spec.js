import { expect, describe, it, test } from "vitest";
import { Item, items, updateQuality, Basic, Cheese, Legendary, Pass, Conjured } from "./gilded-rose.js";

// describe("updateQuality", () => {
//   it("reduces quality and sellIn of basic items by 1", () => {
//     const testItem = new Item("basic", 5, 3);
//     items.push(testItem);

//     updateQuality();
//     console.log(testItem)
//     expect(testItem.quality).toBe(2);
//     expect(testItem.sellIn).toBe(4);
//   });
// });

describe("updateQuality", () => {
  it("reduces quality and sellIn of basic items by 1 while sellin >= 1 by 2 sellin = 0", () => {
    const testItem = new Basic("basic", 5, 3); //Regular Decrements 
    const testItem2 = new Basic("basic2", 0, 2); //Testing when Sellout === 0
    const testItem3 = new Basic("basic3", 0, 1); //Testing No negative Numbers
    items.push(testItem);
    items.push(testItem2);
    items.push(testItem3);


    
    updateQuality()

    //Test One
    expect(testItem.sellIn).toBe(4);
    expect(testItem.quality).toBe(2);
    //Test Two
    expect(testItem2.sellIn).toBe(0);
    expect(testItem2.quality).toBe(0);
    //Test Three
    expect(testItem3.sellIn).toBe(0);
    expect(testItem3.quality).toBe(0);
    
    console.log(testItem)
    console.log(testItem2)
    console.log(testItem3)
  });
});

describe("updateQuality", () => {
  it("cheese increases in quality as sellin decreases", () =>{
    const testItem = new Cheese("brie", 1, 2);
    const testItem2 = new Cheese("Super Aged brie", 1, 50);

    items.push(testItem);
    items.push(testItem2);

    updateQuality()
    //Test One
    expect(testItem.sellIn).toBe(0)
    expect(testItem.quality).toBe(3)
    //Test Two
    expect(testItem2.sellIn).toBe(0)
    expect(testItem2.quality).toBe(50)
    
    console.log(testItem)
    console.log(testItem2)

  })
})


describe("updateQuality", () => {
  it("Quality changes on tickets", () =>{
    const testItem = new Pass("tickets", 15, 20); //decrement by one on each
    const testItem2 = new Pass("tickets2", 10, 12)//increase by two
    const testItem3 = new Pass("tickets3", 5, 12)//increase by 3
    const testItem4 = new Pass("tickets4", 0, 12)//decrease to 0

    items.push(testItem);
    items.push(testItem2);
    items.push(testItem3);
    items.push(testItem4);
    updateQuality()
    //Test One
    expect(testItem.sellIn).toBe(14)
    expect(testItem.quality).toBe(19)
    //Test Two
    expect(testItem2.sellIn).toBe(9)
    expect(testItem2.quality).toBe(14)
    //Test Three
    expect(testItem3.sellIn).toBe(4)
    expect(testItem3.quality).toBe(15)
    //Test Four
    expect(testItem4.sellIn).toBe(0)
    expect(testItem4.quality).toBe(0)
    
    console.log(testItem)
    console.log(testItem2)
    console.log(testItem3)
    console.log(testItem4)
  })
})


describe("updateQuality", () => {
  it("reduces quality and sellIn of basic items by 1 while sellin >= 1 by 2 sellin = 0", () => {
    const testItem = new Conjured("Conjured1", 10, 12);
    const testItem2 = new Conjured("Conjured2", 0, 3);
    items.push(testItem);
    items.push(testItem2);

    updateQuality()
    //Test One
    expect(testItem.sellIn).toBe(9);
    expect(testItem.quality).toBe(10);
    //Test Two
    expect(testItem2.sellIn).toBe(0);
    expect(testItem2.quality).toBe(0);
    
    console.log(testItem)
    console.log(testItem2)
  });
});
//console.log(items)