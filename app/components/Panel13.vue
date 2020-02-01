<template>
  <v-row justify="center" style="width: 305px;">
    <v-expansion-panels popout>
      <v-expansion-panel
        v-for="(item,i) in 1"
        :key="i"
      >
        <v-expansion-panel-header>Deliberative</v-expansion-panel-header>
        <v-expansion-panel-content>
          People exceptionally talented in the Deliberative theme are best described by the serious care they take in making decisions or choices. They anticipate obstacles.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>
