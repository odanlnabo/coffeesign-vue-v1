import Vue from "vue";
import Router from "vue-router";
// implement Vuex Store in main application
import store from '../store';

// Views - Documents
const DocumentsContainer = () => import("@/containers/DocumentsContainer");
const AddDocuments = () => import("@/views/document/AddDocuments");
const AddRecipients = () => import("@/views/document/AddRecipients");
const Prepare = () => import("@/views/document/Prepare");
const Review = () => import("@/views/document/Review");

// Container and Views of Pricing and Payment
const PaymentContainer = () => import("@/containers/PaymentContainer");
const NormalSign = () => import("@/views/payment/NormalSigin");
const DocumentList = () => import("@/views/payment/DocumentList");
const TemplateList = () => import("@/views/payment/TemplateList");
const UpgradeYourPlan = () => import("@/views/payment/UpgradeYourPlan");
const PricingPlan = () => import("@/views/payment/PricingPlan");
const UpgradeToPlan = () => import("@/views/payment/UpgradeToPlan");
const Account = () => import("@/views/profile/Account");
const CustomBranding = () => import("@/views/profile/CustomBranding");
const Signature = () => import("@/views/profile/Signature");

// Signing
const SignContainer = () => import("@/containers/SignContainer");
const SignCheck = () => import("@/views/sign/SignCheck");
const Signing = () => import("@/views/sign/Signing");
const Complition = () => import("@/views/sign/Complition");

// Authentication
const Login = () => import("@/views/authentication/Login");
const Signup = () => import("@/views/authentication/Signup");
const ForgotPassword = () => import("@/views/authentication/ForgotPassword");

// Terms and Privacy
const Terms = () => import("@/views/cms/Terms");
const Privacy = () => import("@/views/cms/Privacy");

Vue.use(Router);

const router = new Router({
  mode: "hash", // https://router.vuejs.org/api/#mode
  linkActiveClass: "open active",
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: "/docu-sign",
      redirect: "/docu-sign/add-document",
      name: "Documents",
      component: DocumentsContainer,
      children: [
        {
          path: "add-document",
          name: "AddDocument",
          component: AddDocuments
        },
        {
          path: "add-recipients",
          name: "AddRecipients",
          component: AddRecipients
        },
        {
          path: "prepare",
          name: "Prepare",
          component: Prepare
        },
        {
          path: "review",
          name: "Review",
          component: Review
        }
      ]
    },
    {
      path: "/profile",
      redirect: "/profile/account",
      name: "Profile",
      component: PaymentContainer,
      children: [
        {
          path: "account",
          name: "Account",
          component: Account
        },
        {
          path: "custom-branding",
          name: "CustomBranding",
          component: CustomBranding
        }
      ]
    },
    {
      path: "/signature",
      redirect: "/signature/signature-stamp",
      name: "Signature",
      component: PaymentContainer,
      children: [
        {
          path: "signature-stamp",
          name: "SignatureStamp",
          component: Signature
        }
      ]
    },
    {
      path: "/sign",
      redirect: "/sign/check",
      name: "Sign",
      component: SignContainer,
      children: [
        {
          path: "check",
          name: "SignCheck",
          component: SignCheck
        },
        {
          path: "signing",
          name: "Signing",
          component: Signing
        },
        {
          path: "complition",
          name: "Complition",
          component: Complition
        },
      ]
    },
    {
      path: "/payment",
      redirect: "/payment/document-list",
      name: "Payment",
      component: PaymentContainer,
      children: [
        {
          path: "document-list",
          name: "DocumentList",
          component: DocumentList
        },
        {
          path: "template-list",
          name: "TemplateList",
          component: TemplateList
        },
        {
          path: "upgrade-plan",
          name: "UpgradeYourPlan",
          component: UpgradeYourPlan
        },
        {
          path: "pricing-plan",
          name: "PricingPlan",
          component: PricingPlan
        },
        {
          path: "upgrade-to-plan",
          name: "UpgradeToPlan",
          component: UpgradeToPlan
        }
      ]
    },

    /* Main Routes */
    {
      path: "/",
      redirect: "/landing",
      name: "LandingPage",
      component: PaymentContainer,
      children: [
        {
          path: "/landing",
          name: "NormalSign",
          component: NormalSign
        }
      ],
      meta: {
        requiresAuth: true,
      }
    },
    /* End Main Routes */

    /* Authentication Routes */
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        requiresVisitor: true,
      }
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup,
      meta: {
        requiresVisitor: true,
      }
    },
    // {
    //   path: '/signup/:email',
    //   name: 'SignupC',
    //   component: Signup
    // },
    // {
    //   path: '/signup/confirm/:token',
    //   name: 'Confirm',
    //   component: SignupConfirm
    // },
    {
      path: '/password/forgot',
      name: 'ForgotPassword',
      component: ForgotPassword,
      meta: {
        requiresVisitor: true,
      }
    },
    // {
    //   path: '/password/reset/:token',
    //   name: 'ResetPassword',
    //   component: ResetPassword
    // },
    /* End Authentication Routes */

    /* T&C */
    {
      path: '/terms',
      name: 'Terms',
      component: Terms,
      meta: {
        requiresVisitor: true,
      }
    },
    {
      path: '/privacy',
      name: 'Privacy',
      component: Privacy,
      meta: {
        requiresVisitor: true,
      }
    }
    /* End T&C */
  ]
});

// router.beforeEach((to, from, next) => {
//   if(to.matched.some(record => record.meta.requiresAuth)) {
//     if (store.getters.isLoggedIn) {
//       next()
//       return
//     }
//     next('/login')
//   } else {
//     next() 
//   }
// })

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!(store.getters.isLoggedIn)) {
      next({
        name: 'Login',
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.isLoggedIn) {
      next({
        name: 'LandingPage',
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router;
