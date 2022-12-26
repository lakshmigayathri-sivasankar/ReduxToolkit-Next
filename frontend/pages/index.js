import Login from "../components/Login";
import Profile from "../components/Profile";
import ColorSelector from "../components/ColorSelector";
export default function About({}) {
  return (
    <>
      <div>
        <div className='container bg-success mb-5'>
          <Profile />
          <Login />
          <ColorSelector />
        </div>
        {/* our-value-section */}
      </div>
    </>
  );
}
