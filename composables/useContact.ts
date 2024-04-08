import axios from "axios";
import { ref } from "vue";
import { ErrorMessage, SuccessMessage } from "~/utils/message";
import type { FormInstance, FormRules } from "element-plus";
import type { Contact } from "~/models/contact";

export default function useContact() {
  const isLoading = ref<boolean>(false);
  const errorMessage = ref();

  const formRequest = reactive<Contact>({
    name: "",
    email: "",
    phone: null,
    message: "",
  });

  const chatID: number = 947503787;
  const token = "6729315582:AAEh0uM15vNhvEF9-qRyGHRGzTa24TnqSdo";
  const AddMessage = async () => {
    if (!formRequest.name.trim()) {
      errorMessage.value = "Please enter a value";
      return;
    }
    isLoading.value = true;
    try {
      if (formRequest.name && formRequest.message && formRequest.message != "") {
        const messages: string = `Name: ${formRequest.name} \n Email: ${formRequest.email} \n Phone: ${formRequest.phone} \n Message: ${formRequest.message}`;
        const api: string = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatID}&text=${messages}`;
        await axios.post(api);
        SuccessMessage();
        isLoading.value = false;
        formRequest.email = "";
        formRequest.name = "";
        formRequest.message = "";
        formRequest.phone = null;
      } else {
        ErrorMessage("Please enter valid values");
        isLoading.value = false;
      }
    } catch (error) {
      ErrorMessage(error);
    }
  };
  const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.resetFields();
  };

  return {
    isLoading,
    AddMessage,
    errorMessage,
    formRequest,
  };
}
