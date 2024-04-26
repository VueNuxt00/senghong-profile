<template>
  <div class="flex w-full justify-center items-center lg:p-10">
    <form class="w-full flex h-full justify-center">
      <div
        class="w-[700px] relative my_animated dark:bg-gray-800 bg-gray-300 min-h-screen justify-center flex items-center rounded-[10px] my-5 sm:mt-0"
      >
        <!--  -->
        <div
          class="dark:text-white absolute top-5 md:top-15 font-bold text-2xl md:text-4xl hover:underline"
        >
          Contact Me
        </div>
        <div
          class="md:w-[800px] w-[calc(100vw-50px)] absolute h-[650px] md:h-[550px] bg-gray-200 rounded-[15px] shadow-md shadow-green-900"
        >
          <div class="w-full relative h-full flex justify-center">
            <!-- My info -->
            <div
              class="flex justify-center w-[300px] md:w-[400px] bg-gray-400 py-10 -top-10 absolute -right-[10px] md:right-[-50px] md:top-10 rounded-[20px] shadow-md shadow-gray-500"
            >
              <div class="text-gray-100 space-y-2 justify-center flex-col flex">
                <div class="text-lg font-medium text-white">Hang Senghong</div>
                <div
                  v-for="(info, index) in myInfo"
                  :key="index"
                  class="space-x-2"
                >
                  <span class="text-md font-medium">{{ info.title }}:</span>
                  <span v-if="index === 1" class="text-blue-600"
                    ><a>{{ info.data }}</a></span
                  >
                  <span v-else>{{ info.data }}</span>
                </div>
              </div>
            </div>

            <div
              class="absolute top-[180px] md:top-10 min-w-[300px] md:left-[60px] space-y-1 rounded-md md:hover:shadow-md p-2"
            >
              <el-form
                ref="ruleFormRef"
                style="max-width: 100%"
                :model="ruleForm"
                status-icon
                :rules="rules"
                label-width="auto"
                label-position="top"
                class="demo-ruleForm"
              >
                <el-form-item label="Username" prop="Username">
                  <el-input
                    v-model="ruleForm.Username"
                    type="text"
                    autocomplete="off"
                    placeholder="Please enter your username"
                  />
                </el-form-item>
                <el-form-item label="Email" prop="email">
                  <el-input
                    v-model="ruleForm.email"
                    type="email"
                    autocomplete="off"
                    placeholder="Please enter a valid email"
                  />
                </el-form-item>
                <el-form-item label="Phone" prop="phone">
                  <el-input
                    v-model="ruleForm.phone"
                    type="phone"
                    autocomplete="off"
                    placeholder="Please enter a valid phone"
                  />
                </el-form-item>
                <el-form-item label="Reference Link">
                  <el-input
                    v-model="ruleForm.reflink"
                    type=" links"
                    autocomplete="off"
                    placeholder="Input web-link"
                  />
                </el-form-item>
                <el-form-item label="Message" prop="message">
                  <el-input
                    v-model="ruleForm.message"
                    type="textarea"
                    placeholder="Please input your message"
                  />
                </el-form-item>
                <el-form-item>
                  <el-button
                    type="primary"
                    :loading="isLoading"
                    @click="submitForm(ruleFormRef)"
                  >
                    Submit
                  </el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script setup lang="ts">
import { myInfo } from "~~/interfaces/interface";
import useContact from "~/composables/useContact";
const {
  isLoading,
  errorMessage,
  ruleFormRef,
  resetForm,
  ruleForm,
  rules,
  submitForm,
} = useContact();
</script>
