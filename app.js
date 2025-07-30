// selecting elements
let boxs = document.querySelectorAll(".box");
let btn = document.querySelector(".reset");
let h2 = document.querySelector("h2");

// vars and arrs
const winningPatterns = [
  [0, 1, 2], 
  [3, 4, 5], 
  [6, 7, 8], 
  [0, 3, 6], 
  [1, 4, 7], 
  [2, 5, 8], 
  [0, 4, 8], 
  [2, 4, 6] 
];

let isGameO = true

//logic for X and O
for (let box of boxs) {
  box.addEventListener("click", function () {

    if (this.classList.contains("disabled")) return;

    if (isGameO) {
      h2.innerText = "Playing....";
      this.innerText = "O";
      this.classList.add("green");
      isGameO = false;
    } else {
      this.innerText = "X";
      this.classList.add("pink");
      isGameO = true;
    }

    
    this.classList.add("disabled");

    let con = check();
    if (con) {
      h2.innerText = `Winner is: ${this.innerText}`;
    }
  });
}



//Logic for reset
btn.addEventListener("click" , function(){
    isGameO = true;
    for (let box of boxs){
        box.classList.remove("pink");
        box.classList.remove("green");
        box.classList.remove("blink");
        box.innerText = "";
        h2.innerText = " Pick a box to Start";
        box.classList.remove("disabled");
    }
})


// check win 
function check() {
    for (let win of winningPatterns) {
        let box1 = boxs[win[0]];
        let box2 = boxs[win[1]];
        let box3 = boxs[win[2]];

        let a = box1.innerText;
        let b = box2.innerText;
        let c = box3.innerText;

        if (a != "" && b != "" && c != "") {
            if (a == b && b == c) {
                blink(box1, box2, box3);  
                return true;
            }
        }
    }
}

function blink(a, b, c) {
    setTimeout(function() {
        a.classList.add("blink");
        b.classList.add("blink");
        c.classList.add("blink");
    }, 100);

    setTimeout(function() {
        a.classList.remove("blink");
        b.classList.remove("blink");
        c.classList.remove("blink");
    }, 500);

    setTimeout(function() {
        a.classList.add("blink");
        b.classList.add("blink");
        c.classList.add("blink");
    }, 1000);
}
