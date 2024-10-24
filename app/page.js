import styles from "./page.module.css";
import Navbar from "@/elements/navbar/navbar"
import Homemain from "@/components/homemain/homemain";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <Homemain />
    </div>
  );
}