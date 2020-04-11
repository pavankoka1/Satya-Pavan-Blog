import React from "react";
// eslint-disable-next-line import/no-unresolved
import { Layout } from "@Components/Layout";
import Trending from "@Components/Home/Trending/index.jsx";
import Content from "@Components/Home/Content/index.jsx";

const trendingPosts = [
    {
        id: "1",
        url:
            "http://demos.alithemes.com/liberte/default/wp-content/uploads/2019/02/liberte-demo-img-10-alith-slider-600pxx600px.jpeg",
        description: "Make the most of your LEAF with these tips and tricks",
        author: "Satya Pavan",
        author_url:
            "https://miro.medium.com/fit/c/288/288/2*Fpw_F0e8fbA1L2LmGv9Y9g.jpeg",
        date: "14 FEB, 2020",
    },
    {
        id: "1",
        url:
            "http://demos.alithemes.com/liberte/default/wp-content/uploads/2019/02/liberte-demo-img-3-alith-slider-600pxx600px.jpeg",
        description: "Make the most of your LEAF with these tips and tricks",
        author: "Satya Pavan",
        author_url:
            "https://miro.medium.com/fit/c/288/288/2*Fpw_F0e8fbA1L2LmGv9Y9g.jpeg",
        date: "14 FEB, 2020",
    },
    {
        id: "1",
        url:
            "http://demos.alithemes.com/liberte/default/wp-content/uploads/2019/02/liberte-demo-img-4-alith-slider-600pxx600px.jpeg",
        description: "Make the most of your LEAF with these tips and tricks",
        author: "Satya Pavan",
        author_url:
            "https://miro.medium.com/fit/c/288/288/2*Fpw_F0e8fbA1L2LmGv9Y9g.jpeg",
        date: "14 FEB, 2020",
    },
];

const posts = [
    {
        id: 1,
        uri:
            "http://demos.alithemes.com/liberte/default/wp-content/uploads/2019/02/liberte-demo-img-5-600x400.jpeg",
        title: "Coffee vs beer: which drink makes you more creative?",
        author: "Satya Pavan",
        author_url:
            "https://miro.medium.com/fit/c/288/288/2*Fpw_F0e8fbA1L2LmGv9Y9g.jpeg",
        type: "LIVING, POLITICS",
        date: "14 FEB, 2020",
        description:
            "Among emphatic normal cowered busted athletically some noticeably while and inside near towards unexpected much some off up diligently much kangaroo mannish more by much...",
    },
    {
        id: 2,
        uri:
            "http://demos.alithemes.com/liberte/default/wp-content/uploads/2019/02/liberte-demo-img-8-600x400.jpeg",
        title: "The highlight quote for this week",
        author: "Satya Pavan",
        author_url:
            "https://miro.medium.com/fit/c/288/288/2*Fpw_F0e8fbA1L2LmGv9Y9g.jpeg",
        type: "LIVING",
        date: "14 FEB, 2020",
        description:
            "Haltered pill the forceful the ouch compactly dear and hit unbound so ouch clumsily forbidding fish aboard returned scurrilously far and blithely Tapir rid and much one...",
    },
    {
        id: 3,
        uri:
            "http://demos.alithemes.com/liberte/default/wp-content/uploads/2019/02/liberte-demo-img-13.jpeg",
        title: "The future of wine: No Corks, No Vintages",
        author: "Satya Pavan",
        author_url:
            "https://miro.medium.com/fit/c/288/288/2*Fpw_F0e8fbA1L2LmGv9Y9g.jpeg",
        type: "LIVING, POLITICS",
        date: "14 FEB, 2020",
        description:
            "In but toucan komodo alas more up jeez dug loaded ravingly porcupine exuberant fortuitous unstinting lizard benignly sniffled behind hotly terrible lizard and close worm and gosh...",
    },
    {
        id: 4,
        uri:
            "http://demos.alithemes.com/liberte/default/wp-content/uploads/2019/02/liberte-demo-img-5-600x400.jpeg",
        title: "Coffee vs beer: which drink makes you more creative?",
        author: "Satya Pavan",
        author_url:
            "https://miro.medium.com/fit/c/288/288/2*Fpw_F0e8fbA1L2LmGv9Y9g.jpeg",
        type: "LIVING, POLITICS",
        date: "14 FEB, 2020",
        description:
            "Among emphatic normal cowered busted athletically some noticeably while and inside near towards unexpected much some off up diligently much kangaroo mannish more by much...",
    },
    {
        id: 5,
        uri:
            "http://demos.alithemes.com/liberte/default/wp-content/uploads/2019/02/liberte-demo-img-8-600x400.jpeg",
        title: "The highlight quote for this week",
        author: "Satya Pavan",
        author_url:
            "https://miro.medium.com/fit/c/288/288/2*Fpw_F0e8fbA1L2LmGv9Y9g.jpeg",
        type: "LIVING",
        date: "14 FEB, 2020",
        description:
            "Haltered pill the forceful the ouch compactly dear and hit unbound so ouch clumsily forbidding fish aboard returned scurrilously far and blithely Tapir rid and much one...",
    },
    {
        id: 6,
        uri:
            "http://demos.alithemes.com/liberte/default/wp-content/uploads/2019/02/liberte-demo-img-13.jpeg",
        title: "The future of wine: No Corks, No Vintages",
        author: "Satya Pavan",
        author_url:
            "https://miro.medium.com/fit/c/288/288/2*Fpw_F0e8fbA1L2LmGv9Y9g.jpeg",
        type: "LIVING, POLITICS",
        date: "14 FEB, 2020",
        description:
            "In but toucan komodo alas more up jeez dug loaded ravingly porcupine exuberant fortuitous unstinting lizard benignly sniffled behind hotly terrible lizard and close worm and gosh random text for text overfloew and see whatv happens in case of extreme case.",
    },
];

const Home = () => {
    return (
        <Layout>
            <Trending posts={trendingPosts} />
            <Content popular={posts} recent={posts} />
        </Layout>
    );
};

export default Home;
