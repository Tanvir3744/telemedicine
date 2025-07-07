import DashboardDrawer from "@/components/ui/Dashboard/dashboard";

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div>
           <DashboardDrawer>{children}</DashboardDrawer>
        </div>
    );
};

export default DashboardLayout;