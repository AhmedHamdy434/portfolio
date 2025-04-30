import Image from "next/image";
export type CardType = {
  name: string;
  vercrlLink?: string;
  githubLink: string;
  src: string;
  images: string[];
  imagesMobile?: string[];
  description: {
    description: string;
    technologies: string;
    key: string[];
  };
};
const ProjectMoreDetails = ({ card }: { card: CardType }) => {
  return (
    <>
      <div className="bg-background p-8 md:p-14 rounded-3xl mb-4">
        <div className="text-secondary-text text-base md:text-xl font-sans max-w-3xl mx-auto mb-6 flex flex-col gap-3">
          <div>
            <span className="font-bold text-main">Description : </span>
            {card.description.description}
          </div>
          <div>
            <span className="font-bold text-main">Technologies Used : </span>
            {card.description.technologies}
          </div>
          <ul className="list-disc">
            <span className="font-bold text-main">Key Contributions :</span>
            {card.description.key.map((list, index) => (
              <li key={`${list.split(" ")[0]}${index}`}>{list}</li>
            ))}
          </ul>
        </div>
        <div>
          {card.images.map((image) => (
            <Image
              key={image}
              src={image}
              alt={image}
              height="500"
              width="500"
              className="w-full object-contain mb-6 rounded-2xl"
            />
          ))}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {card.imagesMobile?.map((image) => (
              <Image
                key={image}
                src={image}
                alt={image}
                height="500"
                width="500"
                className="h-[450px] object-contain rounded-2xl"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default ProjectMoreDetails;
