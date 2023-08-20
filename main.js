window.onload = function() {
    // 在这里获取你的哔哩哔哩视频推荐和链接，并将它们展示在你的网站上
}
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar.style.transform === 'translateX(100%)') {
        sidebar.style.transform = 'translateX(0)';
    } else {
        sidebar.style.transform = 'translateX(100%)';
    }
}
