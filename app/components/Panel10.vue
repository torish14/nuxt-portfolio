<template>
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
</template>
