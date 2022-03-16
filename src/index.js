import "./styles.css";

// まず押された後に実行する関数を作る
const onclickAdd = () => {
  // alert("!!");
  const inputText = document.getElementById("add-text").value;
  // 取得した後、入力欄を空にする
  // document.getElementById("add-text").value = "";
  // alert(inputText);

  // dom作成はcreateElementつかう
  const makediv = document.createElement("div");
  console.log(makediv);
  // 下記のように書くと作ったものにクラス名を付与
  makediv.className = "list-row";

  const makeli = document.createElement("li");
  // innerText 中身の設定
  makeli.innerText = inputText;
  // divタグの下に入れたい
  makediv.appendChild(makeli);
  // 未完了リスト　の下に追加
  document.getElementById("undo-list").appendChild(makediv);
  //同様にボタンも作る
  const donebutton = document.createElement("button");
  donebutton.innerText = "完了";
  donebutton.addEventListener("click", () => {
    const doneTaget = donebutton.parentNode;
    document.getElementById("done-list").appendChild(doneTaget);
    // alert("doone!");
  });
  makediv.appendChild(donebutton);

  const deletebutton = document.createElement("button");
  deletebutton.innerText = "削除";
  deletebutton.addEventListener("click", () => {
    // 押された削除ボタンの親タグを削除する(parentNodeでとる)
    const deleteTaget = deletebutton.parentNode;
    // liの子要素から取り除く　という形で削除する
    document.getElementById("undo-list").removeChild(deleteTaget);
  });
  makediv.appendChild(deletebutton);
};

// ボタン押された時の挙動
// htmlでidつけておいて、そいつを見つけてクリックイベントが起きたら（リスナーでつける）
// 関数実行　が下記。
document
  .getElementById("add-button")
  .addEventListener("click", () => onclickAdd());
