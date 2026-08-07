import { useAuth } from "../hooks/useAuth";

export const Dashboard = () => {

  const handleClick = () => console.log("clicked")

  const { user } = useAuth();

  return (
    <div className="bg-white dark:bg-[#0F1012] min-h-screen transition-colors duration-300 p-10">
      <div>
        <h1 className="text-black dark:text-white text-2xl font-600 font-Mona">Welcome back, {user?.globalName}.</h1>
      </div>
      <div className="mt-10">
        <h2 className="dark:text-[#F3F4F6] text-lg font-500">
          Quick Actions
        </h2>
        <div className="flex *:mx-10 mt-5 *:dark:text-info *:underline *:cursor-pointer">
          <p onClick={handleClick}>Add Workspace</p>
          <p onClick={handleClick}>Add Project</p>
          <p onClick={handleClick}>Invite Member</p>
        </div>
      </div>
    </div>
  );
};