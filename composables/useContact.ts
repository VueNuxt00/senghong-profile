import axios from "axios";
import { ref } from "vue";
import { ErrorMessage, SuccessMessage } from "~/library/message";
import type { FormInstance, FormRules } from "element-plus";
export default function useContact() {
  const isLoading = ref<boolean>(false);
  const errorMessage = ref();

  const ruleFormRef = ref<FormInstance>();

  const requestForm = reactive({
    Username: "",
    email: "",
    phone: "",
    reflink: "",
    message: "",
  });

  const rules = reactive<FormRules<typeof requestForm>>({
    Username: [{ required: true, trigger: "blur" }],
    email: [{ required: true, trigger: "blur" }],
    message: [{ required: true, trigger: "blur" }],
    phone: [{ required: true, trigger: "blur" }],
  });

  const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.resetFields();
  };
  const chatID: number = 947503787;
  const token = "6729315582:AAEh0uM15vNhvEF9-qRyGHRGzTa24TnqSdo";
  const AddMessage = async () => {
    isLoading.value = true;
    try {
      const api: string = `https://api.telegram.org/bot${token}/sendMessage`;
      let messages: string;
      if (
        requestForm.reflink.length > 0 &&
        !requestForm.reflink.includes("http")
      ) {
        ErrorMessage("Please input link in Reference link field");
      } else {
        if (requestForm.reflink !== "" && requestForm.reflink !== null) {
          messages = `
          **Message:**
            [${requestForm.reflink}](${requestForm.reflink})
            Name: ${requestForm.Username}
            Email: ${requestForm.email}
            Phone: ${requestForm.phone}
            Message: ${requestForm.message}`;
        } else {
          messages = `
          **Message:**
            Name: ${requestForm.Username}
            Email: ${requestForm.email}
            Phone: ${requestForm.phone}
            Message: ${requestForm.message}`;
        }
        await axios.post(api, {
          chat_id: chatID,
          text: messages,
          parse_mode: "Markdown",
        });
        SuccessMessage();
      }
    } catch (error) {
      console.error(error);
    } finally {
      isLoading.value = false;
    }
  };
  const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.validate((valid) => {
      if (valid) {
        AddMessage();
      } else {
        // console.log('error submit!')
        return false;
      }
    });
  };

  return {
    isLoading,
    AddMessage,
    errorMessage,
    ruleFormRef,
    resetForm,
    ruleForm: requestForm,
    rules,
    submitForm,
  };
}
