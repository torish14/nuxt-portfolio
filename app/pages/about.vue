<template>
  <v-app dark>
    <section class="container">
      <!-- <div class="loader">
        <Loading />
      </div>
      <div class="text">
        <p>Under development...</p>
      </div> -->
      <div class="image1">
        <img src="~/assets/サンプル.jpg" alt="" style="position: relative; bottom: 24px; height: 665px; width: 1100px;">
      </div>
      <div class="title">
        <h3>torish</h3>
        <br><h1>FRONT-END DEVELOPER</h1>
      </div>
      <div class="who">
        <h1>
          Who I am.
          <br><p>
            I'm front-end developer that specializes in Nuxt.js<br>and Veutify
            development.Among them, I'm good at<br>developing prototypesand business plans.
            <br>Another strength is being able to coach to address<br>website SEO and accelerate team building.
          </p>
        </h1>
        <h3>
          LOCATION
          <br>EMAIL
          <br>PHONE
        </h3>
        <h4>TOKYO Minato-ku</h4>
        <h4>2015jj118nanzan@gmial.com</h4>
        <h4>090-6588-7226</h4>
        <h2>FRONT-END DEVELOPER</h2>
        <h5>torish</h5>
        <div class="image2">
          <img src="~/assets/バリ島なう オリジナル.jpg.jpg" alt="" style="position: relative; bottom: 270px; left: 740px; height: 620px; width: 360px; z-index: 2;">
        </div>
      </div>
      <div class="what">
        <h1>
          What I can do for you.
        </h1>
        <div class="panel5" style="position: relative; top: 20px; left: 50px;">
          <Panel5 />
        </div>
      </div>
      <div class="where">
        <h1>
          Where I've been.
        </h1>
        <div class="bubble5">
          <Bubble5 />
        </div>
        <div class="number">
          <h1>2015</h1>
          <h2>2018</h2>
          <h3>2019</h3>
          <h4>2020</h4>
        </div>
        <div class="text">
          <h1>I studied law and majored in criminal law and criminal procedure law<br>at Nanzan University. Experience the first part-time job in life.</h1>
          <h2>Lectures at college were boring and I started programming with<br>that sense of crisis and curiosity.</h2>
          <h3>I won the Hackathon this year. In the hackathon, I developed a<br>dating app targeting men who are slow to warm up to love.</h3>
          <h4>I develop websites and web apps as a freelance engineer. We are<br>looking forward to hearing from you!</h4>
        </div>
      </div>
      <div class="skill">
        <h1>
          What I know.
        </h1>
        <div class="title1">
          My Education
        </div>
        <div class="text1">
          <h1>Nanzan University</h1>
          <h2>Starting Programming</h2>
          <h3>Suspension Of School</h3>
          <h4>Win Hackathon</h4>
          <h5>Programming School</h5>
        </div>
        <div class="text11">
          <h1>Faculty Of Law</h1>
          <h2>HTML & CSS</h2>
          <h3>Rethink My Life</h3>
          <h4>Develop A Dating App</h4>
          <h5>Ruby And Ruby On Rails</h5>
        </div>
        <div class="text111">
          <h1>Department Of Law</h1>
          <h2>With Progate</h2>
          <h3>Meet The Strengths Finder</h3>
          <h4>Now Development</h4>
          <h5>Learn Database Design And Apps Design</h5>
        </div>
        <div class="text1111">
          <h1>2015-2018</h1>
          <h2>2018-</h2>
          <h3>2019</h3>
          <h4>2019</h4>
          <h5>2019</h5>
        </div>
        <div class="title2">
          My Skills
        </div>
        <div class="text2">
          <h1>Graphics/Design</h1>
          <h2>Programming</h2>
          <h3>Other</h3>
        </div>
        <div class="text22">
          <h1>Sketch</h1>
          <h2>Figma</h2>
          <h3>Affiniy Designer</h3>
        </div>
      </div>
      <div class="talk">
        <h1>
          Let's talk.
        </h1>
      </div>
    </section>
  </v-app>
