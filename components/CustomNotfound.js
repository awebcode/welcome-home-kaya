import Image from "next/image";
import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <Image
        src="/notfound.gif" // Replace with your own GIF path
        alt="Not Found"
        width={300}
        height={300}
      />
      <h1 className="text-4xl font-bold mt-8 text-gray-700">Oops! Product Not Found</h1>
      <p className="text-lg text-gray-700 mt-4 mb-8">
        The Product you are looking for does not exist.
      </p>
      <Link href="/" className="text-blue-600 hover:underline">
        Go back to the home Product
      </Link>
    </div>
  );
};

export default Custom404;
