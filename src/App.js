import { useMemo, lazy, Suspense, useEffect } from "react";
import "./App.css";
import { SidebarRootItem, Sidebar } from "./components/Sidebar/Sidebar";
import { SVGIcon } from "./shared/component/SvgIcon";
import { Link, Switch, Route, useHistory, useLocation } from "react-router-dom";
// import { Redirect, Route,useHistory } from "react-router";
import { useToasts } from "react-toast-notifications";
import { Loading } from "./shared/component/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
const DetectHand = lazy(() =>
  import("./components/pages/DetectHand/DetectHand")
);
const ListHandCase = lazy(() =>
  import("./components/pages/ListHandCase/ListHandCase")
);
// import ListHandCase from "./components/pages/ListHandCase/ListHandCase";

// import  DetectHand from "./components/pages/DetectHand/DetectHand";

// import {useHistory}
function App() {
  const location = useLocation();
  const pathname = useMemo(() => location.pathname, [location]);
  const { addToast } = useToasts();
  const toastInfomation = useSelector((state) => state.toast.toastInfo);

  useEffect(() => {
    if (toastInfomation) {
      console.log(toastInfomation);
      addToast(toastInfomation.content || "Thông báo không xác định", {
        appearance: toastInfomation.type || "warning",
        autoDismiss: true,
        onDismiss: (id) => {
          console.log(id);
        },
      });
    }
  }, [toastInfomation]);

  return (
    <Suspense fallback={<Loading />}>
      <div className="Container">
        <Sidebar header={<h1 className="sidebarHeader">Hand detect</h1>}>
          <SidebarRootItem
            label={
              <div className="sidebarLabelContent">
                <SVGIcon
                  name="hand"
                  width={18}
                  height={18}
                  style={{ fill: "#fff", marginRight: 20 }}
                />
                <div style={{ marginTop: 5 }}>Chuẩn đoán</div>
              </div>
            }
          >
            <Link
              to="/detectHand"
              className={`${pathname === "/detectHand" ? "active" : ""}`}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              Detect hand
            </Link>
            {/* <Link
            to="/detectHand1"
            className={`${pathname === "/detectHand1" ? "active" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            Detect hand1
          </Link> */}
          </SidebarRootItem>

          <SidebarRootItem
            label={
              <div className="sidebarLabelContent">
                <SVGIcon
                  name="case"
                  width={18}
                  height={18}
                  style={{ fill: "#fff", marginRight: 20 }}
                />
                <Link
                  style={{ marginTop: 5 }}
                  to="/listCase"
                  className={`${pathname === "/listCase" ? "active" : ""}`}
                >
                  Danh sách case
                </Link>
              </div>
            }
          >
            {/* <div className="aa">Hello world</div>
          <div className="aa1">Hello world1</div> */}
          </SidebarRootItem>
        </Sidebar>
        <div className="mainContentContainer">
          <Switch>
            <Route path="/detectHand" component={DetectHand} exact></Route>
            <Route path="/listCase" component={ListHandCase} exact></Route>

            <Route path="/" component={DetectHand} exact />
          </Switch>
        </div>
      </div>
    </Suspense>
  );
}

export default App;
