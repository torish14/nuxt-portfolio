<template>
  <v-row :elevation="20" justify="center" style="width: 305px;">
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
</template>
