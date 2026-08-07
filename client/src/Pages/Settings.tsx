import { ThemeToggle } from "../components/ui/ThemeToggle";

export const Settings = () => {
  return (
    <div className="bg-white dark:bg-[#0F1012] min-h-screen transition-colors duration-300 p-10">
      <div>
        <h1 className="text-black dark:text-[#F3F4F6] text-2xl font-600 font-Mona">Settings</h1>
        <h2 className="text-black dark:text-[#A1A1AA] text-md font-600 font-Mona mt-2">Configure your workspace, account, and application preferences.</h2>
      </div>
      <div className="ml-5 mt-10 *:font-Mona bg-white dark:bg-[#131519] p-5 dark:border dark:border-[#22252C] rounded-md">
        <div className="flex justify-between items-center w-full">
          <div>
            <h1 className="text-black dark:text-[#F3F4F6]">Theme Mode</h1>
            <h2 className="text-black dark:text-[#A1A1AA] text-sm">Set your preferences, whether you like dark mode or light mode.</h2>
          </div>
          <div className="">
            <ThemeToggle />
          </div>
        </div>
      </div>
      <div className="ml-5 mt-10 *:font-Mona bg-white dark:bg-[#131519] p-5 dark:border dark:border-destructive/30 rounded-md">
        <div className="flex justify-between items-center w-full">
          <div>
            <h1 className="text-black dark:text-[#F3F4F6] text-lg font-600">Destructive Actions</h1>
            <h2 className="text-black dark:text-[#A1A1AA] text-md">Delete workspaces or your account, these changes are <span className="text-destructive underline">irreversible</span>.</h2>
          </div>
        </div>
        <div className="flex justify-between items-center w-full mt-10">
          <div>
            <h1 className="text-black dark:text-[#F3F4F6]">Delete Workspaces</h1>
            <h2 className="text-black dark:text-[#A1A1AA] text-sm">Remove selected workspaces permanently.</h2>
          </div>
          <div className="text-destructive">
            Delete Workspaces
          </div>
        </div>
        <div className="flex justify-between items-center w-full mt-10">
          <div>
            <h1 className="text-black dark:text-[#F3F4F6]">Delete Account</h1>
            <h2 className="text-black dark:text-[#A1A1AA] text-sm">Permanently delete your Perseus account and all associated data.</h2>
          </div>
          <div className="text-destructive">
            Delete Account
          </div>
        </div>
      </div>
    </div>
  );
};