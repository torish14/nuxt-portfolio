<template>
  <v-row justify="center" style="width: 305px;">
    <v-expansion-panels popout>
      <v-expansion-panel
        v-for="(item,i) in 1"
        :key="i"
      >
        <v-expansion-panel-header>Learner</v-expansion-panel-header>
        <v-expansion-panel-content>
          People exceptionally talented in the Learner theme have a great desire to learn and want to continuously improve. The process of learning, rather than the outcome, excites them.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>
