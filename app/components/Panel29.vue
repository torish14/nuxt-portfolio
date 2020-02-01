<template>
  <v-row justify="center" style="width: 305px;">
    <v-expansion-panels popout>
      <v-expansion-panel
        v-for="(item,i) in 1"
        :key="i"
      >
        <v-expansion-panel-header>Empathy</v-expansion-panel-header>
        <v-expansion-panel-content>
          People exceptionally talented in the Empathy theme can sense other people's feelings by imagining themselves in others' lives or situations.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>
