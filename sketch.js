let input;
let dropdown;
let angle = 0;
let amplitude = 20; // 跳動的幅度

function setup() {
  createCanvas(windowWidth, windowHeight);
  input = createInput('hsuan'); // 預設文字是 "hsuan"
  input.position(0, 0);
  input.size(width / 2 - 20, 40); // 調整文字框大小

  dropdown = createSelect(); // 創建選單
  dropdown.position(width / 2 + 20, 0); // 設置選單位置
  dropdown.size(width / 2 - 20, 40); // 調整選單大小
  dropdown.option('選單'); // 設置第一個選項為 "選單"
  dropdown.option('第一周');
  dropdown.option('第二周');
  dropdown.option('測驗卷');
  dropdown.changed(handleDropdownChange); // 設置選單變更事件

  input.input(updateText);
  frameRate(30); // 設定畫面更新率
}

function handleDropdownChange() {
  let selected = dropdown.value();
  if (selected === '第一周') {
    window.location.href = 'https://www.tku.edu.tw/';
  } else if (selected === '第二周') {
    window.location.href = 'http://www.et.tku.edu.tw/';
  } else if (selected === '第三周') {
    window.location.href =  https://czhiii.github.io/202503/
  }
}

function updateText() {
  redraw();
}

function draw() {
  background(144, 238, 144); // 設定背景顏色為淺綠色
  let textValue = input.value();
  let spacedText = textValue.split('').join(' ');
  textAlign(CENTER, CENTER);
  textSize(32); // 固定字體大小，調小一點
  let y = 0;
  let x = 0;
  while (y < height) {
    while (x < width) {
      let yOffset = sin(angle + x * 0.1) * amplitude; // 計算跳動的偏移量
      text(spacedText, x, y + yOffset); // 調整文字位置
      x += textWidth(spacedText);
    }
    x = 0; // 重置 x
    y += textAscent() + textDescent(); // 移動到下一行
  }
  angle += 0.05; // 增加角度，讓文字跳動
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  input.size(width / 2 - 20, 40); // 調整文字框大小
  dropdown.size(width / 2 - 20, 40); // 調整選單大小
  dropdown.position(width / 2 + 20, 0); // 調整選單位置
}

