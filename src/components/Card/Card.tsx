import Button from '../Button/Button';

type CardProps = {
  title: string;
  description: string;
  icon: string;
  link: string;
  buttonText: string;
};

export default function Card({ title, description, icon, link, buttonText }: CardProps) {
  return (
    <div className="rounded-xl border border-gray-300 bg-gray-200 p-3">
      <div className="mb-3 flex items-center gap-3.5">
        <img src={icon} alt={title} className="size-12" />
        <h3 className="text-[21px] font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="mb-2.5 text-sm text-gray-800">{description}</p>
      <a href={link} className="text-blue-500">
        <Button>{buttonText}</Button>
      </a>
    </div>
  );
}
