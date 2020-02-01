<template>
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
</template>
