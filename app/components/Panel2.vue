<template>
  <v-app>
    <v-expansion-panels focusable="">
      <v-row justify="center" style="width: 305px;">
        <v-expansion-panels popout>
          <v-expansion-panel
            v-for="(item,i) in 1"
            :key="i"
          >
            <v-expansion-panel-header style="background: rgba(68, 0, 0, 0.6);">
              Achiever
            </v-expansion-panel-header>
            <v-expansion-panel-content style="font-size: 14px; font-weight: 300">
              People exceptionally talented in the Achiever theme work hard and possess a great deal of stamina. <br> They take immense satisfaction in being busy and productive.
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
            <v-expansion-panel-header>Arranger</v-expansion-panel-header>
            <v-expansion-panel-content style="font-size: 14px; font-weight: 300">
              People exceptionally talented in the Arranger theme can organize, but they also have a flexibility that complements this ability. <br> They like to determine how all of the pieces and resources can be arranged for maximum productivity.
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
            <v-expansion-panel-header>Belief</v-expansion-panel-header>
            <v-expansion-panel-content style="font-size: 14px; font-weight: 300">
              People exceptionally talented in the Belief theme have certain core values that are unchanging. <br> Out of these values emerges a defined purpose for their lives.
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
            <v-expansion-panel-header>Consistency</v-expansion-panel-header>
            <v-expansion-panel-content style="font-size: 14px; font-weight: 300">
              People exceptionally talented in the Consistency theme are keenly aware of the need to treat people the same. <br> They crave stable routines and clear rules and procedures that everyone can follow.
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
            <v-expansion-panel-header>Deliberative</v-expansion-panel-header>
            <v-expansion-panel-content style="font-size: 14px; font-weight: 300">
              People exceptionally talented in the Deliberative theme are best described by the serious care they take in making decisions or choices. <br> They anticipate obstacles.
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
            <v-expansion-panel-header>Deliberative</v-expansion-panel-header>
            <v-expansion-panel-content style="font-size: 14px; font-weight: 300">
              People exceptionally talented in the Deliberative theme are best described by the serious care they take in making decisions or choices. <br> They anticipate obstacles.
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
            <v-expansion-panel-header>Focus</v-expansion-panel-header>
            <v-expansion-panel-content style="font-size: 14px; font-weight: 300">
              People exceptionally talented in the Focus theme can take a direction, follow through and make the corrections necessary to stay on track. <br> They prioritize, then act.
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
            <v-expansion-panel-header>Responsibility</v-expansion-panel-header>
            <v-expansion-panel-content style="font-size: 14px; font-weight: 300">
              People exceptionally talented in the Responsibility theme take psychological ownership of what they say they will do. They are committed to stable values such as honesty and loyalty.
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
            <v-expansion-panel-header>Restorative</v-expansion-panel-header>
            <v-expansion-panel-content style="font-size: 14px; font-weight: 300">
              People exceptionally talented in the Restorative theme are adept at dealing with problems. <br> They are good at figuring out what is wrong and resolving it.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-expansion-panels>
  </v-app>
</template>
