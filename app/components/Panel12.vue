<template>
  <v-expansion-panels focusable="">
    <v-row justify="center" style="width: 305px;">
      <v-expansion-panels popout>
        <v-expansion-panel
          v-for="(item,i) in 1"
          :key="i"
        >
          <v-expansion-panel-header>Consistency</v-expansion-panel-header>
          <v-expansion-panel-content style="font-size: 14px; font-weight: 300">
            People exceptionally talented in the Consistency theme are keenly aware of the need to treat people the same. <br> They crave stable routines and clear rules and procedures that everyone can follow.
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-expansion-panels>
</template>
