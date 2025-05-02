import { useTranslations } from "next-intl";
import Image from "next/image";
export type CardType = {
  id: string;
  name: string;
  vercrlLink?: string;
  githubLink: string;
  src: string;
  images: string[];
  imagesMobile?: string[];
};
const ProjectMoreDetails = ({ card }: { card: CardType }) => {
  const t = useTranslations(`Projects.${card.id}`);
  const t2 = useTranslations("Projects");
  const descriptionKeys = [t("key.1"), t("key.2"), t("key.3"), t("key.4")];
  return (
    <>
      <div className="bg-background p-8 md:p-14 rounded-3xl mb-4">
        <div className="text-secondary-text text-base md:text-xl font-sans max-w-3xl mx-auto mb-6 flex flex-col gap-3">
          <div>
            <span className="font-bold text-main">{t2("description")}</span>
            {t("description")}
          </div>
          <div>
            <span className="font-bold text-main">{t2("technologies")}</span>
            {t("technologies")}
          </div>
          <ul className="list-disc">
            <span className="font-bold text-main">{t2("keys")}</span>
            {descriptionKeys.map(
              (list, index) =>
                list && <li key={`${list.split(" ")[0]}${index}`}>{list}</li>
            )}
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
