import Avatar from "@mui/material/Avatar";
import profilePic from "../assets/profile-avatar.svg";
export default function Header() {
  return (
    <header className="left-0 p-2 fixed bg-slate-800 shadow-md w-full">
      <div className="w-full max-w-[800px] mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={profilePic}
            alt="Eliuth Bompart - profile pic"
            className="border-2 rounded-full w-12 h-12 p-1 border-[#161e2d] object-fill"
          />
          <h1 className="text-xl font-semibold">Eliuth Bompart</h1>
        </div>
      </div>
    </header>
  );
}
