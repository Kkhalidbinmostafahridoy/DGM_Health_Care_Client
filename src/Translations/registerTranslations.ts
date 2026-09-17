// import type { Language } from "@/translations/loginTranslations";

// export type RegRole = "patient" | "doctor";

// export interface RegisterTranslations {
//   brand: string;
//   brandTagline: string;
//   heroBadge: string;
//   heroTitle1: string;
//   heroTitle2: string;
//   benefits: string[];
//   stats: { value: string; label: string }[];
//   title: string;
//   subtitle: { before: string; highlight: string; after: string };
//   haveAccount: string;
//   signIn: string;
//   chooseRole: string;
//   roles: Record<RegRole, { title: string; desc: string }>;
//   steps: Record<RegRole, [string, string, string]>;
//   labels: {
//     fullName: string;
//     fullNamePh: string;
//     email: string;
//     emailPh: string;
//     phone: string;
//     phonePh: string;
//     dob: string;
//     gender: string;
//     bloodGroup: string;
//     district: string;
//     districtPh: string;
//     password: string;
//     passwordPh: string;
//     confirmPassword: string;
//     confirmPasswordPh: string;
//   };
//   genders: [string, string, string];
//   districts: string[];
//   doctor: {
//     bmdc: string;
//     bmdcPh: string;
//     specialization: string;
//     specializationPh: string;
//     specializations: string[];
//     hospital: string;
//     hospitalPh: string;
//     experience: string;
//     experiencePh: string;
//     fee: string;
//     feePh: string;
//     years: string;
//     feeUnit: string;
//     bmdcNote: string;
//   };
//   bloodNote: string;
//   passwordHint: string;
//   matchOk: string;
//   matchBad: string;
//   suggest: string;
//   ageWord: string;
//   yearsWord: string;
//   terms: {
//     before: string;
//     tos: string;
//     and: string;
//     privacy: string;
//     after: string;
//   };
//   strength: { labels: string[]; colors: string[]; text: string[] };
//   errors: {
//     step1: string;
//     step2: string;
//     step2Doctor: string;
//     passwordLen: string;
//     match: string;
//     terms: string;
//   };
//   continueBtn: string;
//   back: string;
//   create: string;
//   creating: string;
//   protectedNote: string;
//   success: {
//     title: string;
//     msg: string;
//     resend: string;
//     resent: string;
//     goLogin: string;
//     doctorTitle: string;
//     doctorMsg: string;
//   };
//   trustBio: string;
//   needHelp: string;
//   allSystems: string;
//   langLabel?: string;
// }

