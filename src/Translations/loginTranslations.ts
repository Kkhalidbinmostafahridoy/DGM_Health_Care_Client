/* ============================================================
   DGM Healthcare — Login Form Translations (English / বাংলা)
   ============================================================ */

export type Language = "en" | "bn";

/* ---------------- English ---------------- */
const en = {
  // Left panel
  brand: "DGM Healthcare",
  brandTagline: "Trusted Care Since 2009",
  badge: "One Portal. Complete Care.",
  headline1: "Caring for Life,",
  headline2: "Every Single Moment.",
  features: [
    "Access your medical records anytime, anywhere",
    "Book & manage appointments in one tap",
    "HIPAA-compliant, end-to-end encrypted platform",
  ],
  stats: [
    { value: "50K+", label: "Happy Patients" },
    { value: "200+", label: "Expert Doctors" },
    { value: "24/7", label: "Emergency Care" },
  ],
  emergencyBtn: "24/7 Emergency: +880 1756-959451",

  // Right panel — heading
  welcome: "Welcome Back 👋",
  subtitle: {
    patient: {
      before: "Sign in to securely access your ",
      highlight: "health records",
      after: ".",
    },
    provider: {
      before: "Sign in to securely access your ",
      highlight: "clinical dashboard",
      after: ".",
    },
  },

  // Role cards
  roles: {
    patient: { title: "Patient", desc: "Records, reports & appointments" },
    provider: { title: "Provider / Staff", desc: "Clinical & staff dashboard" },
  },

  // Identifier field
  identifierLabel: {
    patient: "Email or Medical Record # (MRN)",
    provider: "Staff ID or Clinical Email",
  },
  identifierPlaceholder: {
    patient: "e.g., MRN-88391 or you@email.com",
    provider: "e.g., DGM-40912",
  },

  // Password field
  passwordLabel: "Password",
  resetPassword: "Reset Password?",
  passwordPlaceholder: "Enter your password",
  capsLock: "Caps Lock is ON",

  // Options
  rememberDevice: "Remember this device",
  sslSecured: "SSL Secured",

  // Button states
  signIn: "Sign In Securely",
  verifying: "Verifying Credentials…",
  loginSuccess: "Login Successful",

  // Messages
  errorPassword: "Password must be at least 6 characters long.",
  successMsg: {
    patient: "Verified successfully! Redirecting to your dashboard…",
    provider: "Verified successfully! Redirecting to your staff console…",
  },

  // Register CTA
  newHere: "New to DGM Healthcare?",
  createAccount: "Create a Patient Account →",
  freeReg: "Free registration · Takes less than 2 minutes",

  // Footer
  hipaa: "HIPAA Compliant",
  needHelp: "Need Help?",

  // Language toggle
  langLabel: "Language",
};

export type TranslationDict = typeof en;

/* ---------------- বাংলা (Bangla) ---------------- */
const bn: TranslationDict = {
  brand: "ডিজিএম হেলথকেয়ার",
  brandTagline: "২০০৯ সাল থেকে বিশ্বস্ত সেবা",
  badge: "একটি পোর্টালেই সম্পূর্ণ সেবা।",
  headline1: "জীবনের সেবায়,",
  headline2: "প্রতিটি মুহূর্তে।",
  features: [
    "যেকোনো সময়, যেকোনো জায়গা থেকে মেডিকেল রেকর্ড দেখুন",
    "এক ট্যাপেই অ্যাপয়েন্টমেন্ট বুক ও ম্যানেজ করুন",
    "HIPAA-সম্মত ও সম্পূর্ণ এনক্রিপ্টেড নিরাপদ প্ল্যাটফর্ম",
  ],
  stats: [
    { value: "৫০ হাজার+", label: "সন্তুষ্ট রোগী" },
    { value: "২০০+", label: "বিশেষজ্ঞ ডাক্তার" },
    { value: "২৪/৭", label: "ইমার্জেন্সি সেবা" },
  ],
  emergencyBtn: "২৪/৭ ইমার্জেন্সি: +৮৮০ ১৭৫৬-৯৫৯৪৫১",

  welcome: "স্বাগতম 👋",
  subtitle: {
    patient: {
      before: "আপনার ",
      highlight: "স্বাস্থ্য রেকর্ডে",
      after: " নিরাপদে প্রবেশ করুন।",
    },
    provider: {
      before: "আপনার ",
      highlight: "ক্লিনিক্যাল ড্যাশবোর্ডে",
      after: " নিরাপদে প্রবেশ করুন।",
    },
  },

  roles: {
    patient: { title: "রোগী", desc: "রেকর্ড, রিপোর্ট ও অ্যাপয়েন্টমেন্ট" },
    provider: {
      title: "চিকিৎসক / স্টাফ",
      desc: "ক্লিনিক্যাল ও স্টাফ ড্যাশবোর্ড",
    },
  },

  identifierLabel: {
    patient: "ইমেইল বা মেডিকেল রেকর্ড নম্বর (MRN)",
    provider: "স্টাফ আইডি বা ক্লিনিক্যাল ইমেইল",
  },
  identifierPlaceholder: {
    patient: "যেমন: MRN-88391 বা you@email.com",
    provider: "যেমন: DGM-40912",
  },

  passwordLabel: "পাসওয়ার্ড",
  resetPassword: "পাসওয়ার্ড রিসেট করুন?",
  passwordPlaceholder: "আপনার পাসওয়ার্ড লিখুন",
  capsLock: "ক্যাপস লক চালু আছে",

  rememberDevice: "এই ডিভাইসটি মনে রাখুন",
  sslSecured: "SSL দ্বারা সুরক্ষিত",

  signIn: "নিরাপদে সাইন ইন করুন",
  verifying: "তথ্য যাচাই করা হচ্ছে…",
  loginSuccess: "লগইন সফল!",

  errorPassword: "পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে।",
  successMsg: {
    patient: "যাচাই সফল! ড্যাশবোর্ডে পাঠানো হচ্ছে…",
    provider: "যাচাই সফল! স্টাফ কনসোলে পাঠানো হচ্ছে…",
  },

  newHere: "ডিজিএম হেলথকেয়ারে নতুন?",
  createAccount: "রোগীর অ্যাকাউন্ট তৈরি করুন →",
  freeReg: "বিনামূল্যে নিবন্ধন · ২ মিনিটেরও কম সময়",

  hipaa: "HIPAA সম্মত",
  needHelp: "সাহায্য প্রয়োজন?",

  langLabel: "ভাষা",
};

/* ---------------- Export ---------------- */
export const loginTranslations: Record<Language, TranslationDict> = { en, bn };
