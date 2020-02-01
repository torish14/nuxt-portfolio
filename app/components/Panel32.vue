<template>
  <v-row justify="center" style="width: 305px;">
    <v-expansion-panels popout>
      <v-expansion-panel
        v-for="(item,i) in 1"
        :key="i"
      >
        <v-expansion-panel-header>Individualization</v-expansion-panel-header>
        <v-expansion-panel-content>
          People exceptionally talented in the Individualization theme are intrigued with the unique qualities of each person. They have a gift for figuring out how different people can work together productively.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>
