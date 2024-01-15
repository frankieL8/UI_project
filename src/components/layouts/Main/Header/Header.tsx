import Button from "@/components/common/Button/Button";
import React from "react";
import { VscColorMode } from "react-icons/vsc";
import * as Style from "./index.styled";

type HeaderProps = {
  switchTheme: () => void;
};
const Header: React.FC<HeaderProps> = (props) => {
  return (
    <Style.Header id="header">
      <Style.Content>
        <Style.Logo>
          <Style.Img src="https://media.discordapp.net/attachments/689503408260120593/1196461803404791890/hiclipart.com_2_1_1.png?ex=65b7b6e3&is=65a541e3&hm=e124f6db5ae885060cfc24db4fd8805327bc6649420f592f48f9c624d3623845&=&format=webp&quality=lossless"></Style.Img>
        </Style.Logo>

        <Style.Buttons>
          <Button
            name={<VscColorMode />}
            action={() => props.switchTheme()}
          />
        </Style.Buttons>
      </Style.Content>
    </Style.Header>
  );
};
export default Header;
