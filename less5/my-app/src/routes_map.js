import { MainList, LatestNews, Post, NotFound } from './app/components';

const routes_map = [
    {
        type: "public",
        path: "/",
        exact: true,
        component: MainList,
        menu_title: <span className='logo'>Main</span>
    },
    {
        type: "public",
        path: "/posts/limit/:limited",
        exact: true,
        component: LatestNews,
        menu_title: "Latest News"
    },
    {
        type: "public",
        path: "/posts/1",
        exact: true,
        component: Post,
        menu_title: "Post #1"
    },
    {
        type: "public",
        path: "/posts/:postid",
        exact: true,
        component: Post
    },
    {   
        type: "public",
        component: NotFound,
    }
    
    // {
    //     type: "public",
    //     path: "/redirect",
    //     exact: true,
    //     component: RedirectDemo,
    //     menu_title: "Redirect"
    // }

];


export default routes_map;