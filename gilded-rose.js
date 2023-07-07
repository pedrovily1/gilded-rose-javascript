export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  updateQuality(){
    
  }
}

export class Basic extends Item{
  constructor(name, sellIn, quality){
    super(name,sellIn,quality)
  }
  updateQuality(){
    if (this.sellIn >= 1 ) {
      this.quality-- 
      this.sellIn--
    } else {
      this.sellIn = 0
      this.quality -= 2
      if (this.quality < 0) {
        this.quality = 0
      }
    }
  } 
}

export class Cheese extends Item {
  constructor(name,sellIn,quality){
  super(name,sellIn,quality)
  }

updateQuality(){
   if (this.sellIn >= 0 ){
    this.quality++
    if(this.quality > 50){
      this.quality = 50
    }
    this.sellIn--
  }
}
}

export class Legendary extends Item {
  //do nothing
}




export class Pass extends Item {

  constructor(name,sellIn,quality){
    super(name,sellIn,quality)
    }
    updateQuality(){
  if (this.sellIn <= 10 && this.sellIn > 5){
    this.sellIn--
    this.quality+=2
    if(this.quality > 50){
      this.quality = 50
    }
  } else if (this.sellIn <= 5 && this.sellIn > 0) {
    this.sellIn--
    this.quality+=3
    if(this.quality > 50){
      this.quality = 50
    }
  } else if (this.sellIn === 0  ) {
    this.sellIn = 0
    this.quality = 0
  } else {
    this.sellIn --
    this.quality--
  }
    }
  }

  export class Conjured extends Item {

    constructor(name,sellIn,quality){
      super(name,sellIn,quality)
      }
      updateQuality(){
        if (this.sellIn >= 1 ) {
          this.quality-=2
          this.sellIn--
        } else {
          this.sellIn = 0
          this.quality -= 4
          if (this.quality < 0 ) {
            this.quality = 0 
          }
        } 
      } 
    }
    
  



export let items = [];

items.push(new Basic("+5 Dexterity Vest", 10, 20)); //Should decrease normally
items.push(new Basic("Broken Buckler", 0, 5)); //Should decrease by 2
items.push(new Cheese("Aged Bries",0,3));//increase
items.push(new Basic("Elixir of the Mongoose", 5, 7));
items.push(new Legendary("Sulfuras, Hand of Ragnaros", 0, 80));//do nothing, legendary
items.push(new Pass("Backstage passes to a TAFKAL80ETC concert", 15, 20));
items.push(new Conjured("Conjured Mana Cake", 3, 6));


export const updateQuality = () => {
  for (let item of items) {
if (item instanceof Basic){
  item.updateQuality();
}else if (item instanceof Cheese) {
  item.updateQuality()
} else if (item instanceof Pass){
  item.updateQuality()
} else if (item instanceof Conjured) {
  item.updateQuality();
} else {
  console.log("Legendary items do not change in quality or sell in")
}
   } 
}

 