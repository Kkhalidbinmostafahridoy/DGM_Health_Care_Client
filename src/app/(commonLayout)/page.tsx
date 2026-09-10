import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <p>Welcome to the Next.js app</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Click me
      </button>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    </div>
  );
}
