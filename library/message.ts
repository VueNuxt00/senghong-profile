import { ElMessage } from 'element-plus'
export const ErrorMessage = (error: any) => {
  ElMessage({
    message: error,
    type: "error",
  });
};

export const SuccessMessage = () => {
  ElMessage({
    message: "Message has been sent",
    type: "success",
  });
};
