// window.alert("Hello World!");

//<script src="index.js"></script>は、bodyタグの下にかく

//letは後から再代入（変数valが保持するアドレスを変更）できる
let val = "Hello";
console.log(val);

//constは定数
const val2 = "HELLO";
console.log(val2);
// constは再代入不可なのでエラーがでる
// Uncaught TypeError: Assignment to constant variable. 非補足　型エラー：定数への代入
// val2 = "こんにちわ"


//構文エラー：予期しないトークン（予約語は使えない）
//let break = "breakは予約語"


//sum関数で、結果をresultに代入
function sum(val1, val2) {
  return val1 + val2;//returnで戻り値を設定
}
//resultに戻り値で帰ってきた値を代入
let result = sum(10, 20);
//resultを出力
console.log(result);


//multiply関数で、2つの値の掛け算
//（関数定義)関数宣言文
function multiply(a, b) {//宣言時に設定する引数→仮引数
  return a * b;
}
//関数実行文
console.log(multiply(7, 9));//実行時の渡す引数→実引数
console.log(multiply(-11, 9));


//引数がない関数を定義
function test() {
  console.log("ここは関数の内部");
  return "テスト";
}
//関数実行文
console.log(test());
//test()


//sikau DOMの使い
document.getElementById("sikaku")//id属性sikakuのタグ要素を取得
  .addEventListener('mouseenter',//clickされたら、関数を実行（event…マウスなどの外部入力）
    function () {
      this.style.backgroundColor = "blue";
      //this.style.ｷｬﾒﾙｹｰｽ = "値";で書き換える
      //console.log("クリックされた");
      this.style.color = "white";
      this.style.fontSize = "20px";
      this.style.textAlign = "center";
      this.innerHTML = "青"
    }
  )

document.getElementById("sikaku")
  .addEventListener('mouseleave', function () {
    this.style.backgroundColor = "green";
    this.style.color = "white";
    this.style.fontSize = "20px";
    this.style.textAlign = "center";
    this.innerHTML = "緑"
  }
  )

document.getElementById("sikaku")
  .addEventListener('click', function () {
    this.style.backgroundColor = "black";
    this.style.color = "white";
    this.style.fontSize = "20px";
    this.style.textAlign = "center";
    this.innerHTML = "黒"

  }
  )
let count = 0;
document.getElementById("sikaku").addEventListener('dblclick', function () {
  //textContentには、テキスト（文字）が入る
    if (count%4 === 0) {
      this.style.backgroundColor = "black";
      this.textContent= "黒の四角形";
      this.textContent= "○";
      this.style.fontSize = "60px";
      // this.style.color = "white";
      // this.style.fontSize = "20px";
      // this.style.textAlign = "center";
      // this.innerHTML = "黒"
    } else if (count%4 === 1) {
      this.style.backgroundColor = "blue";
      this.textContent= "青の四角形";
      this.textContent= "×";
      this.style.fontSize = "60px";
      
    }
    else if (count%4 === 2) {
      this.style.backgroundColor = "red";
      this.textContent= "赤の四角形";
      this.textContent= "○";
      this.style.fontSize = "60px";
    }
    else if (count%4 === 3) {
      this.style.backgroundColor = "green";
      this.textContent= "緑の四角形";
      this.textContent= "×";
      this.style.fontSize = "60px";
    }
    console.log(count);//countを表示
    count = count + 1;//ダブルクリックでcountを増やす
    console.log(this.textContent);
  }
)

//sikaku2
document.getElementById("sikaku2")
  .addEventListener('click', function () {
    this.style.backgroundColor = "black";
    this.style.color = "white";
    this.style.fontSize = "20px";
    this.style.textAlign = "center";
    this.innerHTML = "黒"
  }
  )
document.getElementById("sikaku2")
  .addEventListener('mouseenter', function () {
    this.style.backgroundColor = "orange";
    this.style.color = "white";
    this.style.fontSize = "20px";
    this.style.textAlign = "center";
    this.innerHTML = "黄"
  }
  )
document.getElementById("sikaku2")
  .addEventListener('mouseleave', function () {
    this.style.backgroundColor = "red";
    this.style.color = "white";
    this.style.fontSize = "20px";
    this.style.textAlign = "center";
    this.innerHTML = "赤"
  }
  )

