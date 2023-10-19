import { motion } from "framer-motion";

type CardType = {
  item: {
    id: number;
    name: string;
    icon?: string;
    svg?: string;
    color?: string;
    url?: string;
  };
  index: number;
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.1,
      ease: "easeInOut",
    }
  }),
};

function Card({ item, index }: CardType) {
  const buildClass = () => {
    return `${item.icon} ${item.color}`;
  };

  const cardBody = (
    <motion.div
      className="skill-card"
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
      >
        {item.icon ? (
          <i className={buildClass()}></i>
        ) : (
          <img src={`icons/${item.svg}.svg`} alt="icon" />
        )}
        <span>{item.name}</span>
    </motion.div>
  )
  

  const finalCard = item.url ? (
    <a href={item.url} target="_blank" rel="noreferrer" className="card-link">
      {cardBody}
    </a>
  ) : (
    <>
      {cardBody}
    </>
  );
  return <div>{finalCard}</div>;
}

export default Card;