</template>

<script>
// import Loading from '~/components/Loading'
import Panel5 from '~/components/Panel5'
import Bubble5 from '~/components/Bubble5'

export default {
  components: {
    //     Loading
    Panel5,
    Bubble5
  }
}
</script>

<style>
/* .text {
  position: relative;
  top: 290px;
  left: 380px;
} */

.container {
  max-height: 100%;
  max-width: 100%;
  background-color: black;
}

.title {
  position: relative;
  bottom: 125px;
  left: 20px;
}

.title h3 {
  position: relative;
  top: 20px;
  color: white;
  font-size: 28px;
  font-weight: 300;
}

.title h1 {
  color: cyan;
  font-size: 48px;
  font-weight: 400;
}

.who h1 {
  position: relative;
  top: 60px;
  color: cyan;
  font-size: 48px;
  font-weight: 600;
}

.who p {
  position: relative;
  left: 20px;
  color: white;
  font-size: 15px;
  font-weight: 300;
}

.who h3 {
  position: relative;
  bottom: 40px;
  left: 410px;
  color: cyan;
  font-size: 14px;
  font-weight: 400;
}

.who h4 {
  position: relative;
  bottom: 103px;
  left: 520px;
  color: white;
  font-size: 14px;
  font-weight: 300;
}

.who h2 {
  position: relative;
  bottom: 300px;
  left: 740px;
  color: white;
  font-size: 23px;
  font-weight: 500;
}

.who h5 {
  position: relative;
  bottom: 305px;
  left: 740px;
  color: cyan;
  font-size: 18px;
  font-weight: 400;
}

.what {
  position: relative;
  bottom: 610px;
}

.what h1 {
  position: relative;
  color: cyan;
  font-size: 48px;
  font-weight: 600;
}

.where h1 {
  position: relative;
  bottom: 940px;
  color: cyan;
  font-size: 48px;
  font-weight: 600;
}

.where .bubble5 {
  position: relative;
  bottom: 960px;
  right: 160px;
}

.where .number h1 {
  position: relative;
  bottom: 1275px;
  left: 470px;
  color: white;
  font-size: 18px;
  font-weight: 300;
}

.where .number h2 {
  position: relative;
  bottom: 1210px;
  left: 600px;
  color: white;
  font-size: 18px;
  font-weight: 300;
}

.where .number h3 {
  position: relative;
  bottom: 1150px;
  left: 470px;
  color: white;
  font-size: 18px;
  font-weight: 300;
}

.where .number h4 {
  position: relative;
  bottom: 1085px;
  left: 600px;
  color: white;
  font-size: 18px;
  font-weight: 300;
}

.where .text h1 {
  position: relative;
  bottom: 1424px;
  left: 580px;
  color: cyan;
  font-size: 16px;
  font-weight: 300;
  display: inline-block;
  margin: 1.5em 0 1.5em 15px;
  padding: 7px 10px;
  min-width: 120px;
  max-width: 100%;
  font-size: 16px;
  background: black;
  border: solid 3px #555;
  box-sizing: border-box;
}

.where .text h1:before {
  content: "";
  position: absolute;
  top: 50%;
  left: -24px;
  margin-top: -12px;
  border: 12px solid transparent;
  border-right: 12px solid black;
  z-index: 2;
}

.where .text h1:after {
  content: "";
  position: absolute;
  top: 50%;
  left: -30px;
  margin-top: -14px;
  border: 14px solid transparent;
  border-right: 14px solid #555;
  z-index: 1;
}

.where .text h2 {
  position: relative;
  bottom: 1334px;
  right: 460px;
  color: cyan;
  font-size: 16px;
  font-weight: 300;
  display: inline-block;
  margin: 1.5em 15px 1.5em 0;
  padding: 7px 10px;
  min-width: 120px;
  max-width: 100%;
  color: cyan;
  font-size: 16px;
  background: black;
  border: solid 3px #555;
  box-sizing: border-box;
}

