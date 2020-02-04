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
      </div>
      <div class="executing" style="position: relative; top: 70px; left: 20px;">
        <li style="font-size: 18px; border-bottom: solid 2px rgba(68, 0, 0, 1); max-width: 110px;">
          executing
        </li>
        <br>
        <Panel2 />
      </div>
      <div class="strategic-thinking" style="position: relative; top: 70px; left: 40px;">
        <li style="font-size: 18px; border-bottom: solid 2px rgba(153, 51, 102, 1); max-width: 170px;">
          strategic-thinking
        </li>
        <br>
        <Panel3 />
      </div>
      <div class="relationship-building" style="position: relative; top: 70px; left: 60px;">
        <li style="font-size: 18px; border-bottom: solid 2px rgba(0, 51, 51, 1); max-width: 195px;">
          relationship-building
        </li>
        <br>
        <Panel4 />
      </div>
    </div>
    <div class="bubble3" style="pointer-events: none;">
      <Bubble3 />
    </div>
    <div class="heading3" style="font-size: 40px; font-weight: 100; position: relative; bottom:110px;">
      My themes
    </div>
    <div class="image" style="position: relative; bottom: 80px; left: 40px; height: 900px;">
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
    <div class="bubble4" style="pointer-events: none;">
      <Bubble4 />
    </div>
    <div class="heading3" style="font-size: 40px; font-weight: 100; position: relative; bottom: 90px;">
      Contact
    </div>
    <div class="contact">
      <ContactForm style="position: relative; bottom: 60px;" />
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
  position: relative;
  bottom: 250px;
}

.bubble4 {
  position: relative;
  bottom: 150px;
}
</style>
