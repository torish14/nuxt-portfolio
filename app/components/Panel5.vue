<template>
  <v-app style="background: black;">
    <v-expansion-panels focusable="" dark style="width: 500px;">
      <v-row justify="center">
        <v-expansion-panels>
          <v-expansion-panel
            v-for="(item,i) in 1"
            :key="i"
          >
            <v-expansion-panel-header>
              Web Development
              <template v-slot:actions>
                <v-icon color="teal">
                  mdi-check
                </v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content style="font-size: 12px; font-weight: 300;">
              I am good at building serverless architecture using Vue.js, Nuxt.js and Firebase<br>as well as coding using HTML & CSS. Server-side engineering using Clout Functions<br>is also covered.
              Frequently used CSS frameworks are Vuetify and Element-UI.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-expansion-panels>
    <v-expansion-panels focusable="" dark style="width: 500px;">
      <v-row>
        <v-expansion-panels>
          <v-expansion-panel
            v-for="(item,i) in 1"
            :key="i"
          >
            <v-expansion-panel-header>
              Design
              <template v-slot:actions>
                <v-icon color="teal">
                  mdi-check
                </v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content style="font-size: 12px; font-weight: 300">
              UX / UI design and prototyping can be done using Sketch and Figma.
              In addition, I can start design development from scratch without using code development services, so you do not have a sensation.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-expansion-panels>
    <v-expansion-panels focusable="" dark style="width: 500px;">
      <v-row justify="center">
        <v-expansion-panels>
          <v-expansion-panel
            v-for="(item,i) in 1"
            :key="i"
          >
            <v-expansion-panel-header>
              Marketing
              <template v-slot:actions>
                <v-icon color="teal">
                  mdi-check
                </v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content style="font-size: 12px; font-weight: 300">
              Accelerate build speed by compressing files with brotli.
              In addition, I will deliver all points displayed by lighthouse with 80 points or more. Use Google analytics to constantly monitor user behavior and take SEO measures to ensure that your site is at the top.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-expansion-panels>
    <v-expansion-panels focusable="" dark style="width: 500px;">
      <v-row justify="center">
        <v-expansion-panels>
          <v-expansion-panel
            v-for="(item,i) in 1"
            :key="i"
          >
            <v-expansion-panel-header>
              Coaching
              <template v-slot:actions>
                <v-icon color="teal">
                  mdi-check
                </v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content style="font-size: 12px; font-weight: 300">
              Team building consulting using strength finder and personal coaching.
              In addition to emotional advice, you can teach specific working guidelines. You can enjoy your work as you change from thinking of overcoming your weaknesses and weaknesses to developing your strengths.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-expansion-panels>
    <v-expansion-panels focusable="" dark style="width: 500px;">
      <v-row justify="center">
        <v-expansion-panels>
          <v-expansion-panel
            v-for="(item,i) in 1"
            :key="i"
          >
            <v-expansion-panel-header>
              Support
              <template v-slot:actions>
                <v-icon color="teal">
                  mdi-check
                </v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content style="font-size: 12px; font-weight: 300">
              I can sign up for an NDA and start a startup or start up and plan a business idea. I can also consult with a sales advisor or recruitment consultant. In-house training and programming coaches for new employees.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-expansion-panels>
  </v-app>
</template>