// export const registerTranslations: Record<Language, RegisterTranslations> = {
//   /* ==================== 🇬🇧 ENGLISH ==================== */
//   en: {
//     brand: "DGM Healthcare",
//     brandTagline: "Digital Health Platform",
//     heroBadge: "Free Account Registration",
//     heroTitle1: "Your health records,",
//     heroTitle2: "one secure account.",
//     benefits: [
//       "Book appointments with 500+ verified doctors",
//       "Access prescriptions & lab reports anytime",
//       "Automatic medicine & visit reminders",
//       "HIPAA-grade encryption for your data",
//     ],
//     stats: [
//       { value: "50K+", label: "Patients registered" },
//       { value: "500+", label: "Verified doctors" },
//       { value: "24/7", label: "Support" },
//     ],
//     title: "Create your account",
//     subtitle: {
//       before: "Join ",
//       highlight: "50,000+ patients & 500+ doctors",
//       after: " on DGM Healthcare.",
//     },
//     haveAccount: "Already registered?",
//     signIn: "Sign in",
//     chooseRole: "Register as",
//     roles: {
//       patient: { title: "Patient", desc: "Book doctors & manage your health" },
//       doctor: { title: "Doctor", desc: "Join 500+ verified providers on DGM" },
//     },
//     steps: {
//       patient: ["Personal Info", "Health Profile", "Account Security"],
//       doctor: ["Personal Info", "Professional Info", "Account Security"],
//     },
//     labels: {
//       fullName: "Full name",
//       fullNamePh: "Enter your full name",
//       email: "Email address",
//       emailPh: "you@example.com",
//       phone: "Mobile number",
//       phonePh: "01XXXXXXXXX",
//       dob: "Date of birth",
//       gender: "Gender",
//       bloodGroup: "Blood group",
//       district: "District",
//       districtPh: "Select your district",
//       password: "Password",
//       passwordPh: "At least 6 characters",
//       confirmPassword: "Confirm password",
//       confirmPasswordPh: "Re-enter password",
//     },
//     genders: ["Male", "Female", "Other"],
//     districts: [
//       "Dhaka",
//       "Chattogram",
//       "Khulna",
//       "Rajshahi",
//       "Sylhet",
//       "Barishal",
//       "Rangpur",
//       "Mymensingh",
//       "Cumilla",
//       "Gazipur",
//     ],
//     doctor: {
//       bmdc: "BMDC Registration No.",
//       bmdcPh: "e.g. A-12345",
//       specialization: "Specialization",
//       specializationPh: "Select specialization",
//       specializations: [
//         "Cardiology",
//         "Medicine",
//         "Dermatology",
//         "Orthopedics",
//         "Pediatrics",
//         "Gynecology",
//         "ENT",
//         "Neurology",
//         "Oncology",
//         "Psychiatry",
//       ],
//       hospital: "Hospital / Clinic",
//       hospitalPh: "e.g. DGM Tower, Gulshan-2",
//       experience: "Experience",
//       experiencePh: "Years of practice",
//       fee: "Consultation Fee",
//       feePh: "e.g. 800",
//       years: "yrs",
//       feeUnit: "৳",
//       bmdcNote:
//         "Your BMDC number is verified by our admin team before your profile goes live — usually within 24 hours. Patients will see a “Verified” badge after approval.",
//     },
//     bloodNote:
//       "We use this for emergency blood matching & smarter doctor recommendations.",
//     passwordHint:
//       "Tip: 8+ characters with numbers & symbols = stronger account.",
//     matchOk: "Passwords match",
//     matchBad: "Passwords don't match",
//     suggest: "Suggest",
//     ageWord: "Age",
//     yearsWord: "yrs",
//     terms: {
//       before: "I agree to the ",
//       tos: "Terms of Service",
//       and: " and the ",
//       privacy: "Privacy Policy",
//       after: ".",
//     },
//     strength: {
//       labels: ["Weak", "Fair", "Good", "Strong"],
//       colors: ["bg-red-400", "bg-orange-400", "bg-amber-400", "bg-emerald-500"],
//       text: [
//         "text-red-500",
//         "text-orange-500",
//         "text-amber-500",
//         "text-emerald-600",
//       ],
//     },
//     errors: {
//       step1: "Please fill all personal fields correctly.",
//       step2: "Please select your blood group and district.",
//       step2Doctor: "Please complete all professional fields correctly.",
//       passwordLen: "Password must be at least 6 characters.",
//       match: "Passwords do not match.",
//       terms: "Please accept the Terms to continue.",
//     },
//     continueBtn: "Continue",
//     back: "Back",
//     create: "Create account",
//     creating: "Creating...",
//     protectedNote: "Protected session · Press Enter",
//     success: {
//       title: "Account created! 🎉",
//       msg: "We sent a verification link to",
//       resend: "Resend email",
//       resent: "Verification email re-sent ✓",
//       goLogin: "Go to Sign In",
//       doctorTitle: "Application received! 🎉",
//       doctorMsg:
//         "Your doctor account is now under review by our admin team. Once your BMDC number is verified (within 24 hours), you'll receive a welcome email with dashboard access.",
//     },
//     trustBio: "Biometric ready",
//     needHelp: "Need help?",
//     allSystems: "All systems operational",
//     langLabel: "Toggle Language",
//   },

