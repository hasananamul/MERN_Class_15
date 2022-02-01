/**
 * Get elements function
 * @param {*} element
 * @returns
 */
function $(element) {
  return document.querySelector(element);
}

/**
 * Name value key press
 */
let name = document.querySelector('input[name="text"]');

name.addEventListener("keyup", function () {
  if (name.value == "") {
    $(".show_name").innerHTML = "";
  } else {
    $(
      ".show_name"
    ).innerHTML = ` <p > Your name is : <strong class="text-uppercase">  ${name.value} </strong></p>`;
  }
});

/**
 * Form section
 */

$("#form").addEventListener("change", function () {
  let skills = this.querySelectorAll('input[type="checkbox"]:checked');

  if (skills.length == 0) {
    $(".show_skill").innerHTML = "";
  } else {
    /**
     * Make skill to arry
     */
    let skill_arr = [];
    for (let i = 0; i < skills.length; i++) {
      skill_arr.push(skills[i].value);
    }

    /**
     * Make arry to list item
     */
    let list = "";
    skill_arr.map((data) => {
      list += ` <li class="list-group-item"> <i class="fa fa-hand-o-right" aria-hidden="true"></i> ${data} </li> `;
    });
    $(".show_skill").innerHTML =
      " <h3> Your Skills is : </h3> " +
      '<ul class="m-0 p-0">' +
      list +
      "</ul> ";
  }

  /**
   * Location select scripting
   */
  let location = this.querySelector("#location").value;
  if (location == "") {
    $(".show_distic").innerHTML = "";
  } else {
    $(
      ".show_distic"
    ).innerHTML = ` <p> Your Location is : <strong> ${location} </strong> </p> `;
  }

  /**
   * Gender data  field
   */
  let gender = document.querySelector('input[name="gender"]:checked');

  $(
    ".show_gender"
  ).innerHTML = ` <p> You are a  : <strong> ${gender.value}</strong></p>`;
});

/**
 * Analog clock scripting
 */

setInterval(function () {
  let time = new Date();
  let secend = time.getSeconds();
  let munits = time.getMinutes();
  let hour = time.getHours();
  let rotale_s = (360 * secend) / 60;
  let rotale_m = (360 * munits) / 60 + rotale_s / 60;
  let rotale_h = (360 * hour) / 12 + rotale_m / 12;
  $(".second").style.transform = `rotate(${rotale_s}deg)`;
  $(".munits").style.transform = `rotate(${rotale_m}deg)`;
  $(".hour").style.transform = `rotate(${rotale_h}deg)`;
  $(".hand_second").style.transform = `rotate(${rotale_s}deg)`;
  $(".hand_munits").style.transform = `rotate(${rotale_m}deg)`;
  $(".hand_hour").style.transform = `rotate(${rotale_h}deg)`;
}, 1000);

/**
 * Calculator scrioting
 */
let key = document.querySelectorAll(".key");
let value_arry = [];
key.forEach((btn) => {
  btn.addEventListener("click", function () {
    value_arry.push(btn.value);
    $(".input_display").innerText = value_arry.join("");
    $(".result_display").innerHTML = "";
    $(".equal").style.pointerEvents = "auto";
  });
});
let equal = () => {
  let value = value_arry.join("");
  $(".result_display").innerHTML = eval(value);
  value_arry = [];
  $(".equal").style.pointerEvents = "none";
};

let all_clear = () => {
  $(".input_display").innerText = "0";
  $(".result_display").innerHTML = "";
  value_arry = [];
};

let back = () => {
  value_arry.pop("");
  value_arry.length == 0
    ? ($(".input_display").innerText = "0")
    : ($(".input_display").innerText = value_arry.join(""));
};
