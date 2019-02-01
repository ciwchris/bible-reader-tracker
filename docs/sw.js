/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "android-chrome-192x192.png",
    "revision": "abd6c7c7d2045f1426eb7c418715877b"
  },
  {
    "url": "android-chrome-512x512.png",
    "revision": "c168aadf44f40b662b02fea8a470b63f"
  },
  {
    "url": "app.min.js",
    "revision": "62af2d1f2fe53c077aa4616a60dccff6"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "328a0e31e58b8c0f63a227e33b3a77bc"
  },
  {
    "url": "browserconfig.xml",
    "revision": "0f181289d3870795841c7b87e64ef043"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "3fd05236fa6cc4fdc7f0501b16872acb"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "4dddd2a919c6dada2db5680aa5703fe3"
  },
  {
    "url": "favicon.ico",
    "revision": "7adb8d7248781809d7b3dd6e4dcc9c9e"
  },
  {
    "url": "idb-keyval-iife.min.js",
    "revision": "bf1b02ca8610a8932c14ed53af9eae3c"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "8aeec4363a7fa473425895421a50fa4e"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "02013059727328ee593459e74834a115"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "69237107a8ef33b21f0da51e3ae4ef23"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "18219eaf4548464e32552964bd0988aa"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "71e1250be0f4154b0fbaa3149076c364"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "0308ff28398db0ccc6e64d7bd94e224e"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "8423254838f89312e8942873bbfc2428"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "9b345af8d0bbc1118b89d83c0ba416ce"
  },
  {
    "url": "index.html",
    "revision": "231cfcce05e513f362a2368ce758f3a8"
  },
  {
    "url": "main.min.css",
    "revision": "a17f2f35b59f62bc7f7484b591f3a700"
  },
  {
    "url": "manifest.json",
    "revision": "1e118321e8ccdf97d13ba658b8f855df"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "cf3afff8e7c6399852f645c417176ea5"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "18f5174be2dcca92b8a0161bb3cec7c1"
  },
  {
    "url": "spectre-icons.min.css",
    "revision": "56b1bd38b79450b37939f8adb811d4cd"
  },
  {
    "url": "spectre.min.css",
    "revision": "5cd401d486f79e82913923fe7d7f47ff"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