//   /* ==================== 🇧🇩 বাংলা ==================== */
//   bn: {
//     brand: "ডিজিএম হেলথকেয়ার",
//     brandTagline: "ডিজিটাল হেলথ প্ল্যাটফর্ম",
//     heroBadge: "ফ্রি অ্যাকাউন্ট রেজিস্ট্রেশন",
//     heroTitle1: "আপনার স্বাস্থ্য রেকর্ড,",
//     heroTitle2: "একটি নিরাপদ অ্যাকাউন্টে।",
//     benefits: [
//       "৫০০+ ভেরিফায়েড ডাক্তারের অ্যাপয়েন্টমেন্ট বুক করুন",
//       "প্রেসক্রিপশন ও ল্যাব রিপোর্ট যেকোনো সময় দেখুন",
//       "ওষুধ ও ভিজিট রিমাইন্ডার অটোমেটিক",
//       "আপনার ডেটা HIPAA-গ্রেড এনক্রিপশনে সুরক্ষিত",
//     ],
//     stats: [
//       { value: "৫০K+", label: "নিবন্ধিত রোগী" },
//       { value: "৫০০+", label: "ভেরিফায়েড ডাক্তার" },
//       { value: "২৪/৭", label: "সাপোর্ট" },
//     ],
//     title: "আপনার অ্যাকাউন্ট তৈরি করুন",
//     subtitle: {
//       before: "",
//       highlight: "৫০,০০০+ রোগী ও ৫০০+ ডাক্তারের",
//       after: " সাথে যোগ দিন — ডিজিএম হেলথকেয়ারে।",
//     },
//     haveAccount: "ইতিমধ্যে অ্যাকাউন্ট আছে?",
//     signIn: "সাইন ইন",
//     chooseRole: "হিসেবে রেজিস্টার করুন",
//     roles: {
//       patient: {
//         title: "রোগী",
//         desc: "ডাক্তারের অ্যাপয়েন্টমেন্ট নিন ও স্বাস্থ্য পরিচালনা করুন",
//       },
//       doctor: {
//         title: "ডাক্তার",
//         desc: "ডিজিএম-এর ৫০০+ ভেরিফায়েড প্রোভাইডারে যোগ দিন",
//       },
//     },
//     steps: {
//       patient: ["ব্যক্তিগত তথ্য", "স্বাস্থ্য প্রোফাইল", "অ্যাকাউন্ট নিরাপত্তা"],
//       doctor: ["ব্যক্তিগত তথ্য", "পেশাগত তথ্য", "অ্যাকাউন্ট নিরাপত্তা"],
//     },
//     labels: {
//       fullName: "পুরো নাম",
//       fullNamePh: "আপনার পুরো নাম লিখুন",
//       email: "ইমেইল",
//       emailPh: "you@example.com",
//       phone: "মোবাইল নম্বর",
//       phonePh: "01XXXXXXXXX",
//       dob: "জন্ম তারিখ",
//       gender: "লিঙ্গ",
//       bloodGroup: "রক্তের গ্রুপ",
//       district: "জেলা",
//       districtPh: "জেলা নির্বাচন করুন",
//       password: "পাসওয়ার্ড",
//       passwordPh: "কমপক্ষে ৬ অক্ষর",
//       confirmPassword: "পাসওয়ার্ড নিশ্চিত",
//       confirmPasswordPh: "আবার পাসওয়ার্ড লিখুন",
//     },
//     genders: ["পুরুষ", "মহিলা", "অন্যান্য"],
//     districts: [
//       "ঢাকা",
//       "চট্টগ্রাম",
//       "খুলনা",
//       "রাজশাহী",
//       "সিলেট",
//       "বরিশাল",
//       "রংপুর",
//       "ময়মনসিংহ",
//       "কুমিল্লা",
//       "গাজীপুর",
//     ],
//     doctor: {
//       bmdc: "বিএমডিসি রেজিস্ট্রেশন নং",
//       bmdcPh: "যেমন A-12345",
//       specialization: "বিশেষত্ব",
//       specializationPh: "বিশেষত্ব নির্বাচন করুন",
//       specializations: [
//         "কার্ডিওলজি",
//         "মেডিসিন",
//         "ডার্মাটোলজি",
//         "অর্থোপেডিকস",
//         "পেডিয়াট্রিকস",
//         "গাইনোকোলজি",
//         "ইএনটি",
//         "নিউরোলজি",
//         "অনকোলজি",
//         "সাইকিয়াট্রি",
//       ],
//       hospital: "হাসপাতাল / ক্লিনিক",
//       hospitalPh: "যেমন ডিজিএম টাওয়ার, গুলশান-২",
//       experience: "অভিজ্ঞতা",
//       experiencePh: "কাজের বছর",
//       fee: "পরামর্শ ফি",
//       feePh: "যেমন ৮০০",
//       years: "বছর",
//       feeUnit: "৳",
//       bmdcNote:
//         "আপনার প্রোফাইল লাইভ হওয়ার আগে আমাদের অ্যাডমিন টিম বিএমডিসি নম্বর যাচাই করবে — সাধারণত ২৪ ঘণ্টার মধ্যে। অনুমোদনের পর রোগীরা “ভেরিফায়েড” ব্যাজ দেখতে পাবে।",
//     },
//     bloodNote:
//       "ইমার্জেন্সি রক্ত ম্যাচিং ও উন্নত ডাক্তার সুপারিশের জন্য আমরা এটি ব্যবহার করি।",
//     passwordHint:
//       "টিপস: ৮+ অক্ষর, সংখ্যা ও প্রতীক ব্যবহার করলে আরও শক্তিশালী হয়।",
//     matchOk: "পাসওয়ার্ড মিলেছে",
//     matchBad: "পাসওয়ার্ড মিলছে না",
//     suggest: "সাজেস্ট",
//     ageWord: "বয়স",
//     yearsWord: "বছর",
//     terms: {
//       before: "আমি ",
//       tos: "ব্যবহারের শর্তাবলী",
//       and: " এবং ",
//       privacy: "গোপনীয়তা নীতিতে",
//       after: " সম্মত।",
//     },
//     strength: {
//       labels: ["দুর্বল", "মোটামুটি", "ভালো", "শক্তিশালী"],
//       colors: ["bg-red-400", "bg-orange-400", "bg-amber-400", "bg-emerald-500"],
//       text: [
//         "text-red-500",
//         "text-orange-500",
//         "text-amber-500",
//         "text-emerald-600",
//       ],
//     },
//     errors: {
//       step1: "অনুগ্রহ করে ব্যক্তিগত তথ্য সঠিকভাবে পূরণ করুন।",
//       step2: "রক্তের গ্রুপ ও জেলা নির্বাচন করুন।",
//       step2Doctor: "অনুগ্রহ করে সব পেশাগত তথ্য সঠিকভাবে পূরণ করুন।",
//       passwordLen: "পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে।",
//       match: "পাসওয়ার্ড মিলছে না।",
//       terms: "চালিয়ে যেতে শর্তাবলী গ্রহণ করুন।",
//     },
//     continueBtn: "এগিয়ে যান",
//     back: "পিছনে",
//     create: "অ্যাকাউন্ট তৈরি করুন",
//     creating: "তৈরি হচ্ছে...",
//     protectedNote: "সুরক্ষিত সেশন · Enter চাপুন",
//     success: {
//       title: "অ্যাকাউন্ট তৈরি হয়েছে! 🎉",
//       msg: "আমরা ভেরিফিকেশন লিংক পাঠিয়েছি",
//       resend: "আবার পাঠান",
//       resent: "ভেরিফিকেশন ইমেইল আবার পাঠানো হয়েছে ✓",
//       goLogin: "সাইন ইনে যান",
//       doctorTitle: "আবেদন গৃহীত হয়েছে! 🎉",
//       doctorMsg:
//         "আপনার ডাক্তার অ্যাকাউন্ট এখন অ্যাডমিন টিমের রিভিউয়ের অপেক্ষায়। বিএমডিসি নম্বর যাচাই হওয়ার পর (২৪ ঘণ্টার মধ্যে) ড্যাশবোর্ড অ্যাক্সেস সহ একটি স্বাগত ইমেইল পাবেন।",
//     },
//     trustBio: "বায়োমেট্রিক রেডি",
//     needHelp: "সাহায্য দরকার?",
//     allSystems: "সব সিস্টেম স্বাভাবিক",
//     langLabel: "ভাষা পরিবর্তন",
//   },
// };

