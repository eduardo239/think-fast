<script setup>
import { ref } from "vue";
import { useUserStore } from "../../stores/user";
import { NForm, NInput, NFormItemRow, NButton } from "naive-ui";
import AlertMessage from "../../components/ui/AlertMessage.vue";

const model = ref({ email: "my_email3@email.com", password: "123123" });
const formRef = ref(null);
const user = useUserStore();
</script>

<template>
  <n-form
    class="form-container"
    ref="formRef"
    :model="model"
    size="medium"
    style="min-width: 300px"
  >
    <n-form-item-row :label="$t('form.email')">
      <n-input v-model:value="model.email" placeholder="Input" />
    </n-form-item-row>
    <n-form-item-row :label="$t('form.password')">
      <n-input
        v-model:value="model.password"
        type="password"
        placeholder="****"
        show-password-on="click"
      />
    </n-form-item-row>

    <n-button
      :disabled="user.loading"
      :loading="user.loading"
      type="primary"
      block
      secondary
      strong
      @click="user.signInFirebase(model)"
    >
      {{ $t("form.signin") }}
    </n-button>
  </n-form>

  <alert-message v-if="user.error.status" :message="user.error" />
</template>
