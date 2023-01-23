import Navbar from "./components/Navbar";
import CreateForm from "./components/LoginScreen/CreateForm";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import ChooseInvoice from "./components/Invoices/ChoseInvoice/ChooseInvoice";
import CreateInvoice from "./components/Invoices/CreateInvoice/CreateInvoice";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import "./App.css";
import {useEffect, useState} from "react";
import SeeInvoice from "./components/Invoices/ChoseInvoice/SeeInvoice";
import {collection, getDocs} from "firebase/firestore";
import {db} from "./firebase-config";
import ProtectedRoute from "./ProtectedRoutes";
import {auth} from "./firebase-config";
import {onAuthStateChanged} from "firebase/auth"
import LoginForm from "./components/LoginScreen/LoginForm";
import WelcomeScreen from "./components/LoginScreen/WelcomeScreen";
import PdfInvoice from "./components/Invoices/PdfInvoice/PdfInvoice";
import {IntlProvider} from 'react-intl'
import {translations} from "./translation/IntlContext";

const App = () => {
    const [user, setUser] = useState({})
    const [users, setUsers] = useState([])
    const usersCollectionRef = collection(db, "users")

    useEffect(() => {
        const app = document.getElementById("root");
        app.style.background = localStorage.getItem('bg');
        app.style.color = localStorage.getItem('color');
        window.localStorage.getItem("bg");

        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef)
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        getUsers();
    }, []);

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })

    return (
      <BrowserRouter>
          <IntlProvider messages={translations} locale="en">
          <Navbar user={user}/>
          <Routes>
              <Route path={"/"} element={<WelcomeScreen/>} />
              {/*<Route path={"/create"} element={<CreateForm />} />*/}
              <Route path={"/login"} element={<LoginForm/>} />

            <Route path={"/home"} element={
                <ProtectedRoute user={user}>
                    <HomeScreen users={users}/>
                </ProtectedRoute>
            }
            />

            <Route path={"/choose-invoice"} element={
                <ProtectedRoute user={user}>
                    <ChooseInvoice users={users} setUsers={setUsers} />
                </ProtectedRoute>
            }
            />

            <Route path={"/create-invoice"} element={
                <ProtectedRoute user={user}>
                    <CreateInvoice usersCollectionRef={usersCollectionRef}/>
                </ProtectedRoute>
            }
            />

              <Route path={"/saved-pdf-invoices"} element={
                  <ProtectedRoute user={user}>
                      <PdfInvoice />
                  </ProtectedRoute>
              }
              />

            <Route path={"/users/:id"} element={
                <ProtectedRoute user={user}>
                    <SeeInvoice users={users} />
                </ProtectedRoute>
            }
            />
            <Route path={"*"} element={<ErrorPage />} />
        </Routes>
          </IntlProvider>
      </BrowserRouter>
  );
}

export default App;
