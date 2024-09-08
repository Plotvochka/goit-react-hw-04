import toast, { Toaster } from "react-hot-toast";

export default function ErrorMessage() {
  toast.error("There was a problem. Please try again.");
  return (
    <div>
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
}
