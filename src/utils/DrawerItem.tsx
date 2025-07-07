import { DrawerItems, User_role } from "@/types";
import { USER_ROLE } from "@/types/roles.constants";

//material-ui icons
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import PeopleIcon from "@mui/icons-material/People";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import ScheduleIcon from "@mui/icons-material/Schedule";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import DescriptionIcon from "@mui/icons-material/Description";
import PaymentIcon from "@mui/icons-material/Payment";

const DrawerItem = (role: User_role): DrawerItems[] => {
  const roleMenus: DrawerItems[] = [];

  switch (role) {
    case USER_ROLE.SUPER_ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardCustomizeIcon,
        },
        {
          title: "manage-users",
          path: `${role}/manage-users`,
          icon: PeopleIcon,
        }
      );
      break;

    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardCustomizeIcon,
        },
        {
          title: "Specialties",
          path: `${role}/specialties`,
          icon: MedicalServicesIcon,
        },
        {
          title: "Doctors",
          path: `${role}/doctors`,
          icon: MedicalInformationIcon,
        },
        {
          title: "Schedules",
          path: `${role}/schedules`,
          icon: ScheduleIcon,
        },
        {
          title: "Appointments",
          path: `${role}/appointments`,
          icon: EventAvailableIcon,
        },
        {
          title: "Reviews",
          path: `${role}/reviews`,
          icon: StarBorderIcon,
        }
      );
      break;

    case USER_ROLE.DOCTOR:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardCustomizeIcon,
        },
        {
          title: "Schedules",
          path: `${role}/schedules`,
          icon: ScheduleIcon,
        },
        {
          title: "Appointment",
          path: `${role}/appointment`,
          icon: EventAvailableIcon,
        }
      );
      break;

    case USER_ROLE.PATIENT:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardCustomizeIcon,
        },
        {
          title: "Appointment",
          path: `${role}/appointment`,
          icon: EventAvailableIcon,
        },
        {
          title: "Prescription",
          path: `${role}/prescription`,
          icon: DescriptionIcon,
        },
        {
          title: "Payment-History",
          path: `${role}/payment-history`,
          icon: PaymentIcon,
        }
      );
  }
  return [...roleMenus];
};

export default DrawerItem;
