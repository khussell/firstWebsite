$("#factButton").on("click", function() {
    var number = Math.floor((Math.random() *kristinFactArray.length));
    $("#factText").text(kristinFactArray[number])
})

var kristinFactArray = ["I was born in Gainesville, Florida", "My birthday is March 3, 1990","I am married to a crazy man named Kevin", "I have a golden retriever mix named Lilu", "I currently work as a dental hygienist", "I grew up in Cary, North Carolina", "I went to college in Charlotte, North Carolina", "I love to scrapbook", "My husband and I used to ballroom/ latin dance in college"]