const header = document.querySelector('header');
const changedHeader = document.querySelector('.header-change')
let lastScrollY = window.scrollY; // 记录上次滚动的位置

window.addEventListener('scroll', () => {
    // 自定义的滚动距离，可以根据需要调整
    const scrollDistance = 100;

    if (window.scrollY > lastScrollY && window.scrollY > scrollDistance) {
        // 向下滚动，超过自定义距离时隐藏 header
        header.style.transform = 'translateY(-100%)';
        changedHeader.style.display = 'block'
    } else {
        // 向上滚动时显示 header
        header.style.transform = 'translateY(0)';
        changedHeader.style.display = 'none'

    }
    
    lastScrollY = window.scrollY; // 更新上次滚动的位置
});
