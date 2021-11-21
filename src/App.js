import './App.css';
import Header from './pages/Shared/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Services from './pages/Home/Services/Services';
import Doctors from './pages/Home/Doctors/Doctors';
import Appointments from './pages/Home/Appointments/Appointments';
import Footer from './pages/Shared/Footer/Footer';
import NotFound from './pages/Shared/NotFound/NotFound';
import ServicesDetails from './pages/Home/ServicesDetails/ServicesDetails';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './pages/Home/PrivateRoute/PrivateRoute';
import DoctorDetails from './pages/Home/DoctorDetails/DoctorDetails';
import AppointmentSuccessful from './pages/Home/Home/AppointmentSuccessful/AppointmentSuccessful';
import FinantialIssue from './pages/Home/FinantialIssue/FinantialIssue';
import AcceptFinantialSupport from './pages/Home/AcceptFinantialSupport/AcceptFinantialSupport';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='/services'>
              <Services></Services>
            </Route>
            <Route path='/specialists'>
              <Doctors></Doctors>
            </Route>
            <Route path='/appointments'>
              <Appointments></Appointments>
            </Route>
            <Route path='/finantialissue'>
              <FinantialIssue></FinantialIssue>
            </Route>
            <Route path='/doctordetails/:doctorid'>
              <DoctorDetails></DoctorDetails>
            </Route>
            <PrivateRoute path='/appointmentsccessfull'>
              <AppointmentSuccessful></AppointmentSuccessful>
            </PrivateRoute>
            <PrivateRoute path='/acceptfinantialsupport'>
              <AcceptFinantialSupport></AcceptFinantialSupport>
            </PrivateRoute>
            <PrivateRoute path='/details/:detailsid'>
              <ServicesDetails></ServicesDetails>
            </PrivateRoute>
            <Route exact path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
