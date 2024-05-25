'use strict';
{
  //header mouseAction
  function mouseAction(el, list) {
    el.addEventListener('mouseover', () => {
      list.style.opacity = 1;
      list.style.translate = '0 -50px';
      list.style.pointerEvents = "auto";
    });
    el.addEventListener('mouseleave', () => {
      list.style.opacity = 0;
      list.style.translate = '0 50px';
      list.style.pointerEvents = "none";
    });
  }

  const itemInfo = document.getElementById('item-info');
  const itemInfoList = document.getElementById('item-info-list');

  mouseAction(itemInfo, itemInfoList);

  const support = document.getElementById('support');
  const supportList = document.getElementById('support-list');

  mouseAction(support, supportList);

  const download = document.getElementById('download');
  const downloadList = document.getElementById('download-list');

  mouseAction(download, downloadList);

  //background imageSlider
  const backgroundImages = [
    "url('./img/mv_01.jpeg')",
    "url('./img/mv_02.jpeg')",
    "url('./img/mv_03.jpeg')",
    "url('./img/mv_04.jpeg')",
    "url('./img/mv_05.jpeg')",
  ];

  const background = document.getElementsByClassName('background');

  let i = 0;
  function imageSlider() {
    background[0].style.backgroundImage = backgroundImages[i];
    background[0].style.backgroundSize = 'cover';
    setTimeout(() => {
      i++;
      if (i === backgroundImages.length) {
        i = 0;
      }
      imageSlider();
    }, 3000);
  }

  imageSlider();

}

//next work:backgroundImage缩放，button的css