import type { MetaFunction } from "@remix-run/cloudflare";

import Hero from "../comps/Hero"


export const meta: MetaFunction = () => {
  return [
    { title: "Ismail O'talb" },
    {
      name: "Shopify developer",
      content: "shopify developer specialized in shopify theme cutomzations and extensions functions"
    }
  ];
};

export default function Index() {
  return (
    <div className="container">

      <div className="hero-section min-h-screen my-[100px]">
        <Hero />
      </div>

    </div>
  );
}
