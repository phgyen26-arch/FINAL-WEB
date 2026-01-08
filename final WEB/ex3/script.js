function calculateAverage() {
  // Lấy tất cả input có class "grade"
  var grades = document.querySelectorAll(".grade");

  var total = 0;
  var count = 0;

  grades.forEach(function(input) {
    var value = parseFloat(input.value);
    if (!isNaN(value)) {
      total += value;
      count++;
    }
  });

  var average = total / count;

  // Hiển thị kết quả
  document.getElementById("result").textContent =
    "Average Grade: " + average.toFixed(2);
}
