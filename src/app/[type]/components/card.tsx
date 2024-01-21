import { BiSolidCameraMovie } from "react-icons/bi";

export const Card = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="flex flex-col justify-center items-center w-full md:max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h3 className="mb-3">
        <BiSolidCameraMovie style={{ width: 36, height: 36 }} />
      </h3>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="block text-center font-normal text-gray-700 dark:text-gray-400">
        {subtitle}
      </p>
    </div>
  );
};
