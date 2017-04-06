/*global window, document, $*/

// отключение класса nojs
(function () {
  'use strict';
  var logo = document.querySelector('.logo'),
    pageHeader = document.querySelector('.page-header');
  pageHeader.classList.remove('page-header--nojs');
  logo.style.borderBottom = 'none';
}());

// управление попапами
(function () {
  'use strict';
  var pageHeaderForm = document.querySelector('.page-header--form'),
    userFormBtn = document.getElementById('userFormBtn'),
    popupErrorOk = document.querySelector('.user-form__error-popup-btn'),
    popupSendOk = document.querySelector('.user-form__send-popup-btn'),
    popupError = document.querySelector('.user-form__error-popup'),
    popupSend = document.querySelector('.user-form__send-popup');
  if (pageHeaderForm) {
    userFormBtn.addEventListener('click', function (event) {
      event.preventDefault();
      popupError.style.display = 'block';
      popupError.style.position = 'fixed';
      popupError.style.top = '100px';
      popupError.style.zIndex = '150';
      popupSend.style.display = 'block';
      popupSend.style.position = 'fixed';
      popupSend.style.top = '480px';
      popupSend.style.zIndex = '150';
      userFormBtn.style.backgroundColor = '#e5e5e5';
      userFormBtn.style.outline = 'none';
      userFormBtn.style.borderColor = '#e5e5e5';
    });

    popupErrorOk.addEventListener('click', function (event) {
      event.preventDefault();
      popupError.style.display = 'none';
      userFormBtn.style.backgroundColor = '#2aab6d';
      userFormBtn.style.borderColor = '#2aab6d';
    });

    popupSendOk.addEventListener('click', function (event) {
      event.preventDefault();
      popupSend.style.display = 'none';
      userFormBtn.style.backgroundColor = '#2aab6d';
      userFormBtn.style.borderColor = '#2aab6d';
    });
  }
}());

// управление меню
(function () {
  'use strict';
  var navMain = document.querySelector('.main-nav'),
    navToggle = document.querySelector('.main-nav__toggle'),
    mainNavList = document.querySelector('.main-nav__list'),
    logo = document.querySelector('.logo'),
    pageHeaderIndex = document.querySelector('.page-header--index'),
    pageHeaderPhoto = document.querySelector('.page-header--photo'),
    pageHeaderForm = document.querySelector('.page-header--form'),
    pageHeaderCompTitle = document.querySelector('.page-header__competition-title');
  navToggle.addEventListener('click', function (event) {
    event.preventDefault();
    if (navMain.classList.contains('main-nav--closed')) { // если кликаем по гамбургеру
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
      mainNavList.style.display = 'block';
      logo.style.borderBottom = 'solid 1px black';
      if (document.body.clientWidth < 700) { // если mobile
        logo.style.paddingBottom = '25px';
        if (pageHeaderIndex) {
          pageHeaderIndex.style.backgroundPosition = '0 435px, -190px 259px';
          pageHeaderIndex.style.height = '721px';
        } else if (pageHeaderPhoto) {
          pageHeaderPhoto.style.backgroundPosition = '-190px 259px';
          pageHeaderPhoto.style.height = '495px';
          pageHeaderCompTitle.style.marginTop = '14px';
        } else if (pageHeaderForm) {
          pageHeaderForm.style.backgroundPosition = '-190px 259px';
          pageHeaderForm.style.height = '495px';
          pageHeaderCompTitle.style.marginTop = '14px';
        }
      } else if (document.body.clientWidth >= 700) { // если tablet
        logo.style.paddingBottom = '43px';
        if (pageHeaderIndex) {
          pageHeaderIndex.style.backgroundPosition = '0 440px, -250px 255px';
          pageHeaderIndex.style.height = '984px';
        } else if (pageHeaderPhoto) {
          pageHeaderPhoto.style.backgroundPosition = '-250px 259px';
          pageHeaderPhoto.style.height = '695px';
        } else if (pageHeaderForm) {
          pageHeaderForm.style.backgroundPosition = '-250px 259px';
          pageHeaderForm.style.height = '695px';
        }
      }
    } else { // если кликаем по крестику
      navMain.classList.remove('main-nav--opened');
      navMain.classList.add('main-nav--closed');
      mainNavList.style.display = 'none';
      logo.style.borderBottom = 'none';
      if (document.body.clientWidth < 700) { // если mobile
        logo.style.paddingBottom = '25px';
        if (pageHeaderIndex) {
          pageHeaderIndex.style.backgroundPosition = '0 176px, -190px 0';
          pageHeaderIndex.style.height = '462px';
        } else if (pageHeaderPhoto) {
          pageHeaderPhoto.style.backgroundPosition = '-190px 0';
          pageHeaderPhoto.style.height = '237px';
          pageHeaderCompTitle.style.marginTop = '30px';
        } else if (pageHeaderForm) {
          pageHeaderForm.style.backgroundPosition = '-190px 0';
          pageHeaderForm.style.height = '237px';
          pageHeaderCompTitle.style.marginTop = '30px';
        }
      } else if (document.body.clientWidth >= 700) { // если tablet
        logo.style.paddingBottom = '43px';
        if (pageHeaderIndex) {
          pageHeaderIndex.style.backgroundPosition = '0 176px, -250px 0';
          pageHeaderIndex.style.height = '721px';
        } else if (pageHeaderPhoto) {
          pageHeaderPhoto.style.backgroundPosition = '-250px 0';
          pageHeaderPhoto.style.height = '440px';
        } else if (pageHeaderForm) {
          pageHeaderForm.style.backgroundPosition = '-190px 0';
          pageHeaderForm.style.height = '237px';
        }
      }
    }
  });
}());

