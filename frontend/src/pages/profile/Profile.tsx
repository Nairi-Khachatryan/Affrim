import { Tabs, Card } from "antd";
import type { TabsProps } from "antd";

export const Profile = () => {
  const items: TabsProps["items"] = [
    {
      key: "add-money",
      label: "Add Money",
      children: <Card>Add money content...</Card>,
    },
    {
      key: "withdraw",
      label: "Withdraw",
      children: <Card>Withdraw content...</Card>,
    },
    {
      key: "withdrawal-list",
      label: "Withdrawal List",
      children: <Card>Withdrawal list content...</Card>,
    },
    {
      key: "bank-card",
      label: "Bank Card",
      children: <Card>Bank card content...</Card>,
    },
    {
      key: "change-password",
      label: "Change Password",
      children: <Card>Change password content...</Card>,
    },
    {
      key: "change-money-password",
      label: "Change Money Password",
      children: <Card>Change money password content...</Card>,
    },
    {
      key: "combat-tap-tap",
      label: "Combat Tap Tap",
      children: <Card>Combat tap tap content...</Card>,
    },
    {
      key: "app",
      label: "App",
      children: <Card>App content...</Card>,
    },
    {
      key: "out",
      label: "Out",
      children: <Card>You clicked OUT</Card>,
    },
  ];

  return (
    <div style={{ display: "flex", width: "100%", gap: 24 }}>
      <Tabs
        tabPosition="left"
        items={items}
        style={{ minWidth: 220 }}
      />
    </div>
  );
};
