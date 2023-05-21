import CreateUser from "@/components/CreateUser";
import { connectDB } from "../../lib/db";
import User from "../../lib/Modals/User";
import { UserType } from "../../types";
import UserList from "@/components/UserList";

export const revalidate = 10;

export default async function Home() {
  await connectDB();
  const users = await User.find<UserType>({});

  // console.log(users);

  return (
    <div className="max-w-2xl mx-auto pt-10">
      <CreateUser />
      {users && users.map((user) => <UserList key={user.id} data={user} />)}
    </div>
  );
}
