<template>
  <v-app>
    <v-expansion-panels focusable="">
      <v-row justify="center" style="width: 305px;">
        <v-expansion-panels popout>
          <v-expansion-panel
            v-for="(item,i) in 1"
            :key="i"
          >
            <v-expansion-panel-header style="background: rgba(153, 51, 102, 0.7);">
              Analytical
            </v-expansion-panel-header>
            <v-expansion-panel-content style="font-size: 14px; font-weight: 300">
              People exceptionally talented in the Analytical theme search for reasons and causes.<br> They have the ability to think about all of the factors that might affect a situation.
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
            <v-expansion-panel-header>Context</v-expansion-panel-header>
            <v-expansion-panel-content style="font-size: 14px; font-weight: 300">
              People exceptionally talented in the Context theme enjoy thinking about the past.<br> They understand the present by researching its history.
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
            <v-expansion-panel-header>Futuristic</v-expansion-panel-header>
            <v-expansion-panel-content style="font-size: 14px; font-weight: 300">
              People exceptionally talented in the Futuristic theme are inspired by the future and what could be.<br> They energize others with their visions of the future.
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
            <v-expansion-panel-header>Ideation</v-expansion-panel-header>
            <v-expansion-panel-content style="font-size: 14px; font-weight: 300">
              People exceptionally talented in the Ideation theme are fascinated by ideas. <br>They are able to find connections between seemingly disparate phenomena.
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
            <v-expansion-panel-header>Input</v-expansion-panel-header>
            <v-expansion-panel-content style="font-size: 14px; font-weight: 300">
              People exceptionally talented in the Input theme have a need to collect and archive.<br> They may accumulate information, ideas, artifacts or even relationships.
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
            <v-expansion-panel-header>Intellection</v-expansion-panel-header>
            <v-expansion-panel-content style="font-size: 14px; font-weight: 300">
              People exceptionally talented in the Intellection theme are characterized by their intellectual activity.<br> They are introspective and appreciate intellectual discussions.
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
            <v-expansion-panel-header>Learner</v-expansion-panel-header>
            <v-expansion-panel-content style="font-size: 14px; font-weight: 300">
              People exceptionally talented in the Learner theme have a great desire to learn and want to continuously improve.<br> The process of learning, rather than the outcome, excites them.
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
            <v-expansion-panel-header>Strategic</v-expansion-panel-header>
            <v-expansion-panel-content style="font-size: 14px; font-weight: 300">
              People exceptionally talented in the Strategic theme create alternative ways to proceed.<br> Faced with any given scenario, they can quickly spot the relevant patterns and issues.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-expansion-panels>
  </v-app>
</template>