// управление слайдером
(function () {
  'use strict';
  var pageHeaderIndex = document.querySelector('.page-header--index'),
    reviewsBefore = document.querySelector('.reviews__before'),
    reviewsAfter = document.querySelector('.reviews__after'),
    slide1 = document.getElementById('slide1'),
    slide2 = document.getElementById('slide2'),
    slide3 = document.getElementById('slide3');
  if (pageHeaderIndex) {
    reviewsBefore.addEventListener('click', function (event) {
      event.preventDefault();
      if (window.getComputedStyle(slide1).display === 'block') {
        slide1.style.display = 'none';
        slide2.style.display = 'none';
        slide3.style.display = 'block';
      } else if (window.getComputedStyle(slide2).display === 'block') {
        slide2.style.display = 'none';
        slide1.style.display = 'block';
        slide3.style.display = 'none';
      } else if (window.getComputedStyle(slide3).display === 'block') {
        slide3.style.display = 'none';
        slide2.style.display = 'block';
        slide1.style.display = 'none';
      }
    });

    reviewsAfter.addEventListener('click', function (event) {
      event.preventDefault();
      if (window.getComputedStyle(slide1).display === 'block') {
        slide1.style.display = 'none';
        slide2.style.display = 'block';
        slide3.style.display = 'none';
      } else if (window.getComputedStyle(slide2).display === 'block') {
        slide2.style.display = 'none';
        slide1.style.display = 'none';
        slide3.style.display = 'block';
      } else if (window.getComputedStyle(slide3).display === 'block') {
        slide3.style.display = 'none';
        slide2.style.display = 'none';
        slide1.style.display = 'block';
      }
    });
  }
}());

