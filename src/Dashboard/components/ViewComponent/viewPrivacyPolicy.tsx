import React from "react";
import { Table } from "../Tables/Table";
import { useGetApiQuery } from "@/redux/api/AuthApi";
import { GET_PRIVACYPOLICY } from "@/constants/API";
import DefaultLayout from "@/Dashboard/layout/DefaultLayout";

export const ViewPrivacyPolicy = () => {
  const { data, isError, isLoading } = useGetApiQuery({
    api: GET_PRIVACYPOLICY,
  });

  return (
    <DefaultLayout>
      <div className="overflow-x-auto">
        {isLoading ? (
          <p>Loading.......</p>
        ) : isError ? (
          <p>Error: Unable to fetch the data</p>
        ) : (
          <Table
            columns={[
              { Header: "Title", accessor: "title" },
              {
                Header: "Description",
                accessor: "body",
                Cell: ({ value }: { value: string }) => (
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        value.length > 100
                          ? `${value.substring(0, 100)}...`
                          : value,
                    }}
                  />
                ),
              },
            ]}
            data={[data]}
          />
        )}
      </div>
    </DefaultLayout>
  );
};
