<script setup>
import { useUserStore } from "../../stores/user";
import { useThemeStore } from "../../stores/theme";
import { BrightnessContrast } from "@vicons/carbon";
import { URI_DEFAULT_AVATAR } from "../../helpers/constants";
import { NButton, NSpace, NAvatar, NIcon } from "naive-ui";

import logo_c from "../../assets/logo/png/logo-no-background.png";

const user = useUserStore();
const theme = useThemeStore();
</script>

<template>
  <n-space class="menu" justify="space-between" align="center">
    <n-space>
      <!--  -->
      <router-link to="/">
        <img :src="logo_c" class="logo" :alt="$t('nav.logo.alt')" />
      </router-link>
      <!--  -->
      <router-link to="/challenges">
        <n-button text type="primary">
          {{ $t("nav.menu.challenges") }}
        </n-button>
      </router-link>
      <!--  -->
      <router-link to="/add/challenges" v-if="user.isLoggedIn">
        <n-button text type="primary"> {{ $t("nav.menu.add") }} </n-button>
      </router-link>
      <!--  -->
      <router-link to="/all/challenges" v-if="user.isLoggedIn">
        <n-button text type="primary"> {{ $t("nav.menu.all") }} </n-button>
      </router-link>
      <!--  -->
    </n-space>
    <!--  -->
    <n-space align="center">
      <!--  -->
      <n-button
        text
        type="success"
        @click="
          $i18n.locale === 'pt' ? ($i18n.locale = 'en') : ($i18n.locale = 'pt')
        "
      >
        {{ $i18n.locale.toUpperCase() }}
      </n-button>

      <n-button text type="success" @click="theme.switchTheme">
        <n-icon size="22">
          <brightness-contrast />
        </n-icon>
      </n-button>
      <!--  -->
      <router-link to="/auth" v-if="!user.isLoggedIn">
        <n-button text type="primary"> {{ $t("nav.menu.signin") }} </n-button>
      </router-link>
      <!--  -->
      <router-link
        v-if="user.isLoggedIn"
        :to="`/profile/${user.user.uid}/stats`"
      >
        <n-avatar
          round
          size="small"
          :src="user.photoURL || URI_DEFAULT_AVATAR"
        />
      </router-link>
    </n-space>
  </n-space>
</template>
