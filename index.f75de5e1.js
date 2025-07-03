"use strict";
const wall = document.querySelector(".wall");
const spider = document.querySelector(".spider");
wall.addEventListener("click", (e)=>{
    const rect = wall.getBoundingClientRect();
    const spiderWidth = spider.offsetWidth;
    const spiderHeight = spider.offsetHeight;
    const borderWidth = wall.clientLeft;
    let newLeft = e.clientX - rect.left - borderWidth - spiderWidth / 2;
    let newTop = e.clientY - rect.top - borderWidth - spiderHeight / 2;
    newLeft = Math.max(0, Math.min(newLeft, wall.clientWidth - spiderWidth));
    newTop = Math.max(0, Math.min(newTop, wall.clientHeight - spiderHeight));
    spider.style.left = `${newLeft}px`;
    spider.style.top = `${newTop}px`;
}); // const wall = document.querySelector('.wall');
 // const spider = document.querySelector('.spider');
 // const borderWidth = wall.clientLeft;
 // document.addEventListener('click', (e) => {
 //   const wallRect = wall.getBoundingClientRect();
 //   const spiderWidth = spider.offsetWidth;
 //   const spiderHeight = spider.offsetHeight;
 //   const isInsideWall =
 //     e.clientX >= wallRect.left &&
 //     e.clientX <= wallRect.right &&
 //     e.clientY >= wallRect.top &&
 //     e.clientY <= wallRect.bottom;
 //   if (!isInsideWall) {
 //     return;
 //   }
 //   const offsetX = e.clientX - wallRect.left - borderWidth;
 //   const offsetY = e.clientY - wallRect.top - borderWidth;
 //   let newLeft = offsetX - spiderWidth / 2;
 //   let newTop = offsetY - spiderHeight / 2;
 //   newLeft = Math.max(0, Math.min(newLeft, wall.clientWidth - spiderWidth));
 //   newTop = Math.max(0, Math.min(newTop, wall.clientHeight - spiderHeight));
 //   spider.style.left = `${newLeft}px`;
 //   spider.style.top = `${newTop}px`;
 // });

//# sourceMappingURL=index.f75de5e1.js.map
