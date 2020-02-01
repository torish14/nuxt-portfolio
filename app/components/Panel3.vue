<template>
  <v-row :elevation="20" justify="center" style="width: 305px;">
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
</template>
