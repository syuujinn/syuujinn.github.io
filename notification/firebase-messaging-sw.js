importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');
var config = {
    apiKey: "AIzaSyA-V8Tj7Qzm6pAMc-mfg9Dj_xmFG1OThiA",
    authDomain: "dpush-2fdbf.firebaseapp.com",
    databaseURL: "https://dpush-2fdbf.firebaseio.com",
    projectId: "dpush-2fdbf",
    storageBucket: "dpush-2fdbf.appspot.com",
    messagingSenderId: "204581970791",
    appId: "1:204581970791:web:9113bdf353088a2bb645c2",
    measurementId: "G-EW724P3LZX"
};
firebase.initializeApp(config);

//網頁 背景處理部分的(以chrome 為例 就是win 右下角會持續運作)
//註冊 準備推送訊息給使用者

const messaging = firebase.messaging();
console.log(self.registration.showNotification);
messaging.setBackgroundMessageHandler(function (payload) {
  console.log('Handling background message ', payload);
  return self.registration.showNotification(payload.data.title, {
    body: payload.data.body,
    icon: payload.data.icon,
    tag: payload.data.tag,
    data: payload.data,
    url : payload.data.url
  });

});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(self.clients.openWindow(event.notification.data.url));
});
