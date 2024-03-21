import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import BadgekrokProbh from "./pages/BadgekrokProbh";
import IPhone11ProX from "./pages/IPhone11ProX";
import Explore2DiscoverUsers from "./pages/Explore2DiscoverUsers";
import Explore3DiscoverPlans from "./pages/Explore3DiscoverPlans";
import MyPlans1IPhone11Pro from "./pages/MyPlans1IPhone11Pro";
import MyPlans1Personal from "./pages/MyPlans1Personal";
import MyChats1IPhone11Pro from "./pages/MyChats1IPhone11Pro";
import MyChats1IPhone11Pro1 from "./pages/MyChats1IPhone11Pro1";
import MyChats2IPhone11Pro from "./pages/MyChats2IPhone11Pro";
import MyChats3IPhone11Pro from "./pages/MyChats3IPhone11Pro";
import MyChats4IPhone11Pro from "./pages/MyChats4IPhone11Pro";
import MyChats5IPhone11Pro from "./pages/MyChats5IPhone11Pro";
import MYPLANExcel from "./pages/MYPLANExcel";
import MYPLANNew from "./pages/MYPLANNew";
import MyPlans5IPhone11Pro from "./pages/MyPlans5IPhone11Pro";
import MyPlans5IPhone11Pro1 from "./pages/MyPlans5IPhone11Pro1";
import MyPlans5IPhone11Pro2 from "./pages/MyPlans5IPhone11Pro2";
import MyPlans5IPhone11Pro3 from "./pages/MyPlans5IPhone11Pro3";
import MyPlans6IPhone11Pro from "./pages/MyPlans6IPhone11Pro";
import MyPlans6IPhone11Pro1 from "./pages/MyPlans6IPhone11Pro1";
import MyPlans6IPhone11Pro2 from "./pages/MyPlans6IPhone11Pro2";
import MyPlans4IPhone11Pro from "./pages/MyPlans4IPhone11Pro";
import MyPlansStepsettingInactive from "./pages/MyPlansStepsettingInactive";
import MyPlansStepsettingInactive1 from "./pages/MyPlansStepsettingInactive1";
import Explore3IPhone11Pro from "./pages/Explore3IPhone11Pro";
import OldPhone from "./pages/OldPhone";
import IPhone11ProMax from "./pages/IPhone11ProMax";
import NewPersonalPlan from "./pages/NewPersonalPlan";
import NewGroupPlan1IPhone11Pr from "./pages/NewGroupPlan1IPhone11Pr";
import BadgeKrokSp from "./pages/BadgeKrokSp";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-11-pro-x-1":
        title = "";
        metaDescription = "";
        break;
      case "/explore-2-discover-users":
        title = "";
        metaDescription = "";
        break;
      case "/explore-3-discover-plans":
        title = "";
        metaDescription = "";
        break;
      case "/my-plans-1-iphone-11-pro":
        title = "";
        metaDescription = "";
        break;
      case "/my-plans-1-personal":
        title = "";
        metaDescription = "";
        break;
      case "/my-chats-1-iphone-11-pro":
        title = "";
        metaDescription = "";
        break;
      case "/my-chats-1-iphone-11-pro1":
        title = "";
        metaDescription = "";
        break;
      case "/my-chats-2-iphone-11-pro":
        title = "";
        metaDescription = "";
        break;
      case "/my-chats-3-iphone-11-pro":
        title = "";
        metaDescription = "";
        break;
      case "/my-chats-4-iphone-11-pro":
        title = "";
        metaDescription = "";
        break;
      case "/my-chats-5-iphone-11-pro":
        title = "";
        metaDescription = "";
        break;
      case "/myplan-excel":
        title = "";
        metaDescription = "";
        break;
      case "/myplan-new":
        title = "";
        metaDescription = "";
        break;
      case "/my-plans-5-iphone-11-pro1":
        title = "";
        metaDescription = "";
        break;
      case "/my-plans-5-iphone-11-pro2":
        title = "";
        metaDescription = "";
        break;
      case "/my-plans-5-iphone-11-pro":
        title = "";
        metaDescription = "";
        break;
      case "/my-plans-5-iphone-11-pro3":
        title = "";
        metaDescription = "";
        break;
      case "/my-plans-6-iphone-11-pro":
        title = "";
        metaDescription = "";
        break;
      case "/my-plans-6-iphone-11-pro1":
        title = "";
        metaDescription = "";
        break;
      case "/my-plans-6-iphone-11-pro2":
        title = "";
        metaDescription = "";
        break;
      case "/my-plans-4-iphone-11-pro":
        title = "";
        metaDescription = "";
        break;
      case "/my-plans-stepsetting-inactive":
        title = "";
        metaDescription = "";
        break;
      case "/my-plans-stepsetting-inactive1":
        title = "";
        metaDescription = "";
        break;
      case "/explore-3-iphone-11-pro":
        title = "";
        metaDescription = "";
        break;
      case "/old-phone":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-11-pro-max-1":
        title = "";
        metaDescription = "";
        break;
      case "/new-personal-plan-1":
        title = "";
        metaDescription = "";
        break;
      case "/new-group-plan-1-iphone-11-pro":
        title = "";
        metaDescription = "";
        break;
      case "/badgekrok-sp":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<BadgekrokProbh />} />
      <Route path="/iphone-11-pro-x-1" element={<IPhone11ProX />} />
      <Route
        path="/explore-2-discover-users"
        element={<Explore2DiscoverUsers />}
      />
      <Route
        path="/explore-3-discover-plans"
        element={<Explore3DiscoverPlans />}
      />
      <Route
        path="/my-plans-1-iphone-11-pro"
        element={<MyPlans1IPhone11Pro />}
      />
      <Route path="/my-plans-1-personal" element={<MyPlans1Personal />} />
      <Route
        path="/my-chats-1-iphone-11-pro"
        element={<MyChats1IPhone11Pro />}
      />
      <Route
        path="/my-chats-1-iphone-11-pro1"
        element={<MyChats1IPhone11Pro1 />}
      />
      <Route
        path="/my-chats-2-iphone-11-pro"
        element={<MyChats2IPhone11Pro />}
      />
      <Route
        path="/my-chats-3-iphone-11-pro"
        element={<MyChats3IPhone11Pro />}
      />
      <Route
        path="/my-chats-4-iphone-11-pro"
        element={<MyChats4IPhone11Pro />}
      />
      <Route
        path="/my-chats-5-iphone-11-pro"
        element={<MyChats5IPhone11Pro />}
      />
      <Route path="/myplan-excel" element={<MYPLANExcel />} />
      <Route path="/myplan-new" element={<MYPLANNew />} />
      <Route
        path="/my-plans-5-iphone-11-pro1"
        element={<MyPlans5IPhone11Pro />}
      />
      <Route
        path="/my-plans-5-iphone-11-pro2"
        element={<MyPlans5IPhone11Pro1 />}
      />
      <Route
        path="/my-plans-5-iphone-11-pro"
        element={<MyPlans5IPhone11Pro2 />}
      />
      <Route
        path="/my-plans-5-iphone-11-pro3"
        element={<MyPlans5IPhone11Pro3 />}
      />
      <Route
        path="/my-plans-6-iphone-11-pro"
        element={<MyPlans6IPhone11Pro />}
      />
      <Route
        path="/my-plans-6-iphone-11-pro1"
        element={<MyPlans6IPhone11Pro1 />}
      />
      <Route
        path="/my-plans-6-iphone-11-pro2"
        element={<MyPlans6IPhone11Pro2 />}
      />
      <Route
        path="/my-plans-4-iphone-11-pro"
        element={<MyPlans4IPhone11Pro />}
      />
      <Route
        path="/my-plans-stepsetting-inactive"
        element={<MyPlansStepsettingInactive />}
      />
      <Route
        path="/my-plans-stepsetting-inactive1"
        element={<MyPlansStepsettingInactive1 />}
      />
      <Route
        path="/explore-3-iphone-11-pro"
        element={<Explore3IPhone11Pro />}
      />
      <Route path="/old-phone" element={<OldPhone />} />
      <Route path="/iphone-11-pro-max-1" element={<IPhone11ProMax />} />
      <Route path="/new-personal-plan-1" element={<NewPersonalPlan />} />
      <Route
        path="/new-group-plan-1-iphone-11-pro"
        element={<NewGroupPlan1IPhone11Pr />}
      />
      <Route path="/badgekrok-sp" element={<BadgeKrokSp />} />
    </Routes>
  );
}
export default App;
