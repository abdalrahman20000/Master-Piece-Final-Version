import HomePage from './Pages/home'
import Footer from './Components/footer'
import Footer_l from './Components/footer_'
import Footer_m from './Components/footer_m'
import Main_header from './Components/main_header'
import SignInPage_l from './Pages/learner/log_in_l'
import SignUpPage_l from './Pages/learner/sign_up_l'
import SignInPage_m from './Pages/mentor/log_in_m'
import SignUpPage_m from './Pages/mentor/sign_up_m'
// import Sign_up_l from './Pages/learner/sign_up'
// import Log_in_l from './Pages/learner/log_in'
// import L_Home from './Pages/learner/learner_home'
import Sessions from './Pages/learner/session_'
import Session_call from './Pages/learner/session_call'
import Session_cal_mentor from "./Pages/mentor/session_call_m"
import Subscription from './Pages/learner/subscription'
import Settings_popups from './Pages/settings'
import Settings_m from './Pages/settings_m'
import Mentor_profile from './Pages/learner/mentor_profile'
import DCV from './Pages/learner/DCV'
import Library from './Pages/library'
import ContactForm from './Pages/contact'
import PaymentForm from './Pages/add_card'
import Alert from './Pages/alerts'
import ConfirmInformation from './Pages/Confirme_call'
import MentorDashboard from './Pages/mentor/m_home'
import L_Home from './Pages/learner/newHome'
// import L_Home from './Pages/learner/newHome'
import SubPage from './Pages/mentor/sub'
import CoffeeShopLayout from './Components/shop_front'
import CoffeeShopLayoutMentor from './Components/shop_front_mentor'
import SessionsAndMentorsPage from './Pages/learner/session_'

import RegisterSelection from './Pages/select_register'

import AdminDashboard from './admin/admin'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from 'react'
import './App.css'
import uicon from "../src/images/uicoon.png"
import logo from "../src/images/logo.png"


function App() {



  return (
    <div className='overflow-hidden'>
      <BrowserRouter>
        <Routes>

          {/* <Route path="/" element={
            <CoffeeShopLayout>
              <L_Home />
            </CoffeeShopLayout>
          } /> */}
          <Route path="/l" element={
            <CoffeeShopLayout>
              <L_Home />
            </CoffeeShopLayout>
          } />
          <Route path="/sessions" element={
            <CoffeeShopLayout>
              <Sessions />
            </CoffeeShopLayout>
          } />
          <Route path="/confirm-information" element={
            <CoffeeShopLayout>
              <ConfirmInformation />
            </CoffeeShopLayout>
          } />
          {/* <Route path="/call-sesstion" element={
            <CoffeeShopLayout>
              <Session_call />
            </CoffeeShopLayout>
          } /> */}
          <Route path="/subscription" element={
            <CoffeeShopLayout>
              <Subscription />
            </CoffeeShopLayout>
          } />
          <Route path="/contact" element={
            <CoffeeShopLayout>
              <ContactForm />
            </CoffeeShopLayout>
          } />
          <Route path="/dcv" element={
            <CoffeeShopLayout>
              <DCV />
            </CoffeeShopLayout>
          } />
          <Route path="/mentor-profile/:id" element={
            <CoffeeShopLayout>
              <Mentor_profile />
            </CoffeeShopLayout>
          } />
          <Route path="/settings" element={
            <CoffeeShopLayout>
              <Settings_popups />
            </CoffeeShopLayout>
          } />



          {/* -----------Mentor-------------- */}

          <Route path="/m" element={
            <CoffeeShopLayoutMentor>
              <MentorDashboard />
            </CoffeeShopLayoutMentor>
          } />
          <Route path="/sessions" element={
            <CoffeeShopLayout>
              <Sessions />
            </CoffeeShopLayout>
          } />
          <Route path="/confirm-information" element={
            <CoffeeShopLayoutMentor>
              <ConfirmInformation />
            </CoffeeShopLayoutMentor>
          } />
          <Route path="/contact-m" element={
            <CoffeeShopLayoutMentor>
              <ContactForm />
            </CoffeeShopLayoutMentor>
          } />
          <Route path="/settings-m" element={
            <CoffeeShopLayoutMentor>
              <Settings_m />
            </CoffeeShopLayoutMentor>
          } />



          <Route path="/s-register" element={<RegisterSelection></RegisterSelection>}></Route>


          {/* <Route path="/" element={<SubPage></SubPage>}></Route> */}
          {/* <Route path="/mp-react/" element={<HomePage></HomePage>}></Route> */}
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/l" element={<L_Home></L_Home>}></Route>
          <Route path="/sessions" element={<Sessions></Sessions>}></Route>
          <Route path="/call-sesstion" element={<Session_call></Session_call>}></Route>
          <Route path="/call-sesstion-m" element={<Session_cal_mentor></Session_cal_mentor>}></Route>
          <Route path="/subscription" element={<Subscription></Subscription>}></Route>
          <Route path="/mentor-profile" element={<Mentor_profile></Mentor_profile>}></Route>
          <Route path="/dcv" element={<DCV></DCV>}></Route>
          <Route path="/library" element={<Library></Library>}></Route>
          <Route path="/contact" element={<ContactForm></ContactForm>}></Route>
          <Route path="/payment" element={<PaymentForm></PaymentForm>}></Route>
          <Route path="/settings" element={<Settings_popups></Settings_popups>}></Route>
          <Route path="/confirm-information" element={<ConfirmInformation></ConfirmInformation>}></Route>

          <Route path="/sign-up-l" element={<SignUpPage_l></SignUpPage_l>}></Route>
          <Route path="/log-in-l" element={<SignInPage_l></SignInPage_l>}></Route>


          {/* -------------------------------mentor------------------------------ */}
          <Route path="/m" element={<MentorDashboard></MentorDashboard>}></Route>
          <Route path="/mentor-subscrption" element={<SubPage></SubPage>}></Route>
          <Route path="/settings-m" element={<Settings_m></Settings_m>}></Route>

          <Route path="/sign-up-m" element={<SignUpPage_m></SignUpPage_m>}></Route>
          <Route path="/log-in-m" element={<SignInPage_m></SignInPage_m>}></Route>




          <Route path="/admin" element={<AdminDashboard></AdminDashboard>}></Route>

        </Routes>
      </BrowserRouter>




    </div>
  )
}

export default App
