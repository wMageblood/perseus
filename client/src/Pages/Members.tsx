import { useEffect, useState } from "react";
import { MemberList } from "../components/Members/MemberList";
import type { IWorkspaceMembers } from "../types/workspace";
import { useParams } from "react-router-dom";
import { getMembers } from "../services/members.service";

export const Members = () => {

  const [ members, setMembers ] = useState<IWorkspaceMembers[]>([])

  const { workspaceId } = useParams()

  useEffect(() => {
    const fetchMembers = async () => {

      try {

        const data = await getMembers(workspaceId!)

        setMembers(data);

      } catch ( error ) {

        console.error(error)
      }
    };

    fetchMembers();

  }, [])

  return (
    <div className="bg-white p-10 transition-colors duration-300 dark:bg-[#0F1012]">
      <div>
        <h1 className="font-Mona text-2xl font-600 text-black dark:text-[#F3F4F6]">Members</h1>
        <h2 className="text-md mt-2 font-Mona font-600 text-black dark:text-[#A1A1AA]">Check who you're working with:</h2>
      </div>
      <div className="mt-10">
        <MemberList members={members} />
      </div>
    </div>
  );
};