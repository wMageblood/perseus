import type { IWorkspaceMembers } from "../../types/workspace";

interface MemberRowProps {
  members: IWorkspaceMembers;
};

export const MemberRow = ({ members }: MemberRowProps) => {

  return (
    <div className="">
      <div className="my-2 flex items-center bg-[#131519] p-4">
        <img alt={members.user.globalName} className="mr-5 h-15 rounded-full" src={members.user.avatar} />
        <p className="font-semibold text-[#F2F4F6]">{members.user.globalName}</p>
        <p className={`font-semibold text-[#F2F4F6] ml-auto ${members.role === "owner" ? "text-red-500" : "text-yellow-500"}`}>{members.role}</p>
      </div>
    </div>
  )
};