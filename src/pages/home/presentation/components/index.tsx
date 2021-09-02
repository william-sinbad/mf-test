import { ContentWrapper } from "@sinbad/mf-react-component";
import useHomeEvent from "../event";
import useHomeState from "../state";

const HomePage: React.FC = () => {
  useHomeEvent();
  const { isSidebarOpen } = useHomeState();

  const handleLogin = async () => {
    const host = 'https://ms-auth-dev.sinbad.web.id'
    const result = await fetch(`${host}/api/v1/seller-center/login`, 
      {
        method: 'POST',
        body: JSON.stringify({
          "username": "aulia@sinbad.co.id",
          "password": "developer"
        }), 
        headers: {
          'x-platform': 'seller-center',
          'Content-type': 'application/json',
          // 'Authorization': `Basic ${Buffer.from(`aulia@sinbad.co.id:Developer123!`, 'utf8').toString('base64')}`
        },
        credentials: 'include'
      });
      console.log('check result 1', await result.json());
  }
  const handleCheckLogin = async () => {
    const host = 'https://ms-api-dev.sinbad.web.id'
    const result2 = await fetch(`${host}/account/api/v1/seller-center/vehicle-accessibilities?skip=0&limit=10`, {
      method: 'GET',
      headers: {
        'x-platform': 'seller-center'
      },
      credentials: 'include'
    }).catch(err=>{
      console.log(err.toJSON())
      return err.toJSON().data
    });
    console.log('check result 2', await result2.json());
  }

  return (
    <ContentWrapper isSidebarOpen={isSidebarOpen}>
      <section
        className="bg-white overflow-y-auto space-y-8"
        style={{ padding: "16px", height: "inherit" }}
      >
        <h1 className="snb-h1">Test</h1>

        <section>
          <h2 className="snb-h2">Blank Page</h2>
        </section>
        <section>
          <button onClick={handleLogin}>Login</button>
        </section>
        <section>
          <button onClick={handleCheckLogin}>Check Login</button>
        </section>
      </section>
    </ContentWrapper>
  );
};

export default HomePage;
