/*global window, document, $, console*/

var navMain = document.querySelector('.main-nav'),
  navToggle = document.querySelector('.main-nav__toggle'),
  mainNavList = document.querySelector('.main-nav__list'),
  logo = document.querySelector('.logo'),
  download = document.querySelector('.download'),
  intro = document.querySelector('.intro'),
  pageHeader = document.querySelector('.page-header'),
  pageHeaderIndex = document.querySelector('.page-header--index'),
  pageHeaderPhoto = document.querySelector('.page-header--photo'),
  pageHeaderForm = document.querySelector('.page-header--form'),
  reviewsBefore = document.querySelector('.reviews__before'),
  reviewsAfter = document.querySelector('.reviews__after'),
  pageHeaderCompTitle = document.querySelector('.page-header__competition-title'),
  slide1 = document.getElementById('slide1'),
  slide2 = document.getElementById('slide2'),
  slide3 = document.getElementById('slide3');

pageHeader.classList.remove('page-header--nojs');
logo.style.borderBottom = 'none';

navToggle.addEventListener('click', function (event) {
  'use strict';
  event.preventDefault();
  if (navMain.classList.contains('main-nav--closed')) { // если кликаем по гамбургеру
    console.log('Клик по гамбургеру');
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    mainNavList.style.display = 'block';
    logo.style.borderBottom = 'solid 1px black';
    if (window.matchMedia('(max-width: 699px)').matches) { // если mobile
      console.log('Клик по гамбургеру на телефоне');
      logo.style.paddingBottom = '25px';
      if (pageHeaderIndex) {
        console.log('Клик по гамбургеру на телефоне на главной странице');
        pageHeaderIndex.style.backgroundPosition = '0 435px, -190px 259px';
        pageHeaderIndex.style.height = '721px';
      } else if (pageHeaderPhoto) {
        console.log('Клик по гамбургеру на телефоне на странице фото');
        pageHeaderPhoto.style.backgroundPosition = '-190px 259px';
        pageHeaderPhoto.style.height = '495px';
        pageHeaderCompTitle.style.marginTop = '14px';
      } else if (pageHeaderForm) {
        console.log('Клик по гамбургеру на телефоне на странице форм');
        pageHeaderForm.style.backgroundPosition = '-190px 259px';
        pageHeaderForm.style.height = '495px';
        pageHeaderCompTitle.style.marginTop = '14px';
      }
    } else if (window.matchMedia('(min-width: 700px)').matches) { // если tablet
      console.log('Клик по гамбургеру на планшете');
      logo.style.paddingBottom = '43px';
      if (pageHeaderIndex) {
        console.log('Клик по гамбургеру на планшете на главной странице');
        pageHeaderIndex.style.backgroundPosition = '0 440px, -250px 255px';
        pageHeaderIndex.style.height = '984px';
      } else if (pageHeaderPhoto) {
        console.log('Клик по гамбургеру на планшете на странице фото');
        pageHeaderPhoto.style.backgroundPosition = '-250px 259px';
        pageHeaderPhoto.style.height = '695px';
      } else if (pageHeaderForm) {
        console.log('Клик по гамбургеру на планшете на странице форм');
        pageHeaderForm.style.backgroundPosition = '-250px 259px';
        pageHeaderForm.style.height = '695px';
      }
    }
  } else { // если кликаем по крестику
    console.log('Клик по крестику');
    navMain.classList.remove('main-nav--opened');
    navMain.classList.add('main-nav--closed');
    mainNavList.style.display = 'none';
    logo.style.borderBottom = 'none';
    if (window.matchMedia('(max-width: 699px)').matches) { // если mobile
      console.log('Клик по крестику на телефоне');
      logo.style.paddingBottom = '25px';
      if (pageHeaderIndex) {
        console.log('Клик по крестику на телефоне на главной странице');
        pageHeaderIndex.style.backgroundPosition = '0 176px, -190px 0';
        pageHeaderIndex.style.height = '462px';
      } else if (pageHeaderPhoto) {
        console.log('Клик по крестику на телефоне на странице фото');
        pageHeaderPhoto.style.backgroundPosition = '-190px 0';
        pageHeaderPhoto.style.height = '237px';
        pageHeaderCompTitle.style.marginTop = '30px';
      } else if (pageHeaderForm) {
        console.log('Клик по крестику на телефоне на странице форм');
        pageHeaderForm.style.backgroundPosition = '-190px 0';
        pageHeaderForm.style.height = '237px';
        pageHeaderCompTitle.style.marginTop = '30px';
      }
    } else if (window.matchMedia('(min-width: 700px)').matches) { // если tablet
      console.log('Клик по крестику на планшете');
      logo.style.paddingBottom = '43px';
/*      pageHeaderIndex.style.backgroundPosition = '0 176px, -250px 0';
      pageHeaderIndex.style.height = '721px';*/
      if (pageHeaderIndex) {
        console.log('Клик по крестику на планшете на главной странице');
        pageHeaderIndex.style.backgroundPosition = '0 176px, -250px 0';
        pageHeaderIndex.style.height = '721px';
      } else if (pageHeaderPhoto) {
        console.log('Клик по крестику на планшете на странице фото');
        pageHeaderPhoto.style.backgroundPosition = '-250px 0';
        pageHeaderPhoto.style.height = '440px';
      } else if (pageHeaderForm) {
        console.log('Клик по крестику на планшете на странице форм');
        pageHeaderForm.style.backgroundPosition = '-190px 0';
        pageHeaderForm.style.height = '237px';
      }
    }
  }
});

reviewsBefore.addEventListener('click', function (event) {
  'use strict';
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
  'use strict';
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
