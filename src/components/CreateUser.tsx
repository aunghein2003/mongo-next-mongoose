import { redirect } from "next/navigation";
import User from "../../lib/Modals/User";

async function onSubmit(formData: FormData) {
  "use server";
  const name = formData.get("name");
  const email = formData.get("email");
  if (!name || !email) {
    throw new Error("Please enter all the fields");
  } else {
    await User.create({
      name: name,
      email: email,
    });
    redirect(`/`);
  }
}

export default function CreateUser() {
  return (
    <form
      action={onSubmit}
      className="border rounded-md shadow-md p-5 flex flex-col gap-y-3"
    >
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        className="p-3 bg-inherit border-2 border-gray-300 rounded-md"
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        className="p-3 bg-inherit border-2 border-gray-300 rounded-md"
      />
      <button
        type="submit"
        className="p-3 w-1/2 self-center border-2 border-gray-300 bg-gray-500 hover:bg-gray-600 active:bg-gray-700 text-slate-50 rounded-md"
      >
        Create
      </button>
    </form>
  );
}
