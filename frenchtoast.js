javascript:(function() { 
function Takeover(ratio, imageurl) {
  this.ratio = ratio;
  this.imageurl = imageurl
}
      
var getTakeover = {
  init: function (myTakeover) {
    this.myTakeover = myTakeover
  },
  horizontal: function () {
    return this.myTakeover.filter(function (myTakeover) {
      return myTakeover.ratio === "horizontal";
    });
  },
  vertical: function () {
    return this.myTakeover.filter(function (myTakeover) {
      return myTakeover.ratio === "vertical";
    });
  },
  square: function () {
    return this.myTakeover.filter(function (myTakeover) {
      return myTakeover.ratio === "square";
    });
  }
};

function Randomize(images) {
  return Math.floor(Math.random() * images.length);
}

// HEY OVER HERE! Are you ready to hack the Javascript? You need to replace all of the french toast 
// image URLs below with images that you find online that match your theme. Do a Google Image search and 
// find 3 horizontal images, 2 vertical images and 2 square images.  Then get the full image URL and copy
// and paste it below in the right category.  Make sure you leave the rest of the code the same! 
// (don't accidentally delete any quotation marks or commas!) 
// OK, GO! 

var myTakeover = [
  new Takeover("horizontal", "https://images.edge-generalmills.com/e5dab229-7f5f-47bd-8757-6e590e9569e0.jpg"),
  new Takeover("horizontal", "https://s3.amazonaws.com/studio-me/system/photos/photos/000/182/764/original/french-toast-recipe.jpg?1387531457"), 
  new Takeover("horizontal", "https://framesofjoy.files.wordpress.com/2015/04/frenchtoast.jpg"),
  new Takeover("vertical", "https://upload.wikimedia.org/wikipedia/commons/b/b8/French_toast,_maple_syrup.jpg"),
  new Takeover("vertical", "https://a.dilcdn.com/bl/wp-content/uploads/sites/8/2011/06/PBJ-French-toast.jpg"),
  new Takeover("square", "https://i.ytimg.com/vi/RLu1GXIZqrI/maxresdefault.jpg"),
  new Takeover("square", "https://2.bp.blogspot.com/-b8vAx9uvsgQ/TV2a8GPWdnI/AAAAAAAADjM/BfA4aTA3_Xs/s1600/french+toast+2.JPG")
];

// YOU DID IT!! There's nothing else to edit on the page!  Save your new Thimble page and give your
// bookmarklet a try.  If it doesn't work yet - check all of your code!  
// Look for missing "" or () or , compare your page with the original code.  
      
function imageRatio(image) {
  var proportion = image.height / image.width;
  if (proportion > 1) return "vertical";
  else if (proportion === 1) return "square";
  else if (proportion < 1) return "horizontal"
}
      
function runBookmarklet(target) {
  var images = (target || document).getElementsByTagName("img");
  var length = images.length;

  getTakeover.init(myTakeover);
  for (var i = 0; i < length; i++) {
    var ratio = imageRatio(images[i]);
    if (ratio === "horizontal") {
      var number = Randomize(getTakeover.horizontal());
      var img = getTakeover.horizontal()[number];
      images[i].src = img.imageurl
    } else if (ratio === "square") {
      var number = Randomize(getTakeover.square());
      var img = getTakeover.square()[number];
      images[i].src = img.imageurl
    } else if (ratio === "vertical") {
      var number = Randomize(getTakeover.vertical());
      var img = getTakeover.vertical()[number];
      images[i].src = img.imageurl
    }
  }
}
    ; runBookmarklet(); })();
