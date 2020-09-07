import Bookmarks from "../components/bookmarks";
import userbase from "userbase-js";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuthentcation } from "../providers/authentication";

export default function IndexPage() {
  const router = useRouter();
  const { session } = useAuthentcation();
  const [items, setItems] = useState();

  useEffect(() => {
    if (!session.initialized) {
      return;
    }

    if (!session.user) {
      router.replace("/sign-in");

      return;
    }

    userbase.openDatabase({
      databaseName  : "bookmarks",
      changeHandler : setItems
    });
  }, [session]);

  if (!session.user) {
    return null;
  }

  return (
    <Bookmarks items={items} />
  );
}
