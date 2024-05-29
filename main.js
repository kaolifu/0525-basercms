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
    setTimeout(() => {
      i++;
      if (i === backgroundImages.length) {
        i = 0;
      }
      imageSlider();
    }, 6000);
  }

  imageSlider();

  //eyeCatch
  class EyeCatch{
    constructor(bg,time,text,t){
      const eyeCatch = document.createElement('div');
      eyeCatch.classList.add('eye-catch');
      eyeCatch.style.backgroundImage=bg;

      const createdTime = document.createElement('p');
      createdTime.textContent=time;
      createdTime.classList.add('time');

      const subTitle = document.createElement('h3');
      subTitle.textContent=text;

      const tab=document.createElement('p');
      tab.textContent=t;
      tab.classList.add('tab');
      if(tab.textContent==='お知らせ'){
        tab.classList.add('notice');
      }
      if(tab.textContent==='レポート'){
        tab.classList.add('report');
      }
      if(tab.textContent==='リリース'){
        tab.classList.add('relise');
      }
      
      const filter=document.createElement('div');
      filter.classList.add('filter');

      eyeCatch.appendChild(createdTime);
      eyeCatch.appendChild(subTitle);
      eyeCatch.appendChild(tab);
      eyeCatch.appendChild(filter);

      document.getElementById('eye-catches').appendChild(eyeCatch);
    }
  }
  
  const eyeCatch1={
    bg:"url('./img/eye_catch01.jpeg')",
    createdTime:'2024.5.16',
    subTitle:'baser Meetup Vol.4 開催！',
    tab:'お知らせ',
  };  
  const eyeCatch2={
    bg:"url('./img/eye_catch02.jpeg')",
    createdTime:'2024.5.22',
    subTitle:'2024年マイルストーンミーティングを行いました。',
    tab:'レポート',
  };  
  const eyeCatch3={
    bg:"url('./img/eye_catch03.jpeg')",
    createdTime:'2024.5.24',
    subTitle:'福岡でのMeetup開催',
    tab:'お知らせ',
  };  
  const eyeCatch4={
    bg:"url('./img/eye_catch04.jpeg')",
    createdTime:'2024.5.29',
    subTitle:'baserCMS 5.0.15 がリリースされました！',
    tab:'リリース',
  };  
  
  const eyeCatches=[]
  eyeCatches.push(
    eyeCatch1,
    eyeCatch2,
    eyeCatch3,
    eyeCatch4,
    eyeCatch1,
    eyeCatch2,
    eyeCatch3,
    eyeCatch4,
    eyeCatch1,
    eyeCatch2,
    eyeCatch3,
    eyeCatch4,
    );

  eyeCatches.forEach((eyeCatch)=>{
    new EyeCatch(eyeCatch.bg,eyeCatch.createdTime,eyeCatch.subTitle,eyeCatch.tab);
  });


}

//next work 完善eyeCatch的 js & animetion;
//debug header background 不同步问题（将zoom-in动画写进js

//cases
class Case{
  constructor(image,sn,cn){
    const panel=document.createElement('div');
    panel.classList.add('case');

    const img=document.createElement('img');
    img.src=image;

    const siteName = document.createElement('p');
    siteName.textContent=sn;
    siteName.classList.add('site-name');

    const createrName = document.createElement('p');
    createrName.textContent=cn;
    createrName.classList.add('creater-name');

    const filter=document.createElement('div');
    filter.classList.add('filter');

    panel.appendChild(img);
    panel.appendChild(siteName);
    panel.appendChild(createrName);
    panel.appendChild(filter);

    document.getElementById('cases').appendChild(panel);
  }
}

const case01={
  image : 'img/339_image.jpeg',
  sn:'麻生教育サービス株式会社',
  cn:'（制作/開発者：小桃デザイン）',
};
const case02={
  image : 'img/338_image.jpeg',
  sn:'PADOMA',
  cn:'（制作/開発者：小桃デザイン）',
};
const case03={
  image : 'img/337_image.jpeg',
  sn:'福岡県気候変動適応センター',
  cn:'（制作/開発者：株式会社ディーゼロ、株式会社キャッチアップ）',
};
const case04={
  image : 'img/336_image.jpeg',
  sn:'企業理念浸透ツール「onemind」',
  cn:'（制作/開発者：株式会社キャッチアップ）',
};
const case05={
  image : 'img/335_image.jpeg',
  sn:'日本イットリウム 株式会社',
  cn:'（制作/開発者：株式会社ディーゼロ、株式会社キャッチアップ）',
};
const case06={
  image : 'img/334_image.png',
  sn:'絶メシリスト広島',
  cn:'（制作/開発者：株式会社キャッチアップ）',
};

const cases=[];
cases.push(
  case01,
  case02,
  case03,
  case04,
  case05,
  case06,
);

cases.forEach((casePanel)=>{
  new Case(casePanel.image,casePanel.sn,casePanel.cn);
});