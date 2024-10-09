import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default class Toast {
  static success(message) {
    toast(`${message}`, {
      type: "success",
      dangerouslyHTMLString: true,
    });
  }

  static error(message) {
    toast(`${message}`, {
      type: "error",
      dangerouslyHTMLString: true,
    });
  }

  static warning(message) {
    toast(`${message}`, {
      type: "warning",
      dangerouslyHTMLString: true,
    });
  }

  static info(message) {
    toast(`${message}`, {
      type: "info",
      dangerouslyHTMLString: true,
    });
  }
}
