<template>
  <v-app light>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      class="deep-purple accent-2"
      style="opacity: 0.8; background:linear-gradient(#311B92,#7C4DFF); padding-left: 20px;"
    >
      <v-btn @click.stop="drawer = !drawer" icon style="color: white;">
        <v-icon x-large>
          mdi-fire
        </v-icon>
      </v-btn>

      <v-toolbar-title v-text="title" class="white--text" />
      <v-spacer />
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :fixed="fixed"
      app
      class="deep-purple accent-2"
      style="opacity: 0.8; background:linear-gradient(#311B92,#7C4DFF); padding-left: 30px;"
    >
      <span class="white--text" style="opacity: 0.8;">&copy; 2020 torish</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-human',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-alien-outline',
          title: 'About me',
          to: '/about'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Strengths Finder'
    }
  }
}
</script>