// управление инструментами обработки фотографий
(function () {
  'use strict';
  var pageHeaderPhoto = document.querySelector('.page-header--photo'),
    crop = document.querySelector('.icon-editor-crop'),
    fills = document.querySelector('.icon-editor-fill'),
    contrast = document.querySelector('.icon-editor-contrast'),
    slider = document.querySelector('.userphoto__slider--common'),
    sliderCrop = document.querySelector('.userphoto__control--crop > .userphoto__slider'),
    sliderFills = document.querySelector('.userphoto__control--fill > .userphoto__slider'),
    sliderContrast = document.querySelector('.userphoto__control--contrast > .userphoto__slider');
  if (pageHeaderPhoto) {
    if (document.body.clientWidth < 700) {
      slider.style.left = '151px';
      crop.addEventListener('click', function (event) {
        event.preventDefault();
        crop.style.fill = (crop.style.fill !== 'rgb(210, 40, 86)') ? 'rgb(210, 40, 86)' : 'rgb(181, 185, 190)';
        fills.style.fill = 'rgb(181, 185, 190)';
        contrast.style.fill = 'rgb(181, 185, 190)';
        slider.style.backgroundColor = (crop.style.fill === 'rgb(210, 40, 86)') ? 'rgb(210, 40, 86)' : 'rgb(242, 242, 242)';
        slider.style.left = '80px';
        if ((crop.style.fill !== 'rgb(210, 40, 86)') && (fills.style.fill !== 'rgb(210, 40, 86)') && (contrast.style.fill !== 'rgb(210, 40, 86)')) {
          slider.style.left = '151px';
        }
      });
      fills.addEventListener('click', function (event) {
        event.preventDefault();
        fills.style.fill = (fills.style.fill !== 'rgb(210, 40, 86)') ? 'rgb(210, 40, 86)' : 'rgb(181, 185, 190)';
        crop.style.fill = 'rgb(181, 185, 190)';
        contrast.style.fill = 'rgb(181, 185, 190)';
        slider.style.backgroundColor = (fills.style.fill === 'rgb(210, 40, 86)') ? 'rgb(210, 40, 86)' : 'rgb(242, 242, 242)';
        slider.style.left = '250px';
        if ((crop.style.fill !== 'rgb(210, 40, 86)') && (fills.style.fill !== 'rgb(210, 40, 86)') && (contrast.style.fill !== 'rgb(210, 40, 86)')) {
          slider.style.left = '151px';
        }
      });
      contrast.addEventListener('click', function (event) {
        event.preventDefault();
        contrast.style.fill = (contrast.style.fill !== 'rgb(210, 40, 86)') ? 'rgb(210, 40, 86)' : 'rgb(181, 185, 190)';
        crop.style.fill = 'rgb(181, 185, 190)';
        fills.style.fill = 'rgb(181, 185, 190)';
        slider.style.backgroundColor = (contrast.style.fill === 'rgb(210, 40, 86)') ? 'rgb(210, 40, 86)' : 'rgb(242, 242, 242)';
        slider.style.left = '180px';
        if ((crop.style.fill !== 'rgb(210, 40, 86)') && (fills.style.fill !== 'rgb(210, 40, 86)') && (contrast.style.fill !== 'rgb(210, 40, 86)')) {
          slider.style.left = '152px';
        }
      });
    } else if (document.body.clientWidth >= 700) {
      crop.addEventListener('click', function (event) {
        event.preventDefault();
        crop.style.fill = (crop.style.fill !== 'rgb(210, 40, 86)') ? 'rgb(210, 40, 86)' : 'rgb(181, 185, 190)';
        sliderCrop.style.backgroundColor = (sliderCrop.style.backgroundColor !== 'rgb(210, 40, 86)') ? 'rgb(210, 40, 86)' : 'rgb(242, 242, 242)';
      });
      fills.addEventListener('click', function (event) {
        event.preventDefault();
        fills.style.fill = (fills.style.fill !== 'rgb(210, 40, 86)') ? 'rgb(210, 40, 86)' : 'rgb(181, 185, 190)';
        sliderFills.style.backgroundColor = (sliderFills.style.backgroundColor !== 'rgb(210, 40, 86)') ? 'rgb(210, 40, 86)' : 'rgb(242, 242, 242)';
      });
      contrast.addEventListener('click', function (event) {
        event.preventDefault();
        contrast.style.fill = (contrast.style.fill !== 'rgb(210, 40, 86)') ? 'rgb(210, 40, 86)' : 'rgb(181, 185, 190)';
        sliderContrast.style.backgroundColor = (sliderContrast.style.backgroundColor !== 'rgb(210, 40, 86)') ? 'rgb(210, 40, 86)' : 'rgb(242, 242, 242)';
      });
    }
    crop.addEventListener('mouseover', function (event) {
      event.preventDefault();
      crop.style.fill = (crop.style.fill !== 'rgb(210, 40, 86)') ? 'rgb(141, 148, 155)' : 'rgb(210, 40, 86)';
    });
    crop.addEventListener('mouseout', function (event) {
      event.preventDefault();
      crop.style.fill = (crop.style.fill !== 'rgb(210, 40, 86)') ? 'rgb(181, 185, 190)' : 'rgb(210, 40, 86)';
    });
    fills.addEventListener('mouseover', function (event) {
      event.preventDefault();
      fills.style.fill = (fills.style.fill !== 'rgb(210, 40, 86)') ? 'rgb(141, 148, 155)' : 'rgb(210, 40, 86)';
    });
    fills.addEventListener('mouseout', function (event) {
      event.preventDefault();
      fills.style.fill = (fills.style.fill !== 'rgb(210, 40, 86)') ? 'rgb(181, 185, 190)' : 'rgb(210, 40, 86)';
    });

    contrast.addEventListener('mouseover', function (event) {
      event.preventDefault();
      contrast.style.fill = (contrast.style.fill !== 'rgb(210, 40, 86)') ? 'rgb(141, 148, 155)' : 'rgb(210, 40, 86)';
    });
    contrast.addEventListener('mouseout', function (event) {
      event.preventDefault();
      contrast.style.fill = (contrast.style.fill !== 'rgb(210, 40, 86)') ? 'rgb(181, 185, 190)' : 'rgb(210, 40, 86)';
    });
  }
}());
