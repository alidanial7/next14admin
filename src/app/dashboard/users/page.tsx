import React from "react";

import styles from "./users.module.css";
import Search from "@/components/search/search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/components/pagination/pagination";

function DashboardUsersPage() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="search users..." />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Created At</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noAvatar.png"
                  alt=""
                  className={styles.userImage}
                  width={40}
                  height={40}
                />
                Ali Hosseini
              </div>
            </td>
            <td>seyedalihosseinid@gmil.com</td>
            <td>01/01/2022</td>
            <td>Admin</td>
            <td>Active </td>
            <td>
              <div className={styles.buttons}>
                <Link href="/">
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <Link href="/">
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
}

export default DashboardUsersPage;
