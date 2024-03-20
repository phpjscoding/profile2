import { Outlet, Link } from "@remix-run/react";


export const meta = () => {
    return [
        { title: "blog" },
        { name: "description", content: "Shopify Developer based in morocco" },
    ];
};
export const blogPosts = [
    {
        id: 1,
        title: 'Comming ',
        content: 'JavaScript is a powerful programming language that allows you to add interactivity to your website. In this post, we will cover the basics of JavaScript, including variables, functions, and control structures.',
        date: '2024-02-16',
        author: 'John Doe'
    }

];

export default function Blog() {
    return (
        <>
            <div className="flex">

                <div className=" max-w-[800px] py-8 mx-auto min-h-screen relative grid place-items-center">
                    <ul className="flex flex-col gap-8 ">
                        <div className="transition-fade " id="">
                            comming soon
                        </div>

                    </ul>



                </div>
            </div>
        </>
    );
}
