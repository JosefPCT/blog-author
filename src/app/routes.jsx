import MainWrapper from "./providers/MainWrapper";
import { LandingPage } from "../pages/landing";
import { SignInPage } from "../pages/sign-in";
import { CreatePostPage } from "../pages/posts-create";

const routes = [
  {
    Component: MainWrapper,
    children: [
        { index: true, Component: LandingPage },
        { path: "/create", Component: CreatePostPage }
    ]
  },
  {
    path: '/sign-in',
    Component: SignInPage
  }
];

export default routes;