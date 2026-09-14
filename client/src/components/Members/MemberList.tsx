import { MemberRow } from "./MemberRow";
import type { IWorkspaceMembers } from "../../types/workspace"

interface MemberListProps {
  members: IWorkspaceMembers[]
};


export const MemberList = ({ members }: MemberListProps) => {
  return (
    <>
      {members.map((member) => (
        <MemberRow
          key={member.user._id}
          members={member}
        />
      ))}
    </>
  )
};