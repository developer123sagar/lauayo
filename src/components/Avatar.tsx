import { IAvatarProps } from "@/types";

const Avatar = ({ src, name = "Avatar", onClick }: IAvatarProps) => {
  return (
    <div onClick={onClick}>
      <img
        src={`${src}`}
        alt={name}
        width={48}
        height={48}
        className="w-12 h-12 max-h-12 max-w-12 object-cover rounded-full cursor-pointer border border-gray-200"
      />
    </div>
  );
};

export default Avatar;
