type StackItemType = {
  id: number;
  name: string;
  color: string;
};

export type ProjectCardProps = {
  item: {
    id: number;
    images: string[];
    name: string;
    desc: string;
    stack: StackItemType[];
    goal: string[];
    solution: string[];
    gitUrl: string | null;
  };
  setProjectId: (id: number) => void;
  translate: (key: string) => string;
};