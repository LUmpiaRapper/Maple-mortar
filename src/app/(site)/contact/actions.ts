"use server";

export type FormState = {
  success: boolean;
  message: string;
};

export async function submitContact(_prevState: FormState, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  console.log("Contact form submission:", { name, email, message });

  return {
    success: true,
    message: `Thanks, ${name}! We'll be in touch soon.`,
  };
}
