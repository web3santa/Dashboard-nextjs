import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import {
  useQuery,
  useMutation,
  QueryClient,
  useQueryClient,
} from "@tanstack/react-query";

{
  /* <ConnectButton /> */
}

const Home: NextPage = () => {
  const queryClient = useQueryClient();

  return (
    <div className="flex justify-center items-center text-3xl">
      <h1>Hello</h1>
    </div>
  );
};

export default Home;
