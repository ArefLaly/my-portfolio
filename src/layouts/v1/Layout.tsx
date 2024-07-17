import Header from "../../components/Header";
import CutsomCursor from "../../features/template/components/CutsomCursor";

type props = {
  children: JSX.Element;
};
const Layout: React.FC<props> = ({ children }: props) => {
  return (
    <div>
      <Header></Header>
      {children}
      <CutsomCursor />
    </div>
  );
};
export default Layout;
