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
    popupSendOk = document.querySelector('.user-form__send-popup-btn');
  if (pageHeaderForm) {
    userFormBtn.addEventListener('click', function (event) {
      var popupError = document.querySelector('.user-form__error-popup'),
        popupSend = document.querySelector('.user-form__send-popup');
      event.preventDefault();
      popupError.style.display = 'block';
      popupError.style.position = 'fixed';
      popupError.style.top = '100px';
      popupError.style.zIndex = '150';
      popupSend.style.display = 'block';
      popupSend.style.position = 'fixed';
      popupSend.style.top = '480px';
      popupSend.style.zIndex = '150';
    });

    popupErrorOk.addEventListener('click', function (event) {
      var popupError = document.querySelector('.user-form__error-popup');
      event.preventDefault();
      popupError.style.display = 'none';
    });

    popupSendOk.addEventListener('click', function (event) {
      var popupSend = document.querySelector('.user-form__send-popup');
      event.preventDefault();
      popupSend.style.display = 'none';
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
