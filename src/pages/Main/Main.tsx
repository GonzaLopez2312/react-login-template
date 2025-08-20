import { Button } from "@/components/ui/button";
import React from "react";
import useAuthStore from "@/store/auth.store";
import { useNavigate } from "react-router-dom";

const MainPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    useAuthStore.getState().removeToken();
    navigate("/login");
  }

  return (
    <>
      <div className="flex justify-center items-center">
        <h1>Main Page</h1>
      </div>
      <div className="flex flex-col gap-3">
        <Button onClick={handleLogout}>
          LogOut
        </Button>
      </div>
    </>
  );
};

export default MainPage;
