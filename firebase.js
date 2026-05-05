import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "your api key here",
  authDomain: "eduswap-494fe.firebaseapp.com",
  projectId: "eduswap-494fe",
  storageBucket: "eduswap-494fe.firebasestorage.app",
  messagingSenderId: "485491741775",
  appId: "1:485491741775:web:99686afbda0b44e1f9063a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// export auth so other files can use it
export { auth };