.where .text h2:before {
  content: "";
  position: absolute;
  top: 50%;
  right: -24px;
  margin-top: -12px;
  border: 12px solid transparent;
  border-left: 12px solid black;
  z-index: 2;
}

.where .text h2:after {
  content: "";
  position: absolute;
  top: 50%;
  right: -30px;
  margin-top: -14px;
  border: 14px solid transparent;
  border-left: 14px solid #555;
  z-index: 1;
}

.where .text h3 {
  position: relative;
  bottom: 1360px;
  left: 570px;
  color: cyan;
  font-size: 16px;
  font-weight: 300;
  display: inline-block;
  margin: 1.5em 0 1.5em 15px;
  padding: 7px 10px;
  min-width: 120px;
  max-width: 100%;
  font-size: 16px;
  background: black;
  border: solid 3px #555;
  box-sizing: border-box;
}

.where .text h3:before {
  content: "";
  position: absolute;
  top: 50%;
  left: -24px;
  margin-top: -12px;
  border: 12px solid transparent;
  border-right: 12px solid black;
  z-index: 2;
}

.where .text h3:after {
  content: "";
  position: absolute;
  top: 50%;
  left: -30px;
  margin-top: -14px;
  border: 14px solid transparent;
  border-right: 14px solid #555;
  z-index: 1;
}

.where .text h4 {
  position: relative;
  bottom: 1273px;
  right: 480px;
  color: cyan;
  font-size: 16px;
  font-weight: 300;
  display: inline-block;
  margin: 1.5em 15px 1.5em 0;
  padding: 7px 10px;
  min-width: 120px;
  max-width: 100%;
  color: cyan;
  font-size: 16px;
  background: black;
  border: solid 3px #555;
  box-sizing: border-box;
}

.where .text h4:before {
  content: "";
  position: absolute;
  top: 50%;
  right: -24px;
  margin-top: -12px;
  border: 12px solid transparent;
  border-left: 12px solid black;
  z-index: 2;
}

.where .text h4:after {
  content: "";
  position: absolute;
  top: 50%;
  right: -30px;
  margin-top: -14px;
  border: 14px solid transparent;
  border-left: 14px solid #555;
  z-index: 1;
}

.skill h1 {
  position: relative;
  bottom: 1080px;
  color: cyan;
  font-size: 48px;
  font-weight: 600;
}

.skill .title1 {
  position: relative;
  bottom: 1012px;
  left: 220px;
  color: cyan;
  font-size: 28px;
  font-weight: 400;
}

.skill .text1 h1 {
  position: relative;
  bottom: 1000px;
  left: 270px;
  color: white;
  font-size: 18px;
  font-weight: 300;
  height: 100px;
  border-left: solid 2px cyan;
  padding-left: 8px;
}

.skill .text1 h2 {
  position: relative;
  bottom: 880px;
  left: 270px;
  color: white;
  font-size: 18px;
  font-weight: 300;
  height: 100px;
  border-left: solid 2px cyan;
  padding-left: 8px;
}

.skill .text1 h3 {
  position: relative;
  bottom: 760px;
  left: 270px;
  color: white;
  font-size: 18px;
  font-weight: 300;
  height: 100px;
  border-left: solid 2px cyan;
  padding-left: 8px;
}

.skill .text1 h4 {
  position: relative;
  bottom: 640px;
  left: 270px;
  color: white;
  font-size: 18px;
  font-weight: 300;
  height: 100px;
  border-left: solid 2px cyan;
  padding-left: 8px;
}

.skill .text1 h5 {
  position: relative;
  bottom: 520px;
  left: 270px;
  color: white;
  font-size: 18px;
  font-weight: 300;
  height: 100px;
  border-left: solid 2px cyan;
  padding-left: 8px;
}

