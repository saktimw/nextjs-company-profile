import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex gap-2 items-center">
      <Image
        src= {`/images/logo/logo.png`}
        alt="logo"
        width={50}
        height={50}
        style={{ width: "auto", height: "auto" }}
        quality={100}
      />
      <div className="uppercase">
        <p className="font-semibold text-green-800 text-2xl leading-none">PT FARM</p>
        <p className="text-lg font-light text-green-600">Nusantara</p>
      </div>
    </Link>
  );
};

export default Logo;
