//最初から動作する部分

//選択肢のテキストの配列
const answers = ["アーサー","ガウェイン","ランスロット","トリスタン"];

//選択肢のid属性の配列
const answerIDs = ["answerA","answerB","answerC","answerD"];


//for文で配列の要素を取り出して、添え字ごとに組み合わせる
for(let i = 0; i < 4; i++) {
    document.getElementById(answerIDs[i]).textContent = answers[i];
    //HTMLの、id属性のanswersIDsのiを取得、テキストをannsuwersのiにする
}

const correct = "正解！";
const incorrect = "不正解";


// 不正解の関数。引数にid属性の名前を指定して、A,B,Dを当てはめる
const createIncorrect = function(idName) {
    const answerIdName = document.getElementById(idName);
    const changeIncorrect = function() {
        answerIdName.style.color = "blue";
        answerIdName.textContent = incorrect;
    }
    answerIdName.addEventListener('click',changeIncorrect);
}


// const answerIdName = document.getElementById(idName);
// function createIncorrect(){
//     answerIdName.style.color = "blue";
//     answerIdName.textContent = incorrect;
// }
// answerIdName.addEventListener("click",createIncorrect);

// 正解の関数
const createCorrect = function(idName){
    document.getElementById(idName).addEventListener('click', function () {
        this.style.color = "red";
        this.textContent = correct;
        this.setAttribute("class","correct");
    })
}



//分解して考える。制限時間とテキストの書き換えにわける。
setTimeout(function(){
    console.log("over 5");
    document.getElementById("answerC").textContent = "TIME OVER　正解はランスロット"
},5000)

//関数の実行
// for(let i = 0; i < answerIDs.length < i++;) {// let i = 0; i < answerIDs.length < i++;
//     if(answerIDs[i] != 2){
//         createIncorrect(answerIDs[i]);
//     }else{
//     createCorrect(answerIDs[i]);
// }
// }

// for(const ansValue of answerIDs) {// let i = 0; i < answerIDs.length < i++;
//     if(ansValue != 2){
//         createIncorrect(ansValue);
//     }else{
//     createCorrect(ansValue);
// }
// }

// 関数の実行→べた書き
createIncorrect("answerA");
createIncorrect("answerB");
createIncorrect("answerD");
createCorrect(answerIDs[2]);

// document.getElementById("answerA").addEventListener('click', function () {
//     //   this.textContent = "違います";
//       this.style.color = "blue";
//       this.textContent = incorrect;
    
// })


// document.getElementById("answerB").addEventListener('click', function () {
//     // this.textContent = "違います";
//     this.style.color = "blue";
//     this.textContent = incorrect;
// })

// document.getElementById("answerC").addEventListener('click', function () {
//     // this.textContent = "正解！";
//     this.style.color = "red";
//     this.textContent = correct;
//     this.setAttribute("class","correct");
// })

// document.getElementById("answerD").addEventListener('click', function () {
//     // this.textContent = "違います";
//     this.style.color = "blue";
//     this.textContent = incorrect;
// })