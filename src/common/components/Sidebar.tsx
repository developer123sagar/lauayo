import { Link, useLocation, useNavigate } from "react-router-dom";

import Avatar from "@/components/Avatar";
import CustomIcon from "@/components/CustomIcon";
import { NAVLINKS, SIDEBAR_LINKS } from "@/constants";
import { Following } from "@/types";
import { useGetFollowingUsersQuery } from "@/redux/api/AuthApi";
import { setUserProfileData } from "@/redux/reducers/AuthReducer";
import { useAppDispatch } from "@/redux/store";

const Sidebar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { data: followers } = useGetFollowingUsersQuery({});

  return (
    <aside className="hidden md:block ml-0 md:ml-20 pt-2 w-[20%] max-h-screen overflow-y-auto fixed top-20 left-0">
      {/* upper links */}
      <ul>
        {SIDEBAR_LINKS.map((link, id) => (
          <li
            key={id}
            onClick={() => navigate(link.to)}
            className="flex gap-3 cursor-pointer hover:bg-gray-100/60 py-2 pl-4 transition duration-500"
          >
            <CustomIcon
              icon={link.icon}
              className={
                pathname === link.to ? "text-[#800080]" : "text-gray-700"
              }
              size={25}
            />
            <strong
              className={
                pathname === link.to
                  ? "text-[#800080] hidden md:block"
                  : "hidden md:block"
              }
            >
              {link.title}
            </strong>
          </li>
        ))}
      </ul>
      {/* suggested accounts */}
      <div className="mt-2 border-t border-gray-200 pt-2">
        <h1 className="font-bold text-sm text-gray-600">Following accounts</h1>
        <ul className="space-y-2 mt-2 h-[45vh] overflow-y-scroll">
          {(followers as Following[])?.map((user, id) => (
            <li
              onClick={() => {
                dispatch(setUserProfileData(user));
                navigate(`/profile/${user?.user_id?._id}`);
              }}
              key={id}
              className="flex gap-2 items-center cursor-pointer hover:bg-gray-100/50 p-1 transition-all duration-500"
            >
              <Avatar
                src={
                  user?.user_id?.profile_picture ||
                  "https://avatars.githubusercontent.com/u/124599?v=4"
                }
                name={user?.user_id?.name}
              />
              <div className="flex flex-col">
                <strong>{user?.user_id?.name}</strong>
                <span className="text-gray-400 text-xs font-extralight">
                  {user?.user_id_username}
                </span>
              </div>
            </li>
          ))}
        </ul>
        <h2 className="mt-4 text-[#800080] cursor-pointer underline text-sm">
          See more
        </h2>
      </div>

      {/* last links */}
      <div>
        <ul className="flex gap-4 mt-4">
          {NAVLINKS.map((link, id) => (
            <Link
              to={link.to}
              key={`${link.name}..${id}`}
              className="font-extralight text-xs hover:underline"
            >
              {link.name}
            </Link>
          ))}
        </ul>
        <p className="text-l mt-6">
          &copy; 2022 Lauayo - Create by SilicontechNepal
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
