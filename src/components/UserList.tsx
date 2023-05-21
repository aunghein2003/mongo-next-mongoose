import { FC } from "react";
import { UserType } from "../../types";

interface UserListProps {
  data: UserType;
}

const UserList: FC<UserListProps> = ({ data: { name, email } }) => {
  return (
    <div className="mt-5 p-3 rounded-md shadow-md bg-emerald-300">
      <h3>Name - {name}</h3>
      <h3>Email - {email}</h3>
    </div>
  );
};
export default UserList;
