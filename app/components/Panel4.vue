<template>
  <v-app>
    <v-expansion-panels focusable="">
      <v-row justify="center" style="width: 305px;">
        <v-expansion-panels popout>
          <v-expansion-panel
            v-for="(item,i) in 1"
            :key="i"
          >
            <v-expansion-panel-header style="background: rgba(0, 51, 51, 0.6);">
              Adaptability
            </v-expansion-panel-header>
            <v-expansion-panel-content style="font-size: 14px; font-weight: 300">
              People exceptionally talented in the Adaptability theme prefer to go with the flow.<br> They tend to be "now" people who take things as they come and discover the future one day at a time.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-expansion-panels>
    <v-expansion-panels focusable="">
      <v-row justify="center" style="width: 305px;">
        <v-expansion-panels popout>
          <v-expansion-panel
            v-for="(item,i) in 1"
            :key="i"
          >
            <v-expansion-panel-header>Connectedness</v-expansion-panel-header>
            <v-expansion-panel-content style="font-size: 14px; font-weight: 300">
              People exceptionally talented in the Connectedness theme have faith in the links among all things.<br> They believe there are few coincidences and that almost every event has meaning.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-expansion-panels>
    <v-expansion-panels focusable="">
      <v-row justify="center" style="width: 305px;">
        <v-expansion-panels popout>
          <v-expansion-panel
            v-for="(item,i) in 1"
            :key="i"
          >
            <v-expansion-panel-header>Developer</v-expansion-panel-header>
            <v-expansion-panel-content style="font-size: 14px; font-weight: 300">
              People exceptionally talented in the Developer theme recognize and cultivate the potential in others. <br>They spot the signs of each small improvement and derive satisfaction from evidence of progress.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-expansion-panels>
    <v-expansion-panels focusable="">
      <v-row justify="center" style="width: 305px;">
        <v-expansion-panels popout>
          <v-expansion-panel
            v-for="(item,i) in 1"
            :key="i"
          >
            <v-expansion-panel-header>Empathy</v-expansion-panel-header>
            <v-expansion-panel-content style="font-size: 14px; font-weight: 300">
              People exceptionally talented in the Empathy theme can sense other people's feelings by imagining themselves in others' lives or situations.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-expansion-panels>
    <v-expansion-panels focusable="">
      <v-row justify="center" style="width: 305px;">
        <v-expansion-panels popout>
          <v-expansion-panel
            v-for="(item,i) in 1"
            :key="i"
          >
            <v-expansion-panel-header>Harmony</v-expansion-panel-header>
            <v-expansion-panel-content style="font-size: 14px; font-weight: 300">
              People exceptionally talented in the Harmony theme look for consensus. They don't enjoy conflict; rather, they seek areas of agreement.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-expansion-panels>
    <v-expansion-panels focusable="">
      <v-row justify="center" style="width: 305px;">
        <v-expansion-panels popout>
          <v-expansion-panel
            v-for="(item,i) in 1"
            :key="i"
          >
            <v-expansion-panel-header>Includer</v-expansion-panel-header>
            <v-expansion-panel-content style="font-size: 14px; font-weight: 300">
              People exceptionally talented in the Includer theme accept others.<br> They show awareness of those who feel left out and make an effort to include them.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-expansion-panels>
    <v-expansion-panels focusable="">
      <v-row justify="center" style="width: 305px;">
        <v-expansion-panels popout>
          <v-expansion-panel
            v-for="(item,i) in 1"
            :key="i"
          >
            <v-expansion-panel-header>Individualization</v-expansion-panel-header>
            <v-expansion-panel-content style="font-size: 14px; font-weight: 300">
              People exceptionally talented in the Individualization theme are intrigued with the unique qualities of each person.<br> They have a gift for figuring out how different people can work together productively.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-expansion-panels>
    <v-expansion-panels focusable="">
      <v-row justify="center" style="width: 305px;">
        <v-expansion-panels popout>
          <v-expansion-panel
            v-for="(item,i) in 1"
            :key="i"
          >
            <v-expansion-panel-header>Positivity</v-expansion-panel-header>
            <v-expansion-panel-content style="font-size: 14px; font-weight: 300">
              People exceptionally talented in the Positivity theme have contagious enthusiasm.<br> They are upbeat and can get others excited about what they are going to do.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-expansion-panels>
    <v-expansion-panels focusable="">
      <v-row justify="center" style="width: 305px;">
        <v-expansion-panels popout>
          <v-expansion-panel
            v-for="(item,i) in 1"
            :key="i"
          >
            <v-expansion-panel-header>Relator</v-expansion-panel-header>
            <v-expansion-panel-content style="font-size: 14px; font-weight: 300">
              People exceptionally talented in the Relator theme enjoy close relationships with others.<br> They find deep satisfaction in working hard with friends to achieve a goal.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-expansion-panels>
  </v-app>
</template>