.skill .text11 h1 {
  position: relative;
  bottom: 1110px;
  left: 310px;
  color: cyan;
  font-size: 22px;
  font-weight: 400;
}

.skill .text11 h2 {
  position: relative;
  bottom: 995px;
  left: 310px;
  color: cyan;
  font-size: 22px;
  font-weight: 400;
}

.skill .text11 h3 {
  position: relative;
  bottom: 880px;
  left: 310px;
  color: cyan;
  font-size: 22px;
  font-weight: 400;
}

.skill .text11 h4 {
  position: relative;
  bottom: 765px;
  left: 310px;
  color: cyan;
  font-size: 22px;
  font-weight: 400;
}

.skill .text11 h5 {
  position: relative;
  bottom: 650px;
  left: 310px;
  color: cyan;
  font-size: 22px;
  font-weight: 400;
}

.skill .text111 h1 {
  position: relative;
  bottom: 1242px;
  left: 360px;
  color: white;
  font-size: 18px;
  font-weight: 300;
}

.skill .text111 h2 {
  position: relative;
  bottom: 1123px;
  left: 360px;
  color: white;
  font-size: 18px;
  font-weight: 300;
}

.skill .text111 h3 {
  position: relative;
  bottom: 1000px;
  left: 360px;
  color: white;
  font-size: 18px;
  font-weight: 300;
}

.skill .text111 h4 {
  position: relative;
  bottom: 878px;
  left: 360px;
  color: white;
  font-size: 18px;
  font-weight: 300;
}

.skill .text111 h5 {
  position: relative;
  bottom: 760px;
  left: 360px;
  color: white;
  font-size: 18px;
  font-weight: 300;
}

.skill .text1111 h1 {
  position: relative;
  bottom: 1348px;
  left: 430px;
  color: white;
  font-size: 13px;
  font-weight: 300;
}

.skill .text1111 h2 {
  position: relative;
  bottom: 1222px;
  left: 430px;
  color: white;
  font-size: 13px;
  font-weight: 300;
}

.skill .text1111 h3 {
  position: relative;
  bottom: 1090px;
  left: 430px;
  color: white;
  font-size: 13px;
  font-weight: 300;
}

.skill .text1111 h4 {
  position: relative;
  bottom: 958px;
  left: 430px;
  color: white;
  font-size: 13px;
  font-weight: 300;
}

.skill .text1111 h5 {
  position: relative;
  bottom: 835px;
  left: 430px;
  color: white;
  font-size: 13px;
  font-weight: 300;
}

.skill .title2 {
  position: relative;
  bottom: 1553px;
  left: 700px;
  color: cyan;
  font-size: 28px;
  font-weight: 400;
}

.skill .text2 h1 {
  position: relative;
  bottom: 1550px;
  left: 730px;
  color: cyan;
  font-size: 18px;
  font-weight: 400;
}

.skill .text2 h2 {
  position: relative;
  bottom: 1320px;
  left: 730px;
  color: cyan;
  font-size: 18px;
  font-weight: 400;
}

.skill .text2 h3 {
  position: relative;
  bottom: 1090px;
  left: 730px;
  color: cyan;
  font-size: 18px;
  font-weight: 400;
}

.skill .text22 h1 {
  position: relative;
  bottom: 1590px;
  left: 730px;
  color: white;
  font-size: 16px;
  font-weight: 300;
}

.skill .text22 h2 {
  position: relative;
  bottom: 1540px;
  left: 730px;
  color: white;
  font-size: 16px;
  font-weight: 300;
}

.skill .text22 h3 {
  position: relative;
  bottom: 1490px;
  left: 730px;
  color: white;
  font-size: 16px;
  font-weight: 300;
}

.talk h1 {
  position: relative;
  bottom: 500px;
  color: cyan;
  font-size: 48px;
  font-weight: 600;
}
</style>
