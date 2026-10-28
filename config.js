// 포켓 노트와 같은 Firebase 프로젝트를 씁니다. (이 값들은 공개돼도 괜찮은 값입니다)
const firebaseConfig = {
  apiKey: "AIzaSyCL1BzkgJPdegVtGKWV_FvmtztBApm5qfQ",
  authDomain: "pocket-note-8ee60.firebaseapp.com",
  projectId: "pocket-note-8ee60",
  storageBucket: "pocket-note-8ee60.firebasestorage.app",
  messagingSenderId: "51689278602",
  appId: "1:51689278602:web:7b9da9997dee5fde07f173"
};

window.POCKET_FIREBASE = (typeof firebaseConfig !== 'undefined') ? firebaseConfig : null;
