import React from "react";
import { GET_USER } from "@/constants/API";
import { useGetApiQuery } from "@/redux/api/AuthApi";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/redux/store";
import { setSelectedItem } from "@/redux/reducers/AuthReducer";
import { Table } from "../Tables/Table";
import { AiFillEdit, AiFillEye } from "react-icons/ai";
import DefaultLayout from "@/Dashboard/layout/DefaultLayout";

export const SystemUsers = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  interface User {
    _id: string;
    profile_picture: string;
    name: string;
    username: string;
    email: string;
    mobile: string;
    isgooglelinked: boolean;
    isapplelinked: boolean;
    level: number;
    streak: number;
    buzzs: number;
    gifts_sent: number;
    gifts_received: number;
    friends: number;
    followers: number;
    following: number;
    active: boolean;
  }

  const { data, isError, isLoading } = useGetApiQuery({ api: GET_USER });
  
  const handleEditUser = (user: User) => {
    dispatch(setSelectedItem(user));
    navigate(`/systemuser/edit/${user._id}`);
    localStorage.setItem("systemuser", JSON.stringify(user._id));
  };
  
  const handleViewUser = (user: User) => {
    dispatch(setSelectedItem(user));
    navigate(`/viewuser/edit/${user._id}`);
  };

  return (
    <DefaultLayout>
      <div className="overflow-x-auto">
        {isLoading ? (
          <p>Loading...</p>
        ) : isError ? (
          <p>Error: Unable to fetch data</p>
        ) : (
          <Table
            columns={[
              { Header: "Profile Picture", accessor: "profile_picture" },
              { Header: "Name", accessor: "name" },
              { Header: "Email", accessor: "email" },
              { Header: "Phone", accessor: "mobile" },
              { Header: "Active", accessor: "active" },
              { Header: "Actions", accessor: "actions" }
            ]}
            data={data?.map((user: User) => ({
              ...user,
              actions: (
                <>
                <div className="flex gap-4 items-center  justify-center">
                  <button onClick={() => handleEditUser(user)}>
                    <AiFillEdit />
                  </button>
                  <button onClick={() => handleViewUser(user)}>
                    <AiFillEye />
                  </button>
                  </div>
                </>
              )
            })) || []}
          />
        )}
      </div>
    </DefaultLayout>
  );
};
