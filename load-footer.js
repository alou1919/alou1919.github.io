// フッターを動的に読み込む
document.addEventListener("DOMContentLoaded", () => {
    fetch("footer.html") // footer.html を取得
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load footer: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("footer").innerHTML = data; // 読み込んだHTMLを挿入
        })
        .catch(error => {
            console.error("Error loading footer:", error); // エラーハンドリング
        });
});