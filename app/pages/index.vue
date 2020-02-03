<template>
  <section class="container">
    <div class="titie" style="font-size: 70px; font-family: Cambay;">
      <div class="front" style="font-weight: 400; text-shadow: 1px 1px 3px #808080">
        Strengths
      </div>
      <div class="back" style="font-weight: 300; text-shadow: 1px 1px 2px #808080">
        Finder
      </div>
    </div>
    <div class="bubble1" style="pointer-events: none;">
      <Bubble1 />
    </div>
    <div class="heading1" style="font-size: 40px; font-weight: 100; position: relative; bottom: 30px;">
      Formation
    </div>
    <div class="card">
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
    <div class="bubble2" style="pointer-events: none;">
      <Bubble2 />
    </div>
    <div class="heading2" style="font-size: 40px; font-weight: 100; position: relative; top: 40px;">
      Description
    </div>
    <div class="panel" style="display: flex;">
      <div class="influencing" style="position: relative; top: 70px;">
        <li style="font-size: 18px; border-bottom: solid 2px rgba(255, 204, 0, 1); max-width: 120px;">
          influencing
        </li>
        <br>
        <Panel1 />
        <Panel2 />
        <Panel3 />
        <Panel4 />
        <Panel5 />
        <Panel6 />
        <Panel7 />
        <Panel8 />
      </div>
      <div class="executing" style="position: relative; top: 70px; left: 20px;">
        <li style="font-size: 18px; border-bottom: solid 2px rgba(68, 0, 0, 1); max-width: 110px;">
          executing
        </li>
        <br>
        <Panel9 />
        <Panel10 />
        <Panel11 />
        <Panel12 />
        <Panel13 />
        <Panel14 />
        <Panel15 />
        <Panel16 />
        <Panel17 />
      </div>
      <div class="strategic-thinking" style="position: relative; top: 70px; left: 40px;">
        <li style="font-size: 18px; border-bottom: solid 2px rgba(153, 51, 102, 1); max-width: 170px;">
          strategic-thinking
        </li>
        <br>
        <Panel18 />
        <Panel19 />
        <Panel20 />
        <Panel21 />
        <Panel22 />
        <Panel23 />
        <Panel24 />
        <Panel25 />
      </div>
      <div class="relationship-building" style="position: relative; top: 70px; left: 60px;">
        <li style="font-size: 18px; border-bottom: solid 2px rgba(0, 51, 51, 1); max-width: 195px;">
          relationship-building
        </li>
        <br>
        <Panel26 />
        <Panel27 />
        <Panel28 />
        <Panel29 />
        <Panel30 />
        <Panel31 />
        <Panel32 />
        <Panel33 />
        <Panel34 />
      </div>
    </div>
    <div class="bubble3" style="pointer-events: none;">
      <Bubble3 />
    </div>
    <div class="heading3" style="font-size: 40px; font-weight: 100; position: relative; top: 60px;">
      My themes
    </div>
    <div class="image" style="position: relative; top: 90px; left: 40px; height: 900px;">
      <!-- <v-hover v-slot:default="{ hover }" close-delay="200">
        <v-card :elevation="hover ? 16 : 2" max-width="990"> -->
      <img src="~/assets/Clifton DNA.png" alt="" style="">
      <!-- </v-card>
      </v-hover> -->
      <div class="strengthen" style="position: relative; top: 20px;">
        <p><strong style="font-size: 14px;">Strengthen</strong></p>
        <p><strong style="border-left: solid 4px rgba(255, 204, 0, 1); padding-left: 8px;">1. Self-Assurance</strong></p>
        <p><strong style="border-left: solid 4px rgba(255, 204, 0, 1); padding-left: 8px;">2. Command</strong></p>
        <p><strong style="border-left: solid 4px rgba(255, 204, 0, 1); padding-left: 8px;">3. Competition</strong></p>
        <p><strong style="border-left: solid 4px rgba(153, 51, 102, 1); padding-left: 8px;">4. Ideation</strong></p>
        <p><strong style="border-left: solid 4px rgba(153, 51, 102, 1); padding-left: 8px;">5. Strategic</strong></p>
        <p style="border-left: solid 4px rgba(68, 0, 0, 1); padding-left: 8px;">
          6. Belief
        </p>
        <p style="border-left: solid 4px rgba(153, 51, 102, 1); padding-left: 8px;">
          7. Futuristic
        </p>
        <p style="border-left: solid 4px rgba(255, 204, 0, 1); padding-left: 8px;">
          8. Activator
        </p>
        <p style="border-left: solid 4px rgba(255, 204, 0, 1); padding-left: 8px;">
          9. Maximizer
        </p>
        <p style="border-left: solid 4px rgba(68, 0, 0, 1); padding-left: 8px;">
          10. Achiever
        </p>
      </div>
      <div class="confirm1" style="position: relative; top: -420px; left: 280px;">
        <p><strong style="font-size: 14px;">Confirm</strong></p>
        <p style="border-left: solid 4px rgba(255, 204, 0, 1); padding-left: 8px;">
          11. Woo
        </p>
        <p style="border-left: solid 4px rgba(68, 0, 0, 1); padding-left: 8px;">
          12. Focus
        </p>
        <p style="border-left: solid 4px rgba(0, 51, 51, 1); padding-left: 8px;">
          13. Connectedness
        </p>
        <p style="border-left: solid 4px rgba(0, 51, 51, 1); padding-left: 8px;">
          14. Relator
        </p>
        <p style="border-left: solid 4px rgba(153, 51, 102, 1); padding-left: 8px;">
          15. Learner
        </p>
        <p style="border-left: solid 4px rgba(153, 51, 102, 1); padding-left: 8px;">
          16. Intellection
        </p>
        <p style="border-left: solid 4px rgba(0, 51, 51, 1); padding-left: 8px;">
          17. Individualization
        </p>
        <p style="border-left: solid 4px rgba(68, 0, 0, 1); padding-left: 8px;">
          18. Responsibility
        </p>
        <p style="border-left: solid 4px rgba(153, 51, 102, 1); padding-left: 8px;">
          19. Input
        </p>
        <p style="border-left: solid 4px rgba(255, 204, 0, 1); padding-left: 8px;">
          20. Significance
        </p>
      </div>
      <div class="confirm2" style="position: relative; top: -820px; left: 560px;">
        <p style="border-left: solid 4px rgba(0, 51, 51, 1); padding-left: 8px;">
          21. Positivity
        </p>
        <p style="border-left: solid 4px rgba(0, 51, 51, 1); padding-left: 8px;">
          22. Includer
        </p>
        <p style="border-left: solid 4px rgba(255, 204, 0, 1); padding-left: 8px;">
          23. Communication
        </p>
        <p style="border-left: solid 4px rgba(153, 51, 102, 1); padding-left: 8px;">
          24. Analytical
        </p>
        <p style="border-left: solid 4px rgba(0, 51, 51, 1); padding-left: 8px;">
          25. Developer
        </p>
        <p style="border-left: solid 4px rgba(0, 51, 51, 1); padding-left: 8px;">
          26. Empathy
        </p>
        <p style="border-left: solid 4px rgba(68, 0, 0, 1); padding-left: 8px;">
          27. Arranger
        </p>
        <p style="border-left: solid 4px rgba(0, 51, 51, 1); padding-left: 8px;">
          28. Adaptability
        </p>
        <p style="border-left: solid 4px rgba(68, 0, 0, 1); padding-left: 8px;">
          29. Discipline
        </p>
        <p style="border-left: solid 4px rgba(153, 51, 102, 1); padding-left: 8px;">
          30. Context
        </p>
      </div>
      <div class="confirm3" style="position: relative; top: -1220px; left: 840px;">
        <p style="border-left: solid 4px rgba(68, 0, 0, 1); padding-left: 8px;">
          31. Restorative
        </p>
        <p style="border-left: solid 4px rgba(68, 0, 0, 1); padding-left: 8px;">
          32. Deliberative
        </p>
        <p style="border-left: solid 4px rgba(68, 0, 0, 1); padding-left: 8px;">
          33. Consistency
        </p>
        <p style="border-left: solid 4px rgba(0, 51, 51, 1); padding-left: 8px;">
          34. Harmony
        </p>
      </div>
    </div>
    <div class="bubble4" style="pointer-events: none; position: relative; bottom: 120px;;">
      <Bubble4 />
    </div>
    <div class="heading3" style="font-size: 40px; font-weight: 100; position: relative; bottom: 50px;">
      Contact
    </div>
    <div class="contact">
      <ContactForm style="position: relative; bottom: 20px;" />
    </div>
  </section>
