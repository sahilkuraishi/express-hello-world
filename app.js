const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Sahil - Personal Portfolio</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="icon" type="image/x-icon" href="dp.jpg">
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style>
      body{
    background-color: black;
    margin: 0px;
    padding: 0px;
}

.main-divs{
    display: flex;
    flex-direction: row;
    padding: 5% 2.5% 5% 2.5%;
    /* border: solid 1px red; */
    width: auto;
    gap: 3%;
}

.main-inner-divs{
    height: 750px;
    border: solid 1px #e5e7eb20;
    width: 50%;
    border-radius: 20px;
    background-color: #1E1E1F;
}

#main-inner-divs1{
    width: 22%;
    text-align: center;
}

#main-inner-divs2{
    width: 75%;
    height: auto;
    padding: 30px;
}

.dp{
    margin-top: 25%;
    border-radius: 20px;
}

.name{
    color: white;font-size: 30px;
    font-weight: normal;
    margin-top: 33px;
    font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

.role{
    font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    color: #FFFFFF;
    background-color: #2B2B2C;
    padding: 6px 8px 8px 6px;
    margin: 10px 45px;
    width: 60%;
    font-size: 13px;
    font-weight: lighter;
    text-align: center;
    border-radius: 10px;
}

.social-media{
    height: 5%;
    padding: 10px;
    font-size: 18px;
}

.social-media1{
    margin: 6px;
    inset: 1px;
}

.social-anchor{
    color: #b3b3b5d3;
    text-decoration: none;
}

.social-anchor:hover{
    color: rgba(255, 255, 255, 0.76);
}

.details{
    margin: 15px 30px 0px 30px;
    height: 290px;
    display: grid;
    grid-template-columns: 25% 70%;
    grid-template-rows: 50px 50px 50px 50px;
    row-gap: 30px;
    column-gap: 20px;
}

.details-icons{
    font-size: 18px;
    color: hsl(45, 100%, 72%);
    border-radius: 10px;
    background-color: #202022;
    border: solid 1px rgba(255, 255, 0, 0.228);
    justify-content: center;
    align-items: center;
}

.details1{
    margin: 0px;
    display: flex;
}

.email1{
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
}

.header-details{
    color: #d6d6b2b0;
    font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-size: 12px;
    margin: 0px;
    text-transform: uppercase;
    text-align: left;    
}

.header-details1{
    font-size: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    margin: 0px;
    font-size: 15px;
    text-align: left;
    font-weight: lighter;
    color: #fafafacf;
}

.mail-anchor{
    text-decoration: none;
    color: #fafafacf;
}

.header-menu{
    display: flex;
    flex-direction: row;
    gap: 30px;
    justify-content: center;
    align-items: center;
    height: 70px;
    font-weight: bolder;
    width: 35%;
    border: solid 0.5px #e5e7eb35;
    border-radius: 0px 20px 0px 20px;
    background-color: #0000006c;
    padding: 0 20px;
    margin: -31px 0px 0px 31.7%;
    position: absolute;
}

.header-anchor{
    color: white;
    text-decoration: none;
}

.header-anchor:hover{
    color: hsl(45, 99%, 63%);
}

.menus{
    font-size: 16px;
    font-weight: normal;
    font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

.aboutme{
    font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    color: white;
    position: relative;
    padding: 0px;
}

.aboutme1{
    margin: 15px 0px 10px 0px;
    font-weight: normal;
    font-size: 32px;
}

.ruler{
    height: 4px;
    width: 40px;
    border-radius: 3px;
    background-color: hsl(45, 99%, 63%);
    position: absolute;
}

.about-para{
    font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    color: #ebe8e8c8;
    font-weight: lighter;
}

.about-para1{
    margin: 40px 0px 0px 0px;
    font-size: medium;
}

.about-para1{
    margin-bottom: 0px;
}

.doing-heading{
    font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    color: white;
    font-weight: normal;
    font-size: 25px;
}

.skills{
    display: grid;
    grid-template-columns: 48% 48%;
    grid-template-rows: 150px 150px;
    column-gap: 25px;
    row-gap: 20px;
    
    justify-content: center;
    align-items: center;
}

.skills-details{
    border: solid 1px #202022;
    background-color: #202022;
    border-radius: 10px;
    inset: 10px;
    border: solid 0.5px rgba(255, 255, 255, 0.096);
    height: 150px;
}

.skills-details{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    column-gap: 20px;
}

.sills-details2{
    font-size: 10px;
    font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    display: flex;
    flex-direction: column;
    gap: 11px;
}

.frontend-development{
    color: #FAFAFA;
    font-size: 20px;
    margin: 0px;
    padding: 0px;
}

.frontend-development1{
    color: #fafafa8d;
    margin: 0px;
    padding: 0px;
    font-size: 15px;
    line-height: 25px;
}
    </style>
  </head>
  <body>
    <div class="main-divs">
        <div class="main-inner-divs" id="main-inner-divs1">
            <img src="https://github.com/sahilkuraishi/express-hello-world/blob/bd2ab335bd4e104cde1f9f5286152eeeb37b65e5/dp.jpg" alt="sahilkuraishi" height="150px" width="150px" class="dp">
            <h1 class="name">Sahil Kuraishi</h1>
            <p class="role">Frontend developer</p>
            <div class="social-media">
                <span class="social-media1"><a href="https://www.linkedin.com/in/sahil-kuraishi/" class="social-anchor"><i class="fa-brands fa-linkedin"></i></a></span>
                <span class="social-media1"><a href="https://x.com/Realsahil_K" class="social-anchor"><i class="fa-brands fa-twitter"></i></a></span>
                <span class="social-media1"><a href="https://github.com/sahilkuraishi" class="social-anchor"><i class="fa-brands fa-github"></i></a></span>
                <span class="social-media1"><a href="#" class="social-anchor"><i class="fa-brands fa-hashnode"></i></a></span>
            </div>
            <div class="details">
                <div class="details1 details-icons" id="details-id1"><i class="fa-regular fa-envelope"></i></div>
                <div class="details1" id="details-id2">
                    <div class="email1">
                        <p class="header-details">EMAIL</p>
                        <p class="header-details1"><a href="mailto:sahilseosmo1@gmail.com" class="mail-anchor">sahilseosmo1@gmai...</a></p>
                    </div>
                </div>
                <div class="details1 details-icons" id="details-id3"><i class="fa-solid fa-mobile"></i></div>
                <div class="details1" id="details-id4">
                    <div class="email1">
                        <p class="header-details">PHONE</p>
                        <p class="header-details1"><a href="tel:8433436394" class="mail-anchor">+91 843343XXXX</a></p>
                    </div>
                </div>
                <div class="details1 details-icons" id="details-id5"><i class="fa-regular fa-calendar"></i></div>
                <div class="details1" id="details-id6">
                    <div class="email1">
                        <p class="header-details">BIRTHDAY</p>
                        <p class="header-details1">March 12, 2002</p>
                    </div>
                </div>
                <div class="details1 details-icons" id="details-id7"><i class="fa-solid fa-location-dot"></i></div>
                <div class="details1" id="details-id8">
                    <div class="email1">
                        <p class="header-details">Location</p>
                        <p class="header-details1">NEW DELHI, india</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="main-inner-divs" id="main-inner-divs2">
            <div class="header-menu">
                <div class="menus"><a href="https://sahil-portfolio-xgcu.onrender.com/" class="header-anchor">About</a></div>
                <div class="menus"><a href="resume.html" class="header-anchor">Resume</a></div>
                <div class="menus"><a href="portfolio.html" class="header-anchor">Portfolio</a></div>
                <div class="menus"><a href="blog.html" class="header-anchor">Blog</a></div>
                <div class="menus"><a href="contact.html" class="header-anchor">Contact</a></div>
            </div>
            <div class="aboutme">
                <h2 class="aboutme1">About Me</h2>
            </div>
            <hr class="ruler">
            <div class="about-para">
                <p class="about-para1">Hi, I am Sahil Kuraishi, a Frontend Developer and an undergrad BTech student at NSUT, New Delhi, my journey in tech is marked by a deep passion for open source projects and innovation. Currently I am working as frontend developer at Settyl Corporation.</p>

                <p class="about-para1">I've led the creation of mobile app and systems at Settyl, making them easier to use and more efficient. At EsporTree, I was key in building a user-friendly website thanks to my skills in frontend development. My studies and hands-on work come together, driving my dedication to develop meaningful tech solutions.</p>
            </div>
            <br>
            <h3 class="doing-heading">What I'm Doing</h3>

            <div class="skills">
                <div class="skills-details">
                    <div class="sills-details1">
                        <img src="icon-dev.svg" alt="">
                    </div>
                    <div class="sills-details2">
                        <div><p class="frontend-development">Frontend Development</p></div>
                        <div><p class="frontend-development1">High-quality frontend development of <br>sites.</p></div>
                    </div>
                </div>
                <div class="skills-details">
                    <div class="sills-details1">
                        <img src="icon-dev.svg" alt="">
                    </div>
                    <div class="sills-details2">
                        <div><p class="frontend-development">Backend Development</p></div>
                        <div><p class="frontend-development1">Backend Server development of website.</p></div>
                    </div>
                </div>
                <div class="skills-details">
                    <div class="sills-details1">
                        <img src="icon-app.svg" alt="">
                    </div>
                    <div class="sills-details2">
                        <div><p class="frontend-development">Mobile Apps</p></div>
                        <div><p class="frontend-development1">Developed android apps with ionic and <br>react.</p></div>
                    </div>
                </div>
                <div class="skills-details">
                    <div class="sills-details1">
                        <img src="icon-design.svg" alt="">
                    </div>
                    <div class="sills-details2">
                        <div><p class="frontend-development">Tech Blog</p></div>
                        <div><p class="frontend-development1">Writing Tech blogs regularly. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </body>
</html>
`
