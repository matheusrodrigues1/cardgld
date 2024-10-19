import Header from "@/components/Header";
import HomePage from "@/components/HomePage";
import "../styles/globals.css";
import SubPage from "@/components/SubPage";
import Info from "@/components/Info";
import End from "@/components/End";

export default function Home() {
  return (
    <>
      <Header />
      <HomePage />
      <SubPage />
      <Info />
      <End />
    </>
  );
}
