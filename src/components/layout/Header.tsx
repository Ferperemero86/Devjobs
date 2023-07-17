import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";

import SwitchButton from "../SwitchButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";

import SearchForm from "../ui/SearchForm";

export default function Header() {
	const {theme} = useContext(ThemeContext);
  const {mainBg} = theme;
  const borderColor = mainBg ==="bg-secondColor" ? "border-0" : "md:border md:border-gray2";

  return (
    <header className="header overflow-visible w-full xs:bg-[url('/images/mobile/bg-pattern-header.svg')] md:bg-[url('/images/tablet/bg-pattern-header.svg')] lg:bg-[url('/images/desktop/bg-pattern-header.svg')] h-32 p-6 fle gap-x-16">
      <div className="flex items-center justify-between">
        <Image
          src="/images/desktop/logo.svg"
          width={115}
          height={32}
          alt="Logo"
        />
        <div className="bg-color-switch flex items-center gap-x-4">
          <FontAwesomeIcon
            icon={faSun}
            style={{ fontSize: 18, color: "fff" }}
          />
          <SwitchButton />
          <FontAwesomeIcon
            icon={faMoon}
            style={{ fontSize: 18, color: "fff" }}
          />
        </div>
      </div>
      <SearchForm customStyles={`relative top-8 z-10 md:rounded-lg md:border-solid ${borderColor}`} />
    </header>
  );
}
