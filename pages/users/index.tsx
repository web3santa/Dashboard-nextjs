import React from "react";
import { columns } from "../../components/columns";
import { DataTable } from "../../components/data-table";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
const UserTable = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch("https://66191c6e9a41b1b3dfbee692.mockapi.io/user").then((res) =>
        res.json()
      ),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <section className="py-24">
      <div className="container">
        <h1 className="text-3xl font-bold">All Users</h1>
        <DataTable columns={columns} data={data} />
      </div>
    </section>
  );
};

export default UserTable;
