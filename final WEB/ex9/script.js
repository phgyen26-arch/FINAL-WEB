var pricesHidden = false;

function togglePrice() {
  // Lấy tất cả phần tử có class "price"
  var prices = document.getElementsByClassName("price");

  for (var i = 0; i < prices.length; i++) {
    if (pricesHidden) {
      prices[i].style.display = "block";
    } else {
      prices[i].style.display = "none";
    }
  }

  // Đổi trạng thái
  pricesHidden = !pricesHidden;
}