export type Language = "en" | "bn";

export interface TextHighlight {
  before?: string;
  highlight?: string;
  after?: string;
}

export interface TranslationSchema {
  brand: string;
  brandTagline: string;
  badge: string;
  headline1: string | TextHighlight;
  headline2: string | TextHighlight;
  welcome: string | TextHighlight;
  subtitle: string;
  steps: { id: number; title: string }[];
  fullNameLabel: string;
  fullNamePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  dobLabel: string;
  genderLabel: string;
  passwordLabel: string;
  confirmPasswordLabel: string;
  passwordPlaceholder: string;
  agreeTerms: string;
  submitBtn: string;
  registering: string;
  successMsg: string;
  alreadyHaveAccount: string;
  signIn: string;
  errorPasswordMatch: string;
  errorPasswordLength: string;
  errorTerms: string;
  capsLock: string;
  sslSecured: string;
  hipaa: string;
  needHelp: string;
  emergencyBtn: string;
  stats: { value: string; label: string }[];
  features: string[];
}

export const registerTranslations: Record<Language, RegisterTranslations> = {
  /* ==================== 🇬🇧 ENGLISH ==================== */
  en: {
    brand: "DGM Healthcare",
    brandTagline: "Digital Health Platform",
    heroBadge: "Free Account Registration",
    heroTitle1: "Your health records,",
    heroTitle2: "one secure account.",
    benefits: [
      "Book appointments with 500+ verified doctors",
      "Access prescriptions & lab reports anytime",
      "Automatic medicine & visit reminders",
      "HIPAA-grade encryption for your data",
    ],
    stats: [
      { value: "50K+", label: "Patients registered" },
      { value: "500+", label: "Verified doctors" },
      { value: "24/7", label: "Support" },
    ],
    title: "Create your account",
    subtitle: {
      before: "Join ",
      highlight: "50,000+ patients & 500+ doctors",
      after: " on DGM Healthcare.",
    },
    haveAccount: "Already registered?",
    signIn: "Sign in",
    chooseRole: "Register as",
    roles: {
      patient: { title: "Patient", desc: "Book doctors & manage your health" },
      doctor: { title: "Doctor", desc: "Join 500+ verified providers on DGM" },
    },
    steps: {
      patient: ["Personal Info", "Health Profile", "Account Security"],
      doctor: ["Personal Info", "Professional Info", "Account Security"],
    },
    labels: {
      fullName: "Full name",
      fullNamePh: "Enter your full name",
      email: "Email address",
      emailPh: "you@example.com",
      phone: "Mobile number",
      phonePh: "01XXXXXXXXX",
      dob: "Date of birth",
      gender: "Gender",
      bloodGroup: "Blood group",
      district: "District",
      districtPh: "Select your district",
      password: "Password",
      passwordPh: "At least 6 characters",
      confirmPassword: "Confirm password",
      confirmPasswordPh: "Re-enter password",
    },
    genders: ["Male", "Female", "Other"],
    districts: [
      "Dhaka",
      "Chattogram",
      "Khulna",
      "Rajshahi",
      "Sylhet",
      "Barishal",
      "Rangpur",
      "Mymensingh",
      "Cumilla",
      "Gazipur",
    ],
    doctor: {
      bmdc: "BMDC Registration No.",
      bmdcPh: "e.g. A-12345",
      specialization: "Specialization",
      specializationPh: "Select specialization",
      specializations: [
        "Cardiology",
        "Medicine",
        "Dermatology",
        "Orthopedics",
        "Pediatrics",
        "Gynecology",
        "ENT",
        "Neurology",
        "Oncology",
        "Psychiatry",
      ],
      hospital: "Hospital / Clinic",
      hospitalPh: "e.g. DGM Tower, Gulshan-2",
      experience: "Experience",
      experiencePh: "Years of practice",
      fee: "Consultation Fee",
      feePh: "e.g. 800",
      years: "yrs",
      feeUnit: "৳",
      bmdcNote:
        "Your BMDC number is verified by our admin team before your profile goes live — usually within 24 hours. Patients will see a Verified badge after approval.",
    },
    bloodNote:
      "We use this for emergency blood matching & smarter doctor recommendations.",
    passwordHint:
      "Tip: 8+ characters with numbers & symbols = stronger account.",
    matchOk: "Passwords match",
    matchBad: "Passwords don't match",
    suggest: "Suggest",
    ageWord: "Age",
    yearsWord: "yrs",
    terms: {
      before: "I agree to the ",
      tos: "Terms of Service",
      and: " and the ",
      privacy: "Privacy Policy",
      after: ".",
    },
    strength: {
      labels: ["Weak", "Fair", "Good", "Strong"],
      colors: ["bg-red-400", "bg-orange-400", "bg-amber-400", "bg-emerald-500"],
      text: [
        "text-red-500",
        "text-orange-500",
        "text-amber-500",
        "text-emerald-600",
      ],
    },
    errors: {
      step1: "Please fill all personal fields correctly.",
      step2: "Please select your blood group and district.",
      step2Doctor: "Please complete all professional fields correctly.",
      passwordLen: "Password must be at least 6 characters.",
      match: "Passwords do not match.",
      terms: "Please accept the Terms to continue.",
    },
    continueBtn: "Continue",
    back: "Back",
    create: "Create account",
    creating: "Creating...",
    success: {
      title: "Account created! 🎉",
      msg: "We sent a verification link to",
      resend: "Resend email",
      resent: "Verification email re-sent ✓",
      goLogin: "Go to Sign In",
      doctorTitle: "Application received! 🎉",
      doctorMsg:
        "Your doctor account is now under review by our admin team. Once your BMDC number is verified (within 24 hours), you'll receive a welcome email with dashboard access.",
    },
    trustBio: "Biometric ready",
    needHelp: "Need help?",
    allSystems: "All systems operational",
    langLabel: "Toggle Language",
  },

  /* ==================== 🇧🇩 বাংলা ==================== */
  bn: {
    brand: "ডিজিএম হেলথকেয়ার",
    brandTagline: "ডিজিটাল হেলথ প্ল্যাটফর্ম",
    heroBadge: "ফ্রি অ্যাকাউন্ট রেজিস্ট্রেশন",
    heroTitle1: "আপনার স্বাস্থ্য রেকর্ড,",
    heroTitle2: "একটি নিরাপদ অ্যাকাউন্টে।",
    benefits: [
      "৫০০+ ভেরিফায়েড ডাক্তারের অ্যাপয়েন্টমেন্ট বুক করুন",
      "প্রেসক্রিপশন ও ল্যাব রিপোর্ট যেকোনো সময় দেখুন",
      "ওষুধ ও ভিজিট রিমাইন্ডার অটোমেটিক",
      "আপনার ডেটা HIPAA-গ্রেড এনক্রিপশনে সুরক্ষিত",
    ],
    stats: [
      { value: "৫০K+", label: "নিবন্ধিত রোগী" },
      { value: "৫০০+", label: "ভেরিফায়েড ডাক্তার" },
      { value: "২৪/৭", label: "সাপোর্ট" },
    ],
    title: "আপনার অ্যাকাউন্ট তৈরি করুন",
    subtitle: {
      before: "",
      highlight: "৫০,০০০+ রোগী ও ৫০০+ ডাক্তারের",
      after: " সাথে যোগ দিন — ডিজিএম হেলথকেয়ারে।",
    },
    haveAccount: "ইতিমধ্যে অ্যাকাউন্ট আছে?",
    signIn: "সাইন ইন",
    chooseRole: "হিসেবে রেজিস্টার করুন",
    roles: {
      patient: {
        title: "রোগী",
        desc: "ডাক্তারের অ্যাপয়েন্টমেন্ট নিন ও স্বাস্থ্য পরিচালনা করুন",
      },
      doctor: {
        title: "ডাক্তার",
        desc: "ডিজিএম-এর ৫০০+ ভেরিফায়েড প্রোভাইডারে যোগ দিন",
      },
    },
    steps: {
      patient: ["ব্যক্তিগত তথ্য", "স্বাস্থ্য প্রোফাইল", "অ্যাকাউন্ট নিরাপত্তা"],
      doctor: ["ব্যক্তিগত তথ্য", "পেশাগত তথ্য", "অ্যাকাউন্ট নিরাপত্তা"],
    },
    labels: {
      fullName: "পুরো নাম",
      fullNamePh: "আপনার পুরো নাম লিখুন",
      email: "ইমেইল",
      emailPh: "you@example.com",
      phone: "মোবাইল নম্বর",
      phonePh: "01XXXXXXXXX",
      dob: "জন্ম তারিখ",
      gender: "লিঙ্গ",
      bloodGroup: "রক্তের গ্রুপ",
      district: "জেলা",
      districtPh: "জেলা নির্বাচন করুন",
      password: "পাসওয়ার্ড",
      passwordPh: "কমপক্ষে ৬ অক্ষর",
      confirmPassword: "পাসওয়ার্ড নিশ্চিত",
      confirmPasswordPh: "আবার পাসওয়ার্ড লিখুন",
    },
    genders: ["পুরুষ", "মহিলা", "অন্যান্য"],
    districts: [
      "ঢাকা",
      "চট্টগ্রাম",
      "খুলনা",
      "রাজশাহী",
      "সিলেট",
      "বরিশাল",
      "রংপুর",
      "ময়মনসিংহ",
      "কুমিল্লা",
      "গাজীপুর",
    ],
    doctor: {
      bmdc: "বিএমডিসি রেজিস্ট্রেশন নং",
      bmdcPh: "যেমন A-12345",
      specialization: "বিশেষত্ব",
      specializationPh: "বিশেষত্ব নির্বাচন করুন",
      specializations: [
        "কার্ডিওলজি",
        "মেডিসিন",
        "ডার্মাটোলজি",
        "অর্থোপেডিকস",
        "পেডিয়াট্রিকস",
        "গাইনোকোলজি",
        "ইএনটি",
        "নিউরোলজি",
        "অনকোলজি",
        "সাইকিয়াট্রি",
      ],
      hospital: "হাসপাতাল / ক্লিনিক",
      hospitalPh: "যেমন ডিজিএম টাওয়ার, গুলশান-২",
      experience: "অভিজ্ঞতা",
      experiencePh: "কাজের বছর",
      fee: "পরামর্শ ফি",
      feePh: "যেমন ৮০০",
      years: "বছর",
      feeUnit: "৳",
      bmdcNote:
        "আপনার প্রোফাইল লাইভ হওয়ার আগে আমাদের অ্যাডমিন টিম বিএমডিসি নম্বর যাচাই করবে — সাধারণত ২৪ ঘণ্টার মধ্যে। অনুমোদনের পর রোগীরা Verified ব্যাজ দেখতে পাবে।",
    },
    bloodNote:
      "ইমার্জেন্সি রক্ত ম্যাচিং ও উন্নত ডাক্তার সুপারিশের জন্য আমরা এটি ব্যবহার করি।",
    passwordHint:
      "টিপস: ৮+ অক্ষর, সংখ্যা ও প্রতীক ব্যবহার করলে আরও শক্তিশালী হয়।",
    matchOk: "পাসওয়ার্ড মিলেছে",
    matchBad: "পাসওয়ার্ড মিলছে না",
    suggest: "সাজেস্ট",
    ageWord: "বয়স",
    yearsWord: "বছর",
    terms: {
      before: "আমি ",
      tos: "ব্যবহারের শর্তাবলী",
      and: " এবং ",
      privacy: "গোপনীয়তা নীতিতে",
      after: " সম্মত।",
    },
    strength: {
      labels: ["দুর্বল", "মোটামুটি", "ভালো", "শক্তিশালী"],
      colors: ["bg-red-400", "bg-orange-400", "bg-amber-400", "bg-emerald-500"],
      text: [
        "text-red-500",
        "text-orange-500",
        "text-amber-500",
        "text-emerald-600",
      ],
    },
    errors: {
      step1: "অনুগ্রহ করে ব্যক্তিগত তথ্য সঠিকভাবে পূরণ করুন।",
      step2: "রক্তের গ্রুপ ও জেলা নির্বাচন করুন।",
      step2Doctor: "অনুগ্রহ করে সব পেশাগত তথ্য সঠিকভাবে পূরণ করুন।",
      passwordLen: "পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে।",
      match: "পাসওয়ার্ড মিলছে না।",
      terms: "চালিয়ে যেতে শর্তাবলী গ্রহণ করুন।",
    },
    continueBtn: "এগিয়ে যান",
    back: "পিছনে",
    create: "অ্যাকাউন্ট তৈরি করুন",
    creating: "তৈরি হচ্ছে...",
    success: {
      title: "অ্যাকাউন্ট তৈরি হয়েছে! 🎉",
      msg: "আমরা ভেরিফিকেশন লিংক পাঠিয়েছি",
      resend: "আবার পাঠান",
      resent: "ভেরিফিকেশন ইমেইল আবার পাঠানো হয়েছে ✓",
      goLogin: "সাইন ইনে যান",
      doctorTitle: "আবেদন গৃহীত হয়েছে! 🎉",
      doctorMsg:
        "আপনার ডাক্তার অ্যাকাউন্ট এখন অ্যাডমিন টিমের রিভিউয়ের অপেক্ষায়। বিএমডিসি নম্বর যাচাই হওয়ার পর (২৪ ঘণ্টার মধ্যে) ড্যাশবোর্ড অ্যাক্সেস সহ একটি স্বাগত ইমেইল পাবেন।",
    },
    trustBio: "বায়োমেট্রিক রেডি",
    needHelp: "সাহায্য দরকার?",
    allSystems: "সব সিস্টেম স্বাভাবিক",
    langLabel: "ভাষা পরিবর্তন",
  },
};
