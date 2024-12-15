// load-footer.js
document.addEventListener("DOMContentLoaded", function() {
	// 現在の年を取得
	const currentYear = new Date().getFullYear();
	// idでHTMLのタグを取得
	const copyrightElement = document.getElementById("copyright-year");
  
	if (copyrightElement) {
	  // 指定したidの場所に現在の年を書き込み
	  copyrightElement.textContent = currentYear;
	}
  });