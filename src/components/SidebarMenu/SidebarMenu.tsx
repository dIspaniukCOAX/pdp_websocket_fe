import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { Layout, Menu, Row } from "antd";
import { MenuItemType } from "antd/es/menu/hooks/useItems";

import { Paragraph } from "@/elements";

import { ROUTES } from "@/constants";

import styles from "./SidebarMenu.module.scss";

const { Sider: AntdSider } = Layout;

interface ISidebarMenuItem extends Omit<MenuItemType, "key"> {
  key: string;
  count?: number;
}

const { DASHBOARD, BOOKINGS, GUESTS, REPORTS } = ROUTES;

export const SidebarMenu = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const getLabel = (key: string) => {
    return t(`sidebar-menu.${key.slice(1)}`);
  };

  const items: ISidebarMenuItem[] = [
    { key: DASHBOARD, count: 5 },
    { key: BOOKINGS },
    { key: GUESTS, count: 15 },
    { key: REPORTS }
  ];

  const key = items.find(({ key }) => pathname.includes(key))?.key;

  return (
    <AntdSider width={210} className={styles.sider}>
      <Menu
        mode="inline"
        selectedKeys={key ? [key] : []}
        items={items.map(({ count, key, ...rest }) => ({
          ...rest,
          key,
          label: (
            <Row align="middle">
              {getLabel(key)}
              {count && (
                <Paragraph className={styles["menu-item-count"]}>
                  {count > 9 ? "9+" : count}
                </Paragraph>
              )}
            </Row>
          ),
          onClick: () => navigate(key)
        }))}
        className={styles["sider-menu"]}
      />
    </AntdSider>
  );
};
