import { discordLogin } from "../services/auth.discord";

export const Login = () => {


  return (
    <div className="mx-auto flex w-full max-w-md items-center justify-center">
      <div className="grid grid-cols-1 gap-3">
        <div className="grid w-72">
          <label className="font-Mona font-600" htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              placeholder="Username"
              className="rounded-md border border-gray-400 focus:outline-0 px-2 py-3 font-Mona"
            />
        </div>
        <div className="grid">
          <label className="font-Mona font-600" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            className="rounded-md border border-gray-400 focus:outline-0 px-2 py-3 font-Mona"
          />
        </div>
        <button className="bg-[#d9d9d9] py-4 rounded-md font-Mona font-600">Log In</button>
        <div className="border border-gray-200"/>
        <button disabled className="bg-[#dd675d] saturate-0 py-2 font-600 font-Mona text-white rounded-md">Log In with Google</button>
        <button onClick={discordLogin} className="bg-[#5662f6] py-2 font-600 font-Mona text-white rounded-md">Log In with Discord</button>
      </div>
    </div>
  )
};
