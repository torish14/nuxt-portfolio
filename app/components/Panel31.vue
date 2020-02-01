<template>
  <v-row justify="center" style="width: 305px;">
    <v-expansion-panels popout>
      <v-expansion-panel
        v-for="(item,i) in 1"
        :key="i"
      >
        <v-expansion-panel-header>Includer</v-expansion-panel-header>
        <v-expansion-panel-content style="font-size: 14px; font-weight: 300">
          People exceptionally talented in the Includer theme accept others.<br> They show awareness of those who feel left out and make an effort to include them.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>
