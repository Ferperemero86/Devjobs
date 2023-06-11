import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext } from "react";

export default function Jobs() {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <h1>Jobs</h1>
      {theme.mainBg}
    </div>
  );
}
