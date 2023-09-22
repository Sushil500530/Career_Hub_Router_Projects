import { Outlet, useNavigation} from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { RotatingLines } from 'react-loader-spinner' ;

const Root = () => {
const navigation = useNavigation() ;

  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <Header></Header>
        {
          navigation.state === "loading" ?
            <div className='flex justify-center items-center'>
              <RotatingLines
                strokeColor="purple"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
              />
            </div> :
            <Outlet></Outlet>
        }


      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
