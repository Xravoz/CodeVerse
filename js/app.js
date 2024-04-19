  


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
 }

let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});

let sr = ScrollReveal({
  duration: 3000,
  distance: "80px",
});
sr.reveal(".container", { delay: 600 });
sr.reveal(".container .saroukh", { origin: "top", delay: 600 });
sr.reveal(".services-card", { origin: "bottom", delay: 600 });
sr.reveal(".card__container", { origin: "right", delay: 600 });
sr.reveal(".servicees-card", { origin: "left", delay: 600 });



// const serviceCard = document.querySelector('.services-card');
// const cardContainer = document.querySelector('.card__container');
// const otherServiceCard = document.querySelector('.servicees-card');

// const fadeInUp = 'animate__animated animate__fadeInUp';
// const thresholds = [100, 800, 2100];
// const elements = [serviceCard, cardContainer, otherServiceCard];

// window.addEventListener('scroll', function() {
//   const scrollY = window.scrollY || window.pageYOffset;

//   elements.forEach((element, index) => {
//     if (scrollY >= thresholds[index]) {
//       element.classList.add(fadeInUp);
//       element.style.display = 'block';
//     } else {
//       element.style.display = 'none';
//     }
//   });
// });

// const observer = new IntersectionObserver((entries) => { 
//   entries.forEach((entry) => {
//     console.log(entry);
//     if (entry.isIntersecting) {
//       entry.target.classList.add('show');
//     } else {
//       entry.target.classList.remove('show');
//     }
//   });
// });

// const hiddenElements = document.querySelectorAll('.hidden');
// hiddenElements.forEach((el) => observer.observe(el));



const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

   
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'gg20205959@gmail.com',
            pass: 'your-password' 
        }
    });

   
    let mailOptions = {
        from: email,
        to: 'gg20205959@gmail.com', 
        subject: 'New Message from Your Website',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('Error'); 
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Success'); 
        }
    });
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
