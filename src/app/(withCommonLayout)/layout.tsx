import Navbar from "@/shared/navbar/Navbar";
import Footer from "@/shared/footer/footer";
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
     <>
      <Navbar />
      <div style={{ minHeight: "100vh" }}>{children}</div>
      <Footer /></>
  );
};

export default layout;
