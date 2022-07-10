function displayList() {
  const fruitList = document.getElementById('fruits');
  // const fruitList = document.querySelector('#fruits'); より包括的に書くなら。もしくは querySelectorAll を使用。class なら 「.」
  fruitList.innerHTML = '<ul><li>リンゴ</li><li>イチゴ</li><li>ブドウ</li></ul>'
}
