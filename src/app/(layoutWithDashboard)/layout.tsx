import DashboardNavbar from "@/components/dashboardNavbar/navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<div>
    <DashboardNavbar></DashboardNavbar>
    {children}
</div>
  );
}