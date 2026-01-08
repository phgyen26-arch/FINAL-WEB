var showVegetarianOnly = false;

function filterMenu() {
  // Lấy tất cả các món ăn
  var items = document.getElementsByClassName("menu-item");

  for (var i = 0; i < items.length; i++) {
    // Nếu đang ở chế độ chỉ món chay
    if (showVegetarianOnly) {
      items[i].style.display = "list-item";
    } else {
      // Ẩn món không phải chay
      if (!items[i].classList.contains("vegetarian")) {
        items[i].style.display = "none";
      }
    }
  }

  // Đảo trạng thái
  showVegetarianOnly = !showVegetarianOnly;
}
