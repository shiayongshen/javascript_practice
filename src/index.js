import "./styles.css";
import data from "./data.json";

console.log(data);
var insert = document.getElementById("app");
var x, y, z;

for (x in data.orders) {
  for (y in data.customers) {
    if (data.orders[x].customerId === y) {
      data.orders[x].customerId = data.customers[y].name;
      //find custimer name
    }
  }
  var sum = 0;
  var num = [];

  for (var k = 0; k < data.orders[x].items.length; k++) {
    for (z in data.items) {
      if (data.orders[x].items[k] === z) {
        sum = sum + data.items[z].price;
        //calculate sum of price
        var flag = false;
        for (var g = 0; g < num.length; g++) {
          if (num[g][0] == data.items[z].name) {
            //find item data
            num[g][1] = num[g][1] + 1; //number of item ++
            num[g][3] = num[g][3] + data.items[z].price; //total price of this item
            flag = true; //find item in num[]
          }
        }
        if (flag == false) {
          //don't find item in num[]
          num.push([
            //push item into num[]
            data.items[z].name,
            1,
            data.items[z].price,
            data.items[z].price,
          ]);
        }
      }
    }
  }
  var result_ = "";
  var cal = "";
  if (sum != 0) {
    for (var result = 0; result < num.length; result++) {
      result_ += "<br>" + num[result][0]; //cat item list
    }
    for (var result = 0; result < num.length; result++) {
      cal += //cat num of item
        "<br>" + num[result][2] + "*" + num[result][1] + "=" + num[result][3];
    }
  } else {
    result_ = "<br>沒有購買任何品項"; //if (sum ==0)
    cal = "<br>";
  }

  insert.innerHTML +=
    "<div class = 'father'>收據明細<br>" +
    "訂單編號：" +
    x +
    "<br>" +
    "購買人：" +
    data.orders[x].customerId +
    "<br><hr style='border-color:#d0d0d0;'>" +
    "<div class = 'buy'>購買品項</div>" +
    "<div class = 'left'" +
    result_ +
    "</div>" +
    "<div class = 'right'" +
    cal +
    "<div class= 'total'>總額: \t" +
    sum +
    "</div></div></div>";
}
