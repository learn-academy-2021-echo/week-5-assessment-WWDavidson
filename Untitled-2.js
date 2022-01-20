

class PokerHand {
  constructor([card1,card2,card3,card4,card5]){
   this.card1 = card1;
   this.card2 = card2;
   this.card3 = card3;
   this.card4 = card4;
   this.card5 = card5;
   

    
   
  }
  
  showhand(){
   return `Your cards are ${this.card1}, ${this.card2}, ${this.card3}, ${this.card4}, ${this.card5}.`

  }

  organize(){
    return 
  }

  fullHouseFinder() {
    cardArr = [this.card1, this.card2, this.card3, this.card4, this.card5] 
    cardArr.sort()
    if(this.card1 === this.card2 && this.card2 === this.card3 && this.card4 === this.card5
      || this.card1 === this.card2 && this.card3 === this.card4 && this.card4 ===this.card5){
      return true
    }
    else{
      return false 
    }
  }
  
}

  
  
  var hand1 = new PokerHand([5, 5, 5, 3, 3])
  var hand2 = new PokerHand([5, 5, 3, 3, 4])
  var hand3 = new PokerHand([5, 5, 5, 5, 4])
  var hand4 = new PokerHand([4,2,4,2,4])
  console.log(hand1.fullHouseFinder())
  console.log(hand2.fullHouseFinder())
  console.log(hand3.fullHouseFinder())
  console.log(hand1.showhand())
  console.log(hand4.fullHouseFinder())
  console.log(hand4.organize())
  console.log(hand4.fullHouseFinder())

