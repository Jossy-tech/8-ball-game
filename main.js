
var images = new Array(
  "../8Ball/image/magic8ball_7.png",
  "../8Ball/image/magic8ball_10.png",
  "../8Ball/image/magic8ball_11.png",
  "../8Ball/image/magic8ball_12.png",
  "../8Ball/image/magic8ball_13.png",
  "../8Ball/image/magic8ball_14.png",
  "../8Ball/image/magic8ball_15.png"
);

function Ask() {
    const value = document.querySelector("input").value;
    if (!value) {
        return alert("please ask a question!")
    }
  var randomImg = Math.floor(Math.random() * images.length);
  document.getElementById("randomImageId").src = images[randomImg];
};




    




