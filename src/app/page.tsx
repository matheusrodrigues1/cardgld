import Header from "@/components/Header";
import HomePage from "@/components/HomePage";
import "../styles/globals.css";
import SubPage from "@/components/SubPage";

export default function Home() {
  return (
    <>
      <Header />
      <HomePage />
      <SubPage/> 
    </>
  );
}
