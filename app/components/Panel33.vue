<template>
  <v-expansion-panels focusable="">
    <v-row justify="center" style="width: 305px;">
      <v-expansion-panels popout>
        <v-expansion-panel
          v-for="(item,i) in 1"
          :key="i"
        >
          <v-expansion-panel-header>Positivity</v-expansion-panel-header>
          <v-expansion-panel-content style="font-size: 14px; font-weight: 300">
            People exceptionally talented in the Positivity theme have contagious enthusiasm.<br> They are upbeat and can get others excited about what they are going to do.
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-expansion-panels>
</template>