</template>

<script>
import Bubble1 from '~/components/Bubble1'
import Bubble2 from '~/components/Bubble2'
import Bubble3 from '~/components/Bubble3'
import Bubble4 from '~/components/Bubble4'
import Card1 from '~/components/Card1'
import Card2 from '~/components/Card2'
import Card3 from '~/components/Card3'
import Panel1 from '~/components/Panel1'
import Panel2 from '~/components/Panel2'
import Panel3 from '~/components/Panel3'
import Panel4 from '~/components/Panel4'
import Panel5 from '~/components/Panel5'
import Panel6 from '~/components/Panel6'
import Panel7 from '~/components/Panel7'
import Panel8 from '~/components/Panel8'
import Panel9 from '~/components/Panel9'
import Panel10 from '~/components/Panel10'
import Panel11 from '~/components/Panel11'
import Panel12 from '~/components/Panel12'
import Panel13 from '~/components/Panel13'
import Panel14 from '~/components/Panel14'
import Panel15 from '~/components/Panel15'
import Panel16 from '~/components/Panel16'
import Panel17 from '~/components/Panel17'
import Panel18 from '~/components/Panel18'
import Panel19 from '~/components/Panel19'
import Panel20 from '~/components/Panel20'
import Panel21 from '~/components/Panel21'
import Panel22 from '~/components/Panel22'
import Panel23 from '~/components/Panel23'
import Panel24 from '~/components/Panel24'
import Panel25 from '~/components/Panel25'
import Panel26 from '~/components/Panel26'
import Panel27 from '~/components/Panel27'
import Panel28 from '~/components/Panel28'
import Panel29 from '~/components/Panel29'
import Panel30 from '~/components/Panel30'
import Panel31 from '~/components/Panel31'
import Panel32 from '~/components/Panel32'
import Panel33 from '~/components/Panel33'
import Panel34 from '~/components/Panel34'
import ContactForm from '~/components/ContactForm'

export default {
  components: {
    Bubble1,
    Bubble2,
    Bubble3,
    Bubble4,
    Card1,
    Card2,
    Card3,
    Panel1,
    Panel2,
    Panel3,
    Panel4,
    Panel5,
    Panel6,
    Panel7,
    Panel8,
    Panel9,
    Panel10,
    Panel11,
    Panel12,
    Panel13,
    Panel14,
    Panel15,
    Panel16,
    Panel17,
    Panel18,
    Panel19,
    Panel20,
    Panel21,
    Panel22,
    Panel23,
    Panel24,
    Panel25,
    Panel26,
    Panel27,
    Panel28,
    Panel29,
    Panel30,
    Panel31,
    Panel32,
    Panel33,
    Panel34,
    ContactForm
  },
  data () {
    return {

    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.heading1 {
  position: relative;
}

.card {
  display: flex;
}

.bubble1 {
  position: relative;
  top:-80px;
  right: 24px;
}

.bubble2 {
  padding-left: 50px;
}

.bubble3 {
  padding-left: 80px;
}

.bubble4 {
}
</style>
