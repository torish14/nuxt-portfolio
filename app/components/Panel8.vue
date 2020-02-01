<template>
  <v-row :elevation="20" justify="center" style="width: 305px;">
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
</template>
