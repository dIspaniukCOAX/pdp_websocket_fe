import React, { JSX } from "react"; // Import JSX type from @types/react
import { Button, ButtonProps } from "antd";

import { Icon } from "@/elements";

import styles from "./abstract.module.scss";

import { SystemTypes } from "./abstract.type";

interface UIElement {
  render(): JSX.Element;
}

class WindowButton implements UIElement {
  constructor(private props: ButtonProps) {
    this.props = props;
  }


  render() {
    console.log("this.props :>> ", this.props);
    
return <Button className={styles.button} type="primary" icon={<Icon icon="windowSys" />} {...this.props}>Window</Button>;
  }
}

class MacOSButton implements UIElement {
  render() {
    return (
      <Button className={styles.button} type="primary" icon={<Icon icon="appleSys" />}>
        MacOSButton
      </Button>
    );
  }
}

class LinuxButton implements UIElement {
  render() {
    return <Button type="primary">LinuxButton</Button>;
  }
}

interface UIFactory {
  createButton(props: ButtonProps): UIElement;
}

class WindowsFactory implements UIFactory {
  createButton(props: ButtonProps) {
    return new WindowButton(props);
  }
}

class MacOSFactory implements UIFactory {
  createButton() {
    return new MacOSButton();
  }
}

class LinuxFactory implements UIFactory {
  createButton() {
    return new LinuxButton();
  }
}

export const AbstractFactory = (platform: SystemTypes): UIFactory => {
  let factory: UIFactory;

  if (platform === SystemTypes.WINDOWS) {
    factory = new WindowsFactory();
  } else if (platform === SystemTypes.MAC) {
    factory = new MacOSFactory();
  } else {
    factory = new LinuxFactory();
  }

  return factory;
};
