let oInput = document.querySelector(".search-text");
let oUl = document.querySelector(".search-ul");
let oDiv = document.querySelector(".search-div");
oInput.oninput = function () {
  let val = oInput.value;
  let oScript = document.createElement("script");
  oScript.src = `https://suggest.taobao.com/sug?code=utf-8&q=${val}&_ksTS=1591257683085_275&callback=jsonp&k=1&area=c2c&bucketid=18`;
  document.body.appendChild(oScript);
  document.body.removeChild(oScript);
};
function jsonp(data) {
  //console.log(data);
  let result = data.result;
  let magic = data.magic;
  let str = "";
  result.forEach((item) => {
    str += `<li>${item[0]}</li>`;
  });
  oUl.innerHTML = str;

  let aList = oUl.children;
  magic.forEach((item) => {
    aList[item.index - 1].innerHTML += "&gt;";
    aList[item.index - 1].onmouseover = function () {
      let data = item.data;
      oDiv.innerHTML = "";
      data.forEach((item1) => {
        let oUl = document.createElement("ul");
        let str = "";
        item1.forEach((item2) => {
          if (item2.type) {
            str += `<li class="red">${item2.title}</li>`;
          } else {
            str += `<li>${item2.title}</li>`;
          }
        });
        oUl.innerHTML = str;
        oDiv.appendChild(oUl);
      });
    };
  });
}