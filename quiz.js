// 正解のボタンをクリックすると「正解！」、不正解だと「不正解」と表示
document.getElementById('answer1').addEventListener('click', function() {
    document.getElementById('result').textContent = '不正解';
});

document.getElementById('answer2').addEventListener('click', function() {
    document.getElementById('result').textContent = '正解！';
});

document.getElementById('answer3').addEventListener('click', function() {
    document.getElementById('result').textContent = '不正解';
});
