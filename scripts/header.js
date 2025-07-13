'use strict'
const active = document.querySelector('.active')
const navList = document.querySelector('.nav-list')
const main = document.querySelector('main')

navList.addEventListener('click', function (event) {
  if (event.target.tagName === 'a') {
    const activeLink = navList.querySelector('.active')
    if (activeLink) {
      activeLink.classList.remove('active')
    }
    event.target.classList.add('active')
  }
})

const header = document.querySelector('.header')
const stickyThreshold = 100 // 设定滚动的阈值，超过 100px 才变为 sticky

window.addEventListener('scroll', () => {
  if (window.scrollY > stickyThreshold) {
    // 当滚动超过阈值时，添加 sticky 类
    header.classList.add('sticky')
  } else {
    // 当滚动小于阈值时，移除 sticky 类
    header.classList.remove('sticky')
  }
})
