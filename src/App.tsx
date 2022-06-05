import Account from 'pages/Account';
import Greeting from 'pages/Greeting';
import SavedVideos from 'pages/SavedVideos';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import AuthenticationProvider from 'providers/AuthenticationProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <AuthenticationProvider>
        <Routes>
          <Route path='/register' element={<SignUp />} />
          <Route path='/login' element={<SignIn />} />
          <Route path='/saved-videos' element={<SavedVideos />} />
          <Route path='/account' element={<Account />} />
          <Route path='/greeting' element={<Greeting />} />
        </Routes>
      </AuthenticationProvider>
    </BrowserRouter>
  );
}

export default App;
