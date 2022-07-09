function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  let element = document.getElementById('check'); // チェックボックスの値を取得
  if (element.checked) {
    document.getElementById('text').style.backgroundColor = 'red';
  } else {
    document.getElementById('text').style.backgroundColor = 'white';
  }
}
