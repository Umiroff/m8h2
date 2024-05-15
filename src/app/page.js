import Hero from "@/components/hero/Hero";
import Products from "@/components/products/Products";


export default function Home() {
  const pro = [1,2,3,4]
  return (
    <main className="home">
      <Hero/>
      <Products forPro={pro}/>
    </main>
  );
}
