
//Note: In line 3 with the image, you need placeholder image inside data => contentimages folder
//Also I removed this thingy "data-src='data/img/SLUG.jpg'" from the image tag, its just data-* whatever stuff, it weird but VERY cool
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
//https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*
/*const template = `<article>
  <img src='data/contentimages/placeholder.png' data-src='data/contentimages/SLUG.jpg' alt='NAME'>
  <h3>#POS. NAME</h3>
  <ul>
  <li><span>Schedule:</span> <strong>SCHEDULETYPE</strong></li>
  <li><span>Period 1:</span> <strong>PERIOD1</strong></li>
  <li><span>Period 1:</span> <strong>PERIOD2</strong></li>
  <li><span>Period 1:</span> <strong>PERIOD3</strong></li>
  <li><span>Period 1:</span> <strong>PERIOD4</strong></li>
  <li><span>Period 1:</span> <strong>PERIOD5</strong></li>
  <li><span>Period 1:</span> <strong>PERIOD6</strong></li>
  <li><span>Period 1:</span> <strong>PERIOD7</strong></li>
  <li><span>Period 1:</span> <strong>PERIOD8</strong></li>
  </ul>
</article>`;
let something = '';
for (let i = 0; i < content.length; i++) {
  let entry = template.replace(/POS/g, (i + 1))
    .replace(/SCHEDULETYPE/g, content[i].scheduletype)
    .replace(/PERIOD1/g, content[i].period1)
    .replace(/PERIOD2/g, content[i].period2) 
    .replace(/PERIOD3/g, content[i].period3)
    .replace(/PERIOD4/g, content[i].period4)
    .replace(/PERIOD5/g, content[i].period5)
    .replace(/PERIOD6/g, content[i].period6)
    .replace(/PERIOD7/g, content[i].period7)
    .replace(/PERIOD8/g, content[i].period8)
  entry = entry.replace('<a href=\'http:///\'></a>', '-');
  content += entry;
}
document.getElementById('content').innerHTML = something;*/

//NOW, for THE SERVICE WORKER!!!!!!!!
console.log("Ready to register");
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("https://projectpavanapp.github.io/sw.js");
    console.log("Service worker is registered");
  }
//after 40 mins I GOT IT YESSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS

//This asks for permission to send notification and...sends a notification function in the end
const button = document.getElementById('notifications');
button.addEventListener('click', () => {
    Notification.requestPermission().then((result) => {
        if (result === 'granted') {
            randomNotification();
        }
    });
});
//This thingy thingy thingifieriyer makes notification
function randomNotification() {
    const randomItem = Math.floor(Math.random() * content.length);
    const notifTitle = content[randomItem].scheduletype;
    const notifBody = `Created by ${content[randomItem].period1}.`;
    //const notifImg = `data/img/${games[randomItem].slug}.jpg`;
    const options = {
      body: notifBody,
      //icon: notifImg,
    };
    new Notification(notifTitle, options);
    setTimeout(randomNotification, 30000);
  }
  