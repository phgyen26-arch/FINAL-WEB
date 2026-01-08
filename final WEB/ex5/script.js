function switchTab(tabId) {
  // Lấy tất cả tab
  var tabs = document.getElementsByClassName("tab");
  // Lấy tất cả nội dung
  var contents = document.getElementsByClassName("tab-content");

  // Xoá trạng thái active của tất cả tab
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }

  // Ẩn tất cả nội dung
  for (var i = 0; i < contents.length; i++) {
    contents[i].classList.remove("active");
  }

  // Thêm active cho tab được click
  event.target.classList.add("active");

  // Hiển thị nội dung tương ứng
  document.getElementById(tabId).classList.add("active");
}
