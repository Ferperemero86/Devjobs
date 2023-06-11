import SwitchButton from "../SwitchButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";

export default function Header() {

  return (
    <header className="header container bg-[url('/images/mobile/bg-pattern-header.svg')] h-32 p-6 fle gap-x-16">
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
    </header>
  );
}
