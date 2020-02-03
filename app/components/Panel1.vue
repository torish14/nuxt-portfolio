<template>
  <v-app>
    <v-expansion-panels focusable="">
      <v-row justify="center" style="width: 305px;">
        <v-expansion-panels popout>
          <v-expansion-panel
            v-for="(item,i) in 1"
            :key="i"
          >
            <v-expansion-panel-header style="background: rgba(255, 204, 0, 0.7);">
              Activator
            </v-expansion-panel-header>
            <v-expansion-panel-content style="font-size: 14px; font-weight: 300;">
              People exceptionally talented in the Activator theme can make things<br>happen by turning thoughts into action. <br>They want to do things now, rather than simply talk about them.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-expansion-panels>
    <v-expansion-panels focusable="">
      <v-row style="width: 305px;">
        <v-expansion-panels popout>
          <v-expansion-panel
            v-for="(item,i) in 1"
            :key="i"
          >
            <v-expansion-panel-header>Command</v-expansion-panel-header>
            <v-expansion-panel-content style="font-size: 14px; font-weight: 300">
              People exceptionally talented in the Command theme have presence.<br>They can take control of a situation and make decisions.
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
            <v-expansion-panel-header>Communication</v-expansion-panel-header>
            <v-expansion-panel-content style="font-size: 14px; font-weight: 300">
              People exceptionally talented in the Communication theme generally find it easy to put their thoughts into words. <br> They are good conversationalists and presenters.
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
            <v-expansion-panel-header>Competition</v-expansion-panel-header>
            <v-expansion-panel-content style="font-size: 14px; font-weight: 300">
              People exceptionally talented in the Competition theme measure their progress against the performance of others.<br> They strive to win first place and revel in contests.
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
            <v-expansion-panel-header>Maximizer</v-expansion-panel-header>
            <v-expansion-panel-content style="font-size: 14px; font-weight: 300">
              People exceptionally talented in the Maximizer theme focus on strengths as a way to stimulate personal and group excellence.<br> They seek to transform something strong into something superb.
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
            <v-expansion-panel-header>Self-Assurance</v-expansion-panel-header>
            <v-expansion-panel-content style="font-size: 14px; font-weight: 300">
              People exceptionally talented in the <br> Self-Assurance theme feel confident in their ability to take risks and manage their own lives.<br> They have an inner compass that gives them certainty in their decisions.
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
            <v-expansion-panel-header>Significance</v-expansion-panel-header>
            <v-expansion-panel-content style="font-size: 14px; font-weight: 300">
              People exceptionally talented in the Significance theme want to make a big impact. <br>They are independent and prioritize projects based on how much influence they will have on their organization or people around them.
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
            <v-expansion-panel-header>Woo</v-expansion-panel-header>
            <v-expansion-panel-content style="font-size: 14px; font-weight: 300">
              People exceptionally talented in the Woo theme love the challenge of meeting new people and winning them over. <br> They derive satisfaction from breaking the ice and making a connection with someone.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-expansion-panels>
  </v-app>
</template>
